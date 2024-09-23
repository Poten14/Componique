import React from "react";
import { Size } from "types/type";
type Color = "Basic" | "Primary" | "Secondary" | "Success" | "Warning" | "Danger" | "Gray";
interface NumInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    color?: Color;
    size?: Size;
    value?: string;
    width?: string;
    onValueChange?: (value: string) => void;
}
declare const DecimalInput: React.FC<NumInputProps>;
export default DecimalInput;
