"use client";

import React from "react";
import { useSurveyStore } from "app/store/useSurveyStore";
import { useEffect, useState } from "react";
import Select from "@components/Select/Select";
const SurveyRemote: React.FC = () => {
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
    title1,
    description1,
    checkboxSize,
    checkboxColor,
    checkboxVariant,
    checkboxText1,
    checkboxText2,
    checkboxText3,
    checkboxText4,
    title2,
    description2,
    radiobuttonSize,
    radiobuttonColor,
    radioLabel1,
    radioLabel2,
    radioLabel3,
    radioLabel4,
    radioLabel5,
    cancelButton,
    submitButton,
    setSurveyState,
  } = useSurveyStore();

  const controls = [
    {
      label: "설문조사1-제목",
      type: "text",
      value: title1,
      onChange: (newValue: string) => setSurveyState("title1", newValue),
    },
    {
      label: "설문조사1-설명",
      type: "text",
      value: description1,
      onChange: (newValue: string) => setSurveyState("description1", newValue),
    },
    {
      label: "체크박스-사이즈",
      type: "select",
      value: checkboxSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setSurveyState("checkboxSize", newValue),
    },
    {
      label: "체크박스-색상",
      type: "select",
      value: checkboxColor,
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
      onChange: (newValue: string) => setSurveyState("checkboxColor", newValue),
    },
    {
      label: "체크박스-스타일",
      type: "select",
      value: checkboxVariant,
      options: ["solid", "border"],
      onChange: (newValue: string) =>
        setSurveyState("checkboxVariant", newValue),
    },
    {
      label: "체크박스-텍스트1",
      type: "text",
      value: checkboxText1,
      onChange: (newValue: string) => setSurveyState("checkboxText1", newValue),
    },
    {
      label: "체크박스-텍스트2",
      type: "text",
      value: checkboxText2,
      onChange: (newValue: string) => setSurveyState("checkboxText2", newValue),
    },
    {
      label: "체크박스-텍스트3",
      type: "text",
      value: checkboxText3,
      onChange: (newValue: string) => setSurveyState("checkboxText3", newValue),
    },
    {
      label: "체크박스-텍스트4",
      type: "text",
      value: checkboxText4,
      onChange: (newValue: string) => setSurveyState("checkboxText4", newValue),
    },

    {
      label: "설문조사2-제목",
      type: "text",
      value: title2,
      onChange: (newValue: string) => setSurveyState("title2", newValue),
    },
    {
      label: "설문조사2-설명",
      type: "text",
      value: description2,
      onChange: (newValue: string) => setSurveyState("description2", newValue),
    },
    {
      label: "라디오버튼-사이즈",
      type: "select",
      value: radiobuttonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) =>
        setSurveyState("radiobuttonSize", newValue),
    },
    {
      label: "라디오버튼-색상",
      type: "select",
      value: radiobuttonColor,
      options: ["sky", "gray", "blue", "purple", "green", "yellow", "red"],
      onChange: (newValue: string) =>
        setSurveyState("radiobuttonColor", newValue),
    },
    {
      label: "라디오버튼-텍스트1",
      type: "text",
      value: radioLabel1,
      onChange: (newValue: string) => setSurveyState("radioLabel1", newValue),
    },
    {
      label: "라디오버튼-텍스트2",
      type: "text",
      value: radioLabel2,
      onChange: (newValue: string) => setSurveyState("radioLabel2", newValue),
    },
    {
      label: "라디오버튼-텍스트3",
      type: "text",
      value: radioLabel3,
      onChange: (newValue: string) => setSurveyState("radioLabel3", newValue),
    },
    {
      label: "라디오버튼-텍스트4",
      type: "text",
      value: radioLabel4,
      onChange: (newValue: string) => setSurveyState("radioLabel4", newValue),
    },
    {
      label: "라디오버튼-텍스트5",
      type: "text",
      value: radioLabel5,
      onChange: (newValue: string) => setSurveyState("radioLabel5", newValue),
    },
    {
      label: "cancel버튼-텍스트",
      type: "text",
      value: cancelButton,
      onChange: (newValue: string) => setSurveyState("cancelButton", newValue),
    },
    {
      label: "submit버튼-텍스트",
      type: "text",
      value: submitButton,
      onChange: (newValue: string) => setSurveyState("submitButton", newValue),
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

export default SurveyRemote;
