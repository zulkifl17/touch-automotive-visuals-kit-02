
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';
import CustomDropdown from '../components/CustomDropdown';
import { CartProvider } from '../contexts/CartContext';
import { products, productCategories } from '../data/products';
import Reveal from '../components/ui/Reveal';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categoryOptions = productCategories.map(category => ({
    id: category.id,
    label: category.name,
    value: category.id
  }));

  const sortOptions = [
    { id: 'name', label: 'Name (A-Z)', value: 'name' },
    { id: 'price-low', label: 'Price (Low to High)', value: 'price-low' },
    { id: 'price-high', label: 'Price (High to Low)', value: 'price-high' },
    { id: 'availability', label: 'Availability', value: 'availability' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.category === selectedCategory);

    // Sort products
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'availability':
        filtered.sort((a, b) => Number(b.inStock) - Number(a.inStock));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-eco-dark">
        <Header />
        <ShoppingCart />
        
        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <Reveal>
                <h1 className="eco-text-h1 text-eco-white mb-4">
                  Premium <span className="text-eco-leaf">Eco-Friendly</span> Products
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our range of professional-grade automotive care products. 
                  All eco-friendly, all premium quality, all designed to keep your vehicle pristine.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Filters Section */}
          <section className="py-8 px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="bg-gray-800 rounded-eco p-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Filter className="w-5 h-5 text-eco-leaf" />
                    <h3 className="eco-text-h4 text-eco-white">Filter & Sort Products</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-eco-white text-sm font-medium mb-2">
                        Category
                      </label>
                      <CustomDropdown
                        options={categoryOptions}
                        value={selectedCategory}
                        placeholder="Select Category"
                        onSelect={setSelectedCategory}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-eco-white text-sm font-medium mb-2">
                        Sort By
                      </label>
                      <CustomDropdown
                        options={sortOptions}
                        value={sortBy}
                        placeholder="Sort Products"
                        onSelect={setSortBy}
                      />
                    </div>
                  </div>
                  
                  {selectedCategoryData && selectedCategory !== 'all' && (
                    <div className="mt-4 p-4 bg-gray-700 rounded-eco">
                      <h4 className="text-eco-leaf font-medium mb-1">{selectedCategoryData.name}</h4>
                      <p className="text-gray-300 text-sm">{selectedCategoryData.description}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-8 px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="eco-text-h2 text-eco-white">
                    {selectedCategoryData?.name || 'All Products'} 
                    <span className="text-eco-leaf ml-2">({filteredAndSortedProducts.length})</span>
                  </h2>
                </div>
              </Reveal>

              {filteredAndSortedProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl">No products found</p>
                    <p className="text-sm">Try adjusting your filters</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAndSortedProducts.map((product, index) => (
                    <Reveal key={product.id} delay={index * 100}>
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal>
                <div className="bg-gradient-to-r from-eco-green to-eco-leaf rounded-eco p-8">
                  <h3 className="eco-text-h3 text-white mb-4">
                    Need Professional Installation?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Our expert team can help you get the most out of your products. 
                    Book a service appointment for professional application and advice.
                  </p>
                  <motion.button
                    className="eco-btn-secondary bg-white text-eco-green hover:bg-gray-100"
                    onClick={() => window.location.href = '/booking'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Service Now
                  </motion.button>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
        
        <NewFooter />
      </div>
    </CartProvider>
  );
};

export default ProductsPage;
