
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, CheckCircle2 } from 'lucide-react';

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

  const handleCallDaxium = () => {
    window.open('tel:+94777260089', '_blank');
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
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
            {/* Light themed popup with checkered background */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Checkered pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`${(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-blue-500' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative p-6">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {/* Status Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Daxium Logo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <img 
                    src="/lovable-uploads/154277d9-047a-4677-8be8-0cf8e0cf3045.png" 
                    alt="Daxium Systems & Solutions"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center space-y-4"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    Website Under Development
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This website is currently being developed by{' '}
                    <span className="text-blue-600 font-semibold">Daxium Systems & Solutions</span>.
                    The full version will be available in a few days.
                  </p>
                  
                  <p className="text-gray-500 text-sm">
                    For any inquiries, feel free to contact us:
                  </p>

                  {/* Contact Info - Clickable */}
                  <div className="space-y-2 text-sm">
                    <motion.button
                      onClick={handleContactDaxium}
                      className="flex items-center justify-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} className="text-blue-500" />
                      <span className="text-gray-700">itmanager@daxiumtech.com</span>
                    </motion.button>
                    <motion.button
                      onClick={handleCallDaxium}
                      className="flex items-center justify-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={16} className="text-blue-500" />
                      <span className="text-gray-700">+94 777 260 089</span>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 mt-6"
                >
                  <motion.button
                    onClick={handleContactDaxium}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Daxium
                  </motion.button>
                  <motion.button
                    onClick={handleClose}
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
            </div>

            {/* Floating particles effect */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
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
