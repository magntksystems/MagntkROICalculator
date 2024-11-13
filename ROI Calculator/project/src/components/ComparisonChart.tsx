import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ComparisonChartProps {
  calculations: {
    currentAnnualRevenue: number;
    currentChurnLoss: number;
    projectedRevenueIncrease: number;
    monthlyCostSavings: number;
    projectedRetainedRevenue: number;
  };
}

function ComparisonChart({ calculations }: ComparisonChartProps) {
  const currentTotal = calculations.currentAnnualRevenue;
  const projectedTotal = 
    calculations.currentAnnualRevenue + 
    calculations.projectedRevenueIncrease + 
    calculations.monthlyCostSavings * 12 + 
    calculations.projectedRetainedRevenue;

  const maxValue = Math.max(currentTotal, projectedTotal);

  const data = [
    {
      label: 'Current Annual Revenue',
      value: currentTotal,
      color: 'bg-accent-cyan',
    },
    {
      label: 'Projected Annual Revenue',
      value: projectedTotal,
      color: 'bg-gradient-to-r from-accent-cyan to-accent-purple',
    },
  ];

  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-light">{item.label}</span>
            <span className="text-light">{formatCurrency(item.value)}</span>
          </div>
          <div className="w-full bg-primary rounded-full h-4">
            <div
              className={`h-4 rounded-full ${item.color}`}
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-primary rounded-lg border border-gray-750">
        <p className="text-light">
          Potential Revenue Increase: {' '}
          <span className="text-accent-purple font-bold">
            {formatCurrency(projectedTotal - currentTotal)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ComparisonChart;