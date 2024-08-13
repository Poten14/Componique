"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Size } from "types/type";
type CheckBoxProps = {
  boxSize?: Size;
  description?: string;
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
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  id,
  name,
  description,
  color = "basic",
  boxSize = "medium",
  ...rest
}) => {
  const [checkId, setCheckId] = useState<string | undefined>(undefined);
  // 클라이언트 측에서만 UUID 생성하기 위해 useEffect 사용
  useEffect(() => {
    setCheckId(`${description}-${uuidv4()}`);
  }, [description]);
  //dependencies array에 description인 이유는 description의 내용이 변경될때 마다 새로운 uuid를 넣는 것이 좋다고 생각함

  if (!checkId) {
    return null;
  }

  const checkBoxSize =
    boxSize === "small"
      ? "w-4  h-4 after:border-b-[0.14em] after:border-r-[0.14em] "
      : boxSize === "medium"
        ? "w-5 h-5"
        : "w-7 h-7";

  const checkBoxLabel =
    boxSize === "small"
      ? "text-sm "
      : boxSize === "medium"
        ? "text-md"
        : "text-lg";

  const colors = {
    primary:
      "checked:!bg-Primary checked:!border-Primary hover:!border-Primary",
    secondary:
      "checked:!bg-Secondary checked:!border-Secondary hover:!border-Secondary",
    success:
      "checked:!bg-Success checked:!border-Success hover:!border-Success",
    warning:
      "checked:!bg-Warning checked:!border-Warning hover:!border-Warning",
    danger: "checked:!bg-Danger checked:!border-Danger hover:!border-Danger",
    red: "checked:!bg-Red checked:!border-Red hover:!border-Red",
    orange: "checked:!bg-Orange checked:!border-Orange hover:!border-Orange",
    yellow: "checked:!bg-Yellow checked:!border-Yellow hover:!border-Yellow",
    green: "checked:!bg-Green checked:!border-Green hover:!border-Green",
    blue: "checked:!bg-Blue checked:!border-Blue hover:!border-Blue",
    purple: "checked:!bg-Purple checked:!border-Purple hover:!border-Purple",
    pink: "checked:!bg-Pink checked:!border-Pink hover:!border-Pink",
    basic: "checked:!bg-Basic checked:!border-Basic hover:!border-Basic",
  };

  const basicCheckBox =
    "relative aspect-square h-5 w-5 cursor-pointer !appearance-none rounded border border-gray bg-white !outline-none !ring-0 !ring-offset-0 transition-all duration-300 ease-in-out after:absolute after:left-[50%] after:top-[40%] after:h-[53%] after:w-[35%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:border-b-[0.20em] after:border-r-[0.20em] after:border-b-white after:border-r-white after:transition-all after:duration-200 after:ease-linear checked:!border-Basic checked:bg-Basic checked:after:rotate-45 checked:after:opacity-100 hover:!border-Basic disabled:bg-slate-300 disabled:after:border-b-0 disabled:after:border-r-0";
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        value={value}
        id={checkId}
        className={`${basicCheckBox} ${checkBoxSize} ${colors[color]}`}
        {...rest}
      />
      <label htmlFor={checkId} className={`ml-1 select-none ${checkBoxLabel}`}>
        {description}
      </label>
    </div>
  );
};
export default CheckBox;
