import Icon from "@components/Icon/Icon";
const Button = ({ size = "medium", color = "basic", radius = "medium", variant = "solid", className, icon, iconColor, disabled = false, iconSize = "medium", iconPosition = "left", children, ...rest }) => {
    const buttonSize = size === "small"
        ? "px-2 py-2 text-xs"
        : size === "medium"
            ? "px-3 py-2 text-sm"
            : "px-5 py-2 !text-lg";
    const buttonRadius = radius === "small"
        ? "rounded-md"
        : radius === "medium"
            ? "rounded-lg"
            : radius === "large"
                ? "rounded-xl"
                : radius === "full"
                    ? "rounded-full"
                    : "rounded-none";
    const colors = {
        basic: "bg-Basic",
        primary: "bg-Primary",
        secondary: "bg-Secondary",
        success: "bg-Success",
        warning: "bg-Warning",
        danger: "bg-Danger",
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
    };
    const hoverColors = {
        primary: "hover:bg-[#4C89FF] ",
        secondary: "hover:bg-[#A662E9]",
        success: "hover:bg-[#33E680]",
        warning: "hover:bg-[#E7BC4B]",
        danger: "hover:bg-[#FF4C4C]",
        red: "hover:bg-red-700",
        orange: "hover:bg-orange-700",
        yellow: "hover:bg-yellow-700",
        green: "hover:bg-green-700",
        blue: "hover:bg-blue-700",
        purple: "hover:bg-purple-700",
        pink: "hover:bg-pink-700",
        basic: "hover:bg-[#71ADDA]",
    };
    const borderColors = {
        primary: "border-Primary !text-Primary hover:text-white",
        secondary: "border-Secondary !text-Secondary",
        success: "border-Success !text-Success",
        warning: "border-Warning !text-Warning",
        danger: "border-Danger !text-Danger",
        red: "border-red-500 !text-red-500",
        orange: "border-orange-500 !text-orange-500",
        yellow: "border-yellow-500 !text-yellow-500",
        green: "border-green-500 !text-green-500",
        blue: "border-blue-500 !text-blue-500",
        purple: "border-purple-500 !text-purple-500",
        pink: "border-pink-500 !text-pink-500",
        basic: "border-Basic !text-Basic",
    };
    const lightColors = {
        primary: "!text-Primary",
        secondary: "!text-Secondary",
        success: "!text-Success",
        warning: "!text-Warning",
        danger: "!text-Danger",
        red: "!text-red-500",
        orange: "!text-orange-500",
        yellow: "!text-yellow-500",
        green: "!text-green-500",
        blue: "!text-blue-500",
        purple: "!text-purple-500",
        pink: "!text-pink-500",
        basic: "!text-Basic",
    };
    let ButtonVariant = "";
    if (disabled) {
        ButtonVariant =
            "cursor-not-allowed  bg-[#cccccc] text-[#666666] opacity-50";
    }
    else if (variant === "solid") {
        ButtonVariant = `${colors[color]} text-white ${hoverColors[color]}`;
    }
    else if (variant === "border") {
        ButtonVariant = `${borderColors[color]} border-2 bg-transparent ${hoverColors[color]} hover:!text-white`;
    }
    else if (variant === "flat") {
        ButtonVariant = `${colors[color]} bg-opacity-50 text-${color} ${hoverColors[color]} hover:text-white`;
    }
    else if (variant === "light") {
        ButtonVariant = `bg-transparent ${lightColors[color]} ${hoverColors[color]} hover:!text-white`;
    }
    const iconSizes = iconSize === "small" ? 12 : iconSize === "medium" ? 16 : 20;
    const basicButton = "font-bold text-sm rounded  px-3 py-2 text-white";
    return (<button className={`${basicButton} ${buttonSize} ${buttonRadius} ${ButtonVariant} ${className || ""}`} {...rest}>
      {icon && iconPosition === "left" && (<Icon name={icon} size={iconSizes} color={iconColor || "black"}/>)}
      {children}
      {icon && iconPosition === "right" && (<Icon name={icon} size={iconSizes} color={iconColor || "black"}/>)}
    </button>);
};
export default Button;
