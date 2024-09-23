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
exports.BasicModal = void 0;
const react_1 = __importStar(require("react"));
const sizeClasses = {
    xs: "w-64 h-auto",
    small: "w-80 h-auto",
    medium: "w-96 h-auto",
    large: "w-[32rem] h-auto",
    xl: "w-[40rem] h-auto",
    full: "w-full h-full max-w-full max-h-full",
};
const buttonClasses = {
    primary: "px-4 py-2 rounded-md",
    secondary: "px-4 py-2 rounded-md",
    danger: "px-4 py-2 rounded-md",
};
const BasicModal = ({ open, size = "medium", onClose, primaryButton, secondaryButton, children, showCloseIcon = true, className, }) => {
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
    if (!open)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" style={{ margin: 0 }}>
      <div className={`relative overflow-auto rounded-lg p-6 shadow-lg ${className || ""} ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`} onClick={(e) => e.stopPropagation()} style={{
            maxHeight: size === "full" ? "100vh" : "90vh", // full일 경우 100vh, 아니면 최대 90vh
            maxWidth: size === "full" ? "100vw" : "90vw", // full일 경우 100vw, 아니면 최대 90vw
            width: size === "full" ? "100%" : "", // full일 경우 100%
            height: size === "full" ? "100%" : "", // full일 경우 100%
            whiteSpace: "pre-wrap", // 가로 스크롤 방지
            wordWrap: "break-word", // 단어 잘라서 줄바꿈
            overflowWrap: "break-word", // 가로 스크롤 방지
        }}>
        {showCloseIcon && (<button className={`absolute right-2 top-2 ${isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-500 hover:text-gray-700"}`} onClick={onClose}>
            &times;
          </button>)}
        {children}
        <div className="mt-4 flex justify-center space-x-2">
          {secondaryButton && (<button onClick={secondaryButton.onClick || onClose} className={`${buttonClasses.secondary} ${isDarkMode ? "bg-Gray text-white" : "bg-gray text-white"}`}>
              {secondaryButton.text}
            </button>)}
          {primaryButton && (<button onClick={primaryButton.onClick || onClose} className={`${buttonClasses.primary} ${isDarkMode ? "bg-Navy text-white" : "bg-Basic text-white"}`}>
              {primaryButton.text}
            </button>)}
        </div>
      </div>
    </div>);
};
exports.BasicModal = BasicModal;
exports.default = exports.BasicModal;
