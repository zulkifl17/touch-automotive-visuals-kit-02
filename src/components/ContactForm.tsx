
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const message = `📞 *ECO TOUCH - Contact Inquiry*

👤 *Contact Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}

Thank you for contacting ECO TOUCH! We'll get back to you soon. 🌿`;

    const whatsappUrl = `https://wa.me/94712888444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon via WhatsApp.",
    });

    form.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="eco-text-h2 text-eco-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg">
              Have questions about our services or products? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-eco-green/20 p-3 rounded-eco">
                <Phone className="w-6 h-6 text-eco-leaf" />
              </div>
              <div>
                <h3 className="text-eco-white font-semibold">Phone</h3>
                <p className="text-gray-300">+94 71 288 8444</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-eco-green/20 p-3 rounded-eco">
                <Mail className="w-6 h-6 text-eco-leaf" />
              </div>
              <div>
                <h3 className="text-eco-white font-semibold">Email</h3>
                <p className="text-gray-300">info@ecotouch.lk</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-eco-green/20 p-3 rounded-eco">
                <MapPin className="w-6 h-6 text-eco-leaf" />
              </div>
              <div>
                <h3 className="text-eco-white font-semibold">Locations</h3>
                <div className="text-gray-300">
                  <p>Pitakotte</p>
                  <p>Battaramulla</p>
                  <p>Boralesgamuwa</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-eco-white">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-eco-white">Phone *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-gray-700 border-gray-600 text-eco-white"
                            placeholder="+94 71 XXX XXXX"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-eco-white">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-gray-700 border-gray-600 text-eco-white"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-eco-white">Subject *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-gray-700 border-gray-600 text-eco-white"
                          placeholder="What is this about?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-eco-white">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="bg-gray-700 border-gray-600 text-eco-white min-h-[120px]"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full eco-btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message via WhatsApp
                  </Button>
                </motion.div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
