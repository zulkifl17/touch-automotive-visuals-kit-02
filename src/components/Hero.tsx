
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-dark via-gray-900 to-eco-dark"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(136,196,63,0.1),transparent_70%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-eco-leaf/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-slide-up">
          {/* Logo Animation */}
          <div className="mb-8 animate-float">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-eco-green to-eco-leaf rounded-2xl flex items-center justify-center mb-6 eco-glow">
              <span className="text-eco-white font-bold text-3xl font-montserrat">ET</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-montserrat tracking-eco-wide mb-6">
            <span className="eco-text-gradient">ECO</span>{' '}
            <span className="text-eco-white">TOUCH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Premium Automotive Care with{' '}
            <span className="text-eco-leaf">Sustainable Excellence</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of car care with our eco-friendly services, 
            OEM-quality products, and WÜRTH partnership commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="eco-button-primary flex items-center space-x-2 text-lg px-8 py-4 group">
              <span>Book Your Service</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="eco-button-secondary text-lg px-8 py-4">
              View Packages
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-eco-leaf mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Litres Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-eco-leaf mb-2">5K+</div>
            <div className="text-gray-400 text-sm">Cars Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-eco-leaf mb-2">100%</div>
            <div className="text-gray-400 text-sm">Eco-Friendly</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-eco-leaf rounded-full flex justify-center">
          <div className="w-1 h-3 bg-eco-leaf rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
