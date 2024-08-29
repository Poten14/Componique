"use client";

import { useState } from "react";

interface SelectListProps {
  option: string[];
  onSelect?: (value: string) => void;
}

const SelectList = ({ option, onSelect }: SelectListProps) => {
  const [selectValue, setSelectValue] = useState<string>("");

  const handleOptionClick = (item: string) => {
    setSelectValue(item);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <>
      <div className="w-96">
        <ul className="flex cursor-pointer justify-evenly divide-x divide-gray rounded-lg border border-gray p-0 text-center">
          {option.map((item, key) => (
            <li
              className={`w-full p-2 transition-transform duration-300 hover:bg-[#9AC5E5] hover:font-bold hover:text-[#fff] ${selectValue === item ? "rounded-lg bg-[#9AC5E5] font-bold text-[#fff]" : ""} `}
              key={key}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SelectList;
