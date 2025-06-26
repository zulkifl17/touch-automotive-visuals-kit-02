
import React from 'react';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/ui/Reveal';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-eco-dark">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="eco-text-h1 text-eco-white mb-6">
                Contact <span className="text-eco-leaf">ECO TOUCH</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to give your vehicle the premium eco-friendly care it deserves? 
                Get in touch with us today!
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <Reveal>
            <ContactForm />
          </Reveal>
        </section>
      </div>
      <NewFooter />
    </div>
  );
};

export default ContactPage;
