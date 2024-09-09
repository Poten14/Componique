"use client";

import React, { useEffect, useState } from "react";
import { useLoginStore } from "../../store/useLoginStore";
import Select from "@components/Select/Select";

const RemoteLogin: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    };

    checkDarkMode(); // 초기 다크 모드 상태 체크
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
  const {
    title,
    buttonColor,
    buttonSize,
    buttonVariant,
    buttonColor2,
    buttonSize2,
    buttonVariant2,
    placeholder,
    placeholder2,
    inputSize,
    inputWidth,
    setLoginState,
  } = useLoginStore();

  const controls = [
    {
      label: "Title",
      type: "text",
      value: title,
      onChange: (newValue: string) => setLoginState("title", newValue),
    },
    {
      label: "Button Color",
      type: "select",
      value: buttonColor,
      options: ["primary", "secondary", "success", "danger"],
      onChange: (newValue: string) => setLoginState("buttonColor", newValue),
    },
    {
      label: "Button Size",
      type: "select",
      value: buttonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setLoginState("buttonSize", newValue),
    },
    {
      label: "Button Variant",
      type: "select",
      value: buttonVariant,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) => setLoginState("buttonVariant", newValue),
    },
    // 두 번째 버튼
    {
      label: "Button2 Color",
      type: "select",
      value: buttonColor2,
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "basic",
      ],
      onChange: (newValue: string) => setLoginState("buttonColor2", newValue),
    },
    {
      label: "Button2 Size",
      type: "select",
      value: buttonSize2,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setLoginState("buttonSize2", newValue),
    },
    {
      label: "Button2 Variant",
      type: "select",
      value: buttonVariant2,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) => setLoginState("buttonVariant2", newValue),
    },
    {
      label: "Input Placeholder",
      type: "text",
      value: placeholder,
      onChange: (newValue: string) => setLoginState("placeholder", newValue),
    },
    {
      label: "Input Placeholder2",
      type: "text",
      value: placeholder2,
      onChange: (newValue: string) => setLoginState("placeholder2", newValue),
    },
    {
      label: "Input Size",
      type: "select",
      value: inputSize,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setLoginState("inputSize", newValue),
    },
    {
      label: "Input Width",
      type: "text",
      value: inputWidth,
      onChange: (newValue: string) => setLoginState("inputWidth", newValue),
    },
  ];

  return (
    <div className="relative">
      {/* 하늘색 배경 박스 추가 */}
      <div
        className={`absolute left-0 z-10 m-auto w-[350px] rounded-2xl bg-[#D8EAF8] p-5 shadow-xl dark:bg-Navy`}
      >
        <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
          Control Panel
        </h2>
        <input
          type="text"
          className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#102B3F] dark:text-[#ffffff]"
          placeholder="   customizing your template"
          disabled
        />
        <input
          className={`mt-2 h-2 w-full rounded bg-[#BBD9F0] dark:bg-[#102B3F]`}
          disabled
        />
        <input
          className={`mt-2 h-2 w-full rounded bg-[#BBD9F0] dark:bg-[#102B3F]`}
          disabled
        />
      </div>

      {/* Control 패널 */}
      <div
        className={`remote-control relative top-36 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-2xl ${
          isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"
        } max-h-[1000px] overflow-y-auto`}
      >
        {controls.map((control, index) => (
          <div
            key={index}
            className={`control-item m-3 rounded-lg p-2 shadow-md ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <label
              className={`mb-2 block font-medium ${
                isDarkMode ? "text-[#dfdfdf]" : "text-Gray"
              }`}
            >
              {control.label}
            </label>
            {control.type === "select" ? (
              <Select
                option={control.options || []}
                placeholder={control.value}
                onChange={(newValue) => control.onChange(newValue)}
                className="w-full"
              />
            ) : (
              <input
                type="text"
                value={control.value}
                onChange={(e) => control.onChange(e.target.value)}
                className={`w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${
                  isDarkMode
                    ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                    : "border-gray bg-white"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteLogin;
