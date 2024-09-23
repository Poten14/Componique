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
const Button_1 = __importDefault(require("../Button/Button"));
const sizeClasses = {
    xs: "max-w-xs w-full",
    small: "max-w-sm w-full",
    medium: "max-w-md w-full",
    large: "max-w-lg w-full",
    xl: "max-w-xl w-full",
};
const FormModal = ({ open, size = "large", onClose, title = "Create your account", onSubmit, firstNameLabel = "First Name", lastNameLabel = "Last Name", }) => {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
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
      <div className={`rounded-lg p-6 shadow-lg ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`} onClick={(e) => e.stopPropagation()} // 모달 내부 클릭시 닫힘 방지
    >
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg">{title}</h2>
          <button onClick={onClose} className={`${isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-500"}`}>
            &times;
          </button>
        </div>
        <div className="mt-4">
          <label className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            {firstNameLabel}
          </label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={firstNameLabel} className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${isDarkMode
            ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
            : "border-gray-300 focus:ring-primary bg-white text-black"}`}/>
        </div>
        <div className="mt-4">
          <label className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            {lastNameLabel}
          </label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={lastNameLabel} className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${isDarkMode
            ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
            : "border-gray-300 focus:ring-primary bg-white text-black"}`}/>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <Button_1.default onClick={onClose} variant="border" className={`${isDarkMode ? "border-none bg-Gray text-white" : ""}`}>
            Cancel
          </Button_1.default>
          <Button_1.default onClick={() => onSubmit({ firstName, lastName })} variant="solid" className={`${isDarkMode ? "bg-Navy text-white" : ""}`}>
            Save
          </Button_1.default>
        </div>
      </div>
    </div>);
};
exports.default = FormModal;
