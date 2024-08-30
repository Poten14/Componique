import React, { useState } from "react";
import { Size } from "types/type";

type Color =
  | "Basic"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Gray"
  | "Danger";

interface NumInputProps
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

const NumInput: React.FC<NumInputProps> = ({
  color = "Basic",
  size = "medium",
  width = "200px",
  value,
  onValueChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "0");

  const handleIncrement = () => {
    const newValue = (parseInt(inputValue, 10) + 1).toString();
    setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = (parseInt(inputValue, 10) - 1).toString();
    setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      handleIncrement();
    } else if (e.key === "ArrowDown") {
      handleDecrement();
    }
  };

  return (
    <div
      className={`flex items-center ${sizeClasses[size]} rounded-xl border-2 border-gray ${colorClasses[color]} bg-white focus-within:ring-2 focus-within:ring-opacity-50`}
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
          onClick={handleIncrement}
        >
          ▲
        </button>
        <button
          className={`mt-0.5 flex h-10 items-center justify-center rounded-b-lg ${buttonSizeClasses[size]} ${buttonColorClasses[color]}`}
          onClick={handleDecrement}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default NumInput;
