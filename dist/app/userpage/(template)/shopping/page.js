"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ShoppingForm_1 = __importDefault(require("../shopping/components/ShoppingForm"));
const RemoteShopping_1 = __importDefault(require("app/userpage/Remote/RemoteShopping"));
const ShoppingPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-10 w-full p-6 pb-24 xl:ml-[230px] xl:w-[calc(100%-580px)]", children: (0, jsx_runtime_1.jsx)(ShoppingForm_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed right-4 top-14", children: (0, jsx_runtime_1.jsx)(RemoteShopping_1.default, {}) })] }));
};
exports.default = ShoppingPage;
