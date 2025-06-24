
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Package, Phone } from 'lucide-react';
import { BookingForm as BookingFormType } from '../types';
import { PREMIUM_PACKAGES } from '../data/packages';
import { OTHER_PACKAGES } from '../data/otherPackages';

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormType>({
    name: '',
    branch: 'Pitakotte',
    whatsapp: '',
    preferredDate: '',
    preferredTime: '',
    package: '',
    date: '',
    time: ''
  });

  const allPackages = [...PREMIUM_PACKAGES, ...OTHER_PACKAGES];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedPackage = allPackages.find(pkg => pkg.id === formData.package);
    
    const message = `Eco Touch booking:
Name: ${formData.name}
Package: ${selectedPackage?.title || 'Not selected'}
Vehicle: ${selectedPackage?.vehicleModels[0] || 'Not specified'}
Branch: ${formData.branch}
Date/Time: ${formData.preferredDate} ${formData.preferredTime}
WhatsApp: ${formData.whatsapp}`;

    const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
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

        <div className="eco-card p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Name */}
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

              {/* Package Selection */}
              <div className="relative">
                <label className="block text-eco-leaf font-medium mb-2">
                  <Package className="inline w-4 h-4 mr-2" />
                  Service Package
                </label>
                <select
                  required
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                >
                  <option value="">Select your service package</option>
                  <optgroup label="Premium Packages">
                    {PREMIUM_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title} - LKR {pkg.priceLKR.toLocaleString()}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Other Vehicles">
                    {OTHER_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title} - LKR {pkg.priceLKR.toLocaleString()}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Branch */}
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
                  <option value="Pitakotte">Pitakotte</option>
                  <option value="Battaramulla">Battaramulla</option>
                  <option value="Boralesgamuwa">Boralesgamuwa</option>
                </select>
              </div>

              {/* WhatsApp */}
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

              {/* Preferred Date */}
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
                  className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                />
              </div>

              {/* Preferred Time */}
              <div className="relative">
                <label className="block text-eco-leaf font-medium mb-2">
                  <Clock className="inline w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <select
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-600 rounded-eco px-4 py-3 text-eco-white focus:border-eco-blue focus:ring-2 focus:ring-eco-blue/20 transition-all duration-200"
                >
                  <option value="">Select time slot</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="eco-btn-primary text-lg px-12 py-4 group"
              >
                Confirm on WhatsApp
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Service Info */}
        <div className="text-center mt-8 text-gray-400">
          <p>📞 We'll confirm your booking via WhatsApp within 30 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
