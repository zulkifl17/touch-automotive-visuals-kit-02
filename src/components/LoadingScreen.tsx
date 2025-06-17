
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-eco-dark flex flex-col items-center justify-center">
      {/* Company Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <img 
          src="/lovable-uploads/6ded344e-365a-482a-b149-be54e9d3130f.png" 
          alt="ECO TOUCH Logo"
          className="h-20 w-auto object-contain"
        />
      </motion.div>
      
      {/* Loading Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-leaf"></div>
    </div>
  );
};

export default LoadingScreen;
