"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Badge_1 = __importDefault(require("./Badge"));
const BadgeCounter = () => {
    return ((0, jsx_runtime_1.jsx)(Badge_1.default, { type: "counter", content: "+5", color: "bg-red-500", textColor: "text-white" }));
};
exports.default = BadgeCounter;