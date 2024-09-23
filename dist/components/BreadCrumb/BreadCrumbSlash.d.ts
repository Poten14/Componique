interface BreadCrumbProp {
    href?: string;
    className?: string;
    children: React.ReactNode;
}
interface BreadCrumbProps {
    items: BreadCrumbProp[];
    hoverColor?: "black" | "Basic" | "Primary" | "Danegr";
    activeColor?: "black" | "Basic" | "Primary" | "Danegr";
}
declare const BreadCrumbSlash: ({ items, hoverColor, activeColor, }: BreadCrumbProps) => import("react").JSX.Element;
export default BreadCrumbSlash;
