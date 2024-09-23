import React from "react";
import { ExtraSize } from "types/type";
type InputVariant = "outlined" | "filled";
interface InputProps {
    size?: ExtraSize;
    variant?: InputVariant;
    placeholder?: string;
    value?: string;
    width?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
