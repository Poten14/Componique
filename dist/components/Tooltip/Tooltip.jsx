"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const getPosition = (position) => {
    switch (position) {
        case "top":
            return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
        case "bottom":
            return "top-full left-1/2 transform -translate-x-1/2 mt-2";
        case "left":
            return "right-full top-1/2 transform -translate-y-1/2 mr-2";
        case "right":
            return "left-full top-1/2 transform -translate-y-1/2 ml-2";
        default:
            return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    }
};
const Tooltip = ({ content, children, position = "top", }) => {
    const [show, setShow] = (0, react_2.useState)(false);
    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);
    return (<div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {show && (<div className={`absolute ${getPosition(position)} rounded-md p-2 dark:bg-[#1C2127] dark:text-[#DFDFDF] dark:border-[#dfdfdf] bg-white border-black border-2 text-black shadow-lg`}>
          {content}
        </div>)}
    </div>);
};
exports.default = Tooltip;
