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
    <div
      className={`remote-control m-auto mt-20 w-[350px] rounded-xl p-2 shadow-lg ${
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
          <label //옵션제목
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
