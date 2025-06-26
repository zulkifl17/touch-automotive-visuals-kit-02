
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/packages' },
  { name: 'Products', href: '/products' },
  { name: 'Book Now', href: '/booking' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-eco-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.45, 0.05, 0.55, 0.95] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/lovable-uploads/6ded344e-365a-482a-b149-be54e9d3130f.png" 
                alt="ECO TOUCH Logo"
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-eco-leaf ${
                  location.pathname === item.href
                    ? 'text-eco-leaf'
                    : 'text-eco-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+94712888444"
              className="flex items-center space-x-1 text-eco-green hover:text-eco-leaf transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-eco-white hover:text-eco-leaf transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.45, 0.05, 0.55, 0.95] }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-eco-dark/95 backdrop-blur-lg rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium tracking-wide transition-colors duration-200 hover:text-eco-leaf ${
                      location.pathname === item.href
                        ? 'text-eco-leaf'
                        : 'text-eco-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+94712888444"
                  className="flex items-center space-x-2 px-3 py-2 text-eco-green hover:text-eco-leaf transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span className="text-base font-medium">Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
