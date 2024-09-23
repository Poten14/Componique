"use client";
import { useEffect, useState } from "react";
const DarkModeStatus = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const saveMode = localStorage.getItem("mode");
        if (saveMode === "dark") {
            setDarkMode(true);
        }
    }, []);
    useEffect(() => {
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
export default DarkModeStatus;
