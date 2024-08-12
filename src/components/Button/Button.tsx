type ButtonProps = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",

  children,
}) => {
  const buttonSize =
    size === "small"
      ? "px-2 py-2 text-xs"
      : size === "medium"
        ? "px-3 py-2 text-sm"
        : "px-5 py-2 text-lg";

  const basicButton =
    "text-white font-bold text-sm rounded bg-[#9AC5E5] hover:bg-[#EDCE7A] px-3 py-2 ";

  return <button className={`${basicButton} ${buttonSize}`}>{children}</button>;
};

export default Button;
