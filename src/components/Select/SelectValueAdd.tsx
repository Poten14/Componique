"use client";

import Image from "next/image";
import { useState } from "react";

interface SelectValueAdd {
  renderValue?: string[];
  option: string[];
}

const SelectValueAdd = ({ option }: SelectValueAdd) => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [renderValue, setRenderValue] = useState("");

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
          className={
            "flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border border-gray p-2 shadow-lg"
          }
          onClick={handleDropDown}
        >
          <span className="rounded-lg bg-gray p-[2px] text-sm">
            {selectValue}
          </span>
          {open ? (
            <Image src="selectdown.svg" alt="arrow" width={15} height={15} />
          ) : (
            <Image src="selectup.svg" alt="arrow" width={15} height={15} />
          )}
          {open && (
            <ul className="absolute left-0 right-0 top-full rounded-lg border border-gray bg-white text-xs shadow-lg">
              {option.map((item, key) => (
                <li
                  className={
                    "block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF]"
                  }
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
export default SelectValueAdd;
