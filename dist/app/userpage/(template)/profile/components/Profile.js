"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const SelectList_1 = __importDefault(require("@components/Select/SelectList"));
const useProfileStore_1 = require("app/store/useProfileStore");
const Profile = () => {
    const { shape, size, color, variant, text, iconSize, iconColor, iconPosition, nickname, placeholder, job, location, email, } = (0, useProfileStore_1.useProfileStore)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid place-items-center gap-y-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-[#333742]", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { shape: shape, size: size, color: color, variant: variant, text: text, icon: "icon-user", iconSize: iconSize, iconColor: iconColor, iconPosition: iconPosition }), (0, jsx_runtime_1.jsx)(SelectList_1.default, { option: ["65 Post", "65 Follower", "65 Follow "], className: "rounded-lg bg-Basic text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "text-md w-[120px] rounded-full bg-[#eee] p-1 text-center font-bold dark:bg-Navy", children: nickname }), (0, jsx_runtime_1.jsxs)("div", { className: "grid w-[400px] justify-items-center gap-y-4 rounded-lg border border-Basic bg-white p-6 !text-[#6c6c6c] dark:bg-[#333742]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid w-full grid-cols-[auto_1fr] items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-comment" }), (0, jsx_runtime_1.jsx)(Input_1.default, { size: "small", placeholder: placeholder, width: "100%" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid w-full grid-cols-[auto_1fr] items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-info" }), (0, jsx_runtime_1.jsx)("p", { children: job })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid w-full grid-cols-[auto_1fr] items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-map" }), (0, jsx_runtime_1.jsx)("p", { children: location })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid w-full grid-cols-[auto_1fr] items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-mail" }), (0, jsx_runtime_1.jsx)("p", { children: email })] })] })] }) }));
};
exports.default = Profile;
