"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const bs_1 = require("react-icons/bs");
const SwitchDark = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // 다크 모드 상태를 로컬 스토리지에 저장
        localStorage.setItem("dark-mode", newMode ? "dark" : "light");
    };
    (0, react_1.useEffect)(() => {
        // 페이지 로드 시 저장된 모드 상태를 가져오기
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode === "dark") {
            setIsDarkMode(true);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        // 다크 모드에 따라 HTML 태그의 클래스 설정
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "mr-3 flex items-center justify-center space-x-12", children: (0, jsx_runtime_1.jsx)("div", { onClick: toggleSwitch, className: `flex h-10 w-14 cursor-pointer items-center rounded-full p-1 shadow-lg ${isDarkMode ? "bg-[#232A31]" : "bg-[#FFFFFF]"}`, children: (0, jsx_runtime_1.jsxs)("div", { className: "relative flex h-full items-center", children: [(0, jsx_runtime_1.jsx)(fa_1.FaMoon, { className: `absolute left-1 text-[#EDCE7B] transition-opacity duration-500 ease-in-out ${isDarkMode ? "opacity-100" : "opacity-0"}` }), (0, jsx_runtime_1.jsx)(bs_1.BsSunFill, { className: `absolute translate-x-7 text-[#FFECB8] transition-opacity duration-500 ease-in-out ${isDarkMode ? "opacity-0" : "opacity-100"}` }), (0, jsx_runtime_1.jsx)("div", { className: `h-5 w-5 transform rounded-full duration-700 ease-in-out ${isDarkMode ? "translate-x-7 bg-[#333742]" : "translate-x-1 bg-[#9AC5E5]"}` })] }) }) }));
};
exports.default = SwitchDark;
