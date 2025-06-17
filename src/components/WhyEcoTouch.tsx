
import React from 'react';
import { Leaf, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Solutions',
    description: 'We use environmentally conscious practices and products to minimize our carbon footprint while delivering premium service.',
    stat: '50,000L+',
    statLabel: 'Water Saved',
  },
  {
    icon: Shield,
    title: 'OEM Quality Products',
    description: 'Only genuine OEM parts and premium quality oils and filters are used to ensure your vehicle performs at its best.',
    stat: '100%',
    statLabel: 'Original Parts',
  },
  {
    icon: Award,
    title: 'WÜRTH Partnership',
    description: 'Proud partner of WÜRTH, bringing you world-class automotive chemicals and maintenance solutions.',
    stat: '5,000+',
    statLabel: 'Happy Customers',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyEcoTouch = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-eco-dark to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <h2 className="eco-text-h2 text-eco-white mb-4">
            Why Choose ECO TOUCH?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, sustainability, and premium automotive care
          </p>
        </Reveal>

        {/* Features Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="eco-card p-8 text-center group"
              whileHover={{ 
                y: -12,
                rotateY: 5,
                boxShadow: "0 0 12px var(--eco-leaf), 0 0 24px var(--eco-leaf)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-eco-green to-eco-leaf rounded-full flex items-center justify-center mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 180,
                    transition: { duration: 0.5 }
                  }}
                >
                  <feature.icon className="w-10 h-10 text-eco-white" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 w-20 h-20 mx-auto bg-eco-leaf rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </div>

              {/* Content */}
              <motion.h3 
                className="eco-text-h3 text-eco-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {feature.description}
              </motion.p>

              {/* Stat */}
              <motion.div 
                className="border-t border-gray-700 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <motion.div 
                  className="eco-text-price text-eco-leaf mb-1"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.stat}
                </motion.div>
                <div className="text-gray-400 text-sm">
                  {feature.statLabel}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <Reveal delay={800} className="text-center mt-16">
          <motion.button 
            className="eco-btn-primary text-lg px-8 py-4"
            whileHover={{ 
              scale: 1.05,
              rotate: 3,
              boxShadow: "0 0 20px var(--eco-green)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Experience ECO TOUCH Today
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyEcoTouch;
