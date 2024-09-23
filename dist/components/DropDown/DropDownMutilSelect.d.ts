interface DropDownBasicMultiSelectProps {
    option: string[];
    placeholder?: string;
    onSelect?: (value: string[]) => void;
    type?: "basic" | "rounded" | "borderless-rounded" | "less-rounded";
}
declare const DropDownBasicMultiSelect: ({ option, placeholder, onSelect, type, }: DropDownBasicMultiSelectProps) => import("react").JSX.Element;
export default DropDownBasicMultiSelect;
