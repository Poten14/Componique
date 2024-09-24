"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DataTableBasic = ({ data, thColor = "White", tdColor = "White", }) => {
    const col = data.length > 0 ? Object.keys(data[0]) : [];
    // Tailwind 색상 매핑 객체 (다크 모드 포함)
    const colorClassMap = {
        White: "bg-white dark:bg-gray-300", // White 색상 추가
        Blue: "bg-Blue dark:bg-blue-900",
        Gray: "bg-Gray dark:bg-gray-700",
        Purple: "bg-Purple dark:bg-purple-800",
        Green: "bg-Green dark:bg-green-800",
        Yellow: "bg-Yellow dark:bg-yellow-700",
        Red: "bg-Red dark:bg-red-800",
        Dark: "bg-Dark dark:bg-gray-900",
        Navy: "bg-Navy dark:bg-blue-800",
        Basic: "bg-Basic dark:bg-gray-800",
        Primary: "bg-Primary dark:bg-blue-700",
        Secondary: "bg-Secondary dark:bg-indigo-800",
        Success: "bg-Success dark:bg-green-700",
        Warning: "bg-Warning dark:bg-yellow-800",
        Danger: "bg-Danger dark:bg-red-700",
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto dark:text-white", children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full border-collapse dark:border-[#3D4250] dark:bg-[#2A2E39]", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: col.map((header) => ((0, jsx_runtime_1.jsx)("th", { className: `border px-4 py-2 text-center font-bold dark:text-white ${colorClassMap[thColor] || "bg-white"}`, children: header }, header))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map((row, index) => ((0, jsx_runtime_1.jsx)("tr", { children: col.map((content) => ((0, jsx_runtime_1.jsx)("td", { className: `border px-4 py-2 text-center dark:text-white ${colorClassMap[tdColor] || "bg-white"}`, children: row[content] }, content))) }, index))) })] }) }));
};
exports.default = DataTableBasic;
