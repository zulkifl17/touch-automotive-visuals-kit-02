
import React from 'react';
import Header from '../components/Header';
import MultiStepBooking from '../components/MultiStepBooking';
import NewFooter from '../components/NewFooter';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <div className="pt-20">
        <MultiStepBooking />
      </div>
      <NewFooter />
    </div>
  );
};

export default BookingPage;
