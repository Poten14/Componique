"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const hoverColorClasses = {
    black: "hover:text-black dark:hover:text-white",
    Basic: "hover:text-[#9AC5E5] dark:hover:text-[#9AC5E5]",
    Primary: "hover:text-[#7AA7FF] dark:hover:text-[#7AA7FF]",
    Danger: "hover:text-[#FF7676] dark:hover:text-[#FF7676]",
};
const activeColorClasses = {
    black: "text-black dark:text-white",
    Basic: "text-[#9AC5E5] dark:text-[#9AC5E5]",
    Primary: "text-[#7AA7FF] dark:text-[#7AA7FF]",
    Danger: "text-[#FF7676] dark:text-[#FF7676]",
};
const BreadCrumb = ({ items, hoverColor = "black", activeColor = "black", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex", children: (0, jsx_runtime_1.jsx)("div", { className: "inline-flex items-center space-x-1", children: items.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center", children: [index !== 0 && (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-next", color: "gray" }), item.href ? ((0, jsx_runtime_1.jsx)("a", { href: item.href, className: `text-md font-medium text-gray dark:text-gray ${hoverColorClasses[hoverColor]} ${item.className}`, children: item.children })) : ((0, jsx_runtime_1.jsx)("span", { className: `text-md font-medium ${activeColorClasses[activeColor]} ${item.className}`, "aria-current": "page", children: item.children }))] }, index))) }) }));
};
exports.default = BreadCrumb;
