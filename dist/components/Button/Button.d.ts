import { IconName } from "../Icon/Icon";
export type ButtonProps = {
    size?: "small" | "medium" | "large";
    iconSize?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    radius?: "small" | "medium" | "large" | "none" | "full";
    variant?: "solid" | "border" | "flat" | "light";
    icon?: IconName;
    iconColor?: string;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: React.FC<ButtonProps>;
export default Button;
