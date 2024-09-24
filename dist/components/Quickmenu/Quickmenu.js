"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const Quickmenu = () => {
    const [quickMenu, setQuickMenu] = (0, react_1.useState)([]);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(null);
    const pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(() => {
        const menuPathname = () => {
            const menus = Array.from(document.querySelectorAll("h1, h2"));
            const items = menus.map((menu, index) => {
                const id = menu.id || `menu-${index}`;
                menu.id = id;
                return {
                    label: menu.textContent || `menu ${index + 1}`,
                    id,
                    tag: menu.tagName.toLowerCase(),
                };
            });
            setQuickMenu(items);
        };
        menuPathname();
    }, [pathname]);
    // Intersection observer api 스크롤 구현
    (0, react_1.useEffect)(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    //
                }
            });
        };
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -50% 0px",
            threshold: 0.1,
        };
    }, []);
    const handleClick = (index, id) => {
        setActiveIndex(index);
        const moveMenu = document.getElementById(id);
        if (moveMenu) {
            moveMenu.scrollIntoView({ behavior: "smooth" });
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "fixed right-10 top-1/3 h-[500px] w-60 justify-end overflow-y-scroll overscroll-y-auto text-sm", children: [(0, jsx_runtime_1.jsx)("div", { className: "pb-2 dark:text-white", children: "On This Page" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: "pl-4", children: quickMenu.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { className: `${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black dark:hover:text-white"} cursor-pointer py-1 ${item.tag === "h2" ? "pl-3" : ""}`, onClick: () => handleClick(index, item.id), children: (0, jsx_runtime_1.jsx)(link_1.default, { href: `#${item.id}`, children: item.label }) }, index))) }) })] }) }));
};
exports.default = Quickmenu;
