"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const Page = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        // MutationObserver를 사용하여 다크 모드 변경 감지
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        // 컴포넌트 언마운트 시 Observer 해제
        return () => {
            observer.disconnect();
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative h-screen w-full bg-[url('/404Image.svg')] bg-cover bg-center dark:bg-[url('/404ImageDark.svg')]", children: (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-1/3 right-80 flex transform items-center justify-center", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/", children: (0, jsx_runtime_1.jsx)("button", { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: isDarkMode ? "/404Button-Docs-Dark.svg" : "/404Button-Docs.svg", alt: "DocsButton", width: 200, height: 200 }) }) }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/userpage", children: (0, jsx_runtime_1.jsx)("button", { className: "ml-5", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: isDarkMode ? "/404Button-User-Dark.svg" : "/404Button-User.svg", alt: "UserButton", width: 240, height: 240 }) }) })] }) }));
};
exports.default = Page;
