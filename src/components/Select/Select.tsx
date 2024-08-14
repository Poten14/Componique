"use client";

import { useState } from "react";

interface SelectProps {
  placeholder: string;
  option: string[];
}

const Select = ({ option, placeholder }: SelectProps) => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (item: string) => {
    setSelectValue(item);
    setOpen(false);
  };

  return (
    <>
      <div className="relative w-1/6">
        <div
          className="h-8 w-full cursor-pointer rounded-lg border border-gray p-1"
          onClick={handleDropDown}
        >
          <span className="font-semibold">{selectValue || placeholder}</span>
          {open && (
            <ul className="absolute left-0 right-0 top-full mt-2 bg-white text-sm">
              {option.map((item, key) => (
                <li
                  className={`block w-full cursor-pointer py-2 pl-4 hover:bg-[#E8F5FF] ${
                    selectValue === item ? "bg-[#E8F5FF]" : ""
                  }`}
                  key={key}
                  onClick={() => handleOptionClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default Select;
