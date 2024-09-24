"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarBasic_1 = __importDefault(require("../Avatar/AvatarBasic"));
// 별점 매기기
const ratingStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: i < rate ? "currentColor" : "none", stroke: "currentColor", className: `h-5 w-5 ${i < rate ? "text-yellow-500" : "text-white"}`, children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.209a1 1 0 00.95.69h4.428c.969 0 1.372 1.24.588 1.81l-3.586 2.624a1 1 0 00-.364 1.118l1.357 4.209c.3.921-.755 1.688-1.54 1.118l-3.586-2.623a1 1 0 00-1.176 0l-3.586 2.623c-.784.57-1.838-.197-1.539-1.118l1.357-4.209a1 1 0 00-.364-1.118L2.72 9.636c-.784-.57-.38-1.81.588-1.81h4.428a1 1 0 00.95-.69l1.357-4.209z" }) }, i));
    }
    return stars;
};
const CardReview = ({ avatar, name, rate, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center px-6 py-4", children: [(0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { src: "/avatar1.svg", alt: "\uD241\uD241\uC774", size: 70 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg font-bold dark:text-white", children: name }), (0, jsx_runtime_1.jsx)("div", { className: "flex", children: ratingStars(rate) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "px-6 pb-4 text-slate-700 dark:text-gray", children: children })] }));
};
exports.default = CardReview;
