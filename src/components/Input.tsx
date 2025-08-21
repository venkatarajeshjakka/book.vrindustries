import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <label className="input-label">
    {label && <span>{label}</span>}
    <input className="input" {...props} />
  </label>
);
