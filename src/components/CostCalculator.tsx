import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const CostCalculator = () => {
  const [roofArea, setRoofArea] = useState('');
  const [tankSize, setTankSize] = useState('1000');
  const [rainfall, setRainfall] = useState('1000'); // mm per year

  const calculateCost = () => {
    const area = parseFloat(roofArea);
    const size = parseFloat(tankSize);
    
    if (!area) return null;

    const tankCost = size <= 1000 ? 300 : size <= 3000 ? 800 : 1500;
    const plumbingCost = 500;
    const filterCost = 200;
    const installationCost = 1000;

    return {
      tank: tankCost,
      plumbing: plumbingCost,
      filter: filterCost,
      installation: installationCost,
      total: tankCost + plumbingCost + filterCost + installationCost
    };
  };

  const calculateWaterSavings = () => {
    const area = parseFloat(roofArea);
    const annualRainfall = parseFloat(rainfall) / 1000; // convert mm to meters
    
    if (!area || !annualRainfall) return null;

    const waterCollected = area * annualRainfall * 0.8; // 80% efficiency
    const waterPrice = 0.002; // $2 per cubic meter
    return waterCollected * waterPrice * 12; // annual savings
  };

  const costs = calculateCost();
  const annualSavings = calculateWaterSavings();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Calculator className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold">Cost Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Roof Area (m²)</label>
            <input
              type="number"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter roof area"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tank Size (L)</label>
            <select
              value={tankSize}
              onChange={(e) => setTankSize(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="1000">1,000 Liters</option>
              <option value="3000">3,000 Liters</option>
              <option value="5000">5,000 Liters</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Annual Rainfall (mm)</label>
            <select
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="500">500mm (Arid)</option>
              <option value="1000">1,000mm (Moderate)</option>
              <option value="2000">2,000mm (High)</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Estimated Costs & Savings</h3>
          
          {costs && (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Storage Tank:</span>
                <span>${costs.tank}</span>
              </div>
              <div className="flex justify-between">
                <span>Plumbing:</span>
                <span>${costs.plumbing}</span>
              </div>
              <div className="flex justify-between">
                <span>Filtration System:</span>
                <span>${costs.filter}</span>
              </div>
              <div className="flex justify-between">
                <span>Installation:</span>
                <span>${costs.installation}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total Investment:</span>
                <span>${costs.total}</span>
              </div>
              {annualSavings && (
                <div className="mt-4 p-3 bg-green-50 rounded-md">
                  <div className="text-green-700">
                    <span>Estimated Annual Savings:</span>
                    <span className="float-right">${annualSavings.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Payback period: {(costs.total / annualSavings).toFixed(1)} years
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;