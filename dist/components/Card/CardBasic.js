"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CardBasic = ({ title, children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "px-6 py-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-2xl font-bold dark:text-white", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "text-base text-slate-700", children: children })] }) }));
};
exports.default = CardBasic;
