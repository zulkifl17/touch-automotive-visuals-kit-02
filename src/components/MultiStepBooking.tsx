import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number'),
  branch: z.string().min(1, 'Please select a branch'),
  package: z.string().min(1, 'Please select a package'),
  vehicleName: z.string().optional(),
  serviceType: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const branches = [
  { id: 'pitakotte', name: 'Pitakotte' },
  { id: 'battaramulla', name: 'Battaramulla' },
  { id: 'boralesgamuwa', name: 'Boralesgamuwa' },
];

const premiumPackages = [
  { id: 'ecoSupreme', name: 'Eco Supreme' },
  { id: 'premiumDetail', name: 'Premium Detail' },
];

const otherPackages = [
  { id: 'expressClean', name: 'Express Clean' },
  { id: 'ceramicCoating', name: 'Ceramic Coating' },
];

const MultiStepBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const isLastStep = step === 2;

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      branch: '',
      package: '',
    },
  });

  const nextStep = () => {
    form.handleSubmit(() => setStep(step + 1))();
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: BookingFormData) => {
    console.log('Form submitted:', data);
    
    let packageDetails = '';
    if (data.package === 'custom') {
      packageDetails = `Custom Service - Vehicle: ${data.vehicleName}, Service: ${data.serviceType}`;
    } else {
      const selectedPackage = [...premiumPackages, ...otherPackages].find(pkg => pkg.id === data.package);
      packageDetails = selectedPackage ? selectedPackage.name : data.package;
    }

    const message = `🚗 *ECO TOUCH - Service Booking*

👤 *Customer Details:*
Name: ${data.name}
WhatsApp: ${data.whatsapp}

📦 *Service Package:*
${packageDetails}

📍 *Branch:*
${branches.find(branch => branch.id === data.branch)?.name || data.branch}

Thank you for choosing ECO TOUCH! We'll contact you shortly to confirm your appointment. 🌿`;

    const whatsappUrl = `https://wa.me/94712888444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-eco-white">Book Your Service</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-eco-white">Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-700 border-gray-600 text-eco-white"
                              placeholder="Your full name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-eco-white">WhatsApp *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-700 border-gray-600 text-eco-white"
                              placeholder="+94 77 XXX XXXX"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-eco-white">Select Branch *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-eco-white">
                              <SelectValue placeholder="Select a branch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch.id} value={branch.id}>
                                {branch.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-eco-white">Select Package *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-eco-white">
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="custom">Custom Service</SelectItem>
                            {premiumPackages.map((pkg) => (
                              <SelectItem key={pkg.id} value={pkg.id}>
                                {pkg.name} (Premium)
                              </SelectItem>
                            ))}
                            {otherPackages.map((pkg) => (
                              <SelectItem key={pkg.id} value={pkg.id}>
                                {pkg.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch('package') === 'custom' && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="vehicleName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-eco-white">Vehicle Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-700 border-gray-600 text-eco-white"
                                placeholder="e.g., Toyota Prius"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-eco-white">Service Type</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-700 border-gray-600 text-eco-white"
                                placeholder="e.g., Full Wash & Interior Detail"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </motion.div>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <motion.button
                    className="eco-btn-secondary"
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                  >
                    Previous
                  </motion.button>
                )}

                {isLastStep ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="eco-btn-primary">
                      Book Now
                    </Button>
                  </motion.div>
                ) : (
                  <motion.button
                    className="eco-btn-primary"
                    onClick={nextStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                  >
                    Next
                  </motion.button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepBooking;
