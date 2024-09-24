"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const ColorPickerUI = ({ colors, selectColor }) => {
    const [selectedColor, setSelectedColor] = (0, react_1.useState)("#ffffff");
    const [msg, setMsg] = (0, react_1.useState)("");
    const onClickCopyHandler = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setMsg("The selected color has been copied!");
            setTimeout(() => setMsg(""), 2000);
        }
        catch (error) {
            setMsg("Copy failed.");
        }
    };
    const onChangeColorHandler = (color) => {
        setSelectedColor(color);
        if (selectColor) {
            selectColor(color); // prop으로 전달된 selectColor 함수 호출
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center dark:bg-[#2A2E39]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: selectedColor, className: "mr-2 w-24 px-2 py-1 text-center text-xl outline-none", readOnly: true }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "small", onClick: () => {
                                onClickCopyHandler(selectedColor);
                            }, children: "Copy" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm", children: msg }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "color", className: "mb-2 h-10 w-52 cursor-pointer bg-transparent", value: selectedColor, onChange: (e) => {
                            onChangeColorHandler(e.target.value); // onChangeColorHandler를 호출해서 색상 변경
                        } }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "flex w-52 flex-wrap justify-evenly", children: colors.map((item, index) => ((0, jsx_runtime_1.jsx)("div", { className: `h-[33px] w-[33px] rounded border border-slate-200 dark:border-slate-800 ${selectedColor === item ? "border-2 border-slate-500 dark:border-slate-200" : ""}`, style: { backgroundColor: item }, onClick: () => {
                                onChangeColorHandler(item); // 클릭 시 색상 변경
                            } }, index))) }) })] }) }));
};
exports.default = ColorPickerUI;
