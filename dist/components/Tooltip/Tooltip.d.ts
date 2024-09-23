import React from "react";
import { ReactNode } from "react";
interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}
declare const Tooltip: ({ content, children, position, }: TooltipProps) => React.JSX.Element;
export default Tooltip;
