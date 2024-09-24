"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Badge = ({ type = 'basic', content, icon, color = 'bg-blue-500', textColor = 'text-white' }) => {
    switch (type) {
        case 'icon':
            return ((0, jsx_runtime_1.jsxs)("span", { className: `inline-flex dark:border-[#dcdcdc] border-2 items-center px-2 py-1 ${color} ${textColor} dark:bg-[#1C2127] text-xs font-semibold rounded-full`, children: [icon, content && (0, jsx_runtime_1.jsx)("span", { className: "ml-1", children: content })] }));
        case 'counter':
            return ((0, jsx_runtime_1.jsx)("span", { className: `inline-flex dark:border-[#dcdcdc] border-2 items-center justify-center px-2 py-1 ${color} ${textColor} text-xs font-semibold dark:bg-[#1C2127] rounded-full`, children: content }));
        case 'dot':
            return ((0, jsx_runtime_1.jsx)("span", { className: `inline-flex   ${color} w-2 h-2 rounded-full` }));
        case 'basic':
        default:
            return ((0, jsx_runtime_1.jsx)("span", { className: `inline-flex dark:border-[#dcdcdc] border-2 dark:bg-[#1C2127] items-center px-2 py-1 ${color} ${textColor} text-xs font-semibold rounded-full`, children: content }));
    }
};
exports.default = Badge;
