"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidationPW = () => {
    const [PW, setPW] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const validatePW = (PW) => {
        const PWType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return PWType.test(PW);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPW(value);
        setError(validatePW(value)
            ? ""
            : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "password", value: PW, onChange: handleChange, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.", className: "text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black" }), error && ((0, jsx_runtime_1.jsx)("p", { className: "absolute z-10 text-sm text-red-500 dark:text-red-500", children: error }))] }));
};
exports.default = ValidationPW;
