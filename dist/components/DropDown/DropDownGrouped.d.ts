interface DropDownGroupedProps {
    groupName: string;
    items: string[];
}
interface DropDownBasicProps {
    options: DropDownGroupedProps[];
    defaultOption?: string;
    onSelect?: (value: string) => void;
    type?: "basic" | "rounded" | "borderless-rounded" | "less-rounded";
}
declare const DropDownGrouped: ({ options, defaultOption, onSelect, type, }: DropDownBasicProps) => import("react").JSX.Element;
export default DropDownGrouped;
