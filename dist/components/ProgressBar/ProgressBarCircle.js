"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({ percent, showPercent = true, // showPercent 기본값을 true로 설정
completed = false, // completed 기본값을 false로 설정
 }) => {
    const [progressBar, setProgressBar] = (0, react_1.useState)(percent); // 진행률 상태를 관리하는 state
    // percent 값이 변경될 때마다 progressBar 상태를 업데이트
    (0, react_1.useEffect)(() => {
        setProgressBar(percent);
    }, [percent]);
    // 원형 진행 바의 크기와 둘레 계산
    const circleRadius = 50; // 원의 반지름 설정
    const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
    const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative flex h-32 w-32 items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center justify-center rounded-full", style: {
                // 진행률에 따라 원형 진행 바의 색상이 채워짐
                background: `conic-gradient(#9AC5E5 ${progressBar * 3.6}deg, #d1d5db ${progressBar * 3.6}deg)`,
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-white", children: [showPercent && ((0, jsx_runtime_1.jsx)("span", { className: "text-lg font-medium text-Basic", children: `${progressBar}%` })), completed && progressBar === 100 && ((0, jsx_runtime_1.jsx)("span", { className: "text-lg font-medium text-Basic", children: "\u2705" }))] }) }) }));
};
exports.default = ProgressBarCircle;
