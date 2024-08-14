import React from "react";
import { ExtraSize, Speed } from "types/type";

interface SquareSpinnerProps {
  size?: ExtraSize;
  color?: SpinnerColor;
  speed?: Speed;
}

const sizeClasses = {
  xs: "h-3 w-3",
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
  xl: "h-10 w-10",
};

type SpinnerColor =
  | "Basic"
  | "Primary"
  | "gray"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

const speedClasses = {
  slow: "animate-spin-slow",
  medium: "animate-spin",
  fast: "animate-spin-fast",
};

const SquareSpinner: React.FC<SquareSpinnerProps> = ({
  size = "medium",
  color = "Primary",
  speed = "medium",
}) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${speedClasses[speed]} bg-${color} rounded`}
        ></div>
      ))}
    </div>
  );
};

export default SquareSpinner;
