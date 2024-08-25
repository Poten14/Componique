"use client";

import Image from "next/image";
import { useState } from "react";

interface SelectValueAdd {
  option: string[];
}

const SelectValueAdd = ({ option }: SelectValueAdd) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (item: string) => {
    if (selectValue.includes(item)) {
      setSelectValue(selectValue.filter((value) => value !== item));
    } else {
      setSelectValue([...selectValue, item]);
    }
  };

  const handleOptionRemove = (item: string) => {
    setSelectValue(selectValue.filter((value) => value !== item));
  };

  return (
    <>
      <div className="relative w-1/4">
        <div
          className={
            "inline-flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border border-gray p-2 shadow-lg"
          }
          onClick={handleDropDown}
        >
          <div className="flex gap-1">
            {selectValue.length > 0
              ? selectValue.map((item, key) => (
                  <div
                    key={key}
                    className="rounded-md bg-gray p-[2px] px-1.5 text-sm"
                  >
                    {item}
                    <span
                      className="pl-2"
                      onClick={() => handleOptionRemove(item)}
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
            <ul className="absolute left-0 right-0 top-full z-30 rounded-lg border border-gray bg-white text-xs shadow-lg">
              {option.map((item, key) => (
                <li
                  className={`block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] ${selectValue.includes(item) ? "bg-[#E8F5FF]" : ""}`}
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
