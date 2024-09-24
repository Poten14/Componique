"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidationEmail = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const ValidateEmail = (Email) => {
        const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 정규식
        return emailType.test(email);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "email", value: email, onChange: handleChange, placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.", className: "text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black" }), error && ((0, jsx_runtime_1.jsx)("p", { className: "relative z-10 text-sm text-red-500 dark:text-red-500", children: error }))] }));
};
exports.default = ValidationEmail;
