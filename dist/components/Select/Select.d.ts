interface SelectProps {
    placeholder?: string;
    color?: "red" | "blue" | "green" | "gray";
    option: string[];
    onChange?: (value: string) => void;
    onClick?: (value: string) => void;
    className?: string;
}
declare const Select: ({ option, color, placeholder, onChange, onClick, className, }: SelectProps) => import("react").JSX.Element;
export default Select;
