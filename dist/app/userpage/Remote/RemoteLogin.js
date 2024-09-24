"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useLoginStore_1 = require("../../store/useLoginStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter"); //@
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism"); //@
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const previewLoginFormCode = (store) => {
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
const RemoteLogin = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false); // @
    const loginStore = (0, useLoginStore_1.useLoginStore)(); //@
    (0, react_1.useEffect)(() => {
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
    const { title, buttonColor, buttonSize, buttonVariant, buttonColor2, buttonSize2, buttonVariant2, placeholder, placeholder2, inputSize, inputWidth, checkboxSize, checkboxColor, checkboxVariant, description, setLoginState, } = (0, useLoginStore_1.useLoginStore)();
    const controls = [
        {
            label: "Title",
            type: "text",
            value: title,
            onChange: (newValue) => setLoginState("title", newValue),
        },
        {
            label: "Input1-Text",
            type: "text",
            value: placeholder,
            onChange: (newValue) => setLoginState("placeholder", newValue),
        },
        {
            label: "Input2-Text",
            type: "text",
            value: placeholder2,
            onChange: (newValue) => setLoginState("placeholder2", newValue),
        },
        {
            label: "Input-Size",
            type: "select",
            value: inputSize,
            options: ["xs", "small", "medium", "large", "xl"],
            onChange: (newValue) => setLoginState("inputSize", newValue),
        },
        {
            label: "Input-Width",
            type: "text",
            value: inputWidth,
            onChange: (newValue) => setLoginState("inputWidth", newValue),
        },
        // Checkbox
        {
            label: "Checkbox-Size",
            type: "select",
            value: checkboxSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setLoginState("checkboxSize", newValue),
        },
        {
            label: "Checkbox-Style",
            type: "select",
            value: checkboxVariant,
            options: ["solid", "border"],
            onChange: (newValue) => setLoginState("checkboxVariant", newValue),
        },
        {
            label: "Checkbox-Color",
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
            onChange: (newValue) => setLoginState("checkboxColor", newValue),
        },
        {
            label: "Checkbox-Text",
            type: "text",
            value: description,
            onChange: (newValue) => setLoginState("description", newValue),
        },
        // Button
        {
            label: "Button-Color",
            type: "select",
            value: buttonColor,
            options: ["primary", "secondary", "success", "danger"],
            onChange: (newValue) => setLoginState("buttonColor", newValue),
        },
        {
            label: "Button-Size",
            type: "select",
            value: buttonSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setLoginState("buttonSize", newValue),
        },
        {
            label: "Button-Style",
            type: "select",
            value: buttonVariant,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setLoginState("buttonVariant", newValue),
        },
        // Second Button
        {
            label: "Button2-Color",
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
            onChange: (newValue) => setLoginState("buttonColor2", newValue),
        },
        {
            label: "Button2-Size",
            type: "select",
            value: buttonSize2,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setLoginState("buttonSize2", newValue),
        },
        {
            label: "Button2-Style",
            type: "select",
            value: buttonVariant2,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setLoginState("buttonVariant2", newValue),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative shadow-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: `absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]", children: "Control Panel" }), (0, jsx_runtime_1.jsxs)(Button_1.default, { iconPosition: "left", iconSize: "large", onClick: () => setIsModalOpen(true), className: "ml-20 dark:bg-[#2A6490] dark:focus:bg-[#1D4767]", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-docs", color: "white" }), "Code"] })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]", placeholder: "   customizing your template", disabled: true }), (0, jsx_runtime_1.jsxs)(BasicModal_1.default, { open: isModalOpen, onClose: () => setIsModalOpen(false), showCloseIcon: true, className: "custom-modal", children: [(0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { language: "tsx", style: isDarkMode ? prism_1.vscDarkPlus : undefined, customStyle: {
                                    backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.7rem",
                                    maxHeight: "570px",
                                    overflowY: "auto",
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                }, children: previewLoginFormCode(loginStore) }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleCopy, icon: copied ? "icon-check" : undefined, className: "copyButton m-10 dark:bg-[#2A6490]", iconColor: copied ? "green" : "white", children: copied ? "Copied!" : "Copy Code" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-right", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsModalOpen(false), className: "dark:text-gray-300 text-sm text-gray dark:border-gray", children: "close" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`, children: controls.map((control, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`, children: [(0, jsx_runtime_1.jsx)("label", { className: `mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`, children: control.label }), control.type === "select" ? ((0, jsx_runtime_1.jsx)(Select_1.default, { option: control.options || [], placeholder: control.value, onChange: (newValue) => control.onChange(newValue), className: "w-full" })) : ((0, jsx_runtime_1.jsx)("input", { type: "text", value: control.value, onChange: (e) => control.onChange(e.target.value), className: `w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode
                                ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                                : "border-gray bg-white"}` }))] }, index))) })] }));
};
exports.default = RemoteLogin;
