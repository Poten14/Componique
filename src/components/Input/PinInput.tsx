import React, { useState, useRef } from "react";

interface PinInputProps {
  length?: number;
  disabled?: boolean;
  formatter?: (value: string) => string;
  variant?: "filled" | "outline";
  customCharacter?: string;
  onChange?: (value: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({
  length = 6,
  disabled = false,
  formatter,
  variant = "outline",
  customCharacter = "",
  onChange,
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = formatter ? formatter(e.target.value) : e.target.value;
    const newValues = [...values];
    newValues[index] = value;

    setValues(newValues);

    if (value.length === 1 && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (onChange) {
      onChange(newValues.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={customCharacter || values[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={handleFocus}
          disabled={disabled}
          ref={(el) => {
            if (el) inputsRef.current[index] = el;
          }}
          className={`h-9 w-7 rounded-md border border-[#E0E0E0] text-center focus:outline-none ${
            variant === "filled"
              ? "bg-[#E0E0E0] focus:border-Basic focus:bg-white focus:ring focus:ring-blue-200"
              : "bg-white"
          } focus:border-Basic focus:ring focus:ring-blue-200 ${
            disabled ? "bg-[#E0E0E0]" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
};

export default PinInput;
