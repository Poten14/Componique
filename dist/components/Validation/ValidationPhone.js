"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidationPhone = () => {
    const [phone, setPhone] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const validatePhone = (phone) => {
        const phoneType = /^\d{10,11}$/;
        return phoneType.test(phone);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "\uD578\uB4DC\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", className: "text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black", onChange: handleChange, value: phone }), error && ((0, jsx_runtime_1.jsx)("p", { className: "absolute z-10 text-sm text-red-500 dark:text-red-500", children: error }))] }));
};
exports.default = ValidationPhone;
