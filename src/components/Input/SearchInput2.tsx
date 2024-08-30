"use client";

import Icon from "@components/Icon/Icon";
import React, { useState } from "react";
import { Size } from "types/type";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

const SearchInput2: React.FC<SearchInputProps> = ({
  size = "medium",
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
        <Icon name="icon-search" size={iconSizeClasses[size]} />
      </button>
    </div>
  );
};

export default SearchInput2;
