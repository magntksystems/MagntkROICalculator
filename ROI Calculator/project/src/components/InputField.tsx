import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (name: string, value: string) => void;
  type?: string;
  step?: string;
}

function InputField({ label, name, value, onChange, type = "text", step = "1" }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        step={step}
        className="input-field"
      />
    </div>
  );
}

export default InputField;