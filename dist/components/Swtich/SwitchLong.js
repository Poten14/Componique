"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SwitchLong = ({ size = "medium", onColor = "bg-Basic", offColor = "bg-[#9E9E9E] dark:bg-[#333742]", }) => {
    const [isOn, setIsOn] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    // 크기별 스타일을 설정합니다.
    const sizeClasses = {
        small: {
            width: "w-24",
            height: "h-7",
            circleSize: "h-5 w-12",
            translateDistance: "translate-x-10",
        },
        medium: {
            width: "w-36",
            height: "h-9",
            circleSize: "h-7 w-16",
            translateDistance: "translate-x-16",
        },
        large: {
            width: "w-64",
            height: "h-16",
            circleSize: "h-12 w-28",
            translateDistance: "translate-x-32",
        },
    };
    const currentSize = sizeClasses[size];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center space-y-6", children: (0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: `flex ${currentSize.height} ${currentSize.width} cursor-pointer items-center rounded-full p-1 ${isOn ? onColor : offColor}`, children: (0, jsx_runtime_1.jsx)("div", { className: `transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${currentSize.circleSize} ${isOn ? currentSize.translateDistance : ""}` }) }) }));
};
exports.default = SwitchLong;
