import React from "react";
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    activeColor?: string;
    width?: string;
    onSearch?: (value: string) => void;
}
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
