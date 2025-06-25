import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { BookingForm } from '../types';
import { PREMIUM_PACKAGES } from '../data/packages';
import { OTHER_PACKAGES } from '../data/otherPackages';
import { BRANCHES } from '../data/branches';
import Reveal from './ui/Reveal';
import { CardGlow } from './shared/CardGlow';
import { IconArrowBtn } from './shared/IconArrowBtn';
import { Calendar, Clock, MapPin, Phone, User, Package, ChevronDown, Settings } from 'lucide-react';

const MultiStepBooking: React.FC = () => {
  const location = useLocation();
  const selectedPackageId = location.state?.selectedPackage;
  const [step, setStep] = useState(1);
  const [isOtherPackagesOpen, setIsOtherPackagesOpen] = useState(false);
  
  const allPackages = [...PREMIUM_PACKAGES, ...OTHER_PACKAGES];
  
  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue, trigger, clearErrors } = useForm<BookingForm>({
    mode: 'onChange',
    defaultValues: {
      package: selectedPackageId || '',
    }
  });

  React.useEffect(() => {
    if (selectedPackageId) {
      setValue('package', selectedPackageId);
      trigger('package');
    }
  }, [selectedPackageId, setValue, trigger]);

  const watchedPackage = watch('package');
  const watchedCustomVehicle = watch('customVehicleName');
  const watchedCustomService = watch('customServiceType');
  const selectedPackage = allPackages.find(pkg => pkg.id === watchedPackage);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const onSubmit = (data: BookingForm) => {
    const selectedBranch = BRANCHES.find(b => b.id === data.branch);
    let packageTitle = 'Not selected';
    let vehicleModel = 'Not specified';
    
    if (data.package === 'custom') {
      packageTitle = `Custom Service - ${data.customServiceType || 'Service'}`;
      vehicleModel = data.customVehicleName || 'Custom Vehicle';
    } else {
      const selectedPackageData = allPackages.find(p => p.id === data.package);
      packageTitle = selectedPackageData?.title || 'Not selected';
      vehicleModel = selectedPackageData?.vehicleModels[0] || 'Not specified';
    }
    
    const message = `Eco Touch Booking:
    
Name: ${data.name}
Package: ${packageTitle}
Vehicle: ${vehicleModel}
Branch: ${selectedBranch?.name || 'Not selected'}
Date: ${data.date}
Time: ${data.time}
WhatsApp: ${data.whatsapp}

Please confirm this booking. Thank you!`;

    const whatsappUrl = `https://wa.me/+94765353503?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingForm)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ['package', 'name', 'whatsapp', 'branch'];
      if (watchedPackage === 'custom') {
        fieldsToValidate.push('customVehicleName', 'customServiceType');
      }
    } else if (step === 2) {
      fieldsToValidate = ['date', 'time'];
    }
    
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => setStep(step - 1);

  // Check if current step is valid
  const formValues = watch();
  const isCustomPackageValid = watchedPackage === 'custom' ? 
    (watchedCustomVehicle && watchedCustomService && 
     !errors.customVehicleName && !errors.customServiceType) : true;
  
  const isStep1Valid = formValues.package && formValues.name && formValues.whatsapp && formValues.branch && 
                      isCustomPackageValid &&
                      Object.keys(errors).filter(key => ['package', 'name', 'whatsapp', 'branch', 'customVehicleName', 'customServiceType'].includes(key)).length === 0;
  const isStep2Valid = formValues.date && formValues.time && !errors.date && !errors.time;

  const handleOtherPackageSelect = async (packageId: string) => {
    console.log('Selecting other package:', packageId);
    setValue('package', packageId, { shouldValidate: true, shouldDirty: true });
    setIsOtherPackagesOpen(false);
    clearErrors('package');
    
    // Clear custom fields if not selecting custom
    if (packageId !== 'custom') {
      setValue('customVehicleName', '');
      setValue('customServiceType', '');
      clearErrors('customVehicleName');
      clearErrors('customServiceType');
    }
    
    // Force validation and form state update
    await trigger('package');
    await trigger(['name', 'whatsapp', 'branch']); // Re-validate all step 1 fields
    
    console.log('Package validation result for:', packageId);
    console.log('Form errors after selection:', errors);
    console.log('Current form values:', formValues);
  };

  // Check if selected package is from other packages or custom
  const isOtherPackageSelected = OTHER_PACKAGES.some(pkg => pkg.id === watchedPackage) || watchedPackage === 'custom';
  const selectedOtherPackage = OTHER_PACKAGES.find(pkg => pkg.id === watchedPackage);

  const getDropdownDisplayText = () => {
    if (watchedPackage === 'custom') {
      return 'Custom/Tailored Package';
    }
    if (selectedOtherPackage) {
      return `${selectedOtherPackage.title} - LKR ${selectedOtherPackage.priceLKR.toLocaleString()}`;
    }
    return 'Select a vehicle package';
  };

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
                <div key={stepNumber} className="flex items-center">
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
                </div>
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
                      
                      {/* Hidden input for form validation */}
                      <input
                        type="hidden"
                        {...register('package', { required: 'Please select a package' })}
                      />
                      
                      {/* Premium Packages */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-eco-leaf mb-3">Premium Packages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {PREMIUM_PACKAGES.map((pkg) => (
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
                                checked={watchedPackage === pkg.id}
                                onChange={(e) => {
                                  setValue('package', e.target.value, { shouldValidate: true, shouldDirty: true });
                                  clearErrors('package');
                                  // Clear custom fields when selecting premium package
                                  setValue('customVehicleName', '');
                                  setValue('customServiceType', '');
                                  clearErrors('customVehicleName');
                                  clearErrors('customServiceType');
                                }}
                                className="sr-only"
                              />
                              <div className="flex items-center space-x-3">
                                <img 
                                  src={pkg.heroImage} 
                                  alt={pkg.title}
                                  className="w-16 h-12 object-contain"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-eco-white">{pkg.title}</h4>
                                  <p className="text-sm text-eco-white/70">{pkg.description}</p>
                                  <p className="text-eco-green font-bold">
                                    LKR {pkg.priceLKR.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            </motion.label>
                          ))}
                        </div>
                      </div>

                      {/* Other Vehicle Packages Dropdown */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-eco-leaf mb-3">Other Vehicle Packages</h3>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsOtherPackagesOpen(!isOtherPackagesOpen)}
                            className={`w-full bg-gray-800 border-2 rounded-eco px-4 py-3 text-eco-white focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 transition-all duration-200 flex items-center justify-between hover:bg-gray-750 ${
                              isOtherPackageSelected ? 'border-eco-green bg-eco-green/10' : 'border-gray-600'
                            }`}
                          >
                            <span className="text-left">
                              {getDropdownDisplayText()}
                            </span>
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${isOtherPackagesOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>

                          {isOtherPackagesOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-eco shadow-lg z-50 max-h-60 overflow-y-auto">
                              {/* Custom Package Option */}
                              <button
                                type="button"
                                onClick={() => handleOtherPackageSelect('custom')}
                                className="w-full text-left px-4 py-3 text-eco-white hover:bg-gray-700 transition-colors duration-150 first:rounded-t-eco flex items-center space-x-3"
                              >
                                <Settings className="w-8 h-6 text-eco-green" />
                                <div className="flex-1">
                                  <div className="font-semibold">Custom/Tailored Package</div>
                                  <div className="text-eco-green text-sm">Contact for pricing</div>
                                </div>
                              </button>
                              
                              {/* Existing Other Packages */}
                              {OTHER_PACKAGES.map((pkg) => (
                                <button
                                  key={pkg.id}
                                  type="button"
                                  onClick={() => handleOtherPackageSelect(pkg.id)}
                                  className="w-full text-left px-4 py-3 text-eco-white hover:bg-gray-700 transition-colors duration-150 last:rounded-b-eco flex items-center space-x-3"
                                >
                                  <img 
                                    src={pkg.heroImage} 
                                    alt={pkg.title}
                                    className="w-12 h-8 object-contain"
                                  />
                                  <div className="flex-1">
                                    <div className="font-semibold">{pkg.title}</div>
                                    <div className="text-eco-green text-sm">LKR {pkg.priceLKR.toLocaleString()}</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Custom Package Fields */}
                      {watchedPackage === 'custom' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-eco border border-eco-green/30"
                        >
                          <div className="space-y-2">
                            <label className="text-eco-white font-medium text-sm">
                              Vehicle Name/Model
                            </label>
                            <input
                              type="text"
                              {...register('customVehicleName', { 
                                required: watchedPackage === 'custom' ? 'Vehicle name is required' : false 
                              })}
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                              placeholder="e.g., Honda Civic, BMW X5"
                            />
                            {errors.customVehicleName && (
                              <p className="text-red-400 text-sm">{errors.customVehicleName.message}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-eco-white font-medium text-sm">
                              Service Type
                            </label>
                            <input
                              type="text"
                              {...register('customServiceType', { 
                                required: watchedPackage === 'custom' ? 'Service type is required' : false 
                              })}
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-eco text-eco-white focus:outline-none focus:border-eco-green focus:ring-2 focus:ring-eco-green/20"
                              placeholder="e.g., Full Service, Oil Change, Detailing"
                            />
                            {errors.customServiceType && (
                              <p className="text-red-400 text-sm">{errors.customServiceType.message}</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                      
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

                      <div className="space-y-2 md:col-span-2">
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
                        variant={isStep1Valid ? "primary" : "secondary"}
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
                        variant={isStep2Valid ? "primary" : "secondary"}
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
                          <strong className="text-eco-leaf">Vehicle:</strong>{' '}
                          {watchedPackage === 'custom' 
                            ? (watchedCustomVehicle || 'Custom Vehicle')
                            : (selectedPackage?.vehicleModels[0] || 'Not specified')
                          }
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

                      <div className="border-t border-gray-600 pt-4">
                        {watchedPackage === 'custom' ? (
                          <div>
                            <h3 className="text-lg font-semibold text-eco-white mb-2">
                              Selected Package: Custom Service - {watchedCustomService || 'Service'}
                            </h3>
                            <p className="text-eco-white/70 mb-2">Tailored service for your specific needs</p>
                            <p className="text-eco-green font-bold text-xl">
                              Price: Contact for quote
                            </p>
                          </div>
                        ) : selectedPackage ? (
                          <div>
                            <h3 className="text-lg font-semibold text-eco-white mb-2">
                              Selected Package: {selectedPackage.title}
                            </h3>
                            <p className="text-eco-white/70 mb-2">{selectedPackage.description}</p>
                            <p className="text-eco-green font-bold text-xl">
                              Price: LKR {selectedPackage.priceLKR.toLocaleString()}
                            </p>
                          </div>
                        ) : null}
                      </div>
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
                        className="bg-eco-green hover:bg-eco-green/90 transition-colors"
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
