import { ReactNode } from "react";
interface BadgeProps {
    type?: 'basic' | 'icon' | 'counter' | 'dot';
    content?: string | number;
    icon?: ReactNode;
    color?: string;
    textColor?: string;
}
declare const Badge: ({ type, content, icon, color, textColor }: BadgeProps) => import("react").JSX.Element;
export default Badge;
