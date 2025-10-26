// src/components/home/Hero.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import heroMain from '../../assets/images/hero-main.png';
import ecoDecor from '../../assets/images/eco-decor.png';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Give New Life to What You No Longer Need
            <span className="block text-eco-green mt-2">
              and Earn While You Do It
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-600">
            Turn your old bottles, paper, and scrap into real value. 
            Sell what you don’t need and connect with buyers who care 
            about sustainability as much as you do.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link to="/register">
              <Button
                variant="primary"
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
              >
                Start Selling
              </Button>
            </Link>

            <Link to="/buyers">
              <Button
                variant="secondary"
                size="lg"
                className="hover:scale-105 transform transition-all duration-300"
              >
                Explore Materials
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-[50%] flex justify-center">
          {/* Main Image */}
          <img
            src={heroMain}
            alt="EcoLoop recycling concept"
            className="w-[85%] max-w-md md:max-w-lg rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Decorative Image */}
          <img
            src={ecoDecor}
            alt="Eco decoration"
            className="absolute bottom-[-30px] left-[-40px] w-28 md:w-36 opacity-90 rotate-[-8deg]"
          />
        </div>
      </div>

      {/* Soft floating gradient shapes for depth */}
      <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-eco-green-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-80 h-80 bg-eco-green/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
