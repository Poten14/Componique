"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SelectValueAddProps {
  option: string[];
  placeholder?: string;
  onChange?: (value: string[]) => void;
  className?: string;
}

const SelectValueAdd = ({
  option,
  onChange,
  placeholder = "Option 1",
  className,
}: SelectValueAddProps) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

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

    if (onChange) {
      onChange(updatedValue);
    }
  };

  const handleOptionRemove = (item: string) => {
    const updatedValue = selectValue.filter((value) => value !== item);
    setSelectValue(updatedValue);

    if (onChange) {
      onChange(updatedValue);
    }
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (
        open &&
        dropMenuRef.current &&
        !dropMenuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={dropMenuRef}>
      <div
        className={`flex h-9 min-w-60 max-w-[450px] cursor-pointer items-center justify-between rounded-lg border border-gray p-2 shadow-lg dark:border-[#2A6490] dark:bg-[#2a2e39] ${className}`}
        onClick={handleDropDown}
        style={{ width: open ? "auto" : "fit-content" }}
      >
        <div className="flex flex-wrap gap-1">
          {selectValue.length > 0 ? (
            selectValue.map((item, key) => (
              <div
                key={key}
                className="mr-1.5 flex items-center rounded-md bg-gray p-[2px] px-1.5 text-sm dark:bg-[#2A6490] dark:text-white"
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
          ) : (
            <span className="rounded-md bg-gray p-[2px] px-1.5 text-sm dark:bg-[#2A6490] dark:text-white">
              {placeholder}
            </span>
          )}
        </div>
        {open ? (
          <Image src="/selectdown.svg" alt="arrow" width={15} height={15} />
        ) : (
          <Image src="/selectup.svg" alt="arrow" width={15} height={15} />
        )}
        {open && (
          <ul className="absolute left-0 right-0 top-full z-30 min-w-60 max-w-[450px] rounded-lg border border-gray bg-white text-xs shadow-lg dark:border-[#2A6490] dark:bg-[#2a2e39]">
            {option.map((item, key) => (
              <li
                className={`block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] dark:hover:bg-[#2A6490] dark:hover:text-white ${
                  selectValue.includes(item)
                    ? "bg-[#E8F5FF] dark:bg-[#2a6490] dark:text-white"
                    : ""
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
