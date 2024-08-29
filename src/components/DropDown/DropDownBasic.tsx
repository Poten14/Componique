import { useState } from "react";
import Image from "next/image";

interface DropDownBasicProps {
  option: string[];
  placeholder?: string;
  onSelect?: (value: string, index: number) => void;
}

const DropDownBasic = ({
  option,
  placeholder = "Select Option",
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

  const handleOptionClick = (option: string, index: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = option;
    setSelectedOptions(updatedOptions);
    setIsOpen(null);
    if (onSelect) {
      onSelect(option, index);
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
              selectedOptions[0] ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOptions[0] || placeholder}
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
                className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
          className="border-gray-300 flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 bg-white p-2 font-medium"
        >
          <span
            className={`font-bold ${
              selectedOptions[1] ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOptions[1] || placeholder}
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
                className="border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
          className="flex h-10 cursor-pointer items-center justify-between rounded-full border-2 border-zinc-100 bg-white p-2 font-medium shadow-md"
        >
          <span
            className={`font-bold ${
              selectedOptions[2] ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOptions[2] || placeholder}
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
                className="cursor-pointer rounded-xl border-b border-zinc-100 p-2 text-zinc-800 underline hover:bg-[#E8F5FF]"
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
          className="flex h-10 cursor-pointer items-center justify-between rounded-lg border-2 border-zinc-100 bg-white p-2 font-medium"
        >
          <span
            className={`font-bold ${
              selectedOptions[3] ? "text-black" : "text-slate-600"
            }`}
          >
            {selectedOptions[3] || placeholder}
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
                className="cursor-pointer border-b border-zinc-100 p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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

export default DropDownBasic;
