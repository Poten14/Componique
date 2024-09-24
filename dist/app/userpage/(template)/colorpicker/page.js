"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "my-10", children: (0, jsx_runtime_1.jsx)(TwoPicker_1.default, { onColorChange: handleColorChange }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsxs)(Button_1.default, { iconPosition: "left", iconSize: "large", onClick: () => setIsModalOpen(true), className: "dark:bg-[#2A6490] dark:focus:bg-[#1D4767]", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-docs", color: "white" }), "Code"] }) }), (0, jsx_runtime_1.jsxs)(BasicModal_1.default, { open: isModalOpen, onClose: () => setIsModalOpen(false), showCloseIcon: true, className: "custom-modal", children: [(0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { language: "tsx", style: isDarkMode ? prism_1.vscDarkPlus : undefined, customStyle: {
                            backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            fontSize: "0.7rem",
                            maxHeight: "570px",
                            overflowY: "auto",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                        }, children: previewColorPickerCode(selectedColor) }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleCopy, icon: copied ? "icon-check" : undefined, className: "copyButton m-10 dark:bg-[#2A6490]", iconColor: copied ? "green" : "white", children: copied ? "Copied!" : "Copy Code" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-right", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsModalOpen(false), className: "dark:text-gray-300 text-sm text-gray dark:border-gray", children: "close" }) })] })] }));
};
exports.default = ColorPickerUserPage;
