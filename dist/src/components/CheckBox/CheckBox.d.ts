import { Size } from "types/type";
type CheckBoxProps = {
    boxSize?: Size;
    description?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    variant?: "solid" | "border";
} & React.InputHTMLAttributes<HTMLInputElement>;
declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
