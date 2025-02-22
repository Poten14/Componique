"use client";

import React, { useEffect, useState } from "react";
import { useShoppingStore } from "../../store/useShoppingStore";
import Select from "@components/Select/Select";
import Button from "@components/Button/Button";
import BasicModal from "@components/Modal/BasicModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Icon from "@components/Icon/Icon";

// 코드 미리보기 함수
const previewShoppingFormCode = (store: any) => {
  return `
  import React from 'react';
  import Navbar from '@components/Navbar/Navbar';
  import Pagination from '@components/Pagination/Pagination';
  import SelectValueAdd from '@components/Select/SelectValueAdd';
  import CardPricing from '@components/Card/CardPricing';

  const ShoppingForm = () => {
    return (
      <div className="container mx-auto mt-20 border border-gray bg-white p-6 dark:bg-[#333742]">
        <Navbar
          logoSrc="${store.logoSrc}"
          logoName="${store.logoName}"
          size="${store.size}"
          hoverColor="${store.hoverColor}"
          position="${store.position}"
          links={[
            { name: "Home", href: "/userpage/shopping" },
            { name: "Products", href: "/userpage/shopping" },
            { name: "Contact", href: "/userpage/shopping" },
          ]}
        />
        <header className="mb-10 text-center">
          <h1 className="m-8 text-4xl font-bold text-Gray">${store.title}</h1>
          <p className="text-lg text-Gray">${store.subtitle}</p>
        </header>
        <SelectValueAdd option={["Option 1", "Option 2", "Option 3", "Option 4"]} placeholder="Select an option" />
        {/* Products & Pagination */}
        <Pagination
          currentPage={${store.currentPage}}
          totalPages={${store.totalPages}}
          variant="${store.paginationVariant}"
          styleType="${store.paginationStyleType}"
          color="${store.paginationColor}"
          showFirstLastButtons={true}
        />
        <div className="my-16">
          <h2 className="mb-8 text-center text-3xl font-bold dark:text-gray">
            ${store.title2}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardReview avatar="/avatar1.svg" name="User1" rate={5}>
              This product is amazing!
            </CardReview>
            <CardReview avatar="/avatar2.svg" name="User2" rate={4}>
              Great value for the price.
            </CardReview>
            <CardReview avatar="/avatar3.svg" name="User3" rate={4}>
              Very good for the price.
            </CardReview>
            <CardReview avatar="/avatar4.svg" name="User4" rate={5}>
              Best choice I've made!
            </CardReview>
          </div>
        </div>
      </div>
    );
  };

  export default ShoppingForm;
  `;
};

const RemoteShopping: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
    title,
    subtitle,
    title2,
    currentPage,
    totalPages,
    paginationVariant,
    paginationStyleType,
    paginationColor,
    logoSrc,
    logoName,
    hoverColor,
    size,
    position,
    setShoppingState,
  } = useShoppingStore();

  const handleCopy = () => {
    const code = previewShoppingFormCode({
      title,
      subtitle,
      title2,
      currentPage,
      totalPages,
      paginationVariant,
      paginationStyleType,
      paginationColor,
      logoSrc,
      logoName,
      hoverColor,
      size,
      position,
    });
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const controls = [
    {
      label: "Logo URL",
      type: "text",
      value: logoSrc,
      onChange: (newValue: string) => setShoppingState("logoSrc", newValue),
    },
    {
      label: "Logo Name",
      type: "text",
      value: logoName,
      onChange: (newValue: string) => setShoppingState("logoName", newValue),
    },
    {
      label: "Navbar Hover-Color",
      type: "select",
      value: hoverColor,
      options: ["skyblue", "blue", "red"],
      onChange: (newValue: string) => setShoppingState("hoverColor", newValue),
    },
    {
      label: "Navbar-Position",
      type: "select",
      value: position,
      options: ["sticky", "relative", "static"],
      onChange: (newValue: string) => setShoppingState("position", newValue),
    },
    {
      label: "Navbar-Size",
      type: "select",
      value: size,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setShoppingState("size", newValue),
    },
    {
      label: "Title",
      type: "text",
      value: title,
      onChange: (newValue: string) => setShoppingState("title", newValue),
    },
    {
      label: "Subtitle",
      type: "text",
      value: subtitle,
      onChange: (newValue: string) => setShoppingState("subtitle", newValue),
    },
    {
      label: "Current-Page",
      type: "text",
      value: String(currentPage),
      onChange: (newValue: string) =>
        setShoppingState("currentPage", parseInt(newValue, 10)),
    },
    {
      label: "Total Pages",
      type: "text",
      value: String(totalPages),
      onChange: (newValue: string) =>
        setShoppingState("totalPages", parseInt(newValue, 10)),
    },
    {
      label: "Pagination-Shape",
      type: "select",
      value: paginationVariant,
      options: ["circle", "square"],
      onChange: (newValue: string) =>
        setShoppingState("paginationVariant", newValue),
    },
    {
      label: "Pagination-Style",
      type: "select",
      value: paginationStyleType,
      options: ["filled", "outlined", "outlined-focused", "filled-outlined"],
      onChange: (newValue: string) =>
        setShoppingState("paginationStyleType", newValue),
    },
    {
      label: "Pagination-Color",
      type: "select",
      value: paginationColor,
      options: [
        "Basic",
        "Primary",
        "gray",
        "Secondary",
        "Success",
        "Warning",
        "Danger",
        "White",
      ],
      onChange: (newValue: string) =>
        setShoppingState("paginationColor", newValue),
    },
    {
      label: "Secondary-Title",
      type: "text",
      value: title2,
      onChange: (newValue: string) => setShoppingState("title2", newValue),
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
        {/* 코드 미리보기 모달 */}
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
            {previewShoppingFormCode({
              title,
              subtitle,
              title2,
              currentPage,
              totalPages,
              paginationVariant,
              paginationStyleType,
              paginationColor,
              logoSrc,
              logoName,
              hoverColor,
              size,
              position,
            })}
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
              Close
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

export default RemoteShopping;
