"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const sizeClasses = {
    small: "w-60 h-10 text-sm",
    medium: "w-80 h-10 text-base",
    large: "w-96 h-12 text-lg",
};
const LabelAutocomplete = ({ size = "medium", options, value, onChange, onSelect, placeholder = "Search...", }) => {
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
    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = typeof options[0] === "string"
            ? selectedValue
            : options.find((option) => option.value === selectedValue);
        if (selectedOption) {
            onSelect(selectedOption);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center rounded-full px-4 shadow-md ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"} focus-within:border-Primary focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500`, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", list: "autocomplete-options", value: value, onChange: (e) => onChange(e.target.value), onSelect: handleSelect, placeholder: placeholder, className: `flex-grow focus:outline-none ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}` }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search", size: 24, color: isDarkMode ? "white" : "black" })] }), (0, jsx_runtime_1.jsx)("datalist", { id: "autocomplete-options", children: options.map((option, index) => typeof option === "string" ? ((0, jsx_runtime_1.jsx)("option", { value: option }, index)) : ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, index))) })] }));
};
exports.default = LabelAutocomplete;
