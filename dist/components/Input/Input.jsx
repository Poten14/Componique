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
const sizeClasses = {
    xs: "py-1 px-2 text-xs",
    small: "py-1.5 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-4 text-lg",
    xl: "py-4 px-5 text-lg",
};
const variantClasses = {
    outlined: "border border-Primary bg-white",
    filled: "bg-[#9AC5E5] text-white placeholder-white border-none",
};
const darkModeVariantClasses = {
    filled: "bg-Navy text-white placeholder-white border-none", // 다크 모드에서의 filled 스타일
    outlined: "border border-Navy bg-transparent text-white placeholder-white", // 다크 모드에서의 outlined 스타일
};
const Input = ({ size = "medium", variant = "outlined", placeholder, value, onChange, width = "80%", }) => {
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
    return (<input type="text" className={`rounded-md focus:border-Basic ${isDarkMode ? darkModeVariantClasses[variant] : variantClasses[variant]} ${sizeClasses[size]} md:w-1/4 lg:w-2/3 xl:w-3/5`} placeholder={placeholder} value={value} onChange={onChange} style={{ width }}/>);
};
exports.default = Input;
