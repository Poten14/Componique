'use client'
import React from "react";
import { ReactNode, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const getPosition = (position: "top" | "bottom" | "left" | "right") => {
  switch (position) {
    case "top":
      return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    case "bottom":
      return "top-full left-1/2 transform -translate-x-1/2 mt-2";
    case "left":
      return "right-full top-1/2 transform -translate-y-1/2 mr-2";
    case "right":
      return "left-full top-1/2 transform -translate-y-1/2 ml-2";
    default:
      return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
  }
};

const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && (
        <div
          className={`absolute ${getPosition(position)} rounded-md p-2 dark:bg-[#1C2127] dark:text-[#DFDFDF] dark:border-[#dfdfdf] bg-white border-black border-2 text-black shadow-lg`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
export default Tooltip;
