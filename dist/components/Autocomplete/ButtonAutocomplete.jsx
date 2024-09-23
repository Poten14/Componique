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
const radiusClasses = {
    small: "rounded-md",
    medium: "rounded-lg",
    large: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
};
const colorClasses = {
    Basic: "focus:ring-Basic focus:border-Basic hover:bg-Basic focus:bg-Basic",
    Primary: "focus:ring-Primary focus:border-Primary hover:bg-Primary focus:bg-Primary",
    Secondary: "focus:ring-Secondary focus:border-Secondary hover:bg-Secondary focus:bg-Secondary",
    Success: "focus:ring-Success focus:border-Success hover:bg-Success focus:bg-Success",
    Warning: "focus:ring-Warning focus:border-Warning hover:bg-Warning focus:bg-Warning",
    Danger: "focus:ring-Danger focus:border-Danger hover:bg-Danger focus:bg-Danger",
};
const buttonColorClasses = {
    Basic: "bg-Basic text-white",
    Primary: "bg-Primary text-white",
    Secondary: "bg-Secondary text-white",
    Success: "bg-Success text-white",
    Warning: "bg-Warning text-white",
    Danger: "bg-Danger text-white",
};
const ButtonAutocomplete = ({ options, placeholder = "Search...", radius = "medium", width = "300px", height = "auto", noOptionsMessage = "No results found", color = "Basic", onSelect, }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)([]);
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
        setFilteredOptions(options.filter((option) => option.toLowerCase().includes(value.toLowerCase())));
        setIsDropdownOpen(true);
    };
    const handleOptionClick = (option) => {
        setInputValue(option);
        onSelect(option);
        setIsDropdownOpen(false);
    };
    return (<div className="relative" style={{ width }}>
      <input type="text" value={inputValue} onChange={handleInputChange} onFocus={() => setIsDropdownOpen(true)} onBlur={() => setIsDropdownOpen(false)} placeholder={placeholder} className={`w-full ${height} border ${isDarkMode
            ? "border-gray-600 bg-[#2A2E39] text-white"
            : "border-gray bg-white text-black"} p-3 ${radius === "full" ? "rounded-full" : radiusClasses[radius]} $ focus:border-transparent focus:outline-none focus:ring-2`} style={{ height }}/>
      <button className={`absolute bottom-1 right-1 top-1 px-4 ${buttonColorClasses[color]} ${radius === "full" ? "rounded-full" : "rounded-md"} transform transition-transform focus:outline-none active:scale-90`} onMouseDown={(e) => e.preventDefault()} onClick={() => onSelect(inputValue)}>
        Search
      </button>
      {isDropdownOpen && (<ul className={`absolute left-0 right-0 z-10 mt-3 max-h-40 overflow-y-auto rounded-md shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`} onMouseDown={(e) => e.preventDefault()}>
          {filteredOptions.length > 0 ? (filteredOptions.map((option, index) => (<li key={index} className={`m-3 cursor-pointer p-2 ${isDarkMode
                    ? `text-gray-400 border-gray-600 ${colorClasses[color]}` // 다크 모드에서 버튼 색상에 따라 변경
                    : `border-zinc-200 text-zinc-800 ${colorClasses[color]}` // 라이트 모드에서 버튼 색상에 따라 변경
                }`} tabIndex={0} onClick={() => handleOptionClick(option)}>
                {option}
              </li>))) : (<li className={`m-3 p-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {noOptionsMessage}
            </li>)}
        </ul>)}
    </div>);
};
exports.default = ButtonAutocomplete;
