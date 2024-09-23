import React from "react";
interface AutocompleteProps {
    options: string[];
    placeholder?: string;
    variant?: "outlined" | "filled" | "borderless";
    radius?: "small" | "medium" | "large" | "none" | "full";
    width?: string;
    height?: string;
    noOptionsMessage?: string;
    onSelect: (selectedOption: string) => void;
}
declare const Autocomplete: React.FC<AutocompleteProps>;
export default Autocomplete;
