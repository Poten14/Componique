"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@components/Button/Button"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const useLoginStore_1 = require("../../../../store/useLoginStore");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const LoginForm = () => {
    const { title, buttonColor, buttonSize, buttonVariant, buttonColor2, buttonSize2, buttonVariant2, placeholder, placeholder2, inputSize, inputWidth, checkboxSize, checkboxColor, checkboxVariant, description, } = (0, useLoginStore_1.useLoginStore)();
    const handleSubmit = () => {
        alert("로그인 완료");
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "mb-8 text-center text-2xl font-bold text-Gray dark:text-gray", children: title }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: placeholder }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: placeholder2 }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex text-Gray", children: (0, jsx_runtime_1.jsx)(CheckBox_1.default, { boxSize: checkboxSize, color: checkboxColor, variant: checkboxVariant, description: description }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-6", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: buttonColor, size: buttonSize, variant: buttonVariant, onClick: handleSubmit, className: "w-full text-white", children: "login" }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-4 text-center", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: buttonColor2, size: buttonSize2, variant: buttonVariant2, className: "w-full text-white", onClick: () => alert("회원가입 페이지로 이동"), children: "sign up" }) })] })] }) }));
};
exports.default = LoginForm;
