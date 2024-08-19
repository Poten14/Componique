import React from "react";
import Image from "next/image";
import { Size } from "types/type";

interface Option {
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
        className={`flex items-center rounded-full bg-white px-4 shadow-md ${sizeClasses[size]} focus-within:border-Primary focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500`}
      >
        <input
          type="text"
          list="autocomplete-options"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onSelect={handleSelect}
          placeholder={placeholder}
          className="flex-grow focus:outline-none"
        />
        <img src="/search.svg" alt="Search" className="h-5 w-5" />
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
