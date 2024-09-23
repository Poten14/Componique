import { Size } from "types/type";
interface NavbarProps {
    logoSrc: string;
    logoName: string;
    size?: Size;
    hoverColor?: "skyblue" | "blue" | "red";
    position?: "sticky" | "relative" | "static";
    links: {
        name: string;
        href: string;
    }[];
}
declare const Navbar: ({ size, hoverColor, position, logoName, logoSrc, links, }: NavbarProps) => import("react").JSX.Element;
export default Navbar;
