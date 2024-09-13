"use client";

import React, { useEffect, useState } from "react";
import { useLoginStore } from "../../store/useLoginStore";
import Select from "@components/Select/Select";
import Button from "@components/Button/Button";
import BasicModal from "@components/Modal/BasicModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; //@
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; //@
import Icon from "@components/Icon/Icon";

const previewLoginFormCode = (store: any) => {
  return `
  import React from 'react';
  import Button from '@components/Button/Button';
  import Input from '@components/Input/Input';
  import CheckBox from '@components/CheckBox/CheckBox';
  
  const LoginForm = () => {
    const handleSubmit = () => {
      alert("success!");
    };
    
    return (
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]">
          <h1 className="mb-8 text-center text-2xl font-bold">${store.title}</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.placeholder}"
              />
            </div>
            <div>
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.placeholder2}"
              />
            </div>
            <div className="flex">
              <CheckBox
                boxSize="${store.checkboxSize}"
                color="${store.checkboxColor}"
                variant="${store.checkboxVariant}"
                description="${store.description}"
              />
            </div>
            <div className="mt-6">
              <Button
                color="${store.buttonColor}"
                size="${store.buttonSize}"
                variant="${store.buttonVariant}"
                className="w-full"
              >
                login
              </Button>
            </div>
            <div className="mt-4 text-center">
              <Button
                color="${store.buttonColor2}"
                size="${store.buttonSize2}"
                variant="${store.buttonVariant2}"
                className="w-full"
              >
                sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default LoginForm;
  `;
};

const RemoteLogin: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false); // @
  const loginStore = useLoginStore(); //@

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

  //@
  const handleCopy = () => {
    const code = previewLoginFormCode(loginStore);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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
    checkboxSize,
    checkboxColor,
    checkboxVariant,
    description,
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
      label: "Input1 텍스트",
      type: "text",
      value: placeholder,
      onChange: (newValue: string) => setLoginState("placeholder", newValue),
    },
    {
      label: "Input2 텍스트 ",
      type: "text",
      value: placeholder2,
      onChange: (newValue: string) => setLoginState("placeholder2", newValue),
    },
    {
      label: "Input 크기",
      type: "select",
      value: inputSize,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setLoginState("inputSize", newValue),
    },
    {
      label: "Input 길이",
      type: "text",
      value: inputWidth,
      onChange: (newValue: string) => setLoginState("inputWidth", newValue),
    },
    //체크박스
    {
      label: "Checkbox 크기",
      type: "select",
      value: checkboxSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setLoginState("checkboxSize", newValue),
    },
    {
      label: "Checkbox 스타일",
      type: "select",
      value: checkboxVariant,
      options: ["solid", "border"],
      onChange: (newValue: string) =>
        setLoginState("checkboxVariant", newValue),
    },
    {
      label: "Checkbox 색상",
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
      ],
      onChange: (newValue: string) => setLoginState("checkboxColor", newValue),
    },
    {
      label: "Checkbox 텍스트",
      type: "text",
      value: description,
      onChange: (newValue: string) => setLoginState("description", newValue),
    },
    {
      label: "Button 색상",
      type: "select",
      value: buttonColor,
      options: ["primary", "secondary", "success", "danger"],
      onChange: (newValue: string) => setLoginState("buttonColor", newValue),
    },
    {
      label: "Button 크기",
      type: "select",
      value: buttonSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setLoginState("buttonSize", newValue),
    },
    {
      label: "Button 스타일",
      type: "select",
      value: buttonVariant,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) => setLoginState("buttonVariant", newValue),
    },
    // 두 번째 버튼
    {
      label: "Button2 색상",
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
      label: "Button2 크기",
      type: "select",
      value: buttonSize2,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setLoginState("buttonSize2", newValue),
    },
    {
      label: "Button2 스타일",
      type: "select",
      value: buttonVariant2,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) => setLoginState("buttonVariant2", newValue),
    },
  ];

  return (
    <div className="relative shadow-xl">
      {/* 하늘색 배경 박스 추가 */}
      <div
        className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]`}
      >
        <div className="flex">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>

          <Button
            iconPosition="left"
            iconSize="large"
            onClick={() => setIsModalOpen(true)}
            className="ml-20 dark:bg-[#2A6490] dark:focus:bg-[#1D4767]"
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
            {previewLoginFormCode(loginStore)}
          </SyntaxHighlighter>
          <Button
            onClick={handleCopy}
            icon={copied ? "icon-check" : undefined}
            className="copyButton m-10 dark:bg-[#2A6490]"
            iconColor={copied ? "green" : "white"}
          >
            {copied ? "Copied!" : "Copy Code"}
          </Button>
          {/* 닫기 버튼 */}
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

export default RemoteLogin;
