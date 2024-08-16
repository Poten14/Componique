"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { Size } from "types/type";
type ToastProps = {
  size?: Size;
  isOpen?: boolean;
  postion?: "top" | "bottom" | "left" | "right";
  onClose?: () => void;
  children: React.ReactNode;
};

const Toast: React.FC<ToastProps> = ({
  children,
  isOpen = true,
  onClose,
  size = "large",
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

  const ToastSize =
    size === "small" ? "w-4/12" : size === "medium" ? "w-6/12" : "w-full";
  const BasicToast =
    "min-w-md fixed left-1/2 top-10 w-11/12 -translate-x-1/2 -translate-y-1/2 transform";
  return (
    <>
      <section
        className={`${BasicToast} ${
          isToastOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-md bg-Basic p-4 ${ToastSize}`}
          {...rest}
        >
          {children}

          <button
            className="group relative h-4 w-4 bg-transparent"
            onClick={onclickCloseHandler}
          >
            <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></span>
            <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-white"></span>
          </button>
        </div>
      </section>
    </>
  );
};
export default Toast;
