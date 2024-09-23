interface DropDownBasicProps {
    option: string[];
    placeholder?: string;
    onSelect?: (value: string, index: number) => void;
    type?: "basic" | "rounded" | "borderless-rounded" | "less-rounded";
}
declare const DropDownBasic: ({ option, placeholder, onSelect, type, }: DropDownBasicProps) => import("react").JSX.Element;
export default DropDownBasic;
