"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const react_2 = require("react");
const ToastPosition_1 = require("./ToastPosition");
const ToastColor_1 = require("./ToastColor");
const Toast = ({ children, isOpen = true, onClose, color = "basic", size = "medium", position = "leftBottom", text = "left", variant = "solid", isClose = false, isProgress = false, className, time, path, ...rest }) => {
    const [isToastOpen, setIsToastOpen] = (0, react_1.useState)(isOpen);
    const [progress, setProgress] = (0, react_1.useState)(100);
    const router = (0, navigation_1.useRouter)();
    (0, react_2.useEffect)(() => {
        setIsToastOpen(isOpen);
    }, [isOpen]);
    (0, react_2.useEffect)(() => {
        if (time) {
            // 총 시간, 사용하는 곳에서 time =""를 설정한 값
            const totalTime = parseInt(time) * 1000;
            // 프로그래스바의 업데이트 간격 : 프로그래스 바를 1%씩 줄이기 위한 간격
            const interval = totalTime / 100;
            // setTimeout을 사용해서 totalTime이 지나면 Toast가 닫히도록 setIsToastOpen(false)를 호출함
            const timeout = setTimeout(() => {
                setIsToastOpen(false);
                if (onClose)
                    onClose();
            }, totalTime);
            //setInterval을 사용해서 progress 상태를 interval마다 1%씩 줄임
            const progressId = setInterval(() => {
                setProgress((prev) => (prev > 0 ? prev - 1 : 0));
            }, interval);
            return () => {
                clearTimeout(timeout);
                clearInterval(progressId);
            };
        }
    }, [time, onClose]);
    const onclickCloseHandler = (e) => {
        //path 입력 시 닫기 버튼은 path가 작동되지 않도록 하기 위해서 사용함
        e.stopPropagation();
        setIsToastOpen(false);
        if (onClose)
            onClose();
    };
    const ToastSize = {
        small: "min-w-[200px] sm:min-w-[250px]  md:min-w-[390px] lg:min-w-[575px] xl:min-w-[650px] max-w-[200px] sm:max-w-[250px] md:max-w-[390px] lg:max-w-[575px] xl:max-w-[650px]",
        medium: "min-w-[300px] sm:min-w-[375px]  md:min-w-[585px] lg:min-w-[863px] xl:min-w-[975px] max-w-[300px] sm:max-w-[375px] md:max-w-[585px] lg:max-w-[863px] xl:max-w-[975px]",
        large: "min-w-[400px] sm:min-w-[500px]  md:min-w-[780px] lg:min-w-[1150px] xl:min-w-[1300px] max-w-[400px] sm:max-w-[500px] md:max-w-[780px] lg:max-w-[1150px] xl:max-w-[1300px]",
    };
    let ToastVariant = "";
    let closeButtonColor = "";
    let progressBarColor = "";
    if (variant === "solid") {
        ToastVariant = `${ToastColor_1.bgColors[color]}`;
        closeButtonColor = color === "white" ? "bg-slate-400" : "bg-white";
        progressBarColor = "bg-gray";
    }
    else if (variant === "border") {
        ToastVariant = `${ToastColor_1.borderColors[color]}`;
        closeButtonColor =
            color === "white" ? "bg-slate-400" : ToastColor_1.bgColors[color] || "bg-slate-400";
        progressBarColor = ToastColor_1.bgColors[color];
    }
    const ToastTextAlign = {
        left: "text-left",
        right: "text-right",
        center: "text-center",
    };
    const BasicToast = "min-w-md   box-border fixed select-none ";
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("section", { className: `${BasicToast} ${ToastPosition_1.ToastPosition[position]} ${ToastSize[size]} ${isToastOpen ? "opacity-100" : "pointer-events-none opacity-0"} ${path ? "cursor-pointer" : ""} ${className || ""} z-[999]`, onClick: () => {
                if (path) {
                    router.push(path);
                }
            }, children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center justify-between rounded-md ${ToastVariant} p-4`, ...rest, children: [(0, jsx_runtime_1.jsx)("div", { className: `${ToastTextAlign[text]} `, children: children }), (0, jsx_runtime_1.jsxs)("button", { className: `z-999 group relative ml-2 h-4 w-4 bg-transparent ${isClose ? "hidden" : "block"}`, onClick: onclickCloseHandler, children: [(0, jsx_runtime_1.jsx)("span", { className: `absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform ${closeButtonColor}` }), (0, jsx_runtime_1.jsx)("span", { className: `absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform ${closeButtonColor}` })] })] }), isProgress && ((0, jsx_runtime_1.jsx)("div", { className: "bg-gray-200 relative h-1 w-full rounded", children: (0, jsx_runtime_1.jsx)("div", { className: `absolute left-0 h-full ${progressBarColor} rounded ${variant === "solid" ? "top-[-4px]" : "top-[-6px]"}`, style: { width: `${progress}%` } }) }))] }) }));
};
exports.default = Toast;
