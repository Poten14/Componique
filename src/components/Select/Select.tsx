"use client";

import { useState } from "react";
import Image from "next/image";

interface SelectProps {
  defaultValue?: string;
  option: string[];
  color?: "red" | "blue" | "green" | "gray";
}

const colorClasses = {
  red: "border-[#FF7676] focus:ring-[#FF7676]",
  blue: "border-[#7AA7FF] focus:ring-[#7AA7FF]",
  green: "border-[#7EEFAF] focus:ring-[#7EEFAF]",
  gray: "border-[#DCDCDD] focus:ring-[#DCDCDD]",
};

const Select = ({ option, color = "gray", defaultValue }: SelectProps) => {
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
          className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border ${colorClasses[color]} p-2 shadow-lg`}
          onClick={handleDropDown}
        >
          <span className="text-sm font-semibold">
            {selectValue || defaultValue}
          </span>
          {open ? (
            <Image src="selectdown.svg" alt="arrow" width={15} height={15} />
          ) : (
            <Image src="selectup.svg" alt="arrow" width={15} height={15} />
          )}
          {open && (
            <ul
              className={`absolute left-0 right-0 top-full rounded-lg border bg-white ${colorClasses[color]} z-30 text-xs shadow-lg`}
            >
              {option.map((item, key) => (
                <li
                  className={`block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] ${
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
