import React, { useState } from "react";
import { Size } from "types/type";

type Color =
  | "Basic"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface CurrencyInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  color?: Color;
  size?: Size;
  value?: string;
  width?: string;
  onValueChange?: (value: string) => void;
}

const sizeClasses = {
  small: "h-[45px] text-base",
  medium: "h-[45px] text-base",
  large: "h-[45px] text-lg",
};

const buttonSizeClasses = {
  small: "w-[30px] h-[18px] text-sm",
  medium: "w-[40px] h-[18px] text-base",
  large: "w-[50px] h-[18px] text-lg",
};

const buttonColorClasses = {
  Basic: "bg-[#9AC5E5] text-white",
  Primary: "bg-[#7AA7FF] text-white",
  Secondary: "bg-[#C294F0] text-white",
  Success: "bg-[#7EEFAF] text-white",
  Warning: "bg-[#EDCE7B] text-white",
  Danger: "bg-[#FF7676] text-white",
  Gray: "bg-[#DCDCDD] text-white",
};

const colorClasses = {
  Basic: "focus-within:ring-[#9AC5E5] focus-within:border-[#9AC5E5]",
  Primary: "focus-within:ring-[#7AA7FF] focus-within:border-[#7AA7FF]",
  Secondary: "focus-within:ring-[#C294F0] focus-within:border-[#C294F0]",
  Success: "focus-within:ring-[#7EEFAF] focus-within:border-[#7EEFAF]",
  Warning: "focus-within:ring-[#EDCE7B] focus-within:border-[#EDCE7B]",
  Danger: "focus-within:ring-[#FF7676] focus-within:border-[#FF7676]",
  Gray: "focus-within:ring-[#DCDCDD] focus-within:border-[#DCDCDD]",
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  color = "Basic",
  size = "medium",
  width = "200px",
  value = "$0.00",
  onValueChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "0");

  const incrementValue = () => {
    const parsedValue = (parseFloat(inputValue.replace(/^\$/, "")) + 1).toFixed(
      2,
    );
    const newValue = `$${parsedValue}`;
    setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const decrementValue = () => {
    const parsedValue = (parseFloat(inputValue.replace(/^\$/, "")) - 1).toFixed(
      2,
    );
    const newValue = `$${parsedValue}`;
    setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^-?\d*\.?\d*$/.test(newValue)) {
      setInputValue(newValue);
      if (onValueChange) onValueChange(newValue);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      incrementValue();
    } else if (e.key === "ArrowDown") {
      decrementValue();
    }
  };

  return (
    <div
      className={`flex items-center ${sizeClasses[size]} rounded-xl border-2 border-gray ${colorClasses[color]} focus-within:ring-2 focus-within:ring-opacity-50`}
      style={{ width: width }}
    >
      <input
        type="text"
        className="w-5 flex-grow border-none text-center focus:outline-none"
        value={inputValue}
        onChange={handleChange}
        {...props}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-col">
        <button
          className={`mr-0.5 flex h-10 items-center justify-center rounded-t-lg ${buttonSizeClasses[size]} ${buttonColorClasses[color]}`}
          onClick={incrementValue}
        >
          ▲
        </button>
        <button
          className={`mt-0.5 flex h-10 items-center justify-center rounded-b-lg ${buttonSizeClasses[size]} ${buttonColorClasses[color]}`}
          onClick={decrementValue}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default CurrencyInput;
