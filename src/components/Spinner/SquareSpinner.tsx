import React from "react";
<<<<<<< HEAD
import { Color, ExtraSize, Speed } from "types/type";

interface SquareSpinnerProps {
  size?: ExtraSize;
  color?: Color;
=======
import { ExtraSize, Speed } from "types/type";

interface SquareSpinnerProps {
  size?: ExtraSize;
  color?: SpinnerColor;
>>>>>>> c770ad5 (feat: square,bars,basic spinner 구현 (#30))
  speed?: Speed;
}

const sizeClasses = {
  xs: "h-3 w-3",
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
  xl: "h-10 w-10",
};

<<<<<<< HEAD
const colorClasses = {
  Basic: "bg-Basic",
  Primary: "bg-Primary",
  gray: "bg-gray",
  Secondary: "bg-Secondary",
  Success: "bg-Success",
  Warning: "bg-Warning",
  Danger: "bg-Danger",
  White: "bg-white",
};
=======
type SpinnerColor =
  | "Basic"
  | "Primary"
  | "gray"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";
>>>>>>> c770ad5 (feat: square,bars,basic spinner 구현 (#30))

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
<<<<<<< HEAD
          className={`${sizeClasses[size]} ${speedClasses[speed]} ${colorClasses[color]} rounded`}
=======
          className={`${sizeClasses[size]} ${speedClasses[speed]} bg-${color} rounded`}
>>>>>>> c770ad5 (feat: square,bars,basic spinner 구현 (#30))
        ></div>
      ))}
    </div>
  );
};

export default SquareSpinner;
