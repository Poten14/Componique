"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidationID = () => {
    const [ID, setID] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const validateID = (ID) => {
        const IDType = /^[a-zA-Z0-9]{4,12}$/;
        return IDType.test(ID);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setID(value);
        setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: ID, onChange: handleChange, placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", className: "border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black" }), error && ((0, jsx_runtime_1.jsx)("p", { className: "absolute z-10 text-sm text-red-500 dark:text-red-500", children: error }))] }));
};
exports.default = ValidationID;
