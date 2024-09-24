"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SwitchLabeled = () => {
    const [isOn, setIsOn] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: "relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]", children: (0, jsx_runtime_1.jsx)("p", { className: `flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out ${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}`, children: isOn ? "ON" : "OFF" }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: "relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]", children: (0, jsx_runtime_1.jsx)("p", { className: `flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out ${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}`, children: isOn ? "OFF" : "ON" }) })] }));
};
exports.default = SwitchLabeled;
