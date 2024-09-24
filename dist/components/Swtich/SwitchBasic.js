"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SwitchBasic = ({ size = "medium", onColor = "bg-Basic", offColor = "bg-[#9E9E9E] dark:bg-[#333742]", }) => {
    const [isOn, setIsOn] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    // 크기별 스타일을 설정합니다.
    const sizeClasses = {
        small: {
            width: "w-14",
            height: "h-7",
            circleSize: "h-5 w-5",
            translateDistance: "translate-x-7",
        },
        medium: {
            width: "w-20",
            height: "h-10",
            circleSize: "h-7 w-7",
            translateDistance: "translate-x-11",
        },
        large: {
            width: "w-36",
            height: "h-16",
            circleSize: "h-12 w-12",
            translateDistance: "translate-x-20",
        },
    };
    const currentSize = sizeClasses[size];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center space-x-12", children: (0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: `flex ${currentSize.height} ${currentSize.width} cursor-pointer items-center rounded-full p-1 ${isOn ? onColor : offColor}`, children: (0, jsx_runtime_1.jsx)("div", { className: `transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${currentSize.circleSize} ${isOn ? currentSize.translateDistance : ""}` }) }) }));
};
exports.default = SwitchBasic;
