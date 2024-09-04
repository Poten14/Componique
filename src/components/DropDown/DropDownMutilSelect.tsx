import { useState } from "react";
import Image from "next/image";

interface DropDownMutilSelectProups {
  option: string[];
  defaultOption?: string;
  onSelect?: (value: string[]) => void;
}

const DropDownMutilSelect = ({
  option,
  defaultOption = "Select Option",
  onSelect,
}: DropDownMutilSelectProups) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[][]>([
    [],
    [],
    [],
    [],
  ]);

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleOptionClick = (option: string, dropdownIndex: number) => {
    let updatedSelectOption: string[];

    if (selectedOptions[dropdownIndex].includes(option)) {
      updatedSelectOption = selectedOptions[dropdownIndex].filter(
        (item) => item !== option,
      );
    } else {
      updatedSelectOption = [...selectedOptions[dropdownIndex], option];
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[dropdownIndex] = updatedSelectOption;
    setSelectedOptions(updatedSelectedOptions);

    if (onSelect) onSelect(updatedSelectOption);
  };

  const displayDefaultOption = (dropdownIndex: number) => {
    if (selectedOptions[dropdownIndex].length > 0) {
      return selectedOptions[dropdownIndex].join(", ");
    } else {
      return defaultOption;
    }
  };

  return (
    <div
      className="mx-auto flex justify-between space-x-4"
      style={{ maxWidth: "100%" }}
    >
      {/* 첫번째 드롭다운 - 기본 각진 스타일 */}
      <div className="relative inline-block w-48">
        <div
          onClick={() => toggleDropdown(0)}
          className="border-gray-300 flex h-10 cursor-pointer items-center justify-between border-2 bg-white p-2 font-medium dark:bg-[#2A2E39]"
        >
          <span
            className={`font-bold ${
              selectedOptions[0].length > 0
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {displayDefaultOption(0)}
          </span>
          <Image
            src={isOpen === 0 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 0 && (
          <ul className="border-gray-300 border bg-white">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item, 0)}
                className={`border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-white dark:hover:bg-[#2A6490] ${
                  selectedOptions[0].includes(item) ? "bg-blue-100" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 두번째 드롭다운 - 둥근 모서리 스타일 */}
      <div className="relative inline-block w-48">
        <div
          onClick={() => toggleDropdown(1)}
          className="border-gray-300 flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 bg-white p-2 font-medium dark:bg-[#2A2E39]"
        >
          <span
            className={`font-bold ${
              selectedOptions[1].length > 0
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {displayDefaultOption(1)}
          </span>
          <Image
            src={isOpen === 1 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 1 && (
          <ul className="border-gray-300 rounded-lg border bg-white">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item, 1)}
                className={`border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-white dark:hover:bg-[#2A6490] ${
                  selectedOptions[1].includes(item) ? "bg-blue-100" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 세번째 드롭다운 - border 없는 둥근 스타일 */}
      <div className="relative inline-block w-48">
        <div
          onClick={() => toggleDropdown(2)}
          className="flex h-10 cursor-pointer items-center justify-between rounded-full border-2 border-zinc-100 bg-white p-2 font-medium shadow-md dark:bg-[#2A2E39]"
        >
          <span
            className={`font-bold ${
              selectedOptions[2].length > 0
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {displayDefaultOption(2)}
          </span>
          <Image
            src={isOpen === 2 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 2 && (
          <ul className="mt-2 rounded-xl border-2 border-zinc-100 bg-white shadow-md">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item, 2)}
                className={`cursor-pointer rounded-xl border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-white dark:hover:bg-[#2A6490] ${
                  selectedOptions[2].includes(item) ? "bg-blue-100" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 네번째 드롭다운 - border 없는 덜 둥근 스타일 */}
      <div className="relative inline-block w-48">
        <div
          onClick={() => toggleDropdown(3)}
          className="flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 border-zinc-100 bg-white p-2 font-medium dark:bg-[#2A2E39]"
        >
          <span
            className={`font-bold ${
              selectedOptions[3].length > 0
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {displayDefaultOption(3)}
          </span>
          <Image
            src={isOpen === 3 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 3 && (
          <ul className="rounded-lg border border-zinc-100 bg-white">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item, 3)}
                className={`cursor-pointer border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-white dark:hover:bg-[#2A6490] ${
                  selectedOptions[3].includes(item) ? "bg-blue-100" : ""
                }`}
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

export default DropDownMutilSelect;
