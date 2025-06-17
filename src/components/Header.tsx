
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eco-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-eco-green to-eco-leaf rounded-lg flex items-center justify-center">
              <span className="text-eco-white font-bold text-lg">ET</span>
            </div>
            <span className="text-xl font-bold font-montserrat tracking-eco-wide eco-text-gradient">
              ECO TOUCH
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
              Services
            </a>
            <a href="#packages" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
              Packages
            </a>
            <a href="#about" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
              Contact
            </a>
            <button className="eco-button-primary">
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-eco-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
                Services
              </a>
              <a href="#packages" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
                Packages
              </a>
              <a href="#about" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-eco-white hover:text-eco-leaf transition-colors duration-300">
                Contact
              </a>
              <button className="eco-button-primary w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
