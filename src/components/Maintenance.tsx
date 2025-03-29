import React from 'react';
import { WrenchIcon, AlertCircleIcon, CalendarIcon } from 'lucide-react';

const Maintenance = () => {
  const maintenanceTasks = [
    {
      title: 'Regular Cleaning',
      period: 'Monthly',
      tasks: [
        'Clean gutters and downspouts',
        'Remove debris from leaf screens',
        'Check for mosquito breeding',
        'Inspect tank water level'
      ]
    },
    {
      title: 'System Inspection',
      period: 'Quarterly',
      tasks: [
        'Check filtration system efficiency',
        'Inspect pipes for leaks',
        'Clean first flush diverter',
        'Test pump operation'
      ]
    },
    {
      title: 'Deep Maintenance',
      period: 'Annually',
      tasks: [
        'Professional tank cleaning',
        'Replace filters if needed',
        'Check structural integrity',
        'Update system components'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <WrenchIcon className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold">Maintenance Guide</h2>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
          <p className="text-yellow-700">
            Regular maintenance is crucial for the longevity and efficiency of your rainwater harvesting system.
            Follow this guide to ensure your system operates at its best.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {maintenanceTasks.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CalendarIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
            <div className="text-sm text-blue-600 mb-3">{section.period}</div>
            <ul className="space-y-2">
              {section.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start">
                  <span className="h-5 w-5 text-green-500 mr-2">•</span>
                  <span className="text-gray-600">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Troubleshooting Common Issues</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-red-600">Poor Water Quality</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Check and clean filters</li>
              <li>• Ensure first flush diverter is working</li>
              <li>• Inspect tank for contamination</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-red-600">Low Water Pressure</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Check pump operation</li>
              <li>• Look for pipe blockages</li>
              <li>• Verify tank water level</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;