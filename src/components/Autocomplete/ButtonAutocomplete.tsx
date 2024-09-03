import React, { useState, useEffect } from "react";

type ButtonColor =
  | "Basic"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface AutocompleteProps {
  options: string[];
  placeholder?: string;
  radius?: "small" | "medium" | "large" | "none" | "full";
  width?: string;
  height?: string;
  noOptionsMessage?: string;
  color?: ButtonColor;
  onSelect: (selectedOption: string) => void;
}

const radiusClasses = {
  small: "rounded-md",
  medium: "rounded-lg",
  large: "rounded-xl",
  full: "rounded-full",
  none: "rounded-none",
};

const colorClasses = {
  Basic: "focus:ring-Basic focus:border-Basic",
  Primary: "focus:ring-Primary focus:border-Primary",
  Secondary: "focus:ring-Secondary focus:border-Secondary",
  Success: "focus:ring-Success focus:border-Success",
  Warning: "focus:ring-Warning focus:border-Warning",
  Danger: "focus:ring-Danger focus:border-Danger",
};

const buttonColorClasses = {
  Basic: "bg-Basic text-white",
  Primary: "bg-Primary text-white",
  Secondary: "bg-Secondary text-white",
  Success: "bg-Success text-white",
  Warning: "bg-Warning text-white",
  Danger: "bg-Danger text-white",
};

const ButtonAutocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search...",
  radius = "medium",
  width = "300px",
  height = "auto",
  noOptionsMessage = "No results found",
  color = "Basic",
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode();
    window.addEventListener("storage", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", checkDarkMode);
      observer.disconnect();
    };
  }, []);

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

  return (
    <div className="relative" style={{ width }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        placeholder={placeholder}
        className={`w-full ${height} border ${
          isDarkMode
            ? "border-gray-600 bg-[#2A2E39] text-white"
            : "border-gray bg-white text-black"
        } p-3 ${
          radius === "full" ? "rounded-full" : radiusClasses[radius]
        } focus:border-transparent focus:outline-none focus:ring-2 ${colorClasses[color]}`}
        style={{ height }}
      />
      <button
        className={`absolute bottom-1 right-1 top-1 px-4 ${buttonColorClasses[color]} ${
          radius === "full" ? "rounded-full" : "rounded-md"
        } transform transition-transform focus:outline-none active:scale-90`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onSelect(inputValue)}
      >
        Search
      </button>
      {isDropdownOpen && (
        <ul
          className={`absolute left-0 right-0 z-10 mt-3 max-h-40 overflow-y-auto rounded-md shadow-lg ${
            isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
          }`}
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className={`hover:bg-gray-200 m-3 cursor-pointer p-2 ${
                  isDarkMode ? "hover:bg-gray-700" : ""
                }`}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li
              className={`m-3 p-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {noOptionsMessage}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ButtonAutocomplete;
