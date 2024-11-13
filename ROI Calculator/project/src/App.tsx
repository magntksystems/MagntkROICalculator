import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import ROIForm from './components/ROIForm';
import ResultsSection from './components/ResultsSection';

function App() {
  const [formData, setFormData] = useState({
    // Current Situation
    monthlyLeadVolume: 500,
    currentConversionRate: 10,
    customerLifetimeValue: 50000,
    monthlyLeadGenCost: 20000,
    costPerLead: 40,
    annualChurnRate: 15,
    
    // Expected Improvements
    expectedConversionIncrease: 15,
    expectedCostReduction: 20,
    expectedRetentionImprovement: 10,
  });

  const [calculations, setCalculations] = useState({
    // Current Metrics
    currentMonthlyRevenue: 0,
    currentAnnualRevenue: 0,
    currentChurnLoss: 0,
    
    // Projected Improvements
    projectedRevenueIncrease: 0,
    monthlyCostSavings: 0,
    projectedRetainedRevenue: 0,
    totalROI: 0,
  });

  useEffect(() => {
    // Calculate current situation
    const currentMonthlyRevenue = 
      formData.monthlyLeadVolume * 
      (formData.currentConversionRate / 100) * 
      formData.customerLifetimeValue;
      
    const currentAnnualRevenue = currentMonthlyRevenue * 12;
    
    const currentChurnLoss = 
      currentAnnualRevenue * 
      (formData.annualChurnRate / 100);

    // Calculate improvements
    const projectedRevenueIncrease =
      ((formData.currentConversionRate + formData.expectedConversionIncrease) -
        formData.currentConversionRate) *
      0.01 *
      formData.monthlyLeadVolume *
      formData.customerLifetimeValue;

    const monthlyCostSavings =
      formData.monthlyLeadGenCost * (formData.expectedCostReduction * 0.01);

    const projectedRetainedRevenue =
      formData.customerLifetimeValue *
      (formData.annualChurnRate * 0.01) *
      (formData.expectedRetentionImprovement * 0.01) *
      formData.monthlyLeadVolume;

    const totalROI =
      projectedRevenueIncrease + monthlyCostSavings * 12 + projectedRetainedRevenue;

    setCalculations({
      currentMonthlyRevenue,
      currentAnnualRevenue,
      currentChurnLoss,
      projectedRevenueIncrease,
      monthlyCostSavings,
      projectedRetainedRevenue,
      totalROI,
    });
  }, [formData]);

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-16 h-16 text-accent-cyan" />
          </div>
          <h1 className="text-5xl mb-4 font-inter-tight font-extra-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
            ROI on Automation Calculator
          </h1>
          <p className="text-xl text-gray-400">
            See how automation can transform your business metrics
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <ROIForm formData={formData} setFormData={setFormData} />
          <ResultsSection calculations={calculations} />
        </div>
      </div>
    </div>
  );
}

export default App;