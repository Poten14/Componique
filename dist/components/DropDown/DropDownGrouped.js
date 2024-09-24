"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const DropDownGrouped = ({ options, defaultOption = "Select Option", onSelect, type = "basic", // 기본 스타일은 "basic"
 }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selectedOption, setSelectedOption] = (0, react_1.useState)("");
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };
    // 스타일에 따른 클래스 선택
    const getClassNames = () => {
        switch (type) {
            case "rounded":
                return "rounded-lg border-gray-300 border-2 bg-white dark:bg-[#2A2E39]";
            case "borderless-rounded":
                return "rounded-full border-2 border-zinc-100 bg-white shadow-md dark:bg-[#2A2E39]";
            case "less-rounded":
                return "rounded-lg border-2 border-zinc-100 bg-white dark:bg-[#2A2E39]";
            case "basic":
            default:
                return "border-gray-300 border-2 bg-white dark:bg-[#2A2E39]";
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `relative inline-block w-48 ${getClassNames()}`, children: [(0, jsx_runtime_1.jsxs)("div", { onClick: toggleDropdown, className: "flex h-10 cursor-pointer items-center justify-between p-2 font-medium", children: [(0, jsx_runtime_1.jsx)("span", { className: `font-bold ${selectedOption ? "text-black dark:text-white" : "text-slate-600"}`, children: selectedOption || defaultOption }), (0, jsx_runtime_1.jsx)(image_1.default, { src: isOpen ? "/dropdown1.svg" : "/dropdown2.svg", alt: "dropdown", width: 20, height: 20 })] }), isOpen && ((0, jsx_runtime_1.jsx)("ul", { className: "absolute z-10 w-full bg-white dark:bg-[#2A2E39]", children: options.map(({ groupName, items }, index1) => ((0, jsx_runtime_1.jsxs)("li", { className: "p-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-bold text-black dark:bg-[#2A2E39] dark:text-white", children: groupName }), (0, jsx_runtime_1.jsx)("ul", { className: "ml-4", children: items.map((item, index2) => ((0, jsx_runtime_1.jsx)("li", { onClick: () => handleOptionClick(item), className: "border-gray-200 cursor-pointer border-b p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490]", children: item }, index2))) })] }, index1))) }))] }));
};
exports.default = DropDownGrouped;
