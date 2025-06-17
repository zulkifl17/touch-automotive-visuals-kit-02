import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const Hero = () => {
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      pathLength: 0 
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 5.7,
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced animation */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-eco-leaf rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Logo Animation */}
            <Reveal className="mb-8">
              <h1 className="eco-text-h1 text-eco-white mb-4">
                <motion.span 
                  className="text-eco-green"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  ECO
                </motion.span>{' '}
                <motion.span 
                  className="text-eco-leaf"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  TOUCH
                </motion.span>
              </h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-eco-green to-eco-leaf mx-auto lg:mx-0 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </Reveal>
            
            {/* Hero Content */}
            <Reveal delay={300}>
              <h2 className="eco-text-h2 text-eco-white mb-6">
                Premium Eco-Friendly Automotive Care in Sri Lanka
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience professional vehicle maintenance with our premium OEM products, WÜRTH partnerships, and sustainable practices. Serving Toyota C-HR, Aqua, and premium vehicles across Colombo.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <motion.button 
                  className="eco-btn-primary group"
                  variants={pulseVariants}
                  initial="initial"
                  animate="pulse"
                  whileHover={{ 
                    scale: 1.03,
                    rotate: 3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/booking'}
                >
                  Book Service Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button 
                  className="eco-btn-secondary"
                  whileHover={{ 
                    scale: 1.03,
                    rotate: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/packages'}
                >
                  View Service Packages
                </motion.button>
              </div>
            </Reveal>
            
            {/* Stats */}
            <Reveal delay={600} className="grid grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="eco-text-price text-eco-leaf">50,000L+</div>
                <p className="text-gray-400 text-sm">Water Saved</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="eco-text-price text-eco-blue">5,000+</div>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="eco-text-price text-eco-green">100%</div>
                <p className="text-gray-400 text-sm">Eco-Friendly</p>
              </motion.div>
            </Reveal>
          </div>

          {/* Right Content - Video for Desktop */}
          <Reveal delay={900} className="hidden lg:block">
            <div className="rounded-eco overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/hX2xVO4FE4s"
                width="100%"
                height="400"
                style={{ border: 'none', overflow: 'hidden' }}
                frameBorder="0"
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="ECO TOUCH Premium Automotive Care Services"
              ></iframe>
            </div>
          </Reveal>
        </div>

        {/* Mobile/Tablet Video - Bottom of Hero */}
        <Reveal delay={1200} className="lg:hidden mt-12">
          <div className="w-full max-w-md mx-auto">
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-eco-green to-eco-leaf mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
            <div className="rounded-eco overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/hX2xVO4FE4s"
                width="100%"
                height="300"
                style={{ border: 'none', overflow: 'hidden' }}
                frameBorder="0"
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="ECO TOUCH Premium Automotive Care Services"
              ></iframe>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
