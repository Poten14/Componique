"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sizeClasses = {
    xs: "h-3 w-3",
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-8 w-8",
    xl: "h-10 w-10",
};
const colorClasses = {
    Basic: "bg-Basic",
    Primary: "bg-Primary",
    gray: "bg-gray",
    Secondary: "bg-Secondary",
    Success: "bg-Success",
    Warning: "bg-Warning",
    Danger: "bg-Danger",
    White: "bg-white",
};
const speedClasses = {
    slow: "animate-spin-slow",
    medium: "animate-spin",
    fast: "animate-spin-fast",
};
const SquareSpinner = ({ size = "medium", color = "Basic", speed = "medium", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex space-x-1", children: [...Array(5)].map((_, index) => ((0, jsx_runtime_1.jsx)("div", { className: `${sizeClasses[size]} ${speedClasses[speed]} ${colorClasses[color]} rounded` }, index))) }));
};
exports.default = SquareSpinner;
