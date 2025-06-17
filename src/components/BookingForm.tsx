
import { useState } from 'react';
import { Calendar, MapPin, Phone, User, Car, Clock } from 'lucide-react';
import { BookingForm as BookingFormType } from '../types/service';

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormType>({
    name: '',
    vehicle: '',
    branch: '',
    whatsapp: '',
    preferredDate: '',
    preferredTime: '',
  });

  const branches = [
    'Pitakotte',
    'Battaramulla', 
    'Boralesgamuwa'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Hi Eco Touch! I'd like to book a service:

📝 Name: ${formData.name}
🚗 Vehicle: ${formData.vehicle}
📍 Branch: ${formData.branch}
📅 Preferred Date: ${formData.preferredDate}
⏰ Preferred Time: ${formData.preferredTime}

Please confirm my booking. Thank you!`;

    // WhatsApp link
    const whatsappUrl = `https://wa.me/94777123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-t from-eco-dark to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat tracking-eco-medium mb-6">
              <span className="text-eco-white">Book Your</span>{' '}
              <span className="eco-text-gradient">Service</span>
            </h2>
            <p className="text-xl text-gray-400">
              Schedule your appointment and we'll redirect you to WhatsApp to confirm
            </p>
          </div>

          <form onSubmit={handleSubmit} className="eco-card p-8 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-eco-white font-medium">
                <User size={18} className="text-eco-leaf" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white placeholder-gray-400 focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Vehicle Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-eco-white font-medium">
                <Car size={18} className="text-eco-leaf" />
                <span>Vehicle Make & Model</span>
              </label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white placeholder-gray-400 focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
                placeholder="e.g., Toyota Aqua, Honda Vezel"
              />
            </div>

            {/* Branch Selection */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-eco-white font-medium">
                <MapPin size={18} className="text-eco-leaf" />
                <span>Preferred Branch</span>
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
              >
                <option value="">Select a branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-eco-white font-medium">
                <Phone size={18} className="text-eco-leaf" />
                <span>WhatsApp Number</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white placeholder-gray-400 focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
                placeholder="e.g., +94 77 123 4567"
              />
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-eco-white font-medium">
                  <Calendar size={18} className="text-eco-leaf" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-eco-white font-medium">
                  <Clock size={18} className="text-eco-leaf" />
                  <span>Preferred Time</span>
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-eco-white focus:border-eco-leaf focus:ring-2 focus:ring-eco-leaf/20 transition-all duration-300"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full eco-button-primary text-lg py-4 mt-8 group"
            >
              <span>Continue to WhatsApp</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              You'll be redirected to WhatsApp to confirm your booking details
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
