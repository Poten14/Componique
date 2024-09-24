"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// interactive 컴포넌트 생성
const CardInteractive = ({ title, children }) => {
    // 카드 추가설명의 초기상태 설정
    const [expand, setExpand] = (0, react_1.useState)(false);
    // 카드확장 토글
    const toggleExpand = () => {
        setExpand(!expand);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "m-4 max-w-sm cursor-pointer rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white", onClick: toggleExpand, children: (0, jsx_runtime_1.jsxs)("div", { className: "px-6 py-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-2xl font-bold dark:text-white", children: title }), (0, jsx_runtime_1.jsx)("div", { className: `overflow-hidden duration-500 ease-in-out ${expand ? "max-h-40" : "max-h-0"}`, children: expand && (0, jsx_runtime_1.jsx)("div", { className: "mt-4 text-slate-700", children: children }) })] }) }));
};
exports.default = CardInteractive;
