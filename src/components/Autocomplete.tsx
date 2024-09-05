"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "./Icon/Icon";

interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  options: Option[]; // 라벨과 값을 가진 옵션 배열
  placeholder?: string;
  onSelect: (selectedOption: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search for Components",
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [moveCircle, setMoveCircle] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // 입력한 값에 따라 옵션 필터링
    const filtered = options.filter((option) =>
      option.value.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredOptions(filtered);
    setIsDropdownOpen(true);
    if (!moveCircle && value) {
      setMoveCircle(true); // 노란색 동그라미를 드롭다운으로 옮기기
    }
  };

  const handleOptionClick = (option: Option) => {
    setInputValue(option.value);
    onSelect(option.value);
    setIsDropdownOpen(false);
    setMoveCircle(false); // 선택 후 다시 초기화

    // 선택된 옵션에 따라 해당 페이지로 이동
    const pagePath = `/${option.value.toLowerCase().replace(/\s+/g, "")}`;
    router.push(pagePath);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const matchingOption = filteredOptions[0]; // 첫 번째 필터링된 옵션을 선택
      if (matchingOption) {
        handleOptionClick(matchingOption);
      } else if (inputValue) {
        const pagePath = `/${inputValue.toLowerCase().replace(/\s+/g, "")}`;
        router.push(pagePath);
      }
    }
  };

  // onBlur 이벤트와 onMouseDown 이벤트가 충돌하지 않도록
  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  // 라벨별 옵션 그룹화 렌더링
  const groupedOptions = filteredOptions.reduce(
    (groups: { [label: string]: Option[] }, option: Option) => {
      const { label } = option;
      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(option);
      return groups;
    },
    {},
  );

  return (
    <div className="relative max-w-[740px]">
      <div className="flex h-16 items-center rounded-full bg-white px-4 shadow-lg focus-within:border-Basic focus-within:ring-2 focus-within:ring-Basic dark:bg-[#333742]">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#A4C8F0] dark:bg-Navy"></div>
          {!moveCircle && (
            <div className="h-8 w-8 rounded-full bg-[#E4C987] dark:bg-[#FFECB8]"></div>
          )}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // 키보드 이벤트 처리 추가
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="text-gray-600 placeholder-gray-400 flex-grow px-4 focus:outline-none dark:bg-[#333742] dark:text-[#dfdfdf]"
        />
        <Icon name="icon-search" size={24} className="dark:bg-white" />
      </div>
      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg dark:bg-[#333742]">
          {moveCircle && (
            <li className="flex items-center space-x-2 p-3">
              <div className="h-8 w-8 rounded-full bg-[#E4C987] dark:bg-[#FFECB8]"></div>
              <span className="text-gray-600 pl-8 dark:text-[#dfdfdf]">
                {inputValue}
              </span>
            </li>
          )}
          {Object.entries(groupedOptions).map(([label, options]) => (
            <li key={label}>
              <div className="bg-gray-200 dark:bg-gray-800 p-2">
                <strong>{label}</strong>
              </div>
              <ul>
                {options.map((option, index) => (
                  <li
                    key={index}
                    onMouseDown={() => handleOptionClick(option)}
                    className="hover:bg-gray-100 flex cursor-pointer items-center p-3 pl-12 dark:text-[#dfdfdf]"
                  >
                    <div>
                      <Icon name="icon-docs2" color="#626262" size={24} />
                      <span className="ml-2">{option.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {filteredOptions.length === 0 && (
            <li className="text-gray-600 pb-2 pl-12 pt-2 dark:text-[#dfdfdf]">
              No options found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
