import React from 'react';
import { Recycle, ShoppingBag, HandCoins } from 'lucide-react'; // lightweight icons

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
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          How EcoLoop Works
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
