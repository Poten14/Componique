"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ 버전에서는 next/navigation 사용
import Icon from "./Icon/Icon";

interface AutocompleteProps {
  options: string[];
  placeholder?: string;
  onSelect: (selectedOption: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search for Components",
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [moveCircle, setMoveCircle] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setIsDropdownOpen(true);
    if (!moveCircle && value) {
      setMoveCircle(true); // 노란색 동그라미를 드롭다운으로 옮기기
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setIsDropdownOpen(false);
    setMoveCircle(false); // 선택 후 다시 초기화

    // 선택된 옵션에 따라 해당 페이지로 이동
    const pagePath = `/${option.toLowerCase().replace(/\s+/g, "")}`;
    router.push(pagePath);
  };

  return (
    <div className="relative max-w-[740px]">
      <div className="flex h-16 items-center rounded-full bg-white px-4 shadow-lg focus-within:border-Basic focus-within:ring-2 focus-within:ring-Basic">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#A4C8F0]"></div>
          {!moveCircle && (
            <div className="h-8 w-8 rounded-full bg-[#E4C987]"></div>
          )}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
          placeholder={placeholder}
          className="text-gray-600 placeholder-gray-400 flex-grow px-4 focus:outline-none"
        />
        <Icon name="icon-search" size={24} />
      </div>
      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 z-10 mt-2 max-h-60 overflow-y-auto rounded-lg bg-white shadow-lg">
          {moveCircle && (
            <li className="flex items-center space-x-2 p-3">
              <div className="h-8 w-8 rounded-full bg-[#E4C987]"></div>
              <span className="text-gray-600">{inputValue}</span>
            </li>
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onMouseDown={() => handleOptionClick(option)}
                className="hover:bg-gray-100 flex cursor-pointer items-center p-3"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="text-gray-600 p-3">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
