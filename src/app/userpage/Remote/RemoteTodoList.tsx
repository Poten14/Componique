"use client";

import React, { useEffect, useState } from "react";
import { useTodoListStore } from "app/store/useTodoListStore";
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
    addButtonColor,
    addButtonSize,
    addButtonVariant,
    deleteButtonColor,
    deleteButtonSize,
    deleteButtonVariant,
    todoList1,
    todoList2,
    todoList3,
    todoList4,
    inputSize,
    inputWidth,
    setTodoListState,
  } = useTodoListStore();

  const controls = [
    {
      label: "AddButton Color",
      type: "select",
      value: addButtonColor,
      options: ["primary", "secondary", "success", "danger"],
      onChange: (newValue: string) =>
        setTodoListState("addButtonColor", newValue),
    },
    {
      label: "AddButton Size",
      type: "select",
      value: addButtonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) =>
        setTodoListState("addButtonSize", newValue),
    },
    {
      label: "AddButton Variant",
      type: "select",
      value: addButtonVariant,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) =>
        setTodoListState("addButtonVariant", newValue),
    },
    // 두 번째 버튼
    {
      label: "deleteButton Color",
      type: "select",
      value: deleteButtonColor,
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
      onChange: (newValue: string) =>
        setTodoListState("deleteButtonColor", newValue),
    },
    {
      label: "Button2 Size",
      type: "select",
      value: deleteButtonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) =>
        setTodoListState("deleteButtonSize", newValue),
    },
    {
      label: "Button2 Variant",
      type: "select",
      value: deleteButtonVariant,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) =>
        setTodoListState("deleteButtonVariant", newValue),
    },
    {
      label: "TodoList1 Placeholder",
      type: "text",
      value: todoList1,
      onChange: (newValue: string) => setTodoListState("todoList1", newValue),
    },
    {
      label: "TodoList2 Placeholder",
      type: "text",
      value: todoList2,
      onChange: (newValue: string) => setTodoListState("todoList2", newValue),
    },
    {
      label: "TodoList3 Placeholder",
      type: "text",
      value: todoList3,
      onChange: (newValue: string) => setTodoListState("todoList3", newValue),
    },
    {
      label: "TodoList4 Placeholder",
      type: "text",
      value: todoList4,
      onChange: (newValue: string) => setTodoListState("todoList4", newValue),
    },
    {
      label: "Input Size",
      type: "select",
      value: inputSize,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setTodoListState("inputSize", newValue),
    },
    {
      label: "Input Width",
      type: "text",
      value: inputWidth,
      onChange: (newValue: string) => setTodoListState("inputWidth", newValue),
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

export default TodoListRemote;
