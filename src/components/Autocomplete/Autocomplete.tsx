import React, { useState } from "react";

interface AutocompleteProps {
  options: string[];
  placeholder?: string;
  variant?: "outlined" | "filled" | "borderless";
  radius?: "small" | "medium" | "large" | "none" | "full";
  width?: string;
  height?: string;
  noOptionsMessage?: string;
  onSelect: (selectedOption: string) => void;
}

const variantClasses = {
  outlined: "border border-gray border-2 focus:border-none",
  filled: "bg-gray text-gray-900 focus:bg-transparent",
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
  noOptionsMessage = "No results found",
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setIsDropdownOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 100);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div className="relative" style={{ width }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full ${height} p-3 ${variantClasses[variant]} ${radiusClasses[radius]} focus:outline-none focus:ring-2 focus:ring-Basic`}
        style={{ height }}
      />
      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 z-10 mt-1 max-h-40 overflow-y-auto rounded-md bg-white shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 m-3 cursor-pointer p-2"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="text-gray-500 m-3 p-2">{noOptionsMessage}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
