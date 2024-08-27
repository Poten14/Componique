"use client";

import { useEffect, useRef, useState } from "react";
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
  const dropMenuRef = useRef<HTMLDivElement>(null);

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

  const handleDropDown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (item: string) => {
    setSelectValue(item);
    setOpen(false);
  };

  const arrowImage = () => {
    switch (color) {
      case "blue":
        return open ? "selectDown.svg" : "selectUp.svg";
      case "red":
        return open ? "selectDownRed.svg" : "selectUpRed.svg";
      case "green":
        return open ? "selectDownGreen.svg" : "selectUpGreen.svg";
      case "gray":
        return open ? "selectDownGray.svg" : "selectUpGray.svg";
      default:
        return open ? "selectDown.svg" : "selectUp.svg";
    }
  };

  return (
    <>
      <div className="relative w-60" ref={dropMenuRef}>
        <div
          className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border ${colorClasses[color]} p-2 shadow-lg`}
          onClick={handleDropDown}
        >
          <span className="text-sm font-semibold">
            {selectValue || defaultValue}
          </span>
          <Image src={arrowImage()} alt="arrow" width={15} height={15} />
        </div>
        {open && (
          <ul
            className={`absolute left-0 right-0 top-full m-0 rounded-lg border bg-white p-0 ${colorClasses[color]} z-30 text-xs shadow-lg`}
          >
            {option.map((item, key) => (
              <li
                className={`m-0 block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] ${
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
    </>
  );
};

export default Select;
