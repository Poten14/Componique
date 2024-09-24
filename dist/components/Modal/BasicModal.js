"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", style: { margin: 0 }, children: (0, jsx_runtime_1.jsxs)("div", { className: `relative overflow-auto rounded-lg p-6 shadow-lg ${className || ""} ${sizeClasses[size]} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`, onClick: (e) => e.stopPropagation(), style: {
                maxHeight: size === "full" ? "100vh" : "90vh", // full일 경우 100vh, 아니면 최대 90vh
                maxWidth: size === "full" ? "100vw" : "90vw", // full일 경우 100vw, 아니면 최대 90vw
                width: size === "full" ? "100%" : "", // full일 경우 100%
                height: size === "full" ? "100%" : "", // full일 경우 100%
                whiteSpace: "pre-wrap", // 가로 스크롤 방지
                wordWrap: "break-word", // 단어 잘라서 줄바꿈
                overflowWrap: "break-word", // 가로 스크롤 방지
            }, children: [showCloseIcon && ((0, jsx_runtime_1.jsx)("button", { className: `absolute right-2 top-2 ${isDarkMode
                        ? "text-gray-300 hover:text-gray-100"
                        : "text-gray-500 hover:text-gray-700"}`, onClick: onClose, children: "\u00D7" })), children, (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex justify-center space-x-2", children: [secondaryButton && ((0, jsx_runtime_1.jsx)("button", { onClick: secondaryButton.onClick || onClose, className: `${buttonClasses.secondary} ${isDarkMode ? "bg-Gray text-white" : "bg-gray text-white"}`, children: secondaryButton.text })), primaryButton && ((0, jsx_runtime_1.jsx)("button", { onClick: primaryButton.onClick || onClose, className: `${buttonClasses.primary} ${isDarkMode ? "bg-Navy text-white" : "bg-Basic text-white"}`, children: primaryButton.text }))] })] }) }));
};
exports.BasicModal = BasicModal;
exports.default = exports.BasicModal;
