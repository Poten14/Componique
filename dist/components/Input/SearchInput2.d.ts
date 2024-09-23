import React from "react";
import { Size } from "types/type";
interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: Size;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const SearchInput2: React.FC<SearchInputProps>;
export default SearchInput2;
