import React from 'react';
import InputField from './InputField';

interface ROIFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

function ROIForm({ formData, setFormData }: ROIFormProps) {
  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0,
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-850 rounded-2xl shadow-xl p-8 border border-gray-750">
        <h2 className="text-2xl text-gray-100 mb-6 font-roboto font-bold">Current Situation</h2>
        <div className="space-y-6">
          <InputField
            label="Monthly Lead Volume"
            name="monthlyLeadVolume"
            value={formData.monthlyLeadVolume}
            onChange={handleChange}
            type="number"
          />
          
          <InputField
            label="Current Conversion Rate (%)"
            name="currentConversionRate"
            value={formData.currentConversionRate}
            onChange={handleChange}
            type="number"
            step="0.1"
          />
          
          <InputField
            label="Average Customer Lifetime Value ($)"
            name="customerLifetimeValue"
            value={formData.customerLifetimeValue}
            onChange={handleChange}
            type="number"
          />
          
          <InputField
            label="Monthly Lead Generation Cost ($)"
            name="monthlyLeadGenCost"
            value={formData.monthlyLeadGenCost}
            onChange={handleChange}
            type="number"
          />
          
          <InputField
            label="Cost per Lead ($)"
            name="costPerLead"
            value={formData.costPerLead}
            onChange={handleChange}
            type="number"
          />
          
          <InputField
            label="Annual Churn Rate (%)"
            name="annualChurnRate"
            value={formData.annualChurnRate}
            onChange={handleChange}
            type="number"
            step="0.1"
          />
        </div>
      </div>

      <div className="bg-gray-850 rounded-2xl shadow-xl p-8 border border-gray-750">
        <h2 className="text-2xl text-gray-100 mb-6 font-roboto font-bold">Expected Improvements</h2>
        <div className="space-y-6">
          <InputField
            label="Expected Conversion Rate Increase (%)"
            name="expectedConversionIncrease"
            value={formData.expectedConversionIncrease}
            onChange={handleChange}
            type="number"
            step="0.1"
          />
          
          <InputField
            label="Expected Cost Reduction (%)"
            name="expectedCostReduction"
            value={formData.expectedCostReduction}
            onChange={handleChange}
            type="number"
            step="0.1"
          />
          
          <InputField
            label="Expected Retention Improvement (%)"
            name="expectedRetentionImprovement"
            value={formData.expectedRetentionImprovement}
            onChange={handleChange}
            type="number"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
}

export default ROIForm;