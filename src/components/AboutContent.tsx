
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Award, Users, Car, Sparkles } from 'lucide-react';
import Reveal from './ui/Reveal';

const AboutContent: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Solutions",
      description: "We use environmentally responsible products and methods that protect both your vehicle and the planet."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Partnered with Würth, we deliver OEM-quality products and professional-grade automotive care."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Service",
      description: "Our trained professionals provide meticulous attention to detail in every service we offer."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We build lasting relationships through exceptional service."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Complete Care",
      description: "From basic washes to premium detailing, we offer comprehensive automotive care solutions."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Latest Technology",
      description: "We use cutting-edge equipment and techniques to deliver superior results every time."
    }
  ];

  return (
    <div className="min-h-screen bg-eco-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <motion.h1 
              className="eco-text-h1 text-eco-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="text-eco-leaf">ECO TOUCH</span>
            </motion.h1>
          </Reveal>
          
          <Reveal delay={200}>
            <motion.p 
              className="text-xl text-eco-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium eco-friendly automotive care with cutting-edge technology and sustainable practices. 
              We're committed to delivering exceptional service while protecting the environment.
            </motion.p>
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-eco-dark to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="eco-text-h2 text-eco-white mb-6">Our Story</h2>
                <div className="space-y-4 text-eco-white/80 leading-relaxed">
                  <p>
                    ECO TOUCH was founded with a simple yet powerful vision: to revolutionize automotive care 
                    by combining premium quality service with environmental responsibility.
                  </p>
                  <p>
                    Our partnership with Würth, a global leader in assembly and fastening materials, 
                    ensures that we deliver OEM-quality products and professional-grade solutions 
                    to customers in the automotive sector.
                  </p>
                  <p>
                    Located in the heart of Pitakotte, Battaramulla, and Boralesgamuwa, we serve 
                    our community with dedication, expertise, and a commitment to excellence that 
                    sets us apart in the industry.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="relative">
                <div className="eco-card p-8 text-center">
                  <img 
                    src="/lovable-uploads/6ded344e-365a-482a-b149-be54e9d3130f.png" 
                    alt="ECO TOUCH Logo"
                    className="h-20 w-auto mx-auto mb-6"
                  />
                  <h3 className="eco-text-h3 text-eco-white mb-4">Premium Automotive Care</h3>
                  <p className="text-eco-white/80">
                    Trusted by customers across Sri Lanka for quality, reliability, and eco-friendly solutions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="eco-text-h2 text-eco-white mb-6">Why Choose ECO TOUCH?</h2>
              <p className="text-xl text-eco-white/80 max-w-3xl mx-auto">
                We combine expertise, technology, and environmental consciousness to deliver 
                the best automotive care experience.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Reveal key={index} delay={index * 100}>
                <motion.div 
                  className="eco-card p-6 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-eco-leaf mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-eco-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-eco-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-eco-dark to-gray-900">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="eco-text-h2 text-eco-white mb-6">Our Partnership</h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="eco-card p-8 max-w-4xl mx-auto text-center">
              <img 
                src="/lovable-uploads/ac041dea-38d4-4795-849f-272baf730ea4.png" 
                alt="Würth Logo"
                className="h-16 w-auto mx-auto mb-6"
              />
              <h3 className="eco-text-h3 text-eco-white mb-4">Partnered with Würth</h3>
              <p className="text-eco-white/80 leading-relaxed max-w-2xl mx-auto">
                At Würth we focus on assembly and fastening materials, supplying customers 
                in the trades and the construction sector. This partnership ensures we deliver 
                professional-grade products and maintain the highest standards of quality.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="eco-text-h2 text-eco-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-eco-white/80 mb-8">
              Join thousands of satisfied customers who trust ECO TOUCH for their automotive care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/booking"
                className="eco-btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Service Now
              </motion.a>
              <motion.a
                href="tel:+94712888444"
                className="eco-btn-secondary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call +94 71 288 8444
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
