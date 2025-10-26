import React, { useState } from 'react';
import Step1_RoleSelection from '../join/Step1_RoleSelection';

// We'll create these step components next
// import Step1_RoleSelection from '../components/join/Step1_RoleSelection';
// import Step2_AccountCreation from '../components/join/Step2_AccountCreation';
// import Step3_ProfileDetails from '../components/join/Step3_ProfileDetails';

// A simple placeholder component for now
const PlaceholderStep = ({ title }: { title: string }) => (
  <div className="p-8 border rounded-lg bg-white shadow-sm">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

const JoinPage: React.FC = () => {
  // State to manage the current step of the wizard
  const [currentStep, setCurrentStep] = useState(1);
  
  // State to hold all the form data from all steps
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: '',
    profile: {},
  });

  // Function to go to the next step
  const handleNextStep = (data: object) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => prev + 1);
  };

  // Function to go to the previous step
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_RoleSelection onNext={handleNextStep} />;;
        // return <Step1_RoleSelection onNext={handleNextStep} />;
      case 2:
        return <PlaceholderStep title="Step 2: Create Your Account" />;
        // return <Step2_AccountCreation onNext={handleNextStep} onBack={handlePrevStep} />;
      case 3:
        return <PlaceholderStep title="Step 3: Complete Your Profile" />;
        // return <Step3_ProfileDetails onBack={handlePrevStep} formData={formData} />;
      default:
        return <PlaceholderStep title="Step 1: Choose Your Role" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-extrabold text-center text-slate-900 mb-2">Join the Movement</h1>
      <p className="text-center text-slate-600 mb-8">Let's get you set up to transform waste into wealth.</p>
      
      {/* Visual Stepper Indicator (Optional but recommended) */}
      <div className="mb-8 flex justify-center space-x-4">
        {/* We can make this dynamic later */}
        <span className="font-bold text-eco-green">Step {currentStep} of 3</span>
      </div>

      {/* Render the current step component */}
      <div>
        {renderStep()}
      </div>
    </div>
  );
};

export default JoinPage;