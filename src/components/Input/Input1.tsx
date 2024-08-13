import React from "react";

type InputSize = "xs" | "sm" | "md" | "lg" | "xl";
type InputVariant = "outlined" | "filled";

interface InputProps {
  size?: InputSize;
  variant?: InputVariant;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeClasses = {
  xs: "py-1 px-2 text-xs",
  sm: "py-1.5 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-4 text-lg",
  xl: "py-4 px-5 text-lg",
};

const variantClasses = {
  outlined: "border border-Primary bg-white",
  filled: "bg-Basic text-white placeholder-white border-none",
};

const Input1: React.FC<InputProps> = ({
  size = "md",
  variant = "outlined",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      className={`focus:border-basic rounded-md ${variantClasses[variant]} ${sizeClasses[size]} md:w-1/4 lg:w-2/3 xl:w-3/5`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input1;
