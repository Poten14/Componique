import React from "react";

type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

interface InputProps {
  size?: InputSize;
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

const Input1: React.FC<InputProps> = ({
  size = "md",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      className={`rounded-md focus:border-[#9AC5E5] ${sizeClasses[size]} w-full md:w-1/2 lg:w-1/3 xl:w-3/5`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input1;
