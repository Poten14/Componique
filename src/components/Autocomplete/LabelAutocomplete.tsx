import React from "react";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  options: Array<string | Option>;
  value: string;
  onChange: (value: string) => void;
  onSelect: (selectedOption: string | Option) => void;
  placeholder?: string;
}

const LabelAutocomplete: React.FC<AutocompleteProps> = ({
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
    <div className="relative w-full max-w-xs">
      <div className="flex items-center rounded-full bg-white px-5 py-4 shadow-md focus-within:border-Primary focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          list="autocomplete-options"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onSelect={handleSelect}
          placeholder={placeholder}
          className="ml-2 w-full focus:outline-none"
        />
        <img src="/search.svg" alt="Search" className="ml-2 h-5 w-5" />
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
