interface SelectValueAddProps {
    option: string[];
    placeholder?: string;
    onChange?: (value: string[]) => void;
    className?: string;
}
declare const SelectValueAdd: ({ option, onChange, placeholder, className, }: SelectValueAddProps) => import("react").JSX.Element;
export default SelectValueAdd;
