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
        className={`relative rounded-lg p-6 shadow-lg ${sizeClasses[size]} ${
          isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
        }`}
        onClick={(e) => e.stopPropagation()}
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
