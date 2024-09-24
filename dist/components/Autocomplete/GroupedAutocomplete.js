"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
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
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)(options);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: `relative inline-block ${width}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: inputValue, onChange: handleInputChange, onFocus: () => setIsOpen(true), onBlur: () => setIsOpen(false), placeholder: placeholder, className: `w-full p-2 pr-10 ${isDarkMode
                            ? "border-gray-600 bg-[#2A2E39] text-white"
                            : "border-gray bg-white text-black"} ${borderClasses[border]} ${radius === "full" ? "rounded-full" : radiusClasses[radius]} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-Basic` }), (0, jsx_runtime_1.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 transform", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: isOpen ? "/dropdown1.svg" : "/dropdown2.svg", alt: "dropdown", width: 20, height: 20 }) })] }), isOpen && ((0, jsx_runtime_1.jsx)("ul", { className: `absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"} ${borderClasses[border]} ${radius !== "full" ? radiusClasses[radius] : "rounded-lg"}`, children: filteredOptions.length > 0 ? (filteredOptions.map(({ groupName, items }, index1) => ((0, jsx_runtime_1.jsxs)("li", { className: "p-2", children: [(0, jsx_runtime_1.jsx)("div", { className: `m-3 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-900"}`, children: groupName }), (0, jsx_runtime_1.jsx)("ul", { className: "ml-4", children: items.map((item, index2) => ((0, jsx_runtime_1.jsx)("li", { onMouseDown: () => handleOptionClick(item), className: `cursor-pointer border-b p-2 pl-5 font-light ${isDarkMode
                                    ? "text-gray-400 border-gray-600 hover:bg-[#2A6490] focus:bg-[#2A6490]" // 다크 모드 호버 & 포커스 색상
                                    : "border-zinc-200 text-zinc-800 hover:bg-[#E8F5FF] focus:bg-[#CCE5FF]" // 라이트 모드 호버 & 포커스 색상
                                }`, tabIndex: 0, children: item }, index2))) })] }, index1)))) : ((0, jsx_runtime_1.jsx)("li", { className: "p-2 text-zinc-800", children: noOptionsMessage })) }))] }));
};
exports.default = GroupedAutocomplete;
