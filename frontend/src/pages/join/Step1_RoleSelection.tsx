// src/components/join/Step1_RoleSelection.tsx

import React from 'react';

interface Props {
  onNext: (data: { role: 'seller' | 'buyer' }) => void;
}

const Step1_RoleSelection: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">How will you participate?</h2>
      <p className="text-slate-600 mb-8">Choose your primary role on the EcoLoop platform.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Seller Option */}
        <button
          onClick={() => onNext({ role: 'seller' })}
          className="p-6 border-2 border-ash-gray rounded-lg text-left hover:border-eco-green hover:bg-slate-50 transition-all"
        >
          <h3 className="font-bold text-lg text-slate-900">I'm a Household or Individual</h3>
          <p className="mt-1 text-slate-600 text-sm">I want to list my recyclable materials for sale and earn money.</p>
        </button>

        {/* Buyer Option */}
        <button
          onClick={() => onNext({ role: 'buyer' })}
          className="p-6 border-2 border-ash-gray rounded-lg text-left hover:border-eco-green hover:bg-slate-50 transition-all"
        >
          <h3 className="font-bold text-lg text-slate-900">I'm a Recycler or Business</h3>
          <p className="mt-1 text-slate-600 text-sm">I want to discover and purchase recyclable materials in bulk.</p>
        </button>
      </div>
    </div>
  );
};

export default Step1_RoleSelection;