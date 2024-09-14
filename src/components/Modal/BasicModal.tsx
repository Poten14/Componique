import React, { useEffect, useState } from "react";
import { ExtraSize } from "types/type";

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

interface ModalProps {
  open: boolean;
  size?: ExtraSize | "full";
  onClose: () => void;
  children?: any;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  showCloseIcon?: boolean;
  className?: string;
}

const sizeClasses = {
  xs: "max-w-xs",
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full w-full h-full",
};

const buttonClasses = {
  primary: "px-4 py-2 rounded-md",
  secondary: "px-4 py-2 rounded-md",
  danger: "px-4 py-2 rounded-md",
};

export const BasicModal: React.FC<ModalProps> = ({
  open,
  size = "medium",
  onClose,
  primaryButton,
  secondaryButton,
  children,
  showCloseIcon = true,
  className,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode();
    window.addEventListener("storage", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", checkDarkMode);
      observer.disconnect();
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ margin: 0 }}
    >
      <div
        className={`relative overflow-auto rounded-lg p-6 shadow-lg ${className || ""} ${sizeClasses[size]} ${
          isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "90vh", // 모달의 최대 높이를 설정하여 화면 밖으로 넘어가지 않게 함
          maxWidth: "90vw", // 모달의 최대 너비를 설정하여 가로 스크롤 방지
          whiteSpace: "pre-wrap", // 가로 스크롤 방지
          wordWrap: "break-word", // 단어 잘라서 줄바꿈
          overflowWrap: "break-word", // 가로 스크롤 방지
        }}
      >
        {showCloseIcon && (
          <button
            className={`absolute right-2 top-2 ${
              isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={onClose}
          >
            &times;
          </button>
        )}
        {children}
        <div className="mt-4 flex justify-center space-x-2">
          {secondaryButton && (
            <button
              onClick={secondaryButton.onClick || onClose}
              className={`${buttonClasses.secondary} ${
                isDarkMode ? "bg-Gray text-white" : "bg-gray text-white"
              }`}
            >
              {secondaryButton.text}
            </button>
          )}
          {primaryButton && (
            <button
              onClick={primaryButton.onClick || onClose}
              className={`${buttonClasses.primary} ${
                isDarkMode ? "bg-Navy text-white" : "bg-Basic text-white"
              }`}
            >
              {primaryButton.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
