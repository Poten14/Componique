"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
type ToastProps = {
  isOpen?: boolean;
  postion?: "top" | "bottom" | "left" | "right";
  onClose?: () => void;
  children: React.ReactNode;
};

const Toast: React.FC<ToastProps> = ({
  children,
  isOpen = true,
  onClose,
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
  return (
    <>
      <section
        className={`min-w-md fixed left-1/2 top-10 w-11/12 -translate-x-1/2 -translate-y-1/2 transform ${
          isToastOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="flex w-full items-center justify-between rounded-md bg-Basic p-4"
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
