import React from "react";
import { Size } from "types/type";
export interface Option {
    label: string;
    value: string;
}
interface AutocompleteProps {
    size?: Size;
    options: Array<string | Option>;
    value: string;
    onChange: (value: string) => void;
    onSelect: (selectedOption: string | Option) => void;
    placeholder?: string;
}
declare const LabelAutocomplete: React.FC<AutocompleteProps>;
export default LabelAutocomplete;
