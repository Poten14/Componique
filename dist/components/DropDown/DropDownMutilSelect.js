"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const DropDownBasicMultiSelect = ({ option, placeholder = "Select Options", onSelect, type = "basic", // 기본 스타일은 "basic"
 }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (selected) => {
        const isSelected = selectedOptions.includes(selected);
        const updatedOptions = isSelected
            ? selectedOptions.filter((item) => item !== selected)
            : [...selectedOptions, selected];
        setSelectedOptions(updatedOptions);
        if (onSelect) {
            onSelect(updatedOptions);
        }
    };
    // 선택된 옵션 표시
    const displaySelectedOptions = () => {
        return selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : placeholder;
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: `relative inline-block w-48 ${getClassNames()}`, children: [(0, jsx_runtime_1.jsxs)("div", { onClick: toggleDropdown, className: "flex h-10 cursor-pointer items-center justify-between p-2 font-medium", children: [(0, jsx_runtime_1.jsx)("span", { className: `font-bold ${selectedOptions.length
                            ? "text-black dark:text-white"
                            : "text-slate-600"}`, children: displaySelectedOptions() }), (0, jsx_runtime_1.jsx)(image_1.default, { src: isOpen ? "/dropdown1.svg" : "/dropdown2.svg", alt: "dropdown", width: 20, height: 20 })] }), isOpen && ((0, jsx_runtime_1.jsx)("ul", { className: "absolute z-10 w-full bg-white dark:bg-[#2A2E39]", children: option.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { onClick: () => handleOptionClick(item), className: `cursor-pointer p-2 text-zinc-800 hover:bg-[#E8F5FF] dark:text-white dark:hover:bg-[#2A6490] ${selectedOptions.includes(item) ? "bg-blue-100" : ""}`, children: item }, index))) }))] }));
};
exports.default = DropDownBasicMultiSelect;
