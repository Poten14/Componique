"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressBarBasic = ({ percent, showPercent, completed, }) => {
    const [progressBar, setProgressBar] = (0, react_1.useState)(percent);
    (0, react_1.useEffect)(() => {
        setProgressBar(percent);
    }, [percent]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative h-4 w-full rounded-full bg-[#D9D9D9]", children: (0, jsx_runtime_1.jsx)("div", { className: "h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out", style: { width: `${progressBar}%` } }) }), showPercent && (0, jsx_runtime_1.jsx)("span", { className: "ml-2", children: `${progressBar}%` }), progressBar === 100 && completed && (0, jsx_runtime_1.jsx)("span", { className: "ml-2", children: "\u2705" })] }));
};
exports.default = ProgressBarBasic;
