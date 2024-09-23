import React from "react";
interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    description: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    color?: string;
}
declare const RadioButtonDescription: React.FC<RadioButtonProps>;
export default RadioButtonDescription;
