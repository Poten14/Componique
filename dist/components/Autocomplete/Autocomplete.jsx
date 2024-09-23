"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const variantClasses = {
    outlined: "border border-gray border-2 focus:border-none",
    filled: "bg-gray text-white focus:bg-transparent",
    borderless: "border-none bg-transparent",
};
const radiusClasses = {
    small: "rounded-md",
    medium: "rounded-lg",
    large: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
};
const Autocomplete = ({ options, placeholder = "Search...", variant = "outlined", radius = "medium", width = "300px", height = "auto", noOptionsMessage = "No results found", onSelect, }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)([]);
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode(); // 초기 다크 모드 상태 체크
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
        setFilteredOptions(options.filter((option) => option.toLowerCase().includes(value.toLowerCase())));
        setIsDropdownOpen(true);
    };
    const handleOptionClick = (option) => {
        setInputValue(option);
        onSelect(option);
        setIsDropdownOpen(false);
    };
    const handleBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 100);
    };
    const handleFocus = () => {
        setIsDropdownOpen(true);
    };
    return (<div className="relative" style={{ width }}>
      <input type="text" value={inputValue} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder} className={`w-full ${height} p-3 ${variantClasses[variant]} ${radiusClasses[radius]} focus:outline-none focus:ring-1 ${variant === "filled" && isDarkMode
            ? "bg-[#2A6490] text-white"
            : variant === "filled"
                ? "bg-gray-900 text-white"
                : isDarkMode
                    ? "bg-[#2A2E39] text-white"
                    : "border-gray bg-white text-black"}`} style={{ height }}/>
      {isDropdownOpen && (<ul className={`absolute left-0 right-0 z-10 mt-0 max-h-40 overflow-y-auto rounded-md shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`}>
          {filteredOptions.length > 0 ? (filteredOptions.map((option, index) => (<li key={index} tabIndex={0} className={`hover:bg-[#2A6490]focus:bg-blue-600 m-3 cursor-pointer p-2 ${isDarkMode
                    ? "border-[#2A6490] hover:bg-[#2A6490] focus:bg-[#2A6490]"
                    : ""}`} onClick={() => handleOptionClick(option)}>
                {option}
              </li>))) : (<li className={`m-3 p-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {noOptionsMessage}
            </li>)}
        </ul>)}
    </div>);
};
exports.default = Autocomplete;
