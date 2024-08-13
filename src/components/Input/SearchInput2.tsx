"use client";

import React, { useState } from "react";

type InputSize = "sm" | "md" | "lg";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeClasses = {
  sm: "w-[200px] h-[30px] text-sm",
  md: "w-[300px] h-[40px] text-base",
  lg: "w-[400px] h-[50px] text-lg",
};

const expandedSizeClasses = {
  sm: "w-[400px] h-[30px]",
  md: "w-[500px] h-[40px]",
  lg: "w-[600px] h-[50px]",
};

const SearchInput2: React.FC<SearchInputProps> = ({
  size = "md",
  placeholder,
  value,
  onChange,
  ...props // 확장된 속성들을 받기 위해 사용
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex items-center rounded-full bg-white pl-2 shadow-md transition-all duration-300 ${
        isExpanded ? expandedSizeClasses[size] : sizeClasses[size]
      }`}
    >
      <input
        type="text"
        className="text-gray-700 flex-grow pl-3 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={toggleExpand} // 인풋 필드에 포커스가 있을 때 확장
        onBlur={toggleExpand} // 포커스가 벗어날 때 다시 축소
        {...props} // 추가된 속성 전달
      />
      <button className="h-full rounded-r-full pr-5 focus:outline-none">
        🔍
      </button>
    </div>
  );
};

export default SearchInput2;
