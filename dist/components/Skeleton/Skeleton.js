"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sizeClasses = {
    small: "w-[200px]",
    medium: "w-[300px]",
    large: "w-[400px]",
};
const variantsClasses = {
    rounded: "rounded-lg",
    rectangular: "border-none",
};
const Skeleton = ({ size = "small", variants = "rectangular", animate = true, }) => {
    const animationClass = animate ? "animate-pulse" : "";
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: `${sizeClasses[size]} rounded-2xl border border-gray dark:border-[#2A6490]`, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: `${variantsClasses[variants]} h-20 w-full ${animationClass} bg-gray` }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3 pt-3", children: [(0, jsx_runtime_1.jsx)("div", { className: `h-3 w-3/5 ${animationClass} ${variantsClasses[variants]} bg-gray` }), (0, jsx_runtime_1.jsx)("div", { className: `h-3 w-4/5 ${animationClass} ${variantsClasses[variants]} bg-gray` }), (0, jsx_runtime_1.jsx)("div", { className: `h-3 w-2/5 ${animationClass} ${variantsClasses[variants]} bg-gray` })] })] }) }) }));
};
exports.default = Skeleton;
