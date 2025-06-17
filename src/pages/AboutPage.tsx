
import React from 'react';
import Header from '../components/Header';
import WhyEcoTouch from '../components/WhyEcoTouch';
import NewFooter from '../components/NewFooter';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <div className="pt-20">
        <WhyEcoTouch />
      </div>
      <NewFooter />
    </div>
  );
};

export default AboutPage;
