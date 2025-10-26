// src/components/home/Hero.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 py-16 md:py-24 text-center">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Give New Life to What You No Longer Need
          <span className="block text-eco-green mt-2">and Earn While You Do It</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Turn your old bottles, paper, and scrap into real value. Sell what you don’t need and connect with buyers who care about sustainability as much as you do.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/register">
            <Button variant="primary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              Start Selling
            </Button>
          </Link>

          <Link to="/buyers">
            <Button variant="secondary" size="lg" className="hover:scale-105 transform transition-all duration-300">
              Explore Materials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
