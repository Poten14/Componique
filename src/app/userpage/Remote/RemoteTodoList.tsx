"use client";

import React, { useEffect, useState } from "react";
import { useTodoListStore } from "../../store/useTodoListStore";
import Select from "@components/Select/Select";

const TodoListRemote: React.FC = () => {
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
    textareaWidth,
    textareaSize,
    checkBoxSize,
    checkBoxColor,
    checkBoxVariant,
    placeholder,
    setTodoListState,
  } = useTodoListStore();

  const controls = [
    {
      label: "Textarea Width",
      type: "text",
      value: textareaWidth,
      onChange: (newValue: string) =>
        setTodoListState("textareaWidth", newValue),
    },
    {
      label: "Textarea Size",
      type: "select",
      options: ["xs", "small", "medium", "large", "xl"],
      value: textareaSize,
      onChange: (newValue: string) =>
        setTodoListState("textareaSize", newValue),
    },
    {
      label: "Checkbox Size",
      type: "select",
      options: ["small", "medium", "large"],
      value: checkBoxSize,
      onChange: (newValue: string) =>
        setTodoListState("checkBoxSize", newValue),
    },
    {
      label: "Checkbox Color",
      type: "select",
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
        "white",
        "gray",
        "black",
      ],
      value: checkBoxColor,
      onChange: (newValue: string) =>
        setTodoListState("checkBoxColor", newValue),
    },
    {
      label: "Checkbox Variant",
      type: "select",
      options: ["solid", "border"],
      value: checkBoxVariant,
      onChange: (newValue: string) =>
        setTodoListState("checkBoxVariant", newValue),
    },
    {
      label: "Placeholder",
      type: "text",
      value: placeholder,
      onChange: (newValue: string) => setTodoListState("placeholder", newValue),
    },
  ];

  return (
    <div
      className={`remote-control mx-auto mt-20 w-[350px] rounded-xl p-2 shadow-lg ${
        isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"
      } max-h-[900px] overflow-y-auto`}
    >
      <h2
        className={`p-5 text-xl font-bold ${
          isDarkMode ? "text-Navy" : "text-Primary"
        }`}
      >
        Control Panel
      </h2>
      {controls.map((control, index) => (
        <div
          key={index}
          className={`control-item m-3 rounded-lg p-2 shadow-md ${
            isDarkMode ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <label // 옵션 제목
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
  );
};

export default TodoListRemote;
