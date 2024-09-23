import React from "react";
import { Color, ExtraSize, Speed } from "types/type";
interface SquareSpinnerProps {
    size?: ExtraSize;
    color?: Color;
    speed?: Speed;
}
declare const SquareSpinner: React.FC<SquareSpinnerProps>;
export default SquareSpinner;
