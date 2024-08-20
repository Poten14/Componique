import { useState } from "react";
import Image from "next/image";

interface DropDownGroupedProps {
  groupName: string;
  items: string[];
}

interface AutocompleteProps {
  options: DropDownGroupedProps[];
  placeholder?: string;
  onSelect: (selectedOption: string) => void;
  radius?: "none" | "small" | "medium" | "large" | "full";
  border?: "none" | "thin" | "medium" | "thick";
  width?: string;
  noOptionsMessage?: string; // 필터링된 결과가 없을 때 표시할 메시지
}

const radiusClasses = {
  none: "rounded-none",
  small: "rounded-md",
  medium: "rounded-lg",
  large: "rounded-xl",
  full: "rounded-full",
};

const borderClasses = {
  none: "border-none",
  thin: "border border-zinc-100",
  medium: "border-2 border-zinc-200",
  thick: "border-4 border-zinc-300",
};

const GroupedAutocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search...",
  onSelect,
  radius = "medium",
  border = "medium",
  width = "w-64",
  noOptionsMessage = "No results found", // 기본 메시지 설정
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownGroupedProps[]>(options);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const newFilteredOptions = options
      .map((group) => ({
        groupName: group.groupName,
        items: group.items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase()),
        ),
      }))
      .filter((group) => group.items.length > 0);

    setFilteredOptions(newFilteredOptions);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block ${width}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={toggleDropdown}
          placeholder={placeholder}
          className={`w-full p-2 pr-10 ${borderClasses[border]} ${radius === "full" ? "rounded-full" : radiusClasses[radius]} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          <Image
            src={isOpen ? "/dropdown1.svg" : "/dropdown2.svg"}
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isOpen && (
        <ul
          className={`absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto bg-white shadow-lg ${borderClasses[border]} ${radius !== "full" ? radiusClasses[radius] : "rounded-lg"}`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map(({ groupName, items }, index1) => (
              <li key={index1} className="p-2">
                <div className="font-medium">{groupName}</div>
                <ul className="ml-4">
                  {items.map((item, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick(item)}
                      className="cursor-pointer border-b p-2 font-light text-zinc-800 hover:bg-[#E8F5FF]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <li className="p-2 text-zinc-800">{noOptionsMessage}</li> // 필터링된 결과가 없을 때 메시지
          )}
        </ul>
      )}
    </div>
  );
};

export default GroupedAutocomplete;
