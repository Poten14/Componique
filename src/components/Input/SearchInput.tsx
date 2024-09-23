"use client";

import Icon from "../Icon/Icon";
import React, { useState, useEffect } from "react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  activeColor?: string;
  width?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  activeColor = "bg-Basic",
  width = "w-80",
  onSearch,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className={`flex items-center rounded-full p-2 shadow-md transition-all duration-300 ${
        isActive ? `${width}` : "w-12"
      } ${isDarkMode ? "border border-Navy bg-transparent" : "bg-white"}`}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
          isActive ? activeColor : "bg-gray-300"
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
          {...props}
        />
      )}
    </div>
  );
};

export default SearchInput;
