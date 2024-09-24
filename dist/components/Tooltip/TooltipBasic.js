"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tooltip_1 = __importDefault(require("./Tooltip"));
const fa_1 = require("react-icons/fa");
const fa_2 = require("react-icons/fa");
const fa_3 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const fa6_2 = require("react-icons/fa6");
const TooltipBasic = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "GitHub", children: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: "mr-2 text-2xl dark:text-white" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "FaceBook", children: (0, jsx_runtime_1.jsx)(fa_2.FaFacebookSquare, { className: "mr-2 text-2xl dark:text-white" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Instagram", children: (0, jsx_runtime_1.jsx)(fa_3.FaInstagramSquare, { className: "mr-2 text-2xl dark:text-white" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Line", children: (0, jsx_runtime_1.jsx)(fa6_1.FaLine, { className: "mr-2 text-2xl dark:text-white" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Twitter", children: (0, jsx_runtime_1.jsx)(fa6_2.FaSquareXTwitter, { className: "mr-2 text-2xl dark:text-white" }) })] }));
};
exports.default = TooltipBasic;
