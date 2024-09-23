"use client";
import Icon from "@components/Icon/Icon";
import React, { useState, useEffect } from "react";
const sizeClasses = {
    small: "w-[200px] h-[30px] text-sm",
    medium: "w-[300px] h-[40px] text-base",
    large: "w-[400px] h-[50px] text-lg",
};
const expandedSizeClasses = {
    small: "w-[400px] h-[30px]",
    medium: "w-[500px] h-[40px]",
    large: "w-[600px] h-[50px]",
};
const iconSizeClasses = {
    small: 16,
    medium: 20,
    large: 24,
};
const SearchInput2 = ({ size = "medium", placeholder, value, onChange, ...props // 확장된 속성들을 받기 위해 사용
 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
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
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (<div className={`flex items-center rounded-full pl-2 shadow-md transition-all duration-300 ${isExpanded ? expandedSizeClasses[size] : sizeClasses[size]} ${isDarkMode ? "border-Navy border bg-transparent" : "bg-white"}`}>
      <input type="text" className={`flex-grow pl-3 focus:outline-none ${isDarkMode ? "bg-transparent text-white" : "text-gray-700"}`} placeholder={placeholder} value={value} onChange={onChange} onFocus={toggleExpand} // 인풋 필드에 포커스가 있을 때 확장
     onBlur={toggleExpand} // 포커스가 벗어날 때 다시 축소
     {...props} // 추가된 속성 전달
    />
      <button className="h-full rounded-r-full pr-5 focus:outline-none">
        <Icon name="icon-search" size={iconSizeClasses[size]} color={isDarkMode ? "white" : "black"} // 다크 모드에서는 아이콘 색상을 흰색으로
    />
      </button>
    </div>);
};
export default SearchInput2;
