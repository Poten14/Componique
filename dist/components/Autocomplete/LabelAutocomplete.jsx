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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
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
    return (<div>
      <div className={`flex items-center rounded-full px-4 shadow-md ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"} focus-within:border-Primary focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500`}>
        <input type="text" list="autocomplete-options" value={value} onChange={(e) => onChange(e.target.value)} onSelect={handleSelect} placeholder={placeholder} className={`flex-grow focus:outline-none ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`}/>
        <Icon_1.default name="icon-search" size={24} color={isDarkMode ? "white" : "black"}/>
      </div>
      <datalist id="autocomplete-options">
        {options.map((option, index) => typeof option === "string" ? (<option key={index} value={option}/>) : (<option key={index} value={option.value}>
              {option.label}
            </option>))}
      </datalist>
    </div>);
};
exports.default = LabelAutocomplete;
