import React from 'react';
import { TrendingUp, DollarSign, UserMinus, Zap } from 'lucide-react';
import ResultsCard from './ResultsCard';
import ComparisonChart from './ComparisonChart';

interface ResultsSectionProps {
  calculations: {
    currentMonthlyRevenue: number;
    currentAnnualRevenue: number;
    currentChurnLoss: number;
    projectedRevenueIncrease: number;
    monthlyCostSavings: number;
    projectedRetainedRevenue: number;
    totalROI: number;
  };
}

function ResultsSection({ calculations }: ResultsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="bg-gray-850 rounded-2xl shadow-xl p-8 border border-gray-750">
        <h2 className="text-2xl text-gray-100 mb-6 font-roboto font-bold">Current Business Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResultsCard
            title="Monthly Revenue"
            value={calculations.currentMonthlyRevenue}
            icon={<DollarSign className="w-6 h-6 text-accent-cyan" />}
            color="accent-cyan"
          />
          <ResultsCard
            title="Annual Revenue"
            value={calculations.currentAnnualRevenue}
            icon={<TrendingUp className="w-6 h-6 text-accent-cyan" />}
            color="accent-cyan"
          />
          <ResultsCard
            title="Annual Churn Loss"
            value={calculations.currentChurnLoss}
            icon={<UserMinus className="w-6 h-6 text-accent-cyan" />}
            color="accent-cyan"
            isNegative
          />
        </div>
      </div>

      <div className="bg-gray-850 rounded-2xl shadow-xl p-8 border border-gray-750">
        <h2 className="text-2xl text-gray-100 mb-6 font-roboto font-bold">Projected Improvements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResultsCard
            title="Additional Revenue"
            value={calculations.projectedRevenueIncrease}
            icon={<TrendingUp className="w-6 h-6 text-accent-purple" />}
            color="accent-purple"
          />
          <ResultsCard
            title="Annual Cost Savings"
            value={calculations.monthlyCostSavings * 12}
            icon={<DollarSign className="w-6 h-6 text-accent-purple" />}
            color="accent-purple"
          />
          <ResultsCard
            title="Retained Revenue"
            value={calculations.projectedRetainedRevenue}
            icon={<UserMinus className="w-6 h-6 text-accent-purple" />}
            color="accent-purple"
          />
          <ResultsCard
            title="Total ROI"
            value={calculations.totalROI}
            icon={<Zap className="w-6 h-6 text-accent-purple" />}
            color="accent-purple"
            highlight
          />
        </div>
      </div>

      <div className="bg-gray-850 rounded-2xl shadow-xl p-8 border border-gray-750">
        <h2 className="text-2xl text-gray-100 mb-6 font-roboto font-bold">Before vs After Comparison</h2>
        <ComparisonChart calculations={calculations} />
      </div>
    </div>
  );
}

export default ResultsSection;