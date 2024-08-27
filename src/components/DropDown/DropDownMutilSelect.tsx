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
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [displayState, setdisplayState] = useState<string[]>([]);

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleOptionClick = (option: string) => {
    let updateSelectOption: string[];

    if (selectedOption.includes(option)) {
      updateSelectOption = selectedOption.filter((item) => item !== option);
    } else {
      updateSelectOption = [...selectedOption, option];
    }

    setSelectedOption(updateSelectOption);
    setdisplayState(updateSelectOption);

    if (onSelect) onSelect(updateSelectOption);
  };

  const displayDefaultOption = () => {
    if (selectedOption.length > 0) {
      return selectedOption.join(", ");
    } else {
      return defaultOption;
    }
  };

  return (
    <div className="mx-auto flex justify-between space-x-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="relative inline-block w-48">
            <div
              onClick={() => toggleDropdown(idx)}
              className="border-gray-300 flex h-10 cursor-pointer items-center justify-between border-2 bg-white p-2 font-medium"
            >
              <span
                className={`font-bold ${
                  selectedOption.length > 0 ? "text-black" : "text-slate-600"
                }`}
              >
                {displayDefaultOption()}
              </span>
              <Image
                src={isOpen === idx ? "dropdown1.svg" : "/dropdown2.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </div>
            {isOpen === idx && (
              <ul className="border">
                {option.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(item)}
                    className={`cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] ${
                      selectedOption.includes(item) ? "bg-blue-100" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default DropDownMutilSelect;
