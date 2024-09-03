import React, { useState, useEffect } from "react";
import { ExtraSize } from "types/type";
import Button from "@components/Button/Button";

interface FormModalProps {
  open: boolean;
  size?: ExtraSize;
  onClose: () => void;
  title?: string;
  onSubmit: (data: { firstName: string; lastName: string }) => void;
  firstNameLabel?: string; // First name 라벨 텍스트
  lastNameLabel?: string; // Last name 라벨 텍스트
}

const sizeClasses = {
  xs: "max-w-xs w-full",
  small: "max-w-sm w-full",
  medium: "max-w-md w-full",
  large: "max-w-lg w-full",
  xl: "max-w-xl w-full",
};

const FormModal: React.FC<FormModalProps> = ({
  open,
  size = "large",
  onClose,
  title = "Create your account",
  onSubmit,
  firstNameLabel = "First Name",
  lastNameLabel = "Last Name",
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        className={`rounded-lg p-6 shadow-lg ${sizeClasses[size]} ${
          isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"
        }`}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭시 닫힘 방지
      >
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg">{title}</h2>
          <button
            onClick={onClose}
            className={`${
              isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-500"
            }`}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {firstNameLabel}
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={firstNameLabel}
            className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
                : "border-gray-300 focus:ring-primary bg-white text-black"
            }`}
          />
        </div>
        <div className="mt-4">
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {lastNameLabel}
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lastNameLabel}
            className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border-gray-600 bg-[#2A2E39] text-white focus:ring-blue-500"
                : "border-gray-300 focus:ring-primary bg-white text-black"
            }`}
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <Button
            onClick={onClose}
            variant="border"
            className={`${isDarkMode ? "border-none bg-Gray text-white" : ""}`}
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSubmit({ firstName, lastName })}
            variant="solid"
            className={`${isDarkMode ? "bg-Navy text-white" : ""}`}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
