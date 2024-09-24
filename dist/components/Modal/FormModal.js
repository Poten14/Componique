"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", style: { margin: 0 }, children: (0, jsx_runtime_1.jsxs)("div", { className: `rounded-lg p-6 shadow-lg ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`, onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between border-b pb-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg", children: title }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: `${isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-500"}`, children: "\u00D7" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("label", { className: `block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`, children: firstNameLabel }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: firstNameLabel, className: `mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${isDarkMode
                                ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
                                : "border-gray-300 focus:ring-primary bg-white text-black"}` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("label", { className: `block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`, children: lastNameLabel }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: lastNameLabel, className: `mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${isDarkMode
                                ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
                                : "border-gray-300 focus:ring-primary bg-white text-black"}` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 flex justify-end space-x-2", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClose, variant: "border", className: `${isDarkMode ? "border-none bg-Gray text-white" : ""}`, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => onSubmit({ firstName, lastName }), variant: "solid", className: `${isDarkMode ? "bg-Navy text-white" : ""}`, children: "Save" })] })] }) }));
};
exports.default = FormModal;
