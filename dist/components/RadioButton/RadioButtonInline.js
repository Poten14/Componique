"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RadioButtonInline = ({ name, value, checked, onChange, disabled = false, size = "medium", color = "bg-[#9AC5E5]", label, }) => {
    let sizeStyle = "w-4 h-4";
    if (size === "small") {
        sizeStyle = "w-3 h-3";
    }
    else if (size === "large") {
        sizeStyle = "w-5 h-5";
    }
    const colorStyle = {
        sky: "bg-[#9AC5E5] border-[#9AC5E5]",
        grey: "bg-[#DCDCDD] border-[#DCDCDD]",
        blue: "bg-[#558FFF] border-[#558FFF]",
        purple: "bg-[#C294F0] border-[#C294F0]",
        green: "bg-[#7EEFAF] border-[#7EEFAF]",
        yellow: "bg-[#EDCE7B] border-[#EDCE7B]",
        red: "bg-[#FF7676] border-[#FF7676]",
    };
    const selectedColorStyle = colorStyle[color] || "bg-blue-500 border-blue-500";
    return ((0, jsx_runtime_1.jsxs)("label", { className: `mr-3 inline-flex items-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`, children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", name: name, value: value, checked: checked, onChange: onChange, disabled: disabled, className: `appearance-none rounded-full border-2 ${sizeStyle} ${checked ? selectedColorStyle : "border-gray-300 bg-white"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500` }), label && (0, jsx_runtime_1.jsx)("span", { className: "ml-2", children: label })] }));
};
exports.default = RadioButtonInline;
