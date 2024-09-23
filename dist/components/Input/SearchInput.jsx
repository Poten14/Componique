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
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const react_1 = __importStar(require("react"));
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
    return (<div className={`flex items-center rounded-full p-2 shadow-md transition-all duration-300 ${isActive ? `${width}` : "w-12"} ${isDarkMode ? "border border-Navy bg-transparent" : "bg-white"}`}>
      <button onClick={() => setIsActive(!isActive)} className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${isActive ? activeColor : "bg-gray-300"}`}>
        <Icon_1.default name="icon-search" size={24} color={isDarkMode ? "white" : isActive ? "white" : "black"}/>
      </button>
      {isActive && (<input type="text" className={`ml-2 flex-grow border-none outline-none ${isDarkMode ? "bg-transparent text-white" : "text-black"}`} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} {...props}/>)}
    </div>);
};
exports.default = SearchInput;
