"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SwitchRound = () => {
    const [isOn, setIsOn] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: "relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]", children: (0, jsx_runtime_1.jsx)("div", { className: `absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out ${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}` }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: "relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]", children: (0, jsx_runtime_1.jsx)("div", { className: `absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out ${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}` }) })] }));
};
exports.default = SwitchRound;
