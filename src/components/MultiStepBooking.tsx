import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { BookingForm } from '../types';
import { SERVICE_PACKAGES } from '../data/packages';
import { BRANCHES } from '../data/branches';
import Reveal from './ui/Reveal';
import { CardGlow } from './shared/CardGlow';
import { IconArrowBtn } from './shared/IconArrowBtn';
import { Calendar, Clock, MapPin, Phone, User, Car, Package } from 'lucide-react';

const MultiStepBooking: React.FC = () => {
  const location = useLocation();
  const selectedPackageId = location.state?.selectedPackage;
  const [step, setStep] = useState(1);
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<BookingForm>({
    defaultValues: {
      package: selectedPackageId || '',
    }
  });

  React.useEffect(() => {
    if (selectedPackageId) {
      setValue('package', selectedPackageId);
    }
  }, [selectedPackageId, setValue]);

  const watchedPackage = watch('package');
  const selectedPackage = SERVICE_PACKAGES.find(pkg => pkg.id === watchedPackage);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const onSubmit = (data: BookingForm) => {
    const selectedBranch = BRANCHES.find(b => b.id === data.branch);
    const selectedPackageData = SERVICE_PACKAGES.find(p => p.id === data.package);
    
    const message = `Eco Touch Booking:
    
Name: ${data.name}
Vehicle: ${data.vehicle}
Package: ${selectedPackageData?.name || 'Not selected'}
Branch: ${selectedBranch?.name || 'Not selected'}
Date: ${data.date}
Time: ${data.time}
WhatsApp: ${data.whatsapp}

Please confirm this booking. Thank you!`;

    const whatsappUrl = `https://wa.me/+94771234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="py-20">
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat tracking-widest text-eco-white mb-6">
              Book Your <span className="text-eco-green">Service</span>
            </h1>
            <p className="text-xl text-eco-white/80">
              Schedule your premium eco-friendly car care service
            </p>
          </Reveal>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-center items-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNumber
                        ? 'bg-eco-green text-eco-white'
                        : 'bg-gray-600 text-eco-white/60'
                    }`}
                    animate={{ scale: step === stepNumber ? 1.1 : 1 }}
                  >
                    {stepNumber}
                  </motion.div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 ${
                        step > stepNumber ? 'bg-eco-green' : 'bg-gray-600'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-16">
              <span className={`text-sm ${step >= 1 ? 'text-eco-green' : 'text-eco-white/60'}`}>
                Service & Details
              </span>
              <span className={`text-sm ${step >= 2 ? 'text-eco-green' : 'text-eco-white/60'}`}>
                Date & Time
              </span>
              <span className={`text-sm ${step >= 3 ? 'text-eco-green' : 'text-eco-white/60'}`}>
                Confirmation
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection and Personal Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <CardGlow className="space-y-6">
                    <h2 className="text-2xl font-bold text-eco-white mb-6">
                      Select Service & Enter Details
                    </h2>

                    {/* Package Selection */}
                    <div className="space-y-4">
                      <label className="flex items-center space-x-2 text-eco-white font-medium">
                        <Package size={18} className="text-eco-leaf" />
                        <span>Select Package</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SERVICE_PACKAGES.map((pkg) => (
                          <motion.label
                            key={pkg.id}
                            className={`cursor-pointer rounded-eco p-4 border-2 transition-all duration-300 ${
                              watchedPackage === pkg.id
                                ? 'border-eco-green bg-eco-green/10'
                                : 'border-gray-600 hover:border-eco-leaf/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <input
                              type="radio"
                              value={pkg.id}
                              {...register('package', { required: 'Please select a package' })}
                              className="sr-only"
                            />
                            <div className="space-y-2">
                              <h3 className="font-semibold text-eco-white">{pkg.name}</h3>
                              <p className="text-sm text-eco-white/70">{pkg.description}</p>
                              <p className="text-eco-green font-bold">
                                From LKR {pkg.price.hatchback.toLocaleString()}
                              </p>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                      {errors.package && (
                        <p className="text-red-400 text-sm">{errors.package.message}</p>
                      )}
                    </div>

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <User size={18} className="text-eco-leaf" />
                          <span>Full Name</span>
                        </label>
                        <motion.input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                          placeholder="Enter your full name"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <Phone size={18} className="text-eco-leaf" />
                          <span>WhatsApp Number</span>
                        </label>
                        <motion.input
                          type="tel"
                          {...register('whatsapp', { 
                            required: 'WhatsApp number is required',
                            pattern: {
                              value: /^[0-9+\-\s()]+$/,
                              message: 'Please enter a valid phone number'
                            }
                          })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                          placeholder="+94 77 123 4567"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.whatsapp && (
                          <p className="text-red-400 text-sm">{errors.whatsapp.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <Car size={18} className="text-eco-leaf" />
                          <span>Vehicle Type</span>
                        </label>
                        <motion.select
                          {...register('vehicle', { required: 'Please select your vehicle type' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <option value="">Select Vehicle Type</option>
                          <option value="hatchback">Hatchback</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="truck">Truck</option>
                        </motion.select>
                        {errors.vehicle && (
                          <p className="text-red-400 text-sm">{errors.vehicle.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <MapPin size={18} className="text-eco-leaf" />
                          <span>Branch</span>
                        </label>
                        <motion.select
                          {...register('branch', { required: 'Please select a branch' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <option value="">Select Branch</option>
                          {BRANCHES.map((branch) => (
                            <option key={branch.id} value={branch.id}>
                              {branch.name.replace('Eco Touch ', '')}
                            </option>
                          ))}
                        </motion.select>
                        {errors.branch && (
                          <p className="text-red-400 text-sm">{errors.branch.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <IconArrowBtn
                        type="button"
                        onClick={nextStep}
                        variant="primary"
                      >
                        Next Step
                      </IconArrowBtn>
                    </div>
                  </CardGlow>
                </motion.div>
              )}

              {/* Step 2: Date and Time Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <CardGlow className="space-y-6">
                    <h2 className="text-2xl font-bold text-eco-white mb-6">
                      Select Date & Time
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <Calendar size={18} className="text-eco-leaf" />
                          <span>Preferred Date</span>
                        </label>
                        <motion.input
                          type="date"
                          {...register('date', { required: 'Please select a date' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                          min={new Date().toISOString().split('T')[0]}
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.date && (
                          <p className="text-red-400 text-sm">{errors.date.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-eco-white font-medium">
                          <Clock size={18} className="text-eco-leaf" />
                          <span>Preferred Time</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <motion.label
                              key={time}
                              className="cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <input
                                type="radio"
                                value={time}
                                {...register('time', { required: 'Please select a time' })}
                                className="sr-only"
                              />
                              <div className={`text-center py-2 px-3 rounded-eco border-2 transition-all duration-300 ${
                                watch('time') === time
                                  ? 'border-eco-green bg-eco-green text-eco-white'
                                  : 'border-gray-600 text-eco-white/70 hover:border-eco-leaf/50'
                              }`}>
                                {time}
                              </div>
                            </motion.label>
                          ))}
                        </div>
                        {errors.time && (
                          <p className="text-red-400 text-sm">{errors.time.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <IconArrowBtn
                        type="button"
                        onClick={prevStep}
                        variant="secondary"
                        direction="left"
                      >
                        Previous
                      </IconArrowBtn>
                      <IconArrowBtn
                        type="button"
                        onClick={nextStep}
                        variant="primary"
                      >
                        Review Booking
                      </IconArrowBtn>
                    </div>
                  </CardGlow>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <CardGlow className="space-y-6">
                    <h2 className="text-2xl font-bold text-eco-white mb-6">
                      Confirm Your Booking
                    </h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-eco-white">
                        <div>
                          <strong className="text-eco-leaf">Name:</strong> {watch('name')}
                        </div>
                        <div>
                          <strong className="text-eco-leaf">Phone:</strong> {watch('whatsapp')}
                        </div>
                        <div>
                          <strong className="text-eco-leaf">Vehicle:</strong> {watch('vehicle')}
                        </div>
                        <div>
                          <strong className="text-eco-leaf">Branch:</strong>{' '}
                          {BRANCHES.find(b => b.id === watch('branch'))?.name.replace('Eco Touch ', '')}
                        </div>
                        <div>
                          <strong className="text-eco-leaf">Date:</strong> {watch('date')}
                        </div>
                        <div>
                          <strong className="text-eco-leaf">Time:</strong> {watch('time')}
                        </div>
                      </div>

                      {selectedPackage && (
                        <div className="border-t border-gray-600 pt-4">
                          <h3 className="text-lg font-semibold text-eco-white mb-2">
                            Selected Package: {selectedPackage.name}
                          </h3>
                          <p className="text-eco-white/70 mb-2">{selectedPackage.description}</p>
                          <p className="text-eco-green font-bold text-xl">
                            Price: LKR {selectedPackage.price[watch('vehicle') as keyof typeof selectedPackage.price]?.toLocaleString() || 'N/A'}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-800 rounded-eco p-4">
                      <p className="text-eco-white/80 text-sm">
                        By clicking "Confirm on WhatsApp", you'll be redirected to WhatsApp to complete your booking confirmation.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <IconArrowBtn
                        type="button"
                        onClick={prevStep}
                        variant="secondary"
                        direction="left"
                      >
                        Previous
                      </IconArrowBtn>
                      <IconArrowBtn
                        type="submit"
                        variant="primary"
                        className="animate-pulse"
                      >
                        Confirm on WhatsApp
                      </IconArrowBtn>
                    </div>
                  </CardGlow>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MultiStepBooking;
