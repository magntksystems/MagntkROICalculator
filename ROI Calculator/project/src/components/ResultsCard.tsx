import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ResultsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  highlight?: boolean;
  isNegative?: boolean;
}

function ResultsCard({ title, value, icon, highlight = false, isNegative = false }: ResultsCardProps) {
  return (
    <div className={`card ${highlight ? 'border-accent-purple' : 'border-gray-750'}
                    transition-transform duration-200 hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-light">{title}</h3>
        <div className="text-accent-cyan">{icon}</div>
      </div>
      <p className={`text-2xl font-thin ${isNegative ? 'text-red-500' : 'text-gray-100'}`}>
        {isNegative ? '- ' : ''}{formatCurrency(Math.abs(value))}
      </p>
    </div>
  );
}

export default ResultsCard;