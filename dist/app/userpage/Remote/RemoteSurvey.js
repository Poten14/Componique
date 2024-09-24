"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useSurveyStore_1 = require("app/store/useSurveyStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const previewSurveyFormCode = (store) => {
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
const SurveyRemote = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const surveyStore = (0, useSurveyStore_1.useSurveyStore)();
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
    const { title1, description1, checkboxSize, checkboxColor, checkboxVariant, checkboxText1, checkboxText2, checkboxText3, checkboxText4, title2, description2, radiobuttonSize, radiobuttonColor, radioLabel1, radioLabel2, radioLabel3, radioLabel4, radioLabel5, cancelButton, submitButton, setSurveyState, } = (0, useSurveyStore_1.useSurveyStore)();
    const handleCopy = () => {
        const code = previewSurveyFormCode(surveyStore);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const controls = [
        {
            label: "Survey 1-Title",
            type: "text",
            value: title1,
            onChange: (newValue) => setSurveyState("title1", newValue),
        },
        {
            label: "Survey 1-Description",
            type: "text",
            value: description1,
            onChange: (newValue) => setSurveyState("description1", newValue),
        },
        {
            label: "Checkbox-Size",
            type: "select",
            value: checkboxSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setSurveyState("checkboxSize", newValue),
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
                "white",
                "gray",
                "black",
            ],
            onChange: (newValue) => setSurveyState("checkboxColor", newValue),
        },
        {
            label: "Checkbox-Style",
            type: "select",
            value: checkboxVariant,
            options: ["solid", "border"],
            onChange: (newValue) => setSurveyState("checkboxVariant", newValue),
        },
        {
            label: "Checkbox-Text 1",
            type: "text",
            value: checkboxText1,
            onChange: (newValue) => setSurveyState("checkboxText1", newValue),
        },
        {
            label: "Checkbox-Text 2",
            type: "text",
            value: checkboxText2,
            onChange: (newValue) => setSurveyState("checkboxText2", newValue),
        },
        {
            label: "Checkbox-Text 3",
            type: "text",
            value: checkboxText3,
            onChange: (newValue) => setSurveyState("checkboxText3", newValue),
        },
        {
            label: "Checkbox-Text 4",
            type: "text",
            value: checkboxText4,
            onChange: (newValue) => setSurveyState("checkboxText4", newValue),
        },
        {
            label: "Survey 2-Title",
            type: "text",
            value: title2,
            onChange: (newValue) => setSurveyState("title2", newValue),
        },
        {
            label: "Survey 2-Description",
            type: "text",
            value: description2,
            onChange: (newValue) => setSurveyState("description2", newValue),
        },
        {
            label: "RadioButton-Size",
            type: "select",
            value: radiobuttonSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setSurveyState("radiobuttonSize", newValue),
        },
        {
            label: "RadioButton-Color",
            type: "select",
            value: radiobuttonColor,
            options: ["sky", "gray", "blue", "purple", "green", "yellow", "red"],
            onChange: (newValue) => setSurveyState("radiobuttonColor", newValue),
        },
        {
            label: "RadioButton-Text 1",
            type: "text",
            value: radioLabel1,
            onChange: (newValue) => setSurveyState("radioLabel1", newValue),
        },
        {
            label: "RadioButton-Text 2",
            type: "text",
            value: radioLabel2,
            onChange: (newValue) => setSurveyState("radioLabel2", newValue),
        },
        {
            label: "RadioButton-Text 3",
            type: "text",
            value: radioLabel3,
            onChange: (newValue) => setSurveyState("radioLabel3", newValue),
        },
        {
            label: "RadioButton-Text 4",
            type: "text",
            value: radioLabel4,
            onChange: (newValue) => setSurveyState("radioLabel4", newValue),
        },
        {
            label: "RadioButton-Text 5",
            type: "text",
            value: radioLabel5,
            onChange: (newValue) => setSurveyState("radioLabel5", newValue),
        },
        {
            label: "Cancel Button-Text",
            type: "text",
            value: cancelButton,
            onChange: (newValue) => setSurveyState("cancelButton", newValue),
        },
        {
            label: "Submit Button-Text",
            type: "text",
            value: submitButton,
            onChange: (newValue) => setSurveyState("submitButton", newValue),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative shadow-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]", children: "Control Panel" }), (0, jsx_runtime_1.jsxs)(Button_1.default, { iconPosition: "left", iconSize: "large", onClick: () => setIsModalOpen(true), className: "dark:bg-[#2A6490] dark:focus:bg-[#1D4767]", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-docs", color: "white" }), "Code"] })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]", placeholder: "   customizing your template", disabled: true }), (0, jsx_runtime_1.jsxs)(BasicModal_1.default, { open: isModalOpen, onClose: () => setIsModalOpen(false), showCloseIcon: true, className: "custom-modal", children: [(0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { language: "tsx", style: isDarkMode ? prism_1.vscDarkPlus : undefined, customStyle: {
                                    backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.7rem",
                                    maxHeight: "570px",
                                    overflowY: "auto",
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                }, children: previewSurveyFormCode(surveyStore) }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleCopy, icon: copied ? "icon-check" : undefined, className: "copyButton m-10 dark:bg-[#2A6490]", iconColor: copied ? "green" : "white", children: copied ? "Copied!" : "Copy Code" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-right", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsModalOpen(false), className: "dark:text-gray-300 text-sm text-gray dark:border-gray", children: "close" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`, children: controls.map((control, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`, children: [(0, jsx_runtime_1.jsx)("label", { className: `mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`, children: control.label }), control.type === "select" ? ((0, jsx_runtime_1.jsx)(Select_1.default, { option: control.options || [], placeholder: control.value, onChange: (newValue) => control.onChange(newValue), className: "w-full" })) : ((0, jsx_runtime_1.jsx)("input", { type: "text", value: control.value, onChange: (e) => control.onChange(e.target.value), className: `w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode
                                ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                                : "border-gray bg-white"}` }))] }, index))) })] }));
};
exports.default = SurveyRemote;
