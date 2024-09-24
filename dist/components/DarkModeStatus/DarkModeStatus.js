"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DarkModeStatus = ({ children }) => {
    const [darkMode, setDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const saveMode = localStorage.getItem("mode");
        if (saveMode === "dark") {
            setDarkMode(true);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    const toggleDarkMode = () => {
        const setMode = !darkMode;
        setDarkMode(setMode);
        localStorage.setItem("mode", setMode ? "dark" : "light");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: toggleDarkMode }), children] }));
};
exports.default = DarkModeStatus;
