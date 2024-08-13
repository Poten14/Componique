type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic";
  radius?: "small" | "medium" | "large" | "none" | "full";
  variant?: "solid" | "border" | "flat" | "light";
  onClick?: () => void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "basic",
  radius = "medium",
  variant = "solid",
  children,
  ...rest
}) => {
  const buttonSize =
    size === "small"
      ? "px-2 py-2 text-xs"
      : size === "medium"
        ? "px-3 py-2 text-sm"
        : "px-5 py-2 !text-lg";

  const buttonRadius =
    radius === "small"
      ? "rounded-md"
      : radius === "medium"
        ? "rounded-lg"
        : radius === "large"
          ? "rounded-xl"
          : radius === "full"
            ? "rounded-full"
            : "rounded-none";

  const colors = {
    primary: "bg-[#7AA7FF]",
    secondary: "bg-[#C294F0]",
    success: "bg-[#7EEFAF]",
    warning: "bg-[#EDCE7B]",
    danger: "bg-[#FF7676]",
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    basic: "bg-[#9AC5E5]",
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
    primary: "border-[#7AA7FF] !text-[#7AA7FF] hover:text-white",
    secondary: "border-[#C294F0] !text-[#C294F0]",
    success: "border-[#7EEFAF] !text-[#7EEFAF]",
    warning: "border-[#EDCE7B] !text-[#EDCE7B]",
    danger: "border-[#FF7676] !text-[#FF7676]",
    red: "border-red-500 !text-red-500",
    orange: "border-orange-500 !text-orange-500",
    yellow: "border-yellow-500 !text-yellow-500",
    green: "border-green-500 !text-green-500",
    blue: "border-blue-500 !text-blue-500",
    purple: "border-purple-500 !text-purple-500",
    pink: "border-pink-500 !text-pink-500",
    basic: "border-[#9AC5E5] !text-[#9AC5E5]",
  };

  const lightColors = {
    primary: "!text-[#7AA7FF]",
    secondary: "!text-[#C294F0]",
    success: "!text-[#7EEFAF]",
    warning: "!text-[#EDCE7B]",
    danger: "!text-[#FF7676]",
    red: "!text-red-500",
    orange: "!text-orange-500",
    yellow: "!text-yellow-500",
    green: "!text-green-500",
    blue: "!text-blue-500",
    purple: "!text-purple-500",
    pink: "!text-pink-500",
    basic: "!text-[#9AC5E5]",
  };

  let ButtonVariant = "";

  if (variant === "solid") {
    ButtonVariant = `${colors[color]} text-white ${hoverColors[color]}`;
  } else if (variant === "border") {
    ButtonVariant = `${borderColors[color]} border-2 bg-transparent ${hoverColors[color]} hover:!text-white`;
  } else if (variant === "flat") {
    ButtonVariant = `${colors[color]} bg-opacity-50 text-${color} ${hoverColors[color]} hover:text-white`;
  } else if (variant === "light") {
    ButtonVariant = `bg-transparent ${lightColors[color]} ${hoverColors[color]} hover:!text-white`;
  }

  const basicButton =
    "font-bold text-sm rounded bg-[#9AC5E5] px-3 py-2 text-white";

  return (
    <button
      className={`${basicButton} ${buttonSize} ${buttonRadius} ${ButtonVariant}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
