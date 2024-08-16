import { useState } from "react";
import Image from "next/image";
interface DropDownGroupedProups {
  option: string[];
  defaultOption: string;
  onSelect?: (value: string[]) => void;
}

const DropDownGrouped = ({
  option,
  defaultOption,
  onSelect,
}: DropDownGroupedProups) => {
  const [isOpen, setIsOpen] = useState<number | null>();
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
    if (selectedOption.length === 0 && displayState.length > 0) {
      return displayState.join(", ");
    } else if (selectedOption.length === 0) {
      return defaultOption;
    } else {
      return selectedOption.join(",");
    }
  };

  const handleRemoveOption = (option: string) => {
    const updateOption = selectedOption.filter((item) => item !== option);
    setSelectedOption(updateOption);
    setdisplayState(updateOption);

    if (onSelect) onSelect(updateOption);
  };

  return (
    <div className="mx-20 flex justify-between">
      {/* 첫번째 드롭다운 - 기본 각진 스타일 */}
      <div className="relative inline-block w-80">
        <div
          onClick={() => toggleDropdown(0)}
          className="flex cursor-pointer justify-between border-2 p-2 font-bold"
        >
          {displayDefaultOption()}
          <Image
            src={isOpen === 0 ? "dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 0 && (
          <ul className="border">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item)}
                className={`hover:bg-Basic cursor-pointer border-b p-2 text-zinc-800 ${selectedOption.includes(item) ? "bg-Basic" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 두번째 드롭다운 - 둥근 모서리 스타일 */}
      <div className="relative inline-block w-80">
        <div
          onClick={() => toggleDropdown(1)}
          className="flex cursor-pointer justify-between rounded-lg border-2 p-2 font-bold"
        >
          {displayDefaultOption()}
          <Image
            src={isOpen === 1 ? "dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 1 && (
          <ul className="rounded-lg border">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item)}
                className="hover:bg-Basic cursor-pointer border-b p-2 text-zinc-800"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 세번째 드롭다운 - borer없는 둥근 스타일 */}
      <div className="relative inline-block w-80">
        <div
          onClick={() => toggleDropdown(2)}
          className="flex cursor-pointer justify-between rounded-full border-2 border-zinc-100 p-2 font-bold shadow-md"
        >
          {displayDefaultOption()}
          <Image
            src={isOpen === 2 ? "dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 2 && (
          <ul className="mt-2 rounded-xl border-2 border-zinc-100 shadow-md">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item)}
                className="hover:bg-Basic cursor-pointer rounded-xl border-b border-zinc-100 p-2 text-zinc-800 underline"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 네번째 드롭다운 - border없는 덜 둥근 스타일 */}
      <div className="relative inline-block w-80">
        <div
          onClick={() => toggleDropdown(3)}
          className="flex cursor-pointer justify-between rounded-lg border-2 border-zinc-100 bg-white p-2 font-bold"
        >
          {displayDefaultOption()}
          <Image
            src={isOpen === 3 ? "dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        {isOpen === 3 && (
          <ul className="rounded-lg border border-zinc-100">
            {option.map((item, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(item)}
                className="hover:bg-Basic cursor-pointer border-b border-zinc-100 p-2 text-zinc-800"
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

export default DropDownGrouped;
