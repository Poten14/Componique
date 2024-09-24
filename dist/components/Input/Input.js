"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsx)("input", { type: "text", className: `rounded-md focus:border-Basic ${isDarkMode ? darkModeVariantClasses[variant] : variantClasses[variant]} ${sizeClasses[size]} md:w-1/4 lg:w-2/3 xl:w-3/5`, placeholder: placeholder, value: value, onChange: onChange, style: { width } }));
};
exports.default = Input;
