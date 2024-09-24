"use strict";
// /userpage/(template)/customerservice/page.tsx
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const customerserviceform_1 = __importDefault(require("./components/customerserviceform"));
const RemoteCustomerService_1 = __importDefault(require("app/userpage/Remote/RemoteCustomerService"));
const CustomerServicePage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-10 w-full p-6 pb-24", children: (0, jsx_runtime_1.jsx)(customerserviceform_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed right-4 top-14", children: (0, jsx_runtime_1.jsx)(RemoteCustomerService_1.default, {}) })] }));
};
exports.default = CustomerServicePage;
