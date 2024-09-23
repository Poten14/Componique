import Button from "@components/Button/Button";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
const SizeClass = {
    xs: "max-w-xs w-11/12 sm:w-auto",
    small: "max-w-sm w-11/12 sm:w-auto",
    medium: "max-w-md w-11/12 sm:w-auto",
    large: "max-w-lg w-11/12 sm:w-auto",
    xl: "max-w-xl w-11/12 sm:w-auto",
    full: "max-w-full w-full h-full",
};
const MaxHeight = {
    xs: "calc(100vh - 650px)",
    small: "calc(100vh - 600px)",
    medium: "calc(100vh - 500px)",
    large: "calc(100vh - 400px)",
    xl: "calc(100vh - 300px)",
    full: "100vh",
};
const OverlayModal = ({ isOpen, onClose, children, title, size = "small", closeOnOverlayClick = true, className = "", closeButtonText = "Close", showCloseIcon = true, }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, []);
    if (!isOpen)
        return null;
    const handleOverlayClick = () => {
        if (closeOnOverlayClick)
            onClose();
    };
    return createPortal(<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleOverlayClick}>
      <div className={`relative transform overflow-hidden rounded-lg p-4 shadow-lg transition-all ${SizeClass[size]} ${className} ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`} onClick={(e) => e.stopPropagation()}>
        {showCloseIcon && (<div className="absolute right-4 top-4">
            <button onClick={onClose} className={`${isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-500"}`}>
              &times;
            </button>
          </div>)}
        {title && (<div className={`px-4 py-2 ${isDarkMode ? "border-gray-600" : "bg-gray-200 border-gray-300"}`}>
            <h2 className="text-lg font-medium">{title}</h2>
          </div>)}
        <div className="overflow-y-auto p-4" style={{ maxHeight: MaxHeight[size] }}>
          {children}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button onClick={onClose} className={`${isDarkMode ? "bg-Navy text-white" : ""}`}>
            {closeButtonText}
          </Button>
        </div>
      </div>
    </div>, document.body);
};
export default OverlayModal;
