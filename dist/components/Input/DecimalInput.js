"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const sizeClasses = {
    small: "h-[45px] text-base",
    medium: "h-[45px] text-base",
    large: "h-[45px] text-lg",
};
const buttonSizeClasses = {
    small: "w-[30px] h-[18px] text-sm",
    medium: "w-[40px] h-[18px] text-base",
    large: "w-[50px] h-[18px] text-lg",
};
const buttonColorClasses = {
    Basic: "bg-[#9AC5E5] text-white",
    Primary: "bg-[#7AA7FF] text-white",
    Secondary: "bg-[#C294F0] text-white",
    Success: "bg-[#7EEFAF] text-white",
    Warning: "bg-[#EDCE7B] text-white",
    Danger: "bg-[#FF7676] text-white",
    Gray: "bg-[#DCDCDD] text-white",
};
const colorClasses = {
    Basic: "focus-within:ring-[#9AC5E5] focus-within:border-[#9AC5E5]",
    Primary: "focus-within:ring-[#7AA7FF] focus-within:border-[#7AA7FF]",
    Secondary: "focus-within:ring-[#C294F0] focus-within:border-[#C294F0]",
    Success: "focus-within:ring-[#7EEFAF] focus-within:border-[#7EEFAF]",
    Warning: "focus-within:ring-[#EDCE7B] focus-within:border-[#EDCE7B]",
    Danger: "focus-within:ring-[#FF7676] focus-within:border-[#FF7676]",
    Gray: "focus-within:ring-[#DCDCDD] focus-within:border-[#DCDCDD]",
};
const DecimalInput = ({ color = "Basic", size = "medium", width = "200px", value = "0.00", onValueChange, ...props }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)(value);
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
    const handleIncrement = () => {
        const newValue = (parseFloat(inputValue) + 0.01).toFixed(2);
        setInputValue(newValue);
        if (onValueChange)
            onValueChange(newValue);
    };
    const handleDecrement = () => {
        const newValue = (parseFloat(inputValue) - 0.01).toFixed(2);
        setInputValue(newValue);
        if (onValueChange)
            onValueChange(newValue);
    };
    const handleChange = (e) => {
        const newValue = e.target.value;
        // 유효한 숫자 형식인지 확인
        if (/^-?\d*\.?\d*$/.test(newValue)) {
            setInputValue(newValue);
            if (onValueChange)
                onValueChange(newValue);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            handleIncrement();
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            handleDecrement();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex items-center ${sizeClasses[size]} rounded-xl border-2 ${isDarkMode ? "border-Navy bg-transparent" : "border-gray bg-white"} ${colorClasses[color]} focus-within:ring-1 focus-within:ring-opacity-50`, style: { width: width }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: `w-5 flex-grow border-none text-center focus:outline-none ${isDarkMode ? "bg-transparent text-white" : "text-black"}`, value: inputValue, onChange: handleChange, ...props, onKeyDown: handleKeyDown }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("button", { className: `mr-0.5 flex h-10 items-center justify-center rounded-t-lg ${buttonSizeClasses[size]} ${buttonColorClasses[color]} ${isDarkMode ? "bg-opacity-75" : ""}`, onClick: handleIncrement, children: "\u25B2" }), (0, jsx_runtime_1.jsx)("button", { className: `mt-0.5 flex h-10 items-center justify-center rounded-b-lg ${buttonSizeClasses[size]} ${buttonColorClasses[color]} ${isDarkMode ? "bg-opacity-75" : ""}`, onClick: handleDecrement, children: "\u25BC" })] })] }));
};
exports.default = DecimalInput;
