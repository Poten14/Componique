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
const TwoPicker_1 = __importDefault(require("@components/ColorPicker/TwoPicker"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
// 선택한 색상을 기반으로 코드 미리보기 생성
const previewColorPickerCode = (color) => {
    return `
  import React, { useState } from 'react';
  import TwoPicker from '@components/ColorPicker/TwoPicker';

  const ColorPickerUserPage = () => {
    const [color, setColor] = useState("${color}");

    const handleColorChange = (newColor: string) => {
      setColor(newColor);
      document.body.style.background = newColor;
    };

    return (
      <div className="flex justify-center">
        <div className="my-10">
          <TwoPicker onColorChange={handleColorChange} />
        </div>
      </div>
    );
  };

  export default ColorPickerUserPage;
  `;
};
const ColorPickerUserPage = () => {
    const [selectedColor, setSelectedColor] = (0, react_1.useState)("#ffffff");
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false); // 복사 상태
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
    // 선택된 색상 변경 핸들러
    const handleColorChange = (color) => {
        setSelectedColor(color);
        document.body.style.background = color;
    };
    const handleCopy = () => {
        const code = previewColorPickerCode(selectedColor);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (<div className="relative">
      {/* Color Picker */}
      <div className="flex justify-center">
        <div className="my-10">
          <TwoPicker_1.default onColorChange={handleColorChange}/>
        </div>
      </div>

      {/* 코드 미리보기 및 복사 버튼 추가 */}
      <div className="flex justify-center">
        <Button_1.default iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
          <Icon_1.default name="icon-docs" color="white"/>
          Code
        </Button_1.default>
      </div>

      {/* 모달 컴포넌트 */}
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
          {previewColorPickerCode(selectedColor)}
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
    </div>);
};
exports.default = ColorPickerUserPage;
