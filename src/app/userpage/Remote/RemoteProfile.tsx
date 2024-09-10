"use client";

import React from "react";
import { useProfileStore } from "app/store/useProfileStore";
import Select from "@components/Select/Select";
import { useEffect, useState } from "react";
const ProfileRemote: React.FC = () => {
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
    shape,
    size,
    color,
    variant,
    text,
    iconSize,
    iconColor,
    iconPosition,
    nickname,
    placeholder,
    location,
    job,
    email,
    setProfileState,
  } = useProfileStore();

  const controls = [
    {
      label: "이미지 업로드-모양",
      type: "select",
      value: shape,
      options: ["rectangle", "circle"],
      onChange: (newValue: string) => setProfileState("shape", newValue),
    },
    {
      label: "이미지 업로드-크기",
      type: "select",
      value: size,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setProfileState("size", newValue),
    },
    {
      label: "이미지 업로드-색상",
      type: "select",
      value: color,
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
      onChange: (newValue: string) => setProfileState("color", newValue),
    },
    {
      label: "이미지 업로드-스타일",
      type: "select",
      value: variant,
      options: ["solid", "border"],
      onChange: (newValue: string) => setProfileState("variant", newValue),
    },
    {
      label: "이미지 업로드-텍스트",
      type: "text",
      value: text,
      onChange: (newValue: string) => setProfileState("text", newValue),
    },
    {
      label: "이미지 업로드-아이콘 사이즈",
      type: "select",
      value: iconSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setProfileState("iconSize", newValue),
    },
    {
      label: "이미지 업로드-아이콘 색상 / ex: #fff or red",
      type: "text",
      value: iconColor,
      onChange: (newValue: string) => setProfileState("iconColor", newValue),
    },
    {
      label: "이미지 업로드-아이콘 위치",
      type: "select",
      value: iconPosition,
      options: ["left", "right", "top", "bottom"],
      onChange: (newValue: string) => setProfileState("iconPosition", newValue),
    },
    {
      label: "이름",
      type: "text",
      value: nickname,
      onChange: (newValue: string) => setProfileState("nickname", newValue),
    },
    {
      label: "자기소개",
      type: "text",
      value: placeholder,
      onChange: (newValue: string) => setProfileState("placeholder", newValue),
    },
    {
      label: "직업",
      type: "text",
      value: job,
      onChange: (newValue: string) => setProfileState("job", newValue),
    },
    {
      label: "지역",
      type: "text",
      value: location,
      onChange: (newValue: string) => setProfileState("location", newValue),
    },
    {
      label: "메일",
      type: "text",
      value: email,
      onChange: (newValue: string) => setProfileState("email", newValue),
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
        } max-h-[800px] overflow-y-auto`}
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

export default ProfileRemote;
