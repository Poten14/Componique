"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CardPricing = ({ title, description, price, features, buy, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "px-6 py-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-2xl font-bold dark:text-white", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-slate-700 dark:text-white", children: description }), (0, jsx_runtime_1.jsx)("div", { className: "mb-4 text-xl font-semibold dark:text-white", children: price }), (0, jsx_runtime_1.jsx)("ul", { className: "mb-4 mt-2 list-disc pl-6 text-zinc-800 dark:text-[#bcbcbc]", children: features.map((features, index) => {
                        return (0, jsx_runtime_1.jsx)("li", { children: features }, index);
                    }) }), (0, jsx_runtime_1.jsx)("button", { className: "my-7 w-full rounded-lg bg-Primary py-2 text-white hover:bg-Blue", children: buy })] }) }));
};
exports.default = CardPricing;
