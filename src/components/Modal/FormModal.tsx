import React, { useState } from "react";
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
  xs: "max-w-xs w-full", // 너비를 설정하여 모달이 확실히 크기가 조정되도록 함
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
  firstNameLabel = "id",
  lastNameLabel = "password",
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ margin: 0 }}
    >
      <div
        className={`rounded-lg bg-white p-6 shadow-lg ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭시 닫힘 방지
      >
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <label className="text-gray-700 block text-sm font-medium">
            {firstNameLabel}
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={firstNameLabel}
            className="focus:ring-primary mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="mt-4">
          <label className="text-gray-700 block text-sm font-medium">
            {lastNameLabel}
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lastNameLabel}
            className="focus:ring-primary mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <Button onClick={onClose} variant="border">
            Cancel
          </Button>
          <Button
            onClick={() => onSubmit({ firstName, lastName })}
            variant="solid"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
