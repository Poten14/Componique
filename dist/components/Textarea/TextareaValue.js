"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TextareaValue = ({ ...props }) => {
    const [textvalue, setTextValue] = (0, react_1.useState)("");
    const handleChange = (e) => {
        setTextValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("textarea", { className: "text-gray-900 block w-full rounded-lg border border-gray p-2 dark:border-[#2A6490] dark:bg-transparent", ...props, value: textvalue, onChange: handleChange }), (0, jsx_runtime_1.jsxs)("p", { className: "text-default-500 text-small", children: ["Textarea value: ", textvalue] })] }));
};
exports.default = TextareaValue;
