import React from "react";
interface DropDownGroupedProps {
    groupName: string;
    items: string[];
}
interface AutocompleteProps {
    options: DropDownGroupedProps[];
    placeholder?: string;
    onSelect: (selectedOption: string) => void;
    radius?: "none" | "small" | "medium" | "large" | "full";
    border?: "none" | "thin" | "medium" | "thick";
    width?: string;
    noOptionsMessage?: string;
}
declare const GroupedAutocomplete: React.FC<AutocompleteProps>;
export default GroupedAutocomplete;
