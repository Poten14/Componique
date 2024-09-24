"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useShoppingStore_1 = require("../../store/useShoppingStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
// 코드 미리보기 함수
const previewShoppingFormCode = (store) => {
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
const RemoteShopping = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false);
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
    const { title, subtitle, title2, currentPage, totalPages, paginationVariant, paginationStyleType, paginationColor, logoSrc, logoName, hoverColor, size, position, setShoppingState, } = (0, useShoppingStore_1.useShoppingStore)();
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
            onChange: (newValue) => setShoppingState("logoSrc", newValue),
        },
        {
            label: "Logo Name",
            type: "text",
            value: logoName,
            onChange: (newValue) => setShoppingState("logoName", newValue),
        },
        {
            label: "Navbar Hover-Color",
            type: "select",
            value: hoverColor,
            options: ["skyblue", "blue", "red"],
            onChange: (newValue) => setShoppingState("hoverColor", newValue),
        },
        {
            label: "Navbar-Position",
            type: "select",
            value: position,
            options: ["sticky", "relative", "static"],
            onChange: (newValue) => setShoppingState("position", newValue),
        },
        {
            label: "Navbar-Size",
            type: "select",
            value: size,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setShoppingState("size", newValue),
        },
        {
            label: "Title",
            type: "text",
            value: title,
            onChange: (newValue) => setShoppingState("title", newValue),
        },
        {
            label: "Subtitle",
            type: "text",
            value: subtitle,
            onChange: (newValue) => setShoppingState("subtitle", newValue),
        },
        {
            label: "Current-Page",
            type: "text",
            value: String(currentPage),
            onChange: (newValue) => setShoppingState("currentPage", parseInt(newValue, 10)),
        },
        {
            label: "Total Pages",
            type: "text",
            value: String(totalPages),
            onChange: (newValue) => setShoppingState("totalPages", parseInt(newValue, 10)),
        },
        {
            label: "Pagination-Shape",
            type: "select",
            value: paginationVariant,
            options: ["circle", "square"],
            onChange: (newValue) => setShoppingState("paginationVariant", newValue),
        },
        {
            label: "Pagination-Style",
            type: "select",
            value: paginationStyleType,
            options: ["filled", "outlined", "outlined-focused", "filled-outlined"],
            onChange: (newValue) => setShoppingState("paginationStyleType", newValue),
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
            onChange: (newValue) => setShoppingState("paginationColor", newValue),
        },
        {
            label: "Secondary-Title",
            type: "text",
            value: title2,
            onChange: (newValue) => setShoppingState("title2", newValue),
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
                                }, children: previewShoppingFormCode({
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
                                }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleCopy, icon: copied ? "icon-check" : undefined, className: "copyButton m-10 dark:bg-[#2A6490]", iconColor: copied ? "green" : "white", children: copied ? "Copied!" : "Copy Code" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-right", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsModalOpen(false), className: "dark:text-gray-300 text-sm text-gray dark:border-gray", children: "Close" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`, children: controls.map((control, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`, children: [(0, jsx_runtime_1.jsx)("label", { className: `mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`, children: control.label }), control.type === "select" ? ((0, jsx_runtime_1.jsx)(Select_1.default, { option: control.options || [], placeholder: control.value, onChange: (newValue) => control.onChange(newValue), className: "w-full" })) : ((0, jsx_runtime_1.jsx)("input", { type: "text", value: control.value, onChange: (e) => control.onChange(e.target.value), className: `w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode
                                ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                                : "border-gray bg-white"}` }))] }, index))) })] }));
};
exports.default = RemoteShopping;
