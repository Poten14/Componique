import React from "react";
import { Color, ExtraSize, Speed } from "types/type";
interface SpinnerProps {
    size?: ExtraSize;
    color?: Color;
    speed?: Speed;
}
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
