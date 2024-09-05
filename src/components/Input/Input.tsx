import React, { useEffect, useState } from "react";
import { ExtraSize } from "types/type";

type InputVariant = "outlined" | "filled";

interface InputProps {
  size?: ExtraSize;
  variant?: InputVariant;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

const Input: React.FC<InputProps> = ({
  size = "medium",
  variant = "outlined",
  placeholder,
  value,
  onChange,
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
    <input
      type="text"
      className={`rounded-md focus:border-Basic ${
        isDarkMode ? darkModeVariantClasses[variant] : variantClasses[variant]
      } ${sizeClasses[size]} md:w-1/4 lg:w-2/3 xl:w-3/5`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
