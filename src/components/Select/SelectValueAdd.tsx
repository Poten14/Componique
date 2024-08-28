"use client";

import Image from "next/image";
import { useState } from "react";

interface SelectValueAddProps {
  option: string[];
  onSelect?: (value: string[]) => void;
}

const SelectValueAdd = ({ option, onSelect }: SelectValueAddProps) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (item: string) => {
    let updatedValue: string[];

    if (selectValue.includes(item)) {
      updatedValue = selectValue.filter((value) => value !== item);
    } else {
      updatedValue = [...selectValue, item];
    }
    setSelectValue(updatedValue);

    if (onSelect) {
      onSelect(updatedValue);
    }
  };

  const handleOptionRemove = (item: string) => {
    const updatedValue = selectValue.filter((value) => value !== item);
    setSelectValue(updatedValue);

    if (onSelect) {
      onSelect(updatedValue);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex h-9 min-w-60 max-w-96 cursor-pointer items-center justify-between rounded-lg border border-gray p-2 shadow-lg"
        onClick={handleDropDown}
        style={{ width: open ? "auto" : "fit-content" }}
      >
        <div className="flex flex-wrap gap-1">
          {selectValue.length > 0
            ? selectValue.map((item, key) => (
                <div
                  key={key}
                  className="flex items-center rounded-md bg-gray p-[2px] px-1.5 text-sm"
                >
                  {item}
                  <span
                    className="cursor-pointer pl-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionRemove(item);
                    }}
                  >
                    X
                  </span>
                </div>
              ))
            : ""}
        </div>
        {open ? (
          <Image src="selectdown.svg" alt="arrow" width={15} height={15} />
        ) : (
          <Image src="selectup.svg" alt="arrow" width={15} height={15} />
        )}
        {open && (
          <ul className="absolute left-0 right-0 top-full z-30 min-w-60 min-w-[150px] max-w-80 max-w-96 rounded-lg border border-gray bg-white text-xs shadow-lg">
            {option.map((item, key) => (
              <li
                className={`block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] ${
                  selectValue.includes(item) ? "bg-[#E8F5FF]" : ""
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
  );
};

export default SelectValueAdd;
