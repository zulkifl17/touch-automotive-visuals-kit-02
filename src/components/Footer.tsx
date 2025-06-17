
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-eco-dark to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-eco-green to-eco-leaf rounded-lg flex items-center justify-center">
                <span className="text-eco-white font-bold text-lg">ET</span>
              </div>
              <span className="text-xl font-bold font-montserrat tracking-eco-wide eco-text-gradient">
                ECO TOUCH
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium automotive care with sustainable excellence and OEM quality standards.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center cursor-pointer hover:bg-eco-leaf transition-colors duration-300">
                <span className="text-eco-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center cursor-pointer hover:bg-eco-leaf transition-colors duration-300">
                <span className="text-eco-white text-sm font-bold">ig</span>
              </div>
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center cursor-pointer hover:bg-eco-leaf transition-colors duration-300">
                <span className="text-eco-white text-sm font-bold">wa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-eco-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-eco-leaf transition-colors duration-300">Full Service</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors duration-300">Engine Care</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors duration-300">Body Wash</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors duration-300">Interior Detailing</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors duration-300">Inspection Reports</a></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-eco-white font-semibold mb-4">Our Branches</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-eco-leaf mt-1 flex-shrink-0" />
                <div>
                  <div className="text-eco-white font-medium">Pitakotte</div>
                  <div className="text-gray-400 text-sm">Main Branch</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-eco-leaf mt-1 flex-shrink-0" />
                <div>
                  <div className="text-eco-white font-medium">Battaramulla</div>
                  <div className="text-gray-400 text-sm">Express Service</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-eco-leaf mt-1 flex-shrink-0" />
                <div>
                  <div className="text-eco-white font-medium">Boralesgamuwa</div>
                  <div className="text-gray-400 text-sm">Full Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-eco-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-eco-leaf" />
                <span className="text-gray-400">+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-eco-leaf" />
                <span className="text-gray-400">info@ecotouch.lk</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="text-eco-leaf mt-1" />
                <div className="text-gray-400">
                  <div>Mon - Sat: 8:00 AM - 6:00 PM</div>
                  <div>Sunday: 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Eco Touch. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-eco-leaf transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-eco-leaf transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-eco-leaf transition-colors duration-300">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
