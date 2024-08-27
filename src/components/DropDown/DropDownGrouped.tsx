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
    <div className="mx-auto flex justify-between space-x-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="relative inline-block w-64">
            <div
              onClick={() => toggleDropdown(idx)}
              className="flex h-10 cursor-pointer justify-between border-2 p-2 font-medium"
            >
              <span
                className={`font-bold ${
                  selectedOption ? "text-black" : "text-slate-600"
                }`}
              >
                {selectedOption || defaultOption}
              </span>
              <Image
                src={isOpen === idx ? "/dropdown1.svg" : "/dropdown2.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </div>
            {isOpen === idx && (
              <ul className="border">
                {options.map(({ groupName, items }, index1) => (
                  <li key={index1} className="p-2">
                    <div className="font-bold">{groupName}</div>
                    <ul className="ml-4">
                      {items.map((item, index2) => (
                        <li
                          key={index2}
                          onClick={() => handleOptionClick(item)}
                          className="cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF]"
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
        ))}
    </div>
  );
};

export default DropDownGrouped;
