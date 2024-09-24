"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const BreadCrumbDropdown = ({ items }) => {
    const [dropdownOpen, setDropdownOpen] = (0, react_1.useState)(false);
    const [activeDropdown, setActiveDropdown] = (0, react_1.useState)(null);
    const router = (0, navigation_1.useRouter)();
    const dropdownRef = (0, react_1.useRef)(null);
    const handleDropdownToggle = (index) => {
        setDropdownOpen(!dropdownOpen);
        setActiveDropdown(index);
    };
    const handleItemClick = (href) => {
        router.push(href);
    };
    (0, react_1.useEffect)(() => {
        const handleOutsideClose = (e) => {
            if (dropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClose);
        return () => {
            document.removeEventListener("click", handleOutsideClose);
        };
    }, [dropdownOpen]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: "flex items-center space-x-2", children: items.map((item, index) => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-center", children: [item.href ? ((0, jsx_runtime_1.jsx)("a", { href: item.href, className: `text-gray hover:text-black dark:text-gray dark:hover:text-white ${item.className ? item.className : ""}`, children: item.children })) : ((0, jsx_runtime_1.jsxs)("div", { className: "relative", ref: dropdownRef, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex cursor-pointer items-center text-gray hover:text-black dark:hover:text-white", onClick: () => handleDropdownToggle(index), children: [item.children, item.dropdownItems && (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-down", color: "gray" })] }), dropdownOpen &&
                                activeDropdown === index &&
                                item.dropdownItems && ((0, jsx_runtime_1.jsx)("div", { className: "absolute z-50 mt-1 flex w-full flex-col rounded-md border bg-white shadow-md dark:border-gray dark:bg-[#2A2E39] dark:hover:text-white", children: item.dropdownItems.map((dropdownItem, idx) => ((0, jsx_runtime_1.jsx)("a", { href: dropdownItem.href, onClick: () => handleItemClick(dropdownItem.href), className: "flex cursor-pointer rounded-md p-2 text-sm hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-gray dark:hover:bg-[#2A6490] dark:hover:text-white", children: dropdownItem.label }, idx))) }))] })), index < items.length - 1 && (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-next", color: "gray" })] }, index))) }) }));
};
exports.default = BreadCrumbDropdown;
