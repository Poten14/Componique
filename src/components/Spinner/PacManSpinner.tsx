import React from "react";
import { Color, Size, Speed } from "types/type";

interface SpinnerProps {
  size?: Size;
  color?: Color;
  speed?: Speed;
}

const sizeClasses = {
  small: "w-12 h-12",
  medium: "w-16 h-16",
  large: "w-24 h-24",
};

const borderWidths = {
  small: "32px",
  medium: "50px",
  large: "60px",
};

const colorClasses = {
  Basic: "border-Basic",
  Primary: "border-Primary",
  gray: "border-gray",
  Secondary: "border-Secondary",
  Success: "border-Success",
  Warning: "border-Warning",
  Danger: "border-Danger",
  White: "border-white",
};

const speedClasses = {
  slow: "animate-spin-slow",
  medium: "animate-spin",
  fast: "animate-spin-fast",
};

const PacManSpinner: React.FC<SpinnerProps> = ({
  size = "small",
  color = "Basic",
  speed = "medium",
}) => {
  return (
    <div
      className={`relative ${sizeClasses[size]} ${speedClasses[speed]} ${colorClasses[color]} rounded-full border-solid border-t-transparent`}
      style={{
        borderWidth: borderWidths[size],
      }}
    ></div>
  );
};

export default PacManSpinner;
