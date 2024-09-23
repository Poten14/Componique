import React, { useState, useEffect } from "react";
import Image from "next/image";
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
const GroupedAutocomplete = ({ options, placeholder = "Search...", onSelect, radius = "medium", border = "medium", width = "w-64", noOptionsMessage = "No results found", }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, []);
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const newFilteredOptions = options
            .map((group) => ({
            groupName: group.groupName,
            items: group.items.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
        }))
            .filter((group) => group.items.length > 0);
        setFilteredOptions(newFilteredOptions);
        setIsOpen(true);
    };
    const handleOptionClick = (option) => {
        setInputValue(option);
        onSelect(option);
        setIsOpen(false);
    };
    return (<div className={`relative inline-block ${width}`}>
      <div className="relative flex items-center">
        <input type="text" value={inputValue} onChange={handleInputChange} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)} placeholder={placeholder} className={`w-full p-2 pr-10 ${isDarkMode
            ? "border-gray-600 bg-[#2A2E39] text-white"
            : "border-gray bg-white text-black"} ${borderClasses[border]} ${radius === "full" ? "rounded-full" : radiusClasses[radius]} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-Basic`}/>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          <Image src={isOpen ? "/dropdown1.svg" : "/dropdown2.svg"} alt="dropdown" width={20} height={20}/>
        </div>
      </div>
      {isOpen && (<ul className={`absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"} ${borderClasses[border]} ${radius !== "full" ? radiusClasses[radius] : "rounded-lg"}`}>
          {filteredOptions.length > 0 ? (filteredOptions.map(({ groupName, items }, index1) => (<li key={index1} className="p-2">
                <div className={`m-3 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>
                  {groupName}
                </div>
                <ul className="ml-4">
                  {items.map((item, index2) => (<li key={index2} onMouseDown={() => handleOptionClick(item)} className={`cursor-pointer border-b p-2 pl-5 font-light ${isDarkMode
                        ? "text-gray-400 border-gray-600 hover:bg-[#2A6490] focus:bg-[#2A6490]" // 다크 모드 호버 & 포커스 색상
                        : "border-zinc-200 text-zinc-800 hover:bg-[#E8F5FF] focus:bg-[#CCE5FF]" // 라이트 모드 호버 & 포커스 색상
                    }`} tabIndex={0}>
                      {item}
                    </li>))}
                </ul>
              </li>))) : (<li className="p-2 text-zinc-800">{noOptionsMessage}</li>)}
        </ul>)}
    </div>);
};
export default GroupedAutocomplete;
