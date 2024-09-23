"use client";
import React, { useState, useEffect } from "react";
import TwoPicker from "@components/ColorPicker/TwoPicker";
import Button from "@components/Button/Button";
import BasicModal from "@components/Modal/BasicModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Icon from "@components/Icon/Icon";
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
    const [selectedColor, setSelectedColor] = useState("#ffffff");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(false); // 복사 상태
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
          <TwoPicker onColorChange={handleColorChange}/>
        </div>
      </div>

      {/* 코드 미리보기 및 복사 버튼 추가 */}
      <div className="flex justify-center">
        <Button iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
          <Icon name="icon-docs" color="white"/>
          Code
        </Button>
      </div>

      {/* 모달 컴포넌트 */}
      <BasicModal open={isModalOpen} onClose={() => setIsModalOpen(false)} showCloseIcon={true} className="custom-modal">
        <SyntaxHighlighter language="tsx" style={isDarkMode ? vscDarkPlus : undefined} customStyle={{
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
        </SyntaxHighlighter>
        <Button onClick={handleCopy} icon={copied ? "icon-check" : undefined} className="copyButton m-10 dark:bg-[#2A6490]" iconColor={copied ? "green" : "white"}>
          {copied ? "Copied!" : "Copy Code"}
        </Button>
        <div className="mb-2 text-right">
          <Button variant="border" onClick={() => setIsModalOpen(false)} className="dark:text-gray-300 text-sm text-gray dark:border-gray">
            close
          </Button>
        </div>
      </BasicModal>
    </div>);
};
export default ColorPickerUserPage;
