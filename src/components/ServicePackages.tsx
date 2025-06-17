
import { Check, ArrowRight } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/packages';

const ServicePackages = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-eco-dark to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat tracking-eco-medium mb-6">
            <span className="eco-text-gradient">Service</span>{' '}
            <span className="text-eco-white">Packages</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium automotive care tailored for your vehicle with OEM quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              className="eco-card p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Package Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-eco-white font-montserrat">
                    {pkg.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-eco-leaf">
                      {formatPrice(pkg.priceLKR)}
                    </div>
                    <div className="text-sm text-gray-400">Starting from</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.vehicleModels.map((model) => (
                    <span
                      key={model}
                      className="px-3 py-1 bg-eco-green/20 text-eco-leaf text-sm rounded-full border border-eco-green/30"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-eco-white mb-4">What's Included:</h4>
                <div className="space-y-3">
                  {pkg.inclusions.slice(0, 6).map((inclusion, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-eco-green rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-eco-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{inclusion}</span>
                    </div>
                  ))}
                  {pkg.inclusions.length > 6 && (
                    <div className="text-eco-leaf text-sm font-medium">
                      + {pkg.inclusions.length - 6} more services included
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full eco-button-primary flex items-center justify-center space-x-2 group">
                <span>Book This Package</span>
                <ArrowRight 
                  size={18} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-eco-leaf/5 to-eco-green/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Can't find your vehicle model? We service all makes and models.
          </p>
          <button className="eco-button-secondary">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
