"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ColorPicker_1 = __importDefault(require("./ColorPicker"));
const GradientPicker_1 = __importDefault(require("./GradientPicker"));
const TwoPicker = ({ onColorChange }) => {
    const [activePicker, setActivePicker] = (0, react_1.useState)("Color");
    const onChangeColorHandler = (color) => {
        if (onColorChange) {
            onColorChange(color); // 선택한 색상 정보를 전달
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto w-full max-w-xl select-none", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: `w-[80px] cursor-pointer py-1 text-center ${activePicker === "Color" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`, onClick: () => setActivePicker("Color"), children: "Color" }), (0, jsx_runtime_1.jsx)("div", { className: `w-[90px] cursor-pointer py-1 text-center ${activePicker === "Gradient" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`, onClick: () => setActivePicker("Gradient"), children: "Gradient" })] }), (0, jsx_runtime_1.jsx)("div", { children: activePicker === "Color" ? ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ColorPicker_1.default, { selectColor: onChangeColorHandler }) })) : ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(GradientPicker_1.default, { selectColor: onChangeColorHandler }) })) })] }));
};
exports.default = TwoPicker;
