"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { Color16, Size } from "types/type";
type ToastProps = {
  size?: Size;
  isOpen?: boolean;
  isClose?: boolean;
  position?:
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "centerTop"
    | "centerBottom"
    | "left"
    | "right"
    | "center";
  onClose?: () => void;
  children: React.ReactNode;
  color?: Color16;
};

const Toast: React.FC<ToastProps> = ({
  children,
  isOpen = true,
  onClose,
  color = "basic",
  size = "large",
  position = "centerBottom",
  ...rest
}) => {
  const [isToastOpen, setIsToastOpen] = useState(isOpen);
  const router = useRouter();

  useEffect(() => {
    setIsToastOpen(isOpen);
  }, [isOpen]);

  const onclickCloseHandler = () => {
    setIsToastOpen(false);
    if (onClose) onClose();
  };
  const ToastSize = {
    small:
      "min-w-[200px] sm:min-w-[250px]  md:min-w-[390px] lg:min-w-[575px] xl:min-w-[650px]",
    medium:
      "min-w-[300px] sm:min-w-[375px]  md:min-w-[585px] lg:min-w-[863px] xl:min-w-[975px]",
    large:
      "min-w-[400px] sm:min-w-[500px]  md:min-w-[780px] lg:min-w-[1150px] xl:min-w-[1300px]",
  };

  const bgColors = {
    primary: "bg-Primary",
    secondary: "bg-Secondary",
    success: "bg-Success",
    warning: "bg-Warning",
    danger: "bg-Danger",
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    basic: "bg-Basic",
    white: "bg-white",
    gray: "bg-gray",
    black: "bg-black",
  };
  const ToastPosition = {
    leftTop: "top-0 left-0",
    centerTop: "top-0 left-1/2 -translate-x-1/2 ",
    rightTop: "top-0  right-0 ",
    left: "top-1/2 left-0 transform -translate-y-1/2 ",
    center: "top-1/2 left-1/2 -translate-x-1/2 ",
    right: "top-1/2 right-0 ",
    leftBottom: "bottom-0 left-0 ",
    centerBottom: "bottom-0 left-1/2 -translate-x-1/2 ",
    rightBottom: "bottom-0 right-0  ",
  };

  const BasicToast = "min-w-md   box-border fixed select-none ";
  return (
    <div>
      <section
        className={`${BasicToast} ${ToastPosition[position]} ${ToastSize[size]} ${
          isToastOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-md bg-Basic ${bgColors[color]} p-4`}
          {...rest}
        >
          {children}

          <button
            className="group relative ml-2 h-4 w-4 bg-transparent"
            onClick={onclickCloseHandler}
          >
            <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></span>
            <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-white"></span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Toast;
