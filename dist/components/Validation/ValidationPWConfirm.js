"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidationPWConfirm = () => {
    const [PW, setPW] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const [confirmPW, setConfirmPW] = (0, react_1.useState)("");
    const [confirmError, setConfirmError] = (0, react_1.useState)("");
    const validatePW = (PW) => {
        const PWType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return PWType.test(PW);
    };
    const handleChangePW = (e) => {
        const value = e.target.value;
        setPW(value);
        setError(validatePW(value)
            ? ""
            : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상");
        setConfirmError("");
    };
    const handleChangeConfirmPW = (e) => {
        const value = e.target.value;
        setConfirmPW(value);
        setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "password", value: PW, onChange: handleChangePW, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.", className: "border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white" }), error && (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-red-500", children: error })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "password", value: confirmPW, onChange: handleChangeConfirmPW, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694.", className: "mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black" }), confirmError && ((0, jsx_runtime_1.jsx)("p", { className: "absolute z-10 text-sm text-red-500 dark:text-red-500", children: confirmError }))] })] }));
};
exports.default = ValidationPWConfirm;
