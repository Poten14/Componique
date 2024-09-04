"use client";

import Icon from "@components/Icon/Icon";
import React, { useState, useEffect } from "react";

// 기본 HTML 속성을 확장하여 사용
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  activeColor?: string;
  inactiveColor?: string;
  width?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  activeColor = "bg-Basic",
  inactiveColor = "bg-gray-300",
  width = "w-80",
  onSearch,
  ...props // 나머지 속성을 모두 받음
}) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
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

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className={`flex items-center rounded-full p-2 shadow-md transition-all duration-300 ${
        isActive ? `${width}` : "w-12"
      } ${isDarkMode ? "border-Navy border bg-transparent" : "bg-white"}`}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
          isActive ? activeColor : inactiveColor
        }`}
      >
        <Icon
          name="icon-search"
          size={24}
          color={isDarkMode ? "white" : isActive ? "white" : "black"}
        />
      </button>
      {isActive && (
        <input
          type="text"
          className={`ml-2 flex-grow border-none outline-none ${
            isDarkMode ? "bg-transparent text-white" : "text-black"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props} // 추가된 속성 전달
        />
      )}
    </div>
  );
};

export default SearchInput;
