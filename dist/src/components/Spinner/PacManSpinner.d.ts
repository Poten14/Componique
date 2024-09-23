import React from "react";
import { Color, Size, Speed } from "types/type";
interface SpinnerProps {
    size?: Size;
    color?: Color;
    speed?: Speed;
}
declare const PacManSpinner: React.FC<SpinnerProps>;
export default PacManSpinner;
