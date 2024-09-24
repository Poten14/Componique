"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BarsSpinner_1 = __importDefault(require("./BarsSpinner"));
const BasicSpinner_1 = __importDefault(require("./BasicSpinner"));
const SquareSpinner_1 = __importDefault(require("./SquareSpinner"));
const shapeClasses = {
    Basic: BasicSpinner_1.default,
    Square: SquareSpinner_1.default,
    Bars: BarsSpinner_1.default,
};
const FullScreenSpinner = ({ spinning, shape = "Basic", }) => {
    if (!spinning)
        return null;
    const SpinnerComponent = shapeClasses[shape];
    // 선택된 모양에 따라 컴포넌트를 동적으로 선택
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center", style: { margin: 0, backgroundColor: "rgba(0, 0, 0, 0.2)" }, children: (0, jsx_runtime_1.jsx)(SpinnerComponent, { size: "medium", color: "White", speed: "medium" }) }));
};
exports.default = FullScreenSpinner;
