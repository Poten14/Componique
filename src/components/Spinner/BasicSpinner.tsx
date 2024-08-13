import React from "react";
import { ExtraSize, Speed } from "types/type";

type SpinnerColor =
  | "Basic"
  | "Primary"
  | "gray"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface SpinnerProps {
  size?: ExtraSize;
  color?: SpinnerColor;
  speed?: Speed;
}

const sizeClasses = {
  xs: "w-5 h-5 border-2",
  small: "w-10 h-10 border-4",
  medium: "w-16 h-16 border-4",
  large: "w-24 h-24 border-8",
  xl: "w-32 h-32 border-8",
};

const colorClasses = {
  Basic: "border-Basic",
  Primary: "border-Primary",
  gray: "border-gray",
  Secondary: "border-Secondary",
  Success: "border-Success",
  Warning: "border-Warning",
  Danger: "border-Danger",
};

// 속도에 따른 애니메이션 지속 시간을 설정하는 함수
const getAnimationDuration = (speed: Speed) => {
  switch (speed) {
    case "slow":
      return "3s"; // 느린 속도
    case "fast":
      return "0.7s"; // 빠른 속도
    case "medium":
    default:
      return "1s"; // 중간 속도
  }
};

const BasicSpinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "Primary",
  speed = "medium",
}) => {
  const animationDuration = getAnimationDuration(speed);

  return (
    <div
      className={`inline-block ${sizeClasses[size]} rounded-full border-solid border-t-transparent ${colorClasses[color]}`}
      style={{
        animation: `spin ${animationDuration} linear infinite`,
      }}
    ></div>
  );
};

export default BasicSpinner;
