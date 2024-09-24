"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SelectList = ({ option, onChange, className }) => {
    const [selectValue, setSelectValue] = (0, react_1.useState)("");
    const handleOptionClick = (item) => {
        setSelectValue(item);
        if (onChange) {
            onChange(item);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: `w-96 ${className}`, children: (0, jsx_runtime_1.jsx)("ul", { className: "flex cursor-pointer justify-evenly divide-x divide-gray rounded-lg border border-gray p-0 text-center dark:divide-[#2A6490] dark:border-[#2A6490] dark:bg-[#2a2e39]", children: option.map((item, key) => ((0, jsx_runtime_1.jsx)("li", { className: `w-full p-2 transition-transform duration-300 hover:bg-[#9AC5E5] hover:font-bold hover:text-[#fff] dark:hover:bg-[#2A6490] dark:hover:text-white ${selectValue === item ? "rounded-lg bg-[#9AC5E5] font-bold text-[#fff] dark:bg-[#2A6490]" : ""} `, onClick: () => handleOptionClick(item), children: item }, key))) }) }) }));
};
exports.default = SelectList;
