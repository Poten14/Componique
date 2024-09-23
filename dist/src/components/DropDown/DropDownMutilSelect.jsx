import { useState } from "react";
import Image from "next/image";
const DropDownBasicMultiSelect = ({ option, placeholder = "Select Options", onSelect, type = "basic", // 기본 스타일은 "basic"
 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (selected) => {
        const isSelected = selectedOptions.includes(selected);
        const updatedOptions = isSelected
            ? selectedOptions.filter((item) => item !== selected)
            : [...selectedOptions, selected];
        setSelectedOptions(updatedOptions);
        if (onSelect) {
            onSelect(updatedOptions);
        }
    };
    // 선택된 옵션 표시
    const displaySelectedOptions = () => {
        return selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : placeholder;
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
    return (<div className={`relative inline-block w-48 ${getClassNames()}`}>
      <div onClick={toggleDropdown} className="flex h-10 cursor-pointer items-center justify-between p-2 font-medium">
        <span className={`font-bold ${selectedOptions.length
            ? "text-black dark:text-white"
            : "text-slate-600"}`}>
          {displaySelectedOptions()}
        </span>

        <Image src={isOpen ? "/dropdown1.svg" : "/dropdown2.svg"} alt="dropdown" width={20} height={20}/>
      </div>
      {isOpen && (<ul className="absolute z-10 w-full bg-white dark:bg-[#2A2E39]">
          {option.map((item, index) => (<li key={index} onClick={() => handleOptionClick(item)} className={`cursor-pointer p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490] ${selectedOptions.includes(item) ? "bg-blue-100" : ""}`}>
              {item}
            </li>))}
        </ul>)}
    </div>);
};
export default DropDownBasicMultiSelect;
