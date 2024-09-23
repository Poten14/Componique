import React from "react";
import { Size } from "types/type";
type Color = "Basic" | "Primary" | "Secondary" | "Success" | "Warning" | "Gray" | "Danger";
interface NumInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    color?: Color;
    size?: Size;
    value?: string;
    width?: string;
    onValueChange?: (value: string) => void;
}
declare const NumInput: React.FC<NumInputProps>;
export default NumInput;
