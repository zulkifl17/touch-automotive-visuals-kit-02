
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicePackages from '../components/ServicePackages';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <Hero />
      <ServicePackages />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
