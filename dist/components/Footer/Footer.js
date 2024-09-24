"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const fa_1 = require("react-icons/fa");
const io5_1 = require("react-icons/io5");
const rx_1 = require("react-icons/rx");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const team = [
    {
        name: "Kim Jun Su",
        github: "https://github.com/kimjusnu",
        blog: "https://dietisdie.tistory.com/",
    },
    {
        name: "Cho Young Rae",
        github: "https://github.com/25rae25",
        blog: "https://velog.io/@niceyoungrae/posts",
    },
    {
        name: "Im Sung Gyung",
        github: "https://github.com/5622lsk",
        blog: "https://velog.io/@5622lsk/posts",
    },
    {
        name: "Lee Da Won",
        github: "https://github.com/allone9425",
        blog: "https://velog.io/@dawnrose",
    },
];
const Footer = () => {
    const TopButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return ((0, jsx_runtime_1.jsx)("footer", { className: "mb-4 flex w-full flex-col items-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col items-center text-center", children: [(0, jsx_runtime_1.jsx)("hr", { className: "mb-4 w-3/6 border-t border-[#bcbcbc] dark:border-[#dddddd]" }), (0, jsx_runtime_1.jsx)(image_1.default, { src: "/FooterLogo.svg", alt: "FooterLogo", width: 300, height: 300, className: "mb-3 dark:hidden" // 다크 모드에서 숨김
                 }), (0, jsx_runtime_1.jsx)(image_1.default, { src: "/FooterLogoDark.svg", alt: "FooterLogo Dark", width: 300, height: 300, className: "mb-3 hidden dark:block" // 다크 모드에서 보이기
                 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center", children: [(0, jsx_runtime_1.jsx)("ul", { className: "mb-4", children: team.map((member, index) => ((0, jsx_runtime_1.jsxs)("li", { className: "mb-2 flex items-center justify-center", children: [(0, jsx_runtime_1.jsxs)("a", { className: "mr-2 flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]", href: member.github, target: "_blank", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-github" }), member.name] }), (0, jsx_runtime_1.jsx)(io5_1.IoEllipsisVerticalOutline, { className: "mx-2 dark:text-white" }), (0, jsx_runtime_1.jsxs)("a", { href: member.blog, target: "_blank", rel: "noopener noreferrer", className: "flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-blog" }), "Blog"] })] }, index))) }), (0, jsx_runtime_1.jsxs)("a", { href: "https://github.com/Poten14/Componique", className: "mb-4 flex items-center text-stone-950 hover:text-slate-700 dark:text-[#DFDFDF]", target: "_blank", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: "mr-2" }), "Project Repository on GitHub"] }), (0, jsx_runtime_1.jsx)("button", { onClick: TopButton, className: "flex items-center", children: (0, jsx_runtime_1.jsx)(rx_1.RxDoubleArrowUp, { className: "text-5xl text-[#9AC5E5] dark:text-[#476D89]" }) })] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-stone-950 dark:text-[#DFDFDF]", children: "\u00A9 2024 Team POTEN. All rights reserved." })] }) }));
};
exports.default = Footer;
