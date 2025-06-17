
import React, { useState } from 'react';
import { Check, Car, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_PACKAGES } from '../data/packages';
import { ServicePackage } from '../types';
import Reveal from './ui/Reveal';

const ServicePackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(SERVICE_PACKAGES[0]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const inclusionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-20 px-6 service-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <h2 className="eco-text-h2 text-eco-white mb-4">
            Premium Service Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully crafted service packages designed for your vehicle
          </p>
        </Reveal>

        {/* Package Selector */}
        <Reveal delay={200} className="flex justify-center mb-12">
          <div className="flex bg-gray-900 rounded-eco p-2">
            {SERVICE_PACKAGES.map((pkg) => (
              <motion.button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`flex items-center px-6 py-3 rounded-eco transition-all duration-300 relative ${
                  selectedPackage.id === pkg.id
                    ? 'text-eco-white shadow-lg'
                    : 'text-gray-400 hover:text-eco-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedPackage.id === pkg.id && (
                  <motion.div
                    className="absolute inset-0 bg-eco-green rounded-eco"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  {pkg.id === 'full-service-chr' ? (
                    <Car className="w-5 h-5 mr-2" />
                  ) : (
                    <Zap className="w-5 h-5 mr-2" />
                  )}
                  {pkg.title.split('–')[1]?.trim() || pkg.title}
                </span>
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Package Detail Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPackage.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="eco-card p-8 lg:p-12"
              whileHover={{ 
                y: -8,
                boxShadow: "0 0 8px var(--eco-leaf), 0 0 16px var(--eco-leaf)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Package Info */}
                <div>
                  <motion.h3 
                    className="eco-text-h3 text-eco-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedPackage.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedPackage.description}
                  </motion.p>
                  
                  {/* Price */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <div className="flex items-baseline">
                      <span className="eco-text-price text-eco-leaf">
                        LKR {selectedPackage.priceLKR.toLocaleString()}
                      </span>
                      <span className="text-gray-400 ml-2">per service</span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button 
                    className="eco-btn-primary w-full lg:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book This Package
                  </motion.button>
                </div>

                {/* Inclusions */}
                <div>
                  <motion.h4 
                    className="text-xl font-semibold text-eco-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    What's Included:
                  </motion.h4>
                  <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {selectedPackage.inclusions.map((inclusion, index) => (
                      <motion.div
                        key={`${selectedPackage.id}-${index}`}
                        custom={index}
                        variants={inclusionVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start space-x-3"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                        >
                          <Check className="w-5 h-5 text-eco-leaf mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-300">{inclusion}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vehicle Models */}
        <Reveal delay={400} className="text-center mt-8">
          <p className="text-gray-400">
            Compatible with: <span className="text-eco-leaf font-medium">
              {selectedPackage.vehicleModels.join(', ')}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicePackages;
