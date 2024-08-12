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
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "basic",
  radius = "medium",
  children,
}) => {
  const buttonSize =
    size === "small"
      ? "px-2 py-2 text-xs"
      : size === "medium"
        ? "px-3 py-2 text-sm"
        : "px-5 py-2 text-lg";

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

  const buttonColor: { [key in NonNullable<ButtonProps["color"]>]: string } = {
    //Key in을 쓴 이유 : buttonColor의 모든 키가 ButtonProps의 color에 정의한 값 중 하나여야 해서 사용함 => 타입스크립트에서 자동완성이 가능함
    primary: "bg-[#7AA7FF] hover:bg-[#4C89FF]",
    secondary: "bg-[#C294F0] hover:bg-[#A662E9]",
    success: "bg-[#7EEFAF] hover:bg-[#33E680]",
    warning: "bg-[#EDCE7B] hover:bg-[#E7BC4B]",
    danger: "bg-[#FF7676] hover:bg-[#FF4C4C]",
    red: "bg-red-500 hover:bg-red-700",
    orange: "bg-orange-500 hover:bg-orange-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700",
    green: "bg-green-500 hover:bg-green-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    purple: "bg-purple-500 hover:bg-purple-700",
    pink: "bg-pink-500 hover:bg-pink-700",
    basic: "bg-[#9AC5E5] hover:bg-[#71ADDA]",
  };

  const basicButton =
    "text-white font-bold text-sm rounded bg-[#9AC5E5] hover:bg-[#EDCE7A] px-3 py-2 ";

  return (
    <button
      className={`${basicButton} ${buttonSize} ${buttonColor[color]} ${buttonRadius}`}
    >
      {children}
    </button>
  );
};

export default Button;
