"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const react_1 = require("react");
const SearchInput = ({ placeholder = "Search...", activeColor = "bg-Basic", width = "w-80", onSearch, ...props }) => {
    const [isActive, setIsActive] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)("");
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
    const handleSearch = () => {
        if (onSearch) {
            onSearch(value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex items-center rounded-full p-2 shadow-md transition-all duration-300 ${isActive ? `${width}` : "w-12"} ${isDarkMode ? "border border-Navy bg-transparent" : "bg-white"}`, children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setIsActive(!isActive), className: `flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${isActive ? activeColor : "bg-gray-300"}`, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search", size: 24, color: isDarkMode ? "white" : isActive ? "white" : "black" }) }), isActive && ((0, jsx_runtime_1.jsx)("input", { type: "text", className: `ml-2 flex-grow border-none outline-none ${isDarkMode ? "bg-transparent text-white" : "text-black"}`, placeholder: placeholder, value: value, onChange: (e) => setValue(e.target.value), ...props }))] }));
};
exports.default = SearchInput;
