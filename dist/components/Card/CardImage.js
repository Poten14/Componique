"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarBasic_1 = __importDefault(require("../Avatar/AvatarBasic"));
const CardImage = ({ title, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "m-4 flex max-w-sm rounded-xl border-2 border-Blue shadow-lg dark:bg-[#2A2E39] dark:text-white", children: [(0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { src: "/componique_logo.svg", alt: "ComponiqueLogo", size: 100 }), (0, jsx_runtime_1.jsxs)("div", { className: "px-auto ml-4 mr-2 py-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-2xl font-bold dark:text-white", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "text-slate-700", children: children })] })] }));
};
exports.default = CardImage;
