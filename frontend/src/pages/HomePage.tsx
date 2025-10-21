import React from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      {/* We can add more sections like <Services /> or <Testimonials /> here later */}
    </>
  );
};

export default HomePage;