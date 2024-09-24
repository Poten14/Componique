"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressBarSlider = ({ percent, showPercent = true, completed = true, }) => {
    const [progressBar, setProgressBar] = (0, react_1.useState)(percent);
    (0, react_1.useEffect)(() => {
        setProgressBar(percent);
    }, [percent]);
    const handleSliderChange = (event) => {
        setProgressBar(Number(event.target.value));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 w-full rounded-full bg-[#D9D9D9]", children: (0, jsx_runtime_1.jsx)("div", { className: "h-4 rounded-full bg-Basic transition-all", style: { width: `${progressBar}%` } }) }), showPercent && (0, jsx_runtime_1.jsx)("span", { className: "ml-2", children: `${progressBar}` }), progressBar === 100 && (0, jsx_runtime_1.jsx)("span", { className: "ml-2", children: "\u2705" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: progressBar, onChange: handleSliderChange, className: "mt-4" }) })] }));
};
exports.default = ProgressBarSlider;
