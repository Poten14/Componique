import { useState } from "react";
import Image from "next/image";

interface DropDownGroupedProps {
  groupName: string; // 그룹의 이름
  items: string[]; // 그룹의 아이템들
}

interface DropDownBasicProps {
  options: DropDownGroupedProps[]; // 그룹
  defaultOption?: string;
  onSelect?: (value: string) => void;
}

const DropDownGrouped = ({
  options,
  defaultOption = "Select Option",
  onSelect,
}: DropDownBasicProps) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleOptionClick = (option: string, dropdownIndex: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[dropdownIndex] = option;
    setSelectedOptions(updatedOptions);
    setIsOpen(null);
    if (onSelect) {
      onSelect(option);
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
              selectedOptions[0]
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {selectedOptions[0] || defaultOption}
          </span>
          <Image
            src={isOpen === 0 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 0 && (
          <ul className="border-gray-300 absolute z-10 w-full border bg-white dark:bg-[#2A2E39]">
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black dark:bg-[#2A2E39] dark:text-white">
                  {groupName}
                </div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item, 0)}
                      className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
              selectedOptions[1]
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {selectedOptions[1] || defaultOption}
          </span>
          <Image
            src={isOpen === 1 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 1 && (
          <ul className="border-gray-300 absolute z-10 w-full rounded-lg border bg-white dark:bg-[#2A2E39]">
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black dark:bg-[#2A2E39] dark:text-white">
                  {groupName}
                </div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item, 1)}
                      className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
              selectedOptions[2]
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {selectedOptions[2] || defaultOption}
          </span>
          <Image
            src={isOpen === 2 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 2 && (
          <ul className="absolute z-10 mt-2 w-full rounded-xl border-2 border-zinc-100 bg-white shadow-md dark:bg-[#2A2E39]">
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black dark:bg-[#2A2E39] dark:text-white">
                  {groupName}
                </div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item, 2)}
                      className="cursor-pointer rounded-xl border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
              selectedOptions[3]
                ? "text-black dark:text-white"
                : "text-slate-600"
            }`}
          >
            {selectedOptions[3] || defaultOption}
          </span>
          <Image
            src={isOpen === 3 ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 3 && (
          <ul className="absolute z-10 w-full rounded-lg border border-zinc-100 bg-white dark:bg-[#2A2E39] dark:text-white">
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black dark:bg-[#2A2E39] dark:text-white">
                  {groupName}
                </div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item, 3)}
                      className="cursor-pointer border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownGrouped;
