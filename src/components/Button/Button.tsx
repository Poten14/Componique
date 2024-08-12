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
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "basic",
  radius = "medium",
  variant = "solid",
  children,
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

  /*
  const buttonColor: { [key in NonNullable<ButtonProps["color"]>]: string } = {
    /// Key in을 쓴 이유 : buttonColor의 모든 키가 ButtonProps의 color에 정의한 값 중 하나여야 해서 사용함 => 타입스크립트에서 자동완성이 가능함
    primary:
      variant === "border"
        ? "border-[#7AA7FF] text-[#7AA7FF] border-2 bg-transparent hover:bg-[#7AA7FF] hover:text-white"
        : variant === "flat"
          ? "bg-[#7AA7FF] bg-opacity-20 text-[#7AA7FF] hover:bg-[#4C89FF] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#7AA7FF] hover:bg-[#7AA7FF] hover:text-white"
            : "bg-[#7AA7FF] hover:bg-[#4C89FF] text-white",
    secondary:
      variant === "border"
        ? "border-[#C294F0] text-[#C294F0] border-2 bg-transparent hover:bg-[#C294F0] hover:text-white"
        : variant === "flat"
          ? "bg-[#C294F0] bg-opacity-20 text-[#C294F0] hover:bg-[#A662E9] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#C294F0] hover:bg-[#C294F0] hover:text-white"
            : "bg-[#C294F0] hover:bg-[#A662E9] text-white",
    success:
      variant === "border"
        ? "border-[#7EEFAF] text-[#7EEFAF] border-2 bg-transparent hover:bg-[#7EEFAF] hover:text-white"
        : variant === "flat"
          ? "bg-[#7EEFAF] bg-opacity-20 text-[#7EEFAF] hover:bg-[#33E680] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#7EEFAF] hover:bg-[#7EEFAF] hover:text-white"
            : "bg-[#7EEFAF] hover:bg-[#33E680] text-white",
    warning:
      variant === "border"
        ? "border-[#EDCE7B] text-[#EDCE7B]  border-2 bg-transparent hover:bg-[#EDCE7B] hover:text-white"
        : variant === "flat"
          ? "bg-[#EDCE7B] bg-opacity-20 text-[#EDCE7B] hover:bg-[#E7BC4B] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#EDCE7B] hover:bg-[#EDCE7B] hover:text-white"
            : "bg-[#EDCE7B] hover:bg-[#E7BC4B] text-white",
    danger:
      variant === "border"
        ? "border-[#FF7676] text-[#FF7676] border-2 bg-transparent hover:bg-[#FF7676] hover:text-white"
        : variant === "flat"
          ? "bg-[#FF7676] bg-opacity-20 text-[#FF7676] hover:bg-[#FF4C4C] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#FF7676] hover:bg-[#FF7676] hover:text-white"
            : "bg-[#FF7676] hover:bg-[#FF4C4C] text-white",
    red:
      variant === "border"
        ? "border-red-500 text-red-500 border-2 bg-transparent hover:bg-red-500 hover:text-white"
        : variant === "flat"
          ? "bg-red-500 bg-opacity-20 text-red-500 hover:bg-red-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-red-500 hover:bg-red-500 hover:text-white"
            : "bg-red-500 hover:bg-red-700 text-white",
    orange:
      variant === "border"
        ? "border-orange-500 text-orange-500 border-2 bg-transparent hover:bg-orange-500 hover:text-white"
        : variant === "flat"
          ? "bg-orange-500 bg-opacity-20 text-orange-500 hover:bg-orange-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white"
            : "bg-orange-500 hover:bg-orange-700 text-white",
    yellow:
      variant === "border"
        ? "border-yellow-500 text-yellow-500 border-2 bg-transparent hover:bg-yellow-500 hover:text-white"
        : variant === "flat"
          ? "bg-yellow-500 bg-opacity-20 text-yellow-500 hover:bg-yellow-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-white"
            : "bg-yellow-500 hover:bg-yellow-700 text-white",
    green:
      variant === "border"
        ? "border-green-500 text-green-500 border-2 bg-transparent hover:bg-green-500 hover:text-white"
        : variant === "flat"
          ? "bg-green-500 bg-opacity-20 text-green-500 hover:bg-green-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-green-500 hover:bg-green-500 hover:text-white"
            : "bg-green-500 hover:bg-green-700 text-white",
    blue:
      variant === "border"
        ? "border-blue-500 text-blue-500 border-2 bg-transparent hover:bg-blue-500 hover:text-white"
        : variant === "flat"
          ? "bg-blue-500 bg-opacity-20 text-blue-500 hover:bg-blue-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
            : "bg-blue-500 hover:bg-blue-700 text-white",
    purple:
      variant === "border"
        ? "border-purple-500 text-purple-500 border-2 bg-transparent hover:bg-purple-500 hover:text-white"
        : variant === "flat"
          ? "bg-purple-500 bg-opacity-20 text-purple-500 hover:bg-purple-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white"
            : "bg-purple-500 hover:bg-purple-700 text-white",
    pink:
      variant === "border"
        ? "border-pink-500 text-pink-500 border-2 bg-transparent hover:bg-pink-500 hover:text-white"
        : variant === "flat"
          ? "bg-pink-500 bg-opacity-20 text-pink-500 hover:bg-pink-700 hover:text-white"
          : variant === "light"
            ? "bg-transparent text-pink-500 hover:bg-pink-500 hover:text-white"
            : "bg-pink-500 hover:bg-pink-700 text-white",
    basic:
      variant === "border"
        ? "border-[#9AC5E5] text-[#9AC5E5] border-2 bg-transparent hover:bg-[#9AC5E5] hover:text-white"
        : variant === "flat"
          ? "bg-[#9AC5E5] bg-opacity-20 text-[#9AC5E5] hover:bg-[#71ADDA] hover:text-white"
          : variant === "light"
            ? "bg-transparent text-[#9AC5E5] hover:bg-[#9AC5E5] hover:text-white"
            : "bg-[#9AC5E5] hover:bg-[#71ADDA] text-white",
  };
*/
  const colors = {
    primary: "[#7AA7FF]",
    secondary: "[#C294F0]",
    success: "[#7EEFAF]",
    warning: "[#EDCE7B]",
    danger: "[#FF7676]",
    red: "red-500",
    orange: "orange-500",
    yellow: "yellow-500",
    green: "green-500",
    blue: "blue-500",
    purple: "purple-500",
    pink: "pink-500",
    basic: "[#9AC5E5]",
  };

  const hoverColors = {
    primary: "[#4C89FF]",
    secondary: "[#A662E9]",
    success: "[#33E680]",
    warning: "[#E7BC4B]",
    danger: "[#FF4C4C]",
    red: "red-700",
    orange: "orange-700",
    yellow: "yellow-700",
    green: "green-700",
    blue: "blue-700",
    purple: "purple-700",
    pink: "pink-700",
    basic: "[#71ADDA]",
  };

  const borderColors = {
    primary: "border-[#7AA7FF] text-[#7AA7FF]",
    secondary: "border-[#C294F0] text-[#C294F0]",
    success: "border-[#7EEFAF] text-[#7EEFAF]",
    warning: "border-[#EDCE7B] text-[#EDCE7B]",
    danger: "border-[#FF7676] text-[#FF7676]",
    red: "border-red-500 text-red-500",
    orange: "border-orange-500 text-orange-500",
    yellow: "border-yellow-500 text-yellow-500",
    green: "border-green-500 text-green-500",
    blue: "border-blue-500 text-blue-500",
    purple: "border-purple-500 text-purple-500",
    pink: "border-pink-500 text-pink-500",
    basic: "border-[#9AC5E5] text-[#9AC5E5]",
  };

  let ButtonVariant = "";

  if (variant === "solid") {
    ButtonVariant = `bg-${colors[color]} text-white hover:bg-${hoverColors[color]}`;
  } else if (variant === "border") {
    ButtonVariant = `${borderColors[color]} border-2 bg-transparent hover:bg-${hoverColors[color]} hover:text-white`;
  } else if (variant === "flat") {
    ButtonVariant = `bg-${colors[color]} bg-opacity-20 text-${color} hover:bg-${hoverColors[color]} hover:text-white`;
  } else if (variant === "light") {
    ButtonVariant = `bg-transparent text-${colors[color]} hover:bg-${colors[color]} hover:text-white`;
  }

  const basicButton =
    "text-white font-bold text-sm rounded bg-[#9AC5E5] hover:bg-[#EDCE7A] px-3 py-2 ";

  return (
    <button
      className={`${basicButton} ${buttonSize} ${buttonRadius} ${ButtonVariant}`}
    >
      {children}
    </button>
  );
};

export default Button;
