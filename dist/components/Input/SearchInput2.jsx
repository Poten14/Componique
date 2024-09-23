"use strict";
"use client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("../Icon/Icon"));
const react_1 = __importStar(require("react"));
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
    return (<div className={`flex items-center rounded-full pl-2 shadow-md transition-all duration-300 ${isExpanded ? expandedSizeClasses[size] : sizeClasses[size]} ${isDarkMode ? "border border-Navy bg-transparent" : "bg-white"}`}>
      <input type="text" className={`flex-grow pl-3 focus:outline-none ${isDarkMode ? "bg-transparent text-white" : "text-gray-700"}`} placeholder={placeholder} value={value} onChange={onChange} onFocus={toggleExpand} // 인풋 필드에 포커스가 있을 때 확장
     onBlur={toggleExpand} // 포커스가 벗어날 때 다시 축소
     {...props} // 추가된 속성 전달
    />
      <button className="h-full rounded-r-full pr-5 focus:outline-none">
        <Icon_1.default name="icon-search" size={iconSizeClasses[size]} color={isDarkMode ? "white" : "black"} // 다크 모드에서는 아이콘 색상을 흰색으로
    />
      </button>
    </div>);
};
exports.default = SearchInput2;
