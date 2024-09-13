"use client";

import React, { useEffect, useState } from "react";
import { useSurveyStore } from "app/store/useSurveyStore";
import Select from "@components/Select/Select";
import Button from "@components/Button/Button";
import BasicModal from "@components/Modal/BasicModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Icon from "@components/Icon/Icon";

const previewSurveyFormCode = (store: any) => {
  return `
  import React, { useState } from 'react';
  import CheckBox from '@components/CheckBox/CheckBox';
  import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';
  import Button from '@components/Button/Button';

  const Survey = () => {
    const [basicSelectedValue, setBasicSelectedValue] = useState("");
    const [selectCheckbox, setSelectCheckbox] = useState<string[]>([]);

    const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBasicSelectedValue(event.target.value);
    };

    const onChangeCheckboxHandler = (isChecked: boolean, description: string) => {
      if (isChecked) {
        setSelectCheckbox([...selectCheckbox, description]);
      } else {
        setSelectCheckbox(selectCheckbox.filter((item) => item !== description));
      }
    };

    return (
      <div className="grid place-items-center gap-y-6">
        <div className="grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg">
          <div className="w-[470px] rounded-lg border border-[#9AC5E5] p-4">
            <h2 className="mb-2 text-lg">${store.title1}</h2>
            <p className="mb-2 mt-[-4px] text-sm">${store.description1}</p>
            <div className="space-y-2">
              <CheckBox
                color="${store.checkboxColor}"
                description="${store.checkboxText1}"
                variant="${store.checkboxVariant}"
                boxSize="${store.checkboxSize}"
                onChange={(e) => onChangeCheckboxHandler(e.target.checked, '${store.checkboxText1}')}
              />
              <CheckBox
                color="${store.checkboxColor}"
                description="${store.checkboxText2}"
                variant="${store.checkboxVariant}"
                boxSize="${store.checkboxSize}"
                onChange={(e) => onChangeCheckboxHandler(e.target.checked, '${store.checkboxText2}')}
              />
              <CheckBox
                color="${store.checkboxColor}"
                description="${store.checkboxText3}"
                variant="${store.checkboxVariant}"
                boxSize="${store.checkboxSize}"
                onChange={(e) => onChangeCheckboxHandler(e.target.checked, '${store.checkboxText3}')}
              />
              <CheckBox
                color="${store.checkboxColor}"
                description="${store.checkboxText4}"
                variant="${store.checkboxVariant}"
                boxSize="${store.checkboxSize}"
                onChange={(e) => onChangeCheckboxHandler(e.target.checked, '${store.checkboxText4}')}
              />
            </div>
          </div>
          <div className="w-[470px] rounded-lg border border-[#9AC5E5] p-4 leading-7">
            <h2 className="mb-2 text-lg">${store.title2}</h2>
            <p className="mb-2 mt-[-4px] text-sm">${store.description2}</p>
            <div>
              <RadioButtonBasic
                name="basicOptions"
                value="option1"
                label="${store.radioLabel1}"
                size="${store.radiobuttonSize}"
                color="${store.radiobuttonColor}"
              />
              <RadioButtonBasic
                name="basicOptions"
                value="option2"
                label="${store.radioLabel2}"
                size="${store.radiobuttonSize}"
                color="${store.radiobuttonColor}"
              />
              <RadioButtonBasic
                name="basicOptions"
                value="option3"
                label="${store.radioLabel3}"
                size="${store.radiobuttonSize}"
                color="${store.radiobuttonColor}"
              />
              <RadioButtonBasic
                name="basicOptions"
                value="option4"
                label="${store.radioLabel4}"
                size="${store.radiobuttonSize}"
                color="${store.radiobuttonColor}"
              />
              <RadioButtonBasic
                name="basicOptions"
                value="option5"
                label="${store.radioLabel5}"
                size="${store.radiobuttonSize}"
                color="${store.radiobuttonColor}"
              />
            </div>
          </div>
          <div className="flex w-[470px] justify-end">
            <Button className="mr-2 w-[75px]" color="danger">
              ${store.cancelButton}
            </Button>
            <Button className="w-[75px]" color="primary">
              ${store.submitButton}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  export default Survey;
  `;
};

const SurveyRemote: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const surveyStore = useSurveyStore();

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

  const handleCopy = () => {
    const code = previewSurveyFormCode(surveyStore);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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
      label: "체크박스 크기",
      type: "select",
      value: checkboxSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setSurveyState("checkboxSize", newValue),
    },
    {
      label: "CheckBox 색상",
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
      label: "CheckBox 스타일",
      type: "select",
      value: checkboxVariant,
      options: ["solid", "border"],
      onChange: (newValue: string) =>
        setSurveyState("checkboxVariant", newValue),
    },
    {
      label: "CheckBox 텍스트1",
      type: "text",
      value: checkboxText1,
      onChange: (newValue: string) => setSurveyState("checkboxText1", newValue),
    },
    {
      label: "CheckBox 텍스트2",
      type: "text",
      value: checkboxText2,
      onChange: (newValue: string) => setSurveyState("checkboxText2", newValue),
    },
    {
      label: "CheckBox 텍스트3",
      type: "text",
      value: checkboxText3,
      onChange: (newValue: string) => setSurveyState("checkboxText3", newValue),
    },
    {
      label: "CheckBox 텍스트4",
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
      label: "RadioButton 사이즈",
      type: "select",
      value: radiobuttonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) =>
        setSurveyState("radiobuttonSize", newValue),
    },
    {
      label: "RadioButton 색상",
      type: "select",
      value: radiobuttonColor,
      options: ["sky", "gray", "blue", "purple", "green", "yellow", "red"],
      onChange: (newValue: string) =>
        setSurveyState("radiobuttonColor", newValue),
    },
    {
      label: "RadioButton 텍스트1",
      type: "text",
      value: radioLabel1,
      onChange: (newValue: string) => setSurveyState("radioLabel1", newValue),
    },
    {
      label: "RadioButton 텍스트2",
      type: "text",
      value: radioLabel2,
      onChange: (newValue: string) => setSurveyState("radioLabel2", newValue),
    },
    {
      label: "RadioButton 텍스트3",
      type: "text",
      value: radioLabel3,
      onChange: (newValue: string) => setSurveyState("radioLabel3", newValue),
    },
    {
      label: "RadioButton 텍스트4",
      type: "text",
      value: radioLabel4,
      onChange: (newValue: string) => setSurveyState("radioLabel4", newValue),
    },
    {
      label: "RadioButton 텍스트5",
      type: "text",
      value: radioLabel5,
      onChange: (newValue: string) => setSurveyState("radioLabel5", newValue),
    },
    {
      label: "cancel Button 텍스트",
      type: "text",
      value: cancelButton,
      onChange: (newValue: string) => setSurveyState("cancelButton", newValue),
    },
    {
      label: "submit Button 텍스트",
      type: "text",
      value: submitButton,
      onChange: (newValue: string) => setSurveyState("submitButton", newValue),
    },
  ];

  return (
    <div className="relative shadow-xl">
      <div className="absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>
          <Button
            iconPosition="left"
            iconSize="large"
            onClick={() => setIsModalOpen(true)}
            className="dark:bg-[#2A6490] dark:focus:bg-[#1D4767]"
          >
            <Icon name="icon-docs" color="white" />
            Code
          </Button>
        </div>
        <input
          type="text"
          className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]"
          placeholder="   customizing your template"
          disabled
        />
        <BasicModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          showCloseIcon={true}
          className="custom-modal"
        >
          <SyntaxHighlighter
            language="tsx"
            style={isDarkMode ? vscDarkPlus : undefined}
            customStyle={{
              backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.7rem",
              maxHeight: "570px",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {previewSurveyFormCode(surveyStore)}
          </SyntaxHighlighter>
          <Button
            onClick={handleCopy}
            icon={copied ? "icon-check" : undefined}
            className="copyButton m-10 dark:bg-[#2A6490]"
            iconColor={copied ? "green" : "white"}
          >
            {copied ? "Copied!" : "Copy Code"}
          </Button>
          <div className="mb-2 text-right">
            <Button
              variant="border"
              onClick={() => setIsModalOpen(false)}
              className="dark:text-gray-300 text-sm text-gray dark:border-gray"
            >
              close
            </Button>
          </div>
        </BasicModal>
      </div>

      {/* Control 패널 */}
      <div
        className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${
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

export default SurveyRemote;
