
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-eco-green">ECO</span>{' '}
              <span className="text-eco-leaf">TOUCH</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Premium eco-friendly automotive care with WÜRTH partnership and OEM quality products.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-eco-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-eco-leaf" />
                +94 71 288 8444
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-eco-leaf" />
                info@ecotouch.lk
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-eco-leaf" />
                Pitakotte, Battaramulla, Boralesgamuwa
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-eco-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full Service Packages</li>
              <li>Oil & Filter Changes</li>
              <li>Vehicle Inspection</li>
              <li>Eco-Friendly Wash</li>
              <li>WÜRTH Products</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ECO TOUCH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
