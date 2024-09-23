interface DropdownItem {
    label: string;
    href: string;
}
interface BreadCrumbProp {
    href?: string;
    children: React.ReactNode;
    dropdownItems?: DropdownItem[];
    className?: string;
}
interface BreadCrumbProps {
    items: BreadCrumbProp[];
}
declare const BreadCrumbDropdown: ({ items }: BreadCrumbProps) => import("react").JSX.Element;
export default BreadCrumbDropdown;
