"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const logo_svg_1 = __importDefault(require("../../../public/images/logo.svg"));
const SearchInput2_1 = __importDefault(require("../Input/SearchInput2"));
const LogoSection = () => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center", children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: logo_svg_1.default, alt: "logo", width: 50, height: 50 }), (0, jsx_runtime_1.jsx)("span", { className: "ml-2 text-2xl", children: "Compunique" })] }));
const NavbarSearch = ({ name, id, maxLength, size = "medium", placeholder, type, value, onChange, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto mt-4 flex max-w-screen-lg items-center justify-between p-4 dark:bg-[#333742] dark:text-white", children: [(0, jsx_runtime_1.jsx)(LogoSection, {}), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsx)(SearchInput2_1.default, { name: name, id: id, maxLength: maxLength, size: size, placeholder: placeholder, type: type, value: value, onChange: onChange, ...props }) })] }));
};
exports.default = NavbarSearch;
