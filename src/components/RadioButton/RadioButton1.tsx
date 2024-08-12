"use client"; // 클라이언트 컴포넌트로 설정

import React, { useState } from "react";

// 라디오 버튼 프롭스 인터페이스 정의
interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: any) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
  label?: string;
}

// RadioButton 컴포넌트
const RadioButton1 = ({
  name,
  value,
  checked,
  onChange,
  disabled = false,
  size = "medium",
  color = "bg-[#9AC5E5]",
  label,
}: RadioButtonProps) => {
  // 크기 스타일 (변경 없음)
  let sizeStyle = "w-4 h-4";
  if (size === "small") {
    sizeStyle = "w-3 h-3";
  } else if (size === "large") {
    sizeStyle = "w-5 h-5";
  }

  // 색상 스타일 적용
  const colorClasses: { [key: string]: string } = {
    sky: "bg-[#9AC5E5] border-[#9AC5E5]",
    grey: "bg-[#DCDCDD] border-[#DCDCDD]",
    blue: "bg-[#558FFF] border-[#558FFF]",
    purple: "bg-[#C294F0] border-[#C294F0]",
    green: "bg-[#7EEFAF] border-[#7EEFAF]",
    yellow: "bg-[#EDCE7B] border-[#EDCE7B]",
    red: "bg-[#FF7676] border-[#FF7676]",
  };

  const selectedColorStyle =
    colorClasses[color] || "bg-blue-500 border-blue-500";

  return (
    <label
      className={`flex items-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`appearance-none rounded-full border-2 ${sizeStyle} ${
          checked ? selectedColorStyle : "border-gray-300 bg-white"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};

// RadioGroup 컴포넌트
const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  // 선택 상태 변경 핸들러
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-lg font-semibold">
        기본 라디오 버튼 - radioButton1
      </h1>
      <RadioButton1
        name="options"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButton1
        name="options"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Option 2"
        size="medium"
        color="grey"
      />
      <RadioButton1
        name="options"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Option 3"
        size="large"
        color="blue"
      />
      <RadioButton1
        name="options"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Option 4"
        size="small"
        color="purple"
      />
      <RadioButton1
        name="options"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Option 5"
        size="medium"
        color="green"
      />
      <RadioButton1
        name="options"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Option 6"
        size="large"
        color="yellow"
      />
      <RadioButton1
        name="options"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Option 7"
        size="small"
        color="red"
      />
      <p className="mt-4">Selected Option: {selectedValue}</p>
    </div>
  );
};

export default RadioButton1;
