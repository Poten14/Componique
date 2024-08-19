"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { ToastProps } from "./ToastType";
import { bgColors, borderColors } from "./ToastColor";
const Toast: React.FC<ToastProps> = ({
  children,
  isOpen = true,
  onClose,
  color = "basic",
  size = "large",
  position = "leftBottom",
  text = "left",
  variant = "solid",
  isClose = false,
  time,
  path,
  ...rest
}) => {
  const [isToastOpen, setIsToastOpen] = useState(isOpen);
  const router = useRouter();

  useEffect(() => {
    setIsToastOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (time) {
      const timeout = setTimeout(
        () => {
          setIsToastOpen(false);
          if (onClose) onClose();
        },
        // time을 초 단위로 만들기
        parseInt(time) * 1000,
      );
      // 컴포넌트가 언마운트되거나 time이 변경되면 타이머 정리(타이머 취소)
      return () => clearTimeout(timeout);
    }
  }, [time, onClose]);

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

  let ToastVariant = "";
  let closeButtonColor = "";

  if (variant === "solid") {
    ToastVariant = `${bgColors[color]}`;
    closeButtonColor = color === "white" ? "bg-slate-400" : "bg-white";
  } else if (variant === "border") {
    ToastVariant = `${borderColors[color]}`;
    closeButtonColor =
      color === "white" ? "bg-slate-400" : bgColors[color] || "bg-slate-400";
  }
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

  const ToastTextAlign = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  const BasicToast = "min-w-md   box-border fixed select-none ";
  return (
    <div>
      <section
        className={`${BasicToast} ${ToastPosition[position]} ${ToastSize[size]} ${
          isToastOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } ${path ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (path) {
            router.push(path);
          }
        }}
      >
        <div
          className={`flex items-center justify-between rounded-md ${ToastVariant} p-4`}
          {...rest}
        >
          <div className={`${ToastTextAlign[text]} w-full`}>{children}</div>
          <button
            className={`group relative ml-2 h-4 w-4 bg-transparent ${isClose ? "hidden" : "block"}`}
            onClick={onclickCloseHandler}
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform ${closeButtonColor}`}
            ></span>
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform ${closeButtonColor}`}
            ></span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Toast;
