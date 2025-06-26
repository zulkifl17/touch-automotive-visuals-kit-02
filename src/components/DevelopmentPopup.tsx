
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

  const handleContactWurth = () => {
    window.open('https://www.wurth.lk', '_blank');
  };

  const handleCallEcoTouch = () => {
    window.open('tel:+94712888444', '_blank');
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
            {/* Würth themed popup with red and white background */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-red-200">
              {/* Red pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`${(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-red-500' : 'bg-transparent'}`}
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
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-3">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Würth Logo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <img 
                    src="/lovable-uploads/ac041dea-38d4-4795-849f-272baf730ea4.png" 
                    alt="Würth"
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
                    Partnered with Würth
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    At <span className="text-red-600 font-semibold">Würth</span> we focus on assembly and fastening materials, 
                    supplying customers in the trades and the construction sector.
                  </p>
                  
                  <p className="text-gray-500 text-sm">
                    ECO TOUCH uses premium Würth products for superior automotive care.
                  </p>

                  {/* Contact Info - Clickable */}
                  <div className="space-y-2 text-sm">
                    <motion.button
                      onClick={handleCallEcoTouch}
                      className="flex items-center justify-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={16} className="text-red-500" />
                      <span className="text-gray-700">+94 71 288 8444</span>
                    </motion.button>
                    <motion.button
                      onClick={() => window.open('mailto:info@ecotouch.lk', '_blank')}
                      className="flex items-center justify-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} className="text-red-500" />
                      <span className="text-gray-700">info@ecotouch.lk</span>
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
                    onClick={handleContactWurth}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg font-medium text-sm hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              </div>
            </div>

            {/* Floating particles effect with red theme */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full opacity-40"
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
