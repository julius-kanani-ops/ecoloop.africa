import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900">Simple Steps to a Cleaner Africa</h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto">
          Our process is designed to be as easy as possible for everyone involved.
        </p>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col items-center">
            <div className="bg-eco-green-light text-eco-green-dark p-4 rounded-full text-2xl font-bold">1</div>
            <h3 className="mt-4 font-bold text-xl text-slate-900">List Your Waste</h3>
            <p className="mt-2 text-slate-600">Snap a picture of your sorted recyclables (plastic, glass, paper) and list them on our platform.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-eco-green-light text-eco-green-dark p-4 rounded-full text-2xl font-bold">2</div>
            <h3 className="mt-4 font-bold text-xl text-slate-900">Get a Buyer</h3>
            <p className="mt-2 text-slate-600">Local collectors and recyclers will see your listing and purchase it directly through the app.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-eco-green-light text-eco-green-dark p-4 rounded-full text-2xl font-bold">3</div>
            <h3 className="mt-4 font-bold text-xl text-slate-900">Earn Securely</h3>
            <p className="mt-2 text-slate-600">Once your waste is collected, you receive a secure digital payment instantly. It's that simple!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;