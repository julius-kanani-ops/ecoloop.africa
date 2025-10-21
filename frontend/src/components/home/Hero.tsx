// src/components/home/Hero.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 py-16 md:py-24 text-center">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Turn What You Don’t Need Into{' '}
          <span className="text-eco-green">Extra Cash</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Got bottles, paper, or scrap lying around? Sell them easily on Ecoloop Africa.  
          Looking to buy recycled materials for your business? Find verified sellers in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/register"
            className="bg-eco-green text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:bg-eco-green-dark hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Earning Now
          </Link>

          <Link
            to="/buyers"
            className="bg-eco-blue text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Find Materials to Buy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
