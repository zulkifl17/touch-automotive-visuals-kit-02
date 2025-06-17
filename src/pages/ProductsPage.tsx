
import React from 'react';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="eco-text-h1 text-eco-white mb-6">
            Products Page
          </h1>
          <p className="text-xl text-eco-white/80">
            Coming Soon
          </p>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default ProductsPage;
