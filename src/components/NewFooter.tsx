
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-eco-dark to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-eco-leaf" />
              <span className="text-xl font-bold font-montserrat tracking-widest text-eco-white">
                ECO TOUCH
              </span>
            </div>
            <p className="text-eco-white/80 text-sm leading-relaxed">
              Premium eco-friendly car wash and auto-care services with cutting-edge technology and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-eco-white/60 hover:text-eco-leaf transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-eco-white/60 hover:text-eco-leaf transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-eco-white/60 hover:text-eco-leaf transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-eco-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/packages' },
                { name: 'Products', href: '/products' },
                { name: 'Book Now', href: '/booking' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-eco-white/80 hover:text-eco-leaf transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-eco-white">Services</h3>
            <div className="space-y-2">
              {[
                'Premium Detail',
                'Eco Supreme',
                'Express Clean',
                'Ceramic Coating',
                'Interior Cleaning',
                'Engine Bay Wash',
              ].map((service) => (
                <p
                  key={service}
                  className="text-eco-white/80 text-sm"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-eco-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-eco-leaf" />
                <span className="text-eco-white/80 text-sm">+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-eco-leaf" />
                <span className="text-eco-white/80 text-sm">info@ecotouch.lk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-eco-leaf mt-1" />
                <div className="text-eco-white/80 text-sm">
                  <p>Pitakotte • Battaramulla</p>
                  <p>Boralesgamuwa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-eco-white/60 text-sm">
              © 2024 Eco Touch. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-eco-white/60 hover:text-eco-leaf transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-eco-white/60 hover:text-eco-leaf transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-eco-green hover:bg-eco-leaf text-eco-white p-3 rounded-full shadow-lg transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default NewFooter;
