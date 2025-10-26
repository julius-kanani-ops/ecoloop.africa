import React from 'react';
import { Recycle, ShoppingBag, HandCoins } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Recycle className="w-12 h-12 text-eco-green" />,
      title: 'Collect & Sort',
      description:
        'Gather plastic bottles, cans, or cardboard from your home or community. Clean and sort them for better value.',
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-eco-green" />,
      title: 'List or Buy Materials',
      description:
        'Upload your recyclables for sale or browse quality materials from trusted sellers. EcoLoop connects both sides safely.',
    },
    {
      icon: <HandCoins className="w-12 h-12 text-eco-green" />,
      title: 'Earn & Impact',
      description:
        'Get paid fairly for your recyclables and help reduce waste in your area. Every transaction supports a cleaner Africa.',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-eco-green-light/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-blue/30 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container relative mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12">
          How <span className="text-eco-green">EcoLoop</span> Works
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center"
            >
              <div className="mb-6 bg-eco-green-light/30 w-20 h-20 flex items-center justify-center rounded-full shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
