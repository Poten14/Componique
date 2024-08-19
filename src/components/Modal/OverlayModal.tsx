import Button from "@components/Button/Button";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
//모달을 document.body에 렌더링하여 페이지 구조와 독립적으로 관리할 수 있게.
import { ExtraSize } from "types/type";

interface OverlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: ExtraSize;
  closeOnOverlayClick?: boolean;
  closeButtonText?: string;
  className?: string;
  showCloseIcon?: boolean; // 닫기 아이콘 표시 여부
}

const SizeClass = {
  xs: "max-w-xs w-11/12 sm:w-auto",
  small: "max-w-sm w-11/12 sm:w-auto",
  medium: "max-w-md w-11/12 sm:w-auto",
  large: "max-w-lg w-11/12 sm:w-auto",
  xl: "max-w-xl w-11/12 sm:w-auto",
  full: "max-w-full w-full h-full",
};
const MaxHeight = {
  xs: "calc(100vh - 650px)",
  small: "calc(100vh - 600px)",
  medium: "calc(100vh - 500px)",
  large: "calc(100vh - 400px)",
  xl: "calc(100vh - 300px)",
  full: "100vh",
};
const OverlayModal: React.FC<OverlayModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "medium",
  closeOnOverlayClick = true,
  className = "",
  closeButtonText = "Close",
  showCloseIcon = true,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className={`relative transform overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all ${SizeClass[size]} ${className}`}
        onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭하면 이벤트가 div 태그에서 부모로 전파되지 않도록 막기
      >
        {showCloseIcon && (
          <div className="absolute right-4 top-4">
            <button onClick={onClose} className="text-gray-500">
              &times;
            </button>
          </div>
        )}
        {title && (
          <div className="bg-gray-200 border-gray-300 px-4 py-2">
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
        )}
        <div
          className="overflow-y-auto p-4"
          style={{ maxHeight: MaxHeight[size] }}
        >
          {children}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button onClick={onClose}>{closeButtonText}</Button>
        </div>
      </div>
    </div>,
    document.body, // 모달을 body에 직접 렌더링
  );
};

export default OverlayModal;
