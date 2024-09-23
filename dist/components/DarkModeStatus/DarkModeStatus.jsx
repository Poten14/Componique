"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (<div>
      <button onClick={toggleDarkMode}></button>
      {children}
    </div>);
};
exports.default = DarkModeStatus;
