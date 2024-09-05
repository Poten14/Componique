"use client";

import DropDownBasic from "@components/DropDown/DropDownBasic";
import Select from "@components/Select/Select";
import SelectValueAdd from "@components/Select/SelectValueAdd";
import React from "react";

interface RemoteControlProps {
  buttonColor: string;
  setButtonColor: (
    color:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "red"
      | "orange"
      | "yellow"
      | "green"
      | "blue"
      | "purple"
      | "pink"
      | "basic",
  ) => void;
  placeholderText: string;
  setPlaceholderText: (text: string) => void;
  buttonVariant: string;
  setButtonVariant: (variant: "solid" | "border" | "flat" | "light") => void;
  buttonSize: string;
  setButtonSize: (size: "small" | "medium" | "large") => void;
}

const RemoteControl: React.FC<RemoteControlProps> = ({
  buttonColor,
  setButtonColor,
  placeholderText,
  setPlaceholderText,
  buttonVariant,
  setButtonVariant,
  buttonSize,
  setButtonSize,
}) => {
  return (
    <div className="bg-gray-200 fixed right-0 top-0 w-1/4 p-4">
      <h3 className="mb-4 text-xl font-bold">리모컨</h3>

      <div className="mb-4">
        <label className="mb-2 block font-medium">버튼 색상</label>
        {/* <select
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value as any)}
          className="w-full rounded-md border p-2"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
        </select> */}
        <Select
          option={["primary", "secondary", "success", "danger"]}
          onChange={(value) => setButtonColor(value as any)}
          className="w-full text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">플레이스홀더 텍스트</label>
        <input
          type="text"
          value={placeholderText}
          onChange={(e) => setPlaceholderText(e.target.value)}
          className="w-full rounded-md border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">버튼 사이즈</label>
        {/* <select
          value={buttonSize}
          onChange={(e) => setButtonSize(e.target.value as any)}
          className="w-full rounded-md border p-2"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select> */}
        <Select
          option={["small", "medium", "large"]}
          placeholder="Size"
          onChange={(value) => setButtonSize(value as any)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">버튼 스타일</label>
        <select
          value={buttonVariant}
          onChange={(e) => setButtonVariant(e.target.value as any)}
          className="w-full rounded-md border p-2"
        >
          <option value="solid">Solid</option>
          <option value="border">Border</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default RemoteControl;
