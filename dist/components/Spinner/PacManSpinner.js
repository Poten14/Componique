"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24",
};
const borderWidths = {
    small: "32px",
    medium: "50px",
    large: "60px",
};
const colorClasses = {
    Basic: "border-Basic",
    Primary: "border-Primary",
    gray: "border-gray",
    Secondary: "border-Secondary",
    Success: "border-Success",
    Warning: "border-Warning",
    Danger: "border-Danger",
    White: "border-white",
};
const speedClasses = {
    slow: "animate-spin-slow",
    medium: "animate-spin",
    fast: "animate-spin-fast",
};
const PacManSpinner = ({ size = "small", color = "Basic", speed = "medium", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: `relative ${sizeClasses[size]} ${speedClasses[speed]} ${colorClasses[color]} rounded-full border-solid border-t-transparent`, style: {
            borderWidth: borderWidths[size],
        } }));
};
exports.default = PacManSpinner;
