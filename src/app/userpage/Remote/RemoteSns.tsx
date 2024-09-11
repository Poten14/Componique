"use client";

import React, { useEffect, useState } from "react";
import { useSnsStore } from "app/store/useSnsStore";
import Select from "@components/Select/Select";

const SnsRemote: React.FC = () => {
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
    nickname,
    size,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    content,
    showDots,
    autoplay,
    interval,
    setSnsState,
  } = useSnsStore();

  const controls = [
    {
      label: "아이디",
      type: "text",
      value: nickname,
      onChange: (newValue: string) => setSnsState("nickname", newValue),
    },
    {
      label: "문구 작성",
      type: "text",
      value: content,
      onChange: (newValue: string) => setSnsState("content", newValue),
    },
    {
      label: "프로필 이미지 업로드-크기",
      type: "select",
      value: size,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setSnsState("size", newValue),
    },
    {
      label: "슬라이드 이미지 첫번째",
      type: "text",
      value: imageSrc1,
      onChange: (newValue: string) => setSnsState("imageSrc1", newValue),
    },
    {
      label: "슬라이드 이미지 두번째",
      type: "text",
      value: imageSrc2,
      onChange: (newValue: string) => setSnsState("imageSrc2", newValue),
    },
    {
      label: "슬라이드 이미지 세번째",
      type: "text",
      value: imageSrc3,
      onChange: (newValue: string) => setSnsState("imageSrc3", newValue),
    },
    {
      label: "자동 재생",
      type: "select",
      value: autoplay ? "true" : "false",
      options: ["true", "false"],
      onChange: (newValue: string) =>
        setSnsState("autoplay", JSON.parse(newValue)),
    },
    {
      label: "페이지네이션 점",
      type: "select",
      value: showDots ? "true" : "false",
      options: ["true", "false"],
      onChange: (newValue: string) =>
        setSnsState("showDots", JSON.parse(newValue)),
    },
    {
      label: "슬라이드 전환 시간",
      type: "string",
      value: interval,
      onChange: (newValue: string) => setSnsState("interval", newValue),
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
                placeholder={String(control.value)}
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

export default SnsRemote;
