
import React from 'react';
import Header from '../components/Header';
import ServicePackages from '../components/ServicePackages';
import NewFooter from '../components/NewFooter';

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <div className="pt-20">
        <ServicePackages />
      </div>
      <NewFooter />
    </div>
  );
};

export default PackagesPage;
