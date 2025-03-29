import React, { useState } from 'react';
import { CheckCircleIcon } from 'lucide-react';

const DiyGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: 'Assess Your Water Needs',
      content: (
        <div>
          <p className="text-gray-600 mb-4">
            Calculate your daily water usage to determine the size of your harvesting system:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Garden irrigation: 2-6 liters per square meter</li>
            <li>Toilet flushing: 6-13 liters per flush</li>
            <li>Laundry: 60-100 liters per load</li>
            <li>Car washing: 150-300 liters</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Choose Collection Method',
      content: (
        <div>
          <p className="text-gray-600 mb-4">Common collection methods include:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold">Rooftop Collection</h4>
              <p className="text-sm text-gray-600 mt-2">
                Most common and efficient method, using your roof as a catchment area.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold">Ground Catchment</h4>
              <p className="text-sm text-gray-600 mt-2">
                Suitable for larger properties, involves collecting runoff from the ground.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Select Storage Options',
      content: (
        <div>
          <p className="text-gray-600 mb-4">Choose from various storage solutions:</p>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold">Rain Barrels (200-400L)</h4>
              <p className="text-sm text-gray-600">Perfect for small gardens and basic needs.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold">Underground Tanks (1000-5000L)</h4>
              <p className="text-sm text-gray-600">Ideal for larger households and extensive usage.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Install Filtration System',
      content: (
        <div>
          <p className="text-gray-600 mb-4">Essential filtration components:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>First flush diverter to remove initial contaminated water</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Leaf screens to prevent debris entry</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Sediment filter for fine particle removal</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">DIY Installation Guide</h2>
      
      <div className="flex space-x-4 overflow-x-auto py-2">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              currentStep === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Step {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{steps[currentStep - 1].title}</h3>
        {steps[currentStep - 1].content}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          className={`px-4 py-2 rounded-md ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          }`}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          className={`px-4 py-2 rounded-md ${
            currentStep === steps.length
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DiyGuide;