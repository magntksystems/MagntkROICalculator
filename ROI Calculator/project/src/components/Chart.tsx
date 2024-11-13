import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ChartProps {
  calculations: {
    projectedRevenueIncrease: number;
    monthlyCostSavings: number;
    projectedRetainedRevenue: number;
    totalROI: number;
  };
}

function Chart({ calculations }: ChartProps) {
  const data = [
    {
      label: 'Revenue Increase',
      value: calculations.projectedRevenueIncrease,
      color: 'bg-accent-cyan',
    },
    {
      label: 'Annual Cost Savings',
      value: calculations.monthlyCostSavings * 12,
      color: 'bg-accent-purple',
    },
    {
      label: 'Retained Revenue',
      value: calculations.projectedRetainedRevenue,
      color: 'bg-gradient-to-r from-accent-cyan to-accent-purple',
    },
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{item.label}</span>
            <span className="text-gray-100">{formatCurrency(item.value)}</span>
          </div>
          <div className="w-full bg-primary rounded-full h-3">
            <div
              className={`h-3 rounded-full ${item.color}`}
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chart;