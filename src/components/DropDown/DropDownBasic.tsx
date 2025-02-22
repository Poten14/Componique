import { useState } from "react";
import Image from "next/image";

interface DropDownBasicProps {
  option: string[];
  placeholder?: string;
  onSelect?: (value: string, index: number) => void;
  type?: "basic" | "rounded" | "borderless-rounded" | "less-rounded"; // 추가된 prop
}

const DropDownBasic = ({
  option,
  placeholder = "Select Option",
  onSelect,
  type = "basic", // 기본 스타일은 "basic"
}: DropDownBasicProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option, 0);
    }
  };

  // 스타일에 따른 클래스 선택
  const getClassNames = () => {
    switch (type) {
      case "rounded":
        return "rounded-lg border-gray-300 border-2 bg-white dark:bg-[#2A2E39]";
      case "borderless-rounded":
        return "rounded-full border-2 border-zinc-100 bg-white shadow-md dark:bg-[#2A2E39]";
      case "less-rounded":
        return "rounded-lg border-2 border-zinc-100 bg-white dark:bg-[#2A2E39]";
      case "basic":
      default:
        return "border-gray-300 border-2 bg-white dark:bg-[#2A2E39]";
    }
  };

  return (
    <div className={`relative inline-block w-48 ${getClassNames()}`}>
      <div
        onClick={toggleDropdown}
        className="flex h-10 cursor-pointer items-center justify-between p-2 font-medium"
      >
        <span
          className={`font-bold ${
            selectedOption ? "text-black dark:text-white" : "text-slate-600"
          }`}
        >
          {selectedOption || placeholder}
        </span>

        <Image
          src={isOpen ? "/dropdown1.svg" : "/dropdown2.svg"}
          alt="dropdown"
          width={20}
          height={20}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white dark:bg-[#2A2E39]">
          {option.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item)}
              className="cursor-pointer p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownBasic;
