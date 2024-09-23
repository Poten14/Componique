import React from "react";
interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    color?: string;
    label?: string;
}
declare const RadioButtonBasic: ({ name, value, checked, onChange, disabled, size, color, label, }: RadioButtonProps) => React.JSX.Element;
export default RadioButtonBasic;
