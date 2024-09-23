"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const useTodoListStore_1 = require("app/store/useTodoListStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const previewTodoListFormCode = (store) => {
    return `
  import React from 'react';
  import Button from '@components/Button/Button';
  import Input from '@components/Input/Input';
  import CheckBox from '@components/CheckBox/CheckBox';

  const TodoListForm = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]">
          <div className="space-y-6">
            <div className="flex space-x-2">
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.todoList1}"
              />
              <div className="flex space-x-1">
                <Button
                  color="${store.addButtonColor}"
                  size="${store.addButtonSize}"
                  variant="${store.addButtonVariant}"
                  className="text-white"
                  onClick={() => alert("일정을 추가했습니다")}
                >
                  Add
                </Button>
                <Button
                  color="${store.deleteButtonColor}"
                  size="${store.deleteButtonSize}"
                  variant="${store.deleteButtonVariant}"
                  className="text-white"
                  onClick={() => alert("일정을 삭제했습니다")}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.todoList2}"
              />
              <div className="flex space-x-1">
                <CheckBox
                  className="p-5"
                  color="${store.checkBoxColor}"
                  variant="${store.checkBoxVariant}"
                />
                <Button
                  color="${store.deleteButtonColor}"
                  size="${store.deleteButtonSize}"
                  variant="${store.deleteButtonVariant}"
                  className="text-white"
                  onClick={() => alert("일정을 삭제했습니다")}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.todoList3}"
              />
              <div className="flex space-x-1">
                <CheckBox
                  className="p-5"
                  color="${store.checkBoxColor}"
                  variant="${store.checkBoxVariant}"
                />
                <Button
                  color="${store.deleteButtonColor}"
                  size="${store.deleteButtonSize}"
                  variant="${store.deleteButtonVariant}"
                  className="text-white"
                  onClick={() => alert("일정을 삭제했습니다")}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input
                size="${store.inputSize}"
                width="${store.inputWidth}"
                variant="outlined"
                placeholder="${store.todoList4}"
              />
              <div className="flex space-x-1">
                <CheckBox
                  className="p-5"
                  color="${store.checkBoxColor}"
                  variant="${store.checkBoxVariant}"
                />
                <Button
                  color="${store.deleteButtonColor}"
                  size="${store.deleteButtonSize}"
                  variant="${store.deleteButtonVariant}"
                  className="text-white"
                  onClick={() => alert("일정을 삭제했습니다")}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TodoListForm;
  `;
};
const TodoListRemote = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const todoListStore = (0, useTodoListStore_1.useTodoListStore)();
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
    const { addButtonColor, addButtonSize, addButtonVariant, deleteButtonColor, deleteButtonSize, deleteButtonVariant, checkBoxColor, checkBoxVariant, todoList1, todoList2, todoList3, todoList4, inputSize, inputWidth, setTodoListState, } = (0, useTodoListStore_1.useTodoListStore)();
    const controls = [
        {
            label: "Add Button-Color",
            type: "select",
            value: addButtonColor,
            options: ["primary", "secondary", "success", "danger"],
            onChange: (newValue) => setTodoListState("addButtonColor", newValue),
        },
        {
            label: "Add Button-Size",
            type: "select",
            value: addButtonSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setTodoListState("addButtonSize", newValue),
        },
        {
            label: "Add Button-Style",
            type: "select",
            value: addButtonVariant,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setTodoListState("addButtonVariant", newValue),
        },
        {
            label: "Delete Button-Color",
            type: "select",
            value: deleteButtonColor,
            options: ["primary", "secondary", "success", "warning", "danger"],
            onChange: (newValue) => setTodoListState("deleteButtonColor", newValue),
        },
        {
            label: "Delete Button-Size",
            type: "select",
            value: deleteButtonSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setTodoListState("deleteButtonSize", newValue),
        },
        {
            label: "Delete Button-Style",
            type: "select",
            value: deleteButtonVariant,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setTodoListState("deleteButtonVariant", newValue),
        },
        {
            label: "CheckBox-Color",
            type: "select",
            value: checkBoxColor,
            options: ["primary", "secondary", "success", "danger"],
            onChange: (newValue) => setTodoListState("checkBoxColor", newValue),
        },
        {
            label: "CheckBox-Style",
            type: "select",
            value: checkBoxVariant,
            options: ["solid", "border"],
            onChange: (newValue) => setTodoListState("checkBoxVariant", newValue),
        },
        {
            label: "Input-1",
            type: "text",
            value: todoList1,
            onChange: (newValue) => setTodoListState("todoList1", newValue),
        },
        {
            label: "Input-2",
            type: "text",
            value: todoList2,
            onChange: (newValue) => setTodoListState("todoList2", newValue),
        },
        {
            label: "Input 3",
            type: "text",
            value: todoList3,
            onChange: (newValue) => setTodoListState("todoList3", newValue),
        },
        {
            label: "Input-4",
            type: "text",
            value: todoList4,
            onChange: (newValue) => setTodoListState("todoList4", newValue),
        },
        {
            label: "Input-Size",
            type: "select",
            value: inputSize,
            options: ["xs", "small", "medium", "large", "xl"],
            onChange: (newValue) => setTodoListState("inputSize", newValue),
        },
        {
            label: "Input-Width",
            type: "text",
            value: inputWidth,
            onChange: (newValue) => setTodoListState("inputWidth", newValue),
        },
    ];
    const handleCopy = () => {
        const code = previewTodoListFormCode(todoListStore);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (<div className="relative shadow-xl">
      <div className="absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>
          <Button_1.default iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
            <Icon_1.default name="icon-docs" color="white"/>
            Code
          </Button_1.default>
        </div>
        <input type="text" className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]" placeholder="   customizing your template" disabled/>
        <BasicModal_1.default open={isModalOpen} onClose={() => setIsModalOpen(false)} showCloseIcon={true} className="custom-modal">
          <react_syntax_highlighter_1.Prism language="tsx" style={isDarkMode ? prism_1.vscDarkPlus : undefined} customStyle={{
            backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "0.7rem",
            maxHeight: "570px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
        }}>
            {previewTodoListFormCode(todoListStore)}
          </react_syntax_highlighter_1.Prism>
          <Button_1.default onClick={handleCopy} icon={copied ? "icon-check" : undefined} className="copyButton m-10 dark:bg-[#2A6490]" iconColor={copied ? "green" : "white"}>
            {copied ? "Copied!" : "Copy Code"}
          </Button_1.default>
          <div className="mb-2 text-right">
            <Button_1.default variant="border" onClick={() => setIsModalOpen(false)} className="dark:text-gray-300 text-sm text-gray dark:border-gray">
              close
            </Button_1.default>
          </div>
        </BasicModal_1.default>
      </div>
      {/* Control 패널 */}
      <div className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`}>
        {controls.map((control, index) => (<div key={index} className={`control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`}>
              {control.label}
            </label>
            {control.type === "select" ? (<Select_1.default option={control.options || []} placeholder={control.value} onChange={(newValue) => control.onChange(newValue)} className="w-full"/>) : (<input type="text" value={control.value} onChange={(e) => control.onChange(e.target.value)} className={`w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode
                    ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                    : "border-gray bg-white"}`}/>)}
          </div>))}
      </div>
    </div>);
};
exports.default = TodoListRemote;
