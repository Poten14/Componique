"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const colorClasses = {
    red: "border-[#FF7676] focus:ring-[#FF7676] dark:border-[#FF7676] dark:focus:ring-[#FF7676]",
    blue: "border-[#7AA7FF] focus:ring-[#7AA7FF] dark:border-[#7AA7FF] dark:focus:ring-[#7AA7FF] ",
    green: "border-[#7EEFAF] focus:ring-[#7EEFAF] dark:border-[#7EEFAF] dark:focus:ring-[#7EEFAF]",
    gray: "border-[#DCDCDD] dark:border-[#DCDCDD] focus:ring-[#DCDCDD] dark:focus:ring-[#DCDCDD] ",
};
const Select = ({ option, color = "gray", placeholder, onChange, onClick, className, }) => {
    const [selectValue, setSelectValue] = (0, react_1.useState)("");
    const [open, setOpen] = (0, react_1.useState)(false);
    const dropMenuRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handleOutsideClose = (e) => {
            if (open &&
                dropMenuRef.current &&
                !dropMenuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClose);
        return () => document.removeEventListener("click", handleOutsideClose);
    }, [open]);
    const handleDropDown = () => {
        setOpen(!open);
    };
    const handleOptionClick = (item) => {
        setSelectValue(item);
        setOpen(false);
        if (onChange) {
            onChange(item);
        }
        if (onClick) {
            onClick(item);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `relative w-60 ${className}`, ref: dropMenuRef, children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border dark:border-[#2A6490] dark:bg-[#2a2e39] ${colorClasses[color]} p-2 shadow-lg`, onClick: handleDropDown, children: [(0, jsx_runtime_1.jsx)("span", { children: selectValue || placeholder }), (0, jsx_runtime_1.jsx)(image_1.default, { src: open ? "/selectup.svg" : "/selectdown.svg", alt: "arrow", width: 15, height: 15 })] }), open && ((0, jsx_runtime_1.jsx)("ul", { className: `absolute left-0 right-0 top-full m-0 rounded-lg border bg-white p-0 dark:bg-[#2a2e39] ${colorClasses[color]} z-30 shadow-lg`, children: option.map((item, key) => ((0, jsx_runtime_1.jsx)("li", { className: `m-0 block w-full cursor-pointer rounded-lg py-2 pl-4 hover:bg-[#E8F5FF] dark:hover:bg-[#2A6490] dark:hover:text-white ${selectValue === item
                            ? "bg-[#E8F5FF] dark:bg-[#2A6490] dark:text-white"
                            : ""}`, onClick: () => handleOptionClick(item), children: item }, key))) }))] }) }));
};
exports.default = Select;
