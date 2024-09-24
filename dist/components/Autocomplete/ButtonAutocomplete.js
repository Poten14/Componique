"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", style: { width }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: inputValue, onChange: handleInputChange, onFocus: () => setIsDropdownOpen(true), onBlur: () => setIsDropdownOpen(false), placeholder: placeholder, className: `w-full ${height} border ${isDarkMode
                    ? "border-gray-600 bg-[#2A2E39] text-white"
                    : "border-gray bg-white text-black"} p-3 ${radius === "full" ? "rounded-full" : radiusClasses[radius]} $ focus:border-transparent focus:outline-none focus:ring-2`, style: { height } }), (0, jsx_runtime_1.jsx)("button", { className: `absolute bottom-1 right-1 top-1 px-4 ${buttonColorClasses[color]} ${radius === "full" ? "rounded-full" : "rounded-md"} transform transition-transform focus:outline-none active:scale-90`, onMouseDown: (e) => e.preventDefault(), onClick: () => onSelect(inputValue), children: "Search" }), isDropdownOpen && ((0, jsx_runtime_1.jsx)("ul", { className: `absolute left-0 right-0 z-10 mt-3 max-h-40 overflow-y-auto rounded-md shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`, onMouseDown: (e) => e.preventDefault(), children: filteredOptions.length > 0 ? (filteredOptions.map((option, index) => ((0, jsx_runtime_1.jsx)("li", { className: `m-3 cursor-pointer p-2 ${isDarkMode
                        ? `text-gray-400 border-gray-600 ${colorClasses[color]}` // 다크 모드에서 버튼 색상에 따라 변경
                        : `border-zinc-200 text-zinc-800 ${colorClasses[color]}` // 라이트 모드에서 버튼 색상에 따라 변경
                    }`, tabIndex: 0, onClick: () => handleOptionClick(option), children: option }, index)))) : ((0, jsx_runtime_1.jsx)("li", { className: `m-3 p-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`, children: noOptionsMessage })) }))] }));
};
exports.default = ButtonAutocomplete;
