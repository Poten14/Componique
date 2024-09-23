import React from "react";
interface Option {
    label: string;
    value: string;
}
interface AutocompleteProps {
    options: Option[];
    placeholder?: string;
    onSelect: (selectedOption: string) => void;
}
declare const Autocomplete: React.FC<AutocompleteProps>;
export default Autocomplete;
