import React from "react";
import { Size } from "types/type";
type Color = "Basic" | "Primary" | "Secondary" | "Success" | "Warning" | "Danger";
interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    color?: Color;
    size?: Size;
    value?: string;
    width?: string;
    onValueChange?: (value: string) => void;
}
declare const CurrencyInput: React.FC<CurrencyInputProps>;
export default CurrencyInput;
