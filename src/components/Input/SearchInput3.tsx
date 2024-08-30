import React from "react";
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
  medium: "w-[450px] h-[40px] text-base",
  large: "w-[500px] h-[50px]  text-lg",
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
  return (
    <div className={`flex w-[400px] items-center ${sizeClasses[size]}`}>
      <input
        type="text"
        className={`placeholder-gray-500 flex-grow rounded-l-md border border-gray bg-white px-4 py-2 focus:outline-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} // 확장된 모든 속성을 전달
      />
      <button
        className={`rounded-r-md ${colorClasses[color]} transform px-4 py-2.5 transition-transform duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-opacity-90`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchInput3;
