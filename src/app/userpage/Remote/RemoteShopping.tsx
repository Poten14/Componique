"use client";

import React, { useEffect, useState } from "react";
import { useShoppingStore } from "../../store/useShoppingStore";
import Select from "@components/Select/Select";

const RemoteShopping: React.FC = () => {
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

  const {
    title,
    subtitle,
    title2,
    currentPage,
    totalPages,
    paginationVariant,
    paginationStyleType,
    paginationColor,
    logoSrc,
    logoName,
    hoverColor,
    size,
    position,
    setShoppingState,
  } = useShoppingStore();

  const controls = [
    // Navbar 관련 컨트롤 추가
    {
      label: "Logo URL",
      type: "text",
      value: logoSrc,
      onChange: (newValue: string) => setShoppingState("logoSrc", newValue),
    },
    {
      label: "Logo 이름",
      type: "text",
      value: logoName,
      onChange: (newValue: string) => setShoppingState("logoName", newValue),
    },
    {
      label: "Navbar 클릭 색상",
      type: "select",
      value: hoverColor,
      options: ["skyblue", "blue", "red"],
      onChange: (newValue: string) => setShoppingState("hoverColor", newValue),
    },
    {
      label: "Navbar 위치",
      type: "select",
      value: position,
      options: ["sticky", "relative", "static"],
      onChange: (newValue: string) => setShoppingState("position", newValue),
    },
    {
      label: "Navbar 크기",
      type: "select",
      value: size,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setShoppingState("size", newValue),
    },
    {
      label: "제목",
      type: "text",
      value: title,
      onChange: (newValue: string) => setShoppingState("title", newValue),
    },

    {
      label: "설명",
      type: "text",
      value: subtitle,
      onChange: (newValue: string) => setShoppingState("subtitle", newValue),
    },
    {
      label: "현재 페이지",
      type: "text",
      value: String(currentPage),
      onChange: (newValue: string) =>
        setShoppingState("currentPage", parseInt(newValue, 10)),
    },
    {
      label: "전체 페이지 수",
      type: "text",
      value: String(totalPages),
      onChange: (newValue: string) =>
        setShoppingState("totalPages", parseInt(newValue, 10)),
    },
    {
      label: "버튼 모양",
      type: "select",
      value: paginationVariant,
      options: ["circle", "square"],
      onChange: (newValue: string) =>
        setShoppingState("paginationVariant", newValue),
    },
    {
      label: "Pagination 스타일",
      type: "select",
      value: paginationStyleType,
      options: ["filled", "outlined", "outlined-focused", "filled-outlined"],
      onChange: (newValue: string) =>
        setShoppingState("paginationStyleType", newValue),
    },
    {
      label: "Pagination 색상",
      type: "select",
      value: paginationColor,
      options: [
        "Basic",
        "Primary",
        "gray",
        "Secondary",
        "Success",
        "Warning",
        "Danger",
        "White",
      ],
      onChange: (newValue: string) =>
        setShoppingState("paginationColor", newValue),
    },
    {
      label: "부제목",
      type: "text",
      value: title2,
      onChange: (newValue: string) => setShoppingState("title2", newValue),
    },
  ];

  return (
    <div className="relative shadow-xl">
      {/* 하늘색 배경 박스 추가 */}
      <div
        className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-Navy`}
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
      </div>

      {/* Control 패널 */}
      <div
        className={`remote-control top-26 relative m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${
          isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"
        } max-h-[calc(100vh-220px)] overflow-y-auto`}
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

export default RemoteShopping;
