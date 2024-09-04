import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Size } from "types/type";
import Icon from "@components/Icon/Icon";

export interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  size?: Size;
  options: Array<string | Option>;
  value: string;
  onChange: (value: string) => void;
  onSelect: (selectedOption: string | Option) => void;
  placeholder?: string;
}

const sizeClasses = {
  small: "w-60 h-10 text-sm",
  medium: "w-80 h-10 text-base",
  large: "w-96 h-12 text-lg",
};

const LabelAutocomplete: React.FC<AutocompleteProps> = ({
  size = "medium",
  options,
  value,
  onChange,
  onSelect,
  placeholder = "Search...",
}) => {
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

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const selectedOption =
      typeof options[0] === "string"
        ? selectedValue
        : (options as Array<Option>).find(
            (option) => (option as Option).value === selectedValue,
          );

    if (selectedOption) {
      onSelect(selectedOption);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center rounded-full px-4 shadow-md ${sizeClasses[size]} ${
          isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
        } focus-within:border-Primary focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500`}
      >
        <input
          type="text"
          list="autocomplete-options"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onSelect={handleSelect}
          placeholder={placeholder}
          className={`flex-grow focus:outline-none ${
            isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
          }`}
        />
        <Icon
          name="icon-search"
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
      </div>
      <datalist id="autocomplete-options">
        {options.map((option, index) =>
          typeof option === "string" ? (
            <option key={index} value={option} />
          ) : (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ),
        )}
      </datalist>
    </div>
  );
};

export default LabelAutocomplete;
