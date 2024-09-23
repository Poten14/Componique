interface BreadCrumbProp {
    href?: string;
    className?: string;
    children: React.ReactNode;
}
interface BreadCrumbProps {
    items: BreadCrumbProp[];
    hoverColor?: "black" | "Basic" | "Primary" | "Danger";
    activeColor?: "black" | "Basic" | "Primary" | "Danger";
}
declare const BreadCrumb: ({ items, hoverColor, activeColor, }: BreadCrumbProps) => import("react").JSX.Element;
export default BreadCrumb;
