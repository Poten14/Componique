"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const react_1 = require("react");
const sizeClasses = {
    small: "w-[200px] h-[30px] text-sm",
    medium: "w-[300px] h-[40px] text-base",
    large: "w-[400px] h-[50px] text-lg",
};
const expandedSizeClasses = {
    small: "w-[400px] h-[30px]",
    medium: "w-[500px] h-[40px]",
    large: "w-[600px] h-[50px]",
};
const iconSizeClasses = {
    small: 16,
    medium: 20,
    large: 24,
};
const SearchInput2 = ({ size = "medium", placeholder, value, onChange, ...props // 확장된 속성들을 받기 위해 사용
 }) => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
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
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex items-center rounded-full pl-2 shadow-md transition-all duration-300 ${isExpanded ? expandedSizeClasses[size] : sizeClasses[size]} ${isDarkMode ? "border border-Navy bg-transparent" : "bg-white"}`, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: `flex-grow pl-3 focus:outline-none ${isDarkMode ? "bg-transparent text-white" : "text-gray-700"}`, placeholder: placeholder, value: value, onChange: onChange, onFocus: toggleExpand, onBlur: toggleExpand, ...props }), (0, jsx_runtime_1.jsx)("button", { className: "h-full rounded-r-full pr-5 focus:outline-none", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search", size: iconSizeClasses[size], color: isDarkMode ? "white" : "black" }) })] }));
};
exports.default = SearchInput2;
