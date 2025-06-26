
import React from 'react';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';
import NewFooter from '../components/NewFooter';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <AboutContent />
      <NewFooter />
    </div>
  );
};

export default AboutPage;
