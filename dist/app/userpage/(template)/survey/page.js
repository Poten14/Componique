"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Survey_1 = __importDefault(require("./components/Survey"));
const RemoteSurvey_1 = __importDefault(require("app/userpage/Remote/RemoteSurvey"));
const SurveyPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-10 w-full p-6 pb-24", children: (0, jsx_runtime_1.jsx)(Survey_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed right-4 top-14", children: (0, jsx_runtime_1.jsx)(RemoteSurvey_1.default, {}) })] }));
};
exports.default = SurveyPage;