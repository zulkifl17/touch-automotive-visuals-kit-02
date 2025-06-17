
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User, Car } from 'lucide-react';
import { BookingForm } from '../types';

const MultiStepBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    vehicle: '',
    branch: 'Pitakotte',
    whatsapp: '',
    preferredDate: '',
    preferredTime: '',
  });

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const branches = ['Pitakotte', 'Battaramulla', 'Boralesgamuwa'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Eco Touch booking:
Name: ${formData.name}
Vehicle: ${formData.vehicle}
Branch: ${formData.branch}
Date/Time: ${formData.preferredDate} ${formData.preferredTime}
WhatsApp: ${formData.whatsapp}`;

    const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-eco-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="eco-text-h2 text-eco-white mb-4">
            Book Your Service
          </h2>
          <p className="text-xl text-gray-300">
            Schedule your eco-friendly automotive care today
          </p>
        </div>

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
              Personal Details
            </span>
            <span className={`text-sm ${step >= 2 ? 'text-eco-green' : 'text-eco-white/60'}`}>
              Date & Time
            </span>
            <span className={`text-sm ${step >= 3 ? 'text-eco-green' : 'text-eco-white/60'}`}>
              Confirmation
            </span>
          </div>
        </div>

        <div className="eco-card p-8 lg:p-12">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-eco-white mb-6">Personal Information</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <Phone className="inline w-4 h-4 mr-2" />
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                        placeholder="+94 77 123 4567"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <Car className="inline w-4 h-4 mr-2" />
                        Vehicle Model
                      </label>
                      <select
                        required
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                      >
                        <option value="">Select your vehicle</option>
                        <option value="Toyota C-HR">Toyota C-HR</option>
                        <option value="Toyota Aqua">Toyota Aqua</option>
                        <option value="Toyota Prius">Toyota Prius</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <MapPin className="inline w-4 h-4 mr-2" />
                        Preferred Branch
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value as any })}
                        className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                      >
                        {branches.map((branch) => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="eco-btn-primary"
                    >
                      Next Step →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-eco-white mb-6">Select Date & Time</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-eco-leaf font-medium mb-2">
                        <Clock className="inline w-4 h-4 mr-2" />
                        Preferred Time
                      </label>
                      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <label
                            key={time}
                            className={`cursor-pointer p-2 rounded border-2 text-center transition-all duration-200 ${
                              formData.preferredTime === time
                                ? 'border-eco-green bg-eco-green text-white'
                                : 'border-gray-600 text-gray-300 hover:border-eco-leaf'
                            }`}
                          >
                            <input
                              type="radio"
                              name="time"
                              value={time}
                              checked={formData.preferredTime === time}
                              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                              className="sr-only"
                            />
                            {time}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="eco-btn-secondary"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="eco-btn-primary"
                    >
                      Review Booking →
                    </button>
                  </div>
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
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-eco-white mb-6">Confirm Your Booking</h3>
                  
                  <div className="bg-gray-800 p-6 rounded-eco">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-eco-white">
                      <div><strong className="text-eco-leaf">Name:</strong> {formData.name}</div>
                      <div><strong className="text-eco-leaf">Phone:</strong> {formData.whatsapp}</div>
                      <div><strong className="text-eco-leaf">Vehicle:</strong> {formData.vehicle}</div>
                      <div><strong className="text-eco-leaf">Branch:</strong> {formData.branch}</div>
                      <div><strong className="text-eco-leaf">Date:</strong> {formData.preferredDate}</div>
                      <div><strong className="text-eco-leaf">Time:</strong> {formData.preferredTime}</div>
                    </div>
                  </div>

                  <div className="bg-eco-green/10 border border-eco-green rounded-eco p-4">
                    <p className="text-eco-white/80 text-sm">
                      📞 By clicking "Confirm on WhatsApp", you'll be redirected to WhatsApp to complete your booking confirmation.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="eco-btn-secondary"
                    >
                      ← Previous
                    </button>
                    <button
                      type="submit"
                      className="eco-btn-primary"
                    >
                      Confirm on WhatsApp
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MultiStepBooking;
