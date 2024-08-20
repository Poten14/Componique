import React, { useState } from "react";

interface AutocompleteProps {
  options: string[];
  placeholder?: string;
  variant?: "outlined" | "filled" | "borderless";
  radius?: "small" | "medium" | "large" | "none" | "full";
  width?: string;
  height?: string;
  onSelect: (selectedOption: string) => void;
}

const variantClasses = {
  outlined: "border border-gray border-2 focus:border-none",
  filled: "bg-gray text-gray-900  focus:bg-transparent",
  borderless: "border-none bg-transparent",
};

const radiusClasses = {
  small: "rounded-md",
  medium: "rounded-lg",
  large: "rounded-xl",
  full: "rounded-full",
  none: "rounded-none",
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search...",
  variant = "outlined",
  radius = "medium",
  width = "300px",
  height = "auto",
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setFilteredOptions([]); // 옵션을 선택하면 필터링된 목록을 숨김
  };

  return (
    <div className="relative" style={{ width }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full ${height} p-3 ${variantClasses[variant]} ${radiusClasses[radius]} focus:outline-none focus:ring-2 focus:ring-Basic`}
        style={{ height }}
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mt-1 max-h-40 overflow-y-auto rounded-md bg-white shadow-lg">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 cursor-pointer p-2"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
