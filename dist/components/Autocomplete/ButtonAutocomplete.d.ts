import React from "react";
type ButtonColor = "Basic" | "Primary" | "Secondary" | "Success" | "Warning" | "Danger";
interface AutocompleteProps {
    options: string[];
    placeholder?: string;
    radius?: "small" | "medium" | "large" | "none" | "full";
    width?: string;
    height?: string;
    noOptionsMessage?: string;
    color?: ButtonColor;
    onSelect: (selectedOption: string) => void;
}
declare const ButtonAutocomplete: React.FC<AutocompleteProps>;
export default ButtonAutocomplete;
