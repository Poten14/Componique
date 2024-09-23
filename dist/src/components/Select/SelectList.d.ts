interface SelectListProps {
    option: string[];
    onChange?: (value: string) => void;
    className?: string;
}
declare const SelectList: ({ option, onChange, className }: SelectListProps) => import("react").JSX.Element;
export default SelectList;
