
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicePackages from '../components/ServicePackages';
import MultiStepBooking from '../components/MultiStepBooking';
import WhyEcoTouch from '../components/WhyEcoTouch';
import NewFooter from '../components/NewFooter';
import DevelopmentPopup from '../components/DevelopmentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <Hero />
      <ServicePackages />
      <WhyEcoTouch />
      <MultiStepBooking />
      <NewFooter />
      <DevelopmentPopup />
    </div>
  );
};

export default Index;
