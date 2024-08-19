import React from "react";
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
  showCloseIcon?: boolean; // 닫기 아이콘 표시 여부
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
  primary: "bg-Basic text-white px-4 py-2 rounded-md",
  secondary: "bg-gray text-white px-4 py-2 rounded-md",
  danger: "bg-danger text-white px-4 py-2 rounded-md",
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
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ margin: 0 }}
    >
      <div
        className={`relative rounded-lg bg-white p-6 shadow-lg ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭하면 이벤트가 div 태그에서 부모로 전파되지 않도록 막기
      >
        {/* 닫기 아이콘 */}
        {showCloseIcon && (
          <button
            className="text-gray-500 hover:text-gray-700 absolute right-2 top-2"
            onClick={onClose}
          >
            &times;
          </button>
        )}
        {children} {/* 모달 내부에 표시할 내용 */}
        <div className="mt-4 flex justify-center space-x-2">
          {secondaryButton && (
            <button
              onClick={secondaryButton.onClick || onClose}
              className={buttonClasses[secondaryButton.variant || "secondary"]}
            >
              {secondaryButton.text}
            </button>
          )}
          {primaryButton && (
            <button
              onClick={primaryButton.onClick || onClose}
              className={buttonClasses[primaryButton.variant || "primary"]}
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
