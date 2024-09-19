import React, { useState, useEffect } from "react";
import { Size } from "types/type";

type ButtonColor =
  | "Basic"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  buttonText?: string;
  onButtonClick?: () => void;
  color?: ButtonColor;
}

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

const SearchInput3: React.FC<SearchInputProps> = ({
  size = "medium",
  placeholder = "input search text",
  value,
  onChange,
  buttonText = "Search",
  onButtonClick,
  color = "Basic",
  ...props
}) => {
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

  return (
    <div
      className={`flex items-center ${sizeClasses[size]} ${
        isDarkMode ? "bg-transparent" : "bg-white"
      }`}
    >
      <input
        type="text"
        className={`placeholder-gray-500 border-r-none flex-grow rounded-l-md border-b border-l border-t border-gray px-4 py-2 focus:outline-none ${
          isDarkMode ? "border-Navy bg-transparent text-white" : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} // 확장된 모든 속성을 전달
      />
      <button
        className={`rounded-r-md ${colorClasses[color]} transform px-4 py-2.5 transition-transform duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-opacity-90 ${
          isDarkMode ? "bg-opacity-75" : ""
        }`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchInput3;
