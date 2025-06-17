
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

const DevelopmentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleContactDaxium = () => {
    window.open('mailto:itmanager@daxiumtech.com', '_blank');
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-md w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Futuristic Background with Gradient Border */}
            <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl opacity-75 animate-pulse"></div>
              <div className="relative bg-slate-900 m-1 rounded-xl p-6">
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {/* Daxium Logo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <img 
                    src="/lovable-uploads/154277d9-047a-4677-8be8-0cf8e0cf3045.png" 
                    alt="Daxium Systems & Solutions"
                    className="h-16 w-auto object-contain filter brightness-110"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center space-y-4"
                >
                  <h3 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Website Under Development
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This website is currently being developed by{' '}
                    <span className="text-blue-400 font-semibold">Daxium Systems & Solutions</span>.
                    The full version will be available in a few days.
                  </p>
                  
                  <p className="text-gray-400 text-sm">
                    For any inquiries, feel free to contact us:
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail size={14} className="text-blue-400" />
                      <span>itmanager@daxiumtech.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone size={14} className="text-blue-400" />
                      <span>+94 777 260 089</span>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 mt-6"
                >
                  <button
                    onClick={handleContactDaxium}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Contact Daxium
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Close
                  </button>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 animate-pulse"></div>
              </div>
            </div>

            {/* Floating Particles Effect */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevelopmentPopup;
