import React, { useState } from "react";
import { Size } from "types/type";

type ButtonColor =
  | "Basic"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface NumInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  color?: ButtonColor;
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

const colorClasses = {
  Basic: "bg-Basic text-white",
  Primary: "bg-Primary text-white",
  Secondary: "bg-Secondary text-white",
  Success: "bg-Success text-white",
  Warning: "bg-Warning text-white",
  Danger: "bg-Danger text-white",
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

  return (
    <div
      className={`flex items-center ${sizeClasses[size]} rounded-xl border-2 border-gray`}
      style={{ width: width }}
    >
      <input
        type="text"
        className={`${width} w-6 flex-grow border-none text-center focus:outline-none`}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
      <div className="flex flex-col">
        <button
          className={`mr-0.5 flex h-10 items-center justify-center rounded-t-lg ${buttonSizeClasses[size]} ${colorClasses[color]}`}
          onClick={handleIncrement}
        >
          ▲
        </button>
        <button
          className={`mt-0.3 mt-0.5 flex h-10 items-center justify-center rounded-b-lg ${buttonSizeClasses[size]} ${colorClasses[color]}`}
          onClick={handleDecrement}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default NumInput;
