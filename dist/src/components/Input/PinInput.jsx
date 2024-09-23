import React, { useState, useRef, useEffect } from "react";
const PinInput = ({ length = 6, disabled = false, formatter, variant = "outline", customCharacter = "", onChange, }) => {
    const [values, setValues] = useState(Array(length).fill(""));
    const inputsRef = useRef([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
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
    const handleChange = (e, index) => {
        const value = formatter ? formatter(e.target.value) : e.target.value;
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
        if (value.length === 1 && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
        if (onChange) {
            onChange(newValues.join(""));
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };
    const handleFocus = (e) => {
        e.target.select();
    };
    return (<div className="flex space-x-2">
      {Array.from({ length }).map((_, index) => (<input key={index} type="text" maxLength={1} value={customCharacter || values[index]} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} onFocus={handleFocus} disabled={disabled} ref={(el) => {
                if (el)
                    inputsRef.current[index] = el;
            }} className={`h-9 w-7 rounded-md border text-center focus:outline-none ${variant === "filled"
                ? isDarkMode
                    ? "border-Navy bg-Navy text-white focus:border-blue-500"
                    : "bg-[#E0E0E0] focus:border-Basic focus:bg-white"
                : isDarkMode
                    ? "border-Navy bg-transparent text-white focus:border-blue-500"
                    : "border-[#E0E0E0] bg-white"} ${disabled ? "cursor-not-allowed bg-Navy" : ""} focus:ring focus:ring-blue-200`}/>))}
    </div>);
};
export default PinInput;
