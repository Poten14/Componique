"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const sizeClasses = {
    small: "text-xs",
    medium: "text-lg",
    large: "text-xl",
};
const hoverColorClasses = {
    skyblue: "hover:text-[#9AC5E5] dark:hover:text-[#9AC5E5]",
    blue: "hover:text-[#7AA7FF] dark:hover:text-[#7AA7FF]",
    red: "hover:text-[#FF7676] dark:hover:text-[#FF7676]",
};
const positionClasses = {
    static: "static",
    sticky: "sticky",
    relative: "relative",
};
const Navbar = ({ size = "small", hoverColor = "blue", position = "static", logoName, logoSrc, links, }) => {
    const hoverClass = hoverColorClasses[hoverColor];
    const navClass = `cursor-pointer ${hoverClass} no-underline dark:text-white`;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `mx-auto mt-4 flex max-w-screen-lg items-center justify-between p-2 dark:bg-[#333742] dark:text-white ${sizeClasses[size]} ${positionClasses[position]}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center justify-center`, children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: logoSrc, alt: "logo", width: 60, height: 40, unoptimized: true }), (0, jsx_runtime_1.jsx)("div", { className: `ml-2 cursor-pointer font-semibold ${sizeClasses[size]}`, children: logoName })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-between gap-8", children: links.map((link) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: link.href, className: navClass, children: link.name }, link.name))) })] }) }));
};
exports.default = Navbar;
