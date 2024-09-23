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
    small: "w-[200px] h-[30px] text-sm",
    medium: "w-[380px] h-[40px] text-base",
    large: "w-[500px] h-[50px] text-lg",
};
const colorClasses = {
    Basic: "bg-Basic text-white",
    Primary: "bg-Primary text-white",
    Secondary: "bg-Secondary text-white",
    Success: "bg-Success text-white",
    Warning: "bg-Warning text-white",
    Danger: "bg-Danger text-white",
};
const SearchInput3 = ({ size = "medium", placeholder = "input search text", value, onChange, buttonText = "Search", onButtonClick, color = "Basic", ...props }) => {
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
    return (<div className={`flex items-center ${sizeClasses[size]} ${isDarkMode ? "bg-transparent" : "bg-white"}`}>
      <input type="text" className={`placeholder-gray-500 border-r-none flex-grow rounded-l-md border-b border-l border-t border-gray px-4 py-2 focus:outline-none ${isDarkMode ? "border-Navy bg-transparent text-white" : ""}`} placeholder={placeholder} value={value} onChange={onChange} {...props} // 확장된 모든 속성을 전달
    />
      <button className={`rounded-r-md ${colorClasses[color]} transform px-4 py-2.5 transition-transform duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-opacity-90 ${isDarkMode ? "bg-opacity-75" : ""}`} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>);
};
exports.default = SearchInput3;
