"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { ToastPosition } from "./ToastPosition";
import { bgColors, borderColors } from "./ToastColor";

import type { ToastProps } from "./ToastType";

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
  isProgress = true,
  className,
  time,
  path,
  ...rest
}) => {
  const [isToastOpen, setIsToastOpen] = useState(isOpen);
  const [progress, setProgress] = useState(100);
  const router = useRouter();

  useEffect(() => {
    setIsToastOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (time) {
      // 총 시간, 사용하는 곳에서 time =""를 설정한 값
      const totalTime = parseInt(time) * 1000;
      // 프로그래스바의 업데이트 간격 : 프로그래스 바를 1%씩 줄이기 위한 간격
      const interval = totalTime / 100;
      // setTimeout을 사용해서 totalTime이 지나면 Toast가 닫히도록 setIsToastOpen(false)를 호출함
      const timeout = setTimeout(() => {
        setIsToastOpen(false);
        if (onClose) onClose();
      }, totalTime);
      //setInterval을 사용해서 progress 상태를 interval마다 1%씩 줄임
      const progressId = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 1 : 0));
      }, interval);

      return () => {
        clearTimeout(timeout);
        clearInterval(progressId);
      };
    }
  }, [time, onClose]);

  const onclickCloseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //path 입력 시 닫기 버튼은 path가 작동되지 않도록 하기 위해서 사용함
    e.stopPropagation();
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
  let progressBarColor = "";

  if (variant === "solid") {
    ToastVariant = `${bgColors[color]}`;
    closeButtonColor = color === "white" ? "bg-slate-400" : "bg-white";
    progressBarColor = "bg-gray";
  } else if (variant === "border") {
    ToastVariant = `${borderColors[color]}`;
    closeButtonColor =
      color === "white" ? "bg-slate-400" : bgColors[color] || "bg-slate-400";
    progressBarColor = bgColors[color];
  }

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
        } ${path ? "cursor-pointer" : ""} ${className || ""}`}
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
            className={`z-999 group relative ml-2 h-4 w-4 bg-transparent ${isClose ? "hidden" : "block"}`}
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
        {isProgress && (
          <div className="bg-gray-200 relative h-1 w-full rounded">
            {/* div의 너비는 progress 상태에 의해 동적으로 설정됨, 처음에는 100%로 시작하고 시간이 지나면서 점차 줄어들게 됨 */}
            <div
              className={`absolute left-0 h-full ${progressBarColor} rounded ${variant === "solid" ? "top-[-4px]" : "top-[-6px]"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </section>
    </div>
  );
};
export default Toast;
