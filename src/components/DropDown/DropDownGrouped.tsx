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
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
          className="border-gray-300 flex h-10 cursor-pointer items-center justify-between border-2 bg-white p-2 font-medium"
        >
          <span
            className={`font-bold ${
              selectedOption ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOption || defaultOption}
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
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black">{groupName}</div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item)}
                      className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
          className="border-gray-300 flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 bg-white p-2 font-medium"
        >
          <span
            className={`font-bold ${
              selectedOption ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOption || defaultOption}
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
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black">{groupName}</div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item)}
                      className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
          className="flex h-10 cursor-pointer items-center justify-between rounded-full border-2 border-zinc-100 bg-white p-2 font-medium shadow-md"
        >
          <span
            className={`font-bold ${
              selectedOption ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOption || defaultOption}
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
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black">{groupName}</div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item)}
                      className="cursor-pointer rounded-xl border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
          className="flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 border-zinc-100 bg-white p-2 font-medium"
        >
          <span
            className={`font-bold ${
              selectedOption ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOption || defaultOption}
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
            {options.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-bold text-black">{groupName}</div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item)}
                      className="cursor-pointer border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
