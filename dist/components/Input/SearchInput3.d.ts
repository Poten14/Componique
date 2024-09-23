import React from "react";
import { Size } from "types/type";
type ButtonColor = "Basic" | "Primary" | "Secondary" | "Success" | "Warning" | "Danger";
interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: Size;
    buttonText?: string;
    onButtonClick?: () => void;
    color?: ButtonColor;
}
declare const SearchInput3: React.FC<SearchInputProps>;
export default SearchInput3;
