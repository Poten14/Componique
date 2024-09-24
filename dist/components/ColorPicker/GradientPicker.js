"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("../Button/Button"));
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const GradientPicker = ({ selectColor, }) => {
    const [colors, setColors] = (0, react_1.useState)({
        startColor: "#ffffff",
        endColor: "#000000",
    });
    const [position, setPosition] = (0, react_1.useState)("to right");
    const [msg, setMsg] = (0, react_1.useState)("");
    // 그라디언트 코드
    const gradientCode = `linear-gradient(${position}, ${colors.startColor}, ${colors.endColor})`;
    (0, react_1.useEffect)(() => {
        // 그라디언트 코드가 변경될 때마다 selectColor 콜백 호출
        if (selectColor) {
            selectColor(gradientCode);
        }
    }, [colors, position, gradientCode, selectColor]); // colors나 position이 변경될 때마다 호출
    const onClickCopyHandler = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setMsg("The selected gradient has been copied!");
            setTimeout(() => setMsg(""), 2000);
        }
        catch (error) {
            setMsg("Copy failed.");
        }
    };
    const onChangeColorHandler = (colorType) => (event) => {
        setColors({
            ...colors,
            [colorType]: event.target.value,
        });
    };
    const onChangePositionHandler = (event) => {
        setPosition(event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center dark:bg-[#2A2E39]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center space-x-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "color", value: colors.startColor, onChange: onChangeColorHandler("startColor"), className: "mb-2 h-10 w-24 cursor-pointer bg-transparent" }), (0, jsx_runtime_1.jsx)("p", { children: "To" }), (0, jsx_runtime_1.jsx)("input", { type: "color", value: colors.endColor, onChange: onChangeColorHandler("endColor"), className: "mb-2 h-10 w-24 cursor-pointer bg-transparent" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative flex w-full items-center justify-center space-x-2", children: [(0, jsx_runtime_1.jsx)("span", { children: "To" }), (0, jsx_runtime_1.jsxs)("select", { value: position, onChange: onChangePositionHandler, className: "border-gray-300 block appearance-none rounded-lg border border-gray bg-white px-6 py-2 shadow-sm focus:border-Basic focus:outline-none focus:ring-2 focus:ring-Basic", children: [(0, jsx_runtime_1.jsx)("option", { value: "to right", children: "right" }), (0, jsx_runtime_1.jsx)("option", { value: "to left", children: "left" }), (0, jsx_runtime_1.jsx)("option", { value: "to bottom", children: "bottom" }), (0, jsx_runtime_1.jsx)("option", { value: "to top", children: "top" }), (0, jsx_runtime_1.jsx)("option", { value: "to bottom right", children: "bottom right" }), (0, jsx_runtime_1.jsx)("option", { value: "to bottom left", children: "bottom left" }), (0, jsx_runtime_1.jsx)("option", { value: "to top right", children: "top right" }), (0, jsx_runtime_1.jsx)("option", { value: "to top left", children: "top left" })] }), (0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-[66px] flex items-center", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "/selectdown.svg", alt: "arrow", width: 15, height: 15 }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "m-auto flex w-[200px] items-center justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-left text-lg font-bold", children: "Preview" }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "small", onClick: () => {
                            onClickCopyHandler(gradientCode);
                        }, children: "Copy" })] }), (0, jsx_runtime_1.jsx)("div", { className: "m-auto h-16 w-52 rounded border border-slate-200", style: {
                    background: gradientCode,
                } }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm", children: msg }) }), (0, jsx_runtime_1.jsx)("textarea", { readOnly: true, value: gradientCode, className: "mt-4 w-52 resize-none rounded p-2 text-xl outline-none", rows: 3 })] }));
};
exports.default = GradientPicker;
