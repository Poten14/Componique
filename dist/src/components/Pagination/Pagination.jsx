import React, { useEffect, useState } from "react";
const Pagination = ({ currentPage = 1, totalPages = 10, variant = "circle", styleType = "outlined", color = "Basic", onPageChange, showFirstLastButtons = false, disabled = false, }) => {
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
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; // 한 번에 보여줄 최대 페이지 수
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
        else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, "...", totalPages);
            }
            else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            }
            else {
                pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pageNumbers;
    };
    const colorClasses = {
        Basic: `bg-Basic border-Basic ${isDarkMode ? "text-white" : "text-black"}`,
        Primary: `bg-Primary border-Primary ${isDarkMode ? "text-white" : "text-black"}`,
        gray: `bg-gray border-gray ${isDarkMode ? "text-white" : "text-black"}`,
        Secondary: `bg-Secondary border-Secondary ${isDarkMode ? "text-white" : "text-black"}`,
        Success: `bg-Success border-Success ${isDarkMode ? "text-white" : "text-black"}`,
        Warning: `bg-Warning border-Warning ${isDarkMode ? "text-white" : "text-black"}`,
        Danger: `bg-Danger border-Danger ${isDarkMode ? "text-white" : "text-black"}`,
        White: "bg-white !border-Gray !text-[#000]",
    };
    const baseButtonClasses = "w-10 h-10 flex items-center justify-center";
    const shapeClass = variant === "circle" ? "rounded-full" : "rounded-md";
    const pageNumbers = generatePageNumbers();
    return (<div className={`flex items-center space-x-1 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
      {showFirstLastButtons && (<button className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === 1 ? "cursor-not-allowed text-Gray" : "text-Gray"}`} onClick={() => !disabled && onPageChange(1)} disabled={currentPage === 1 || disabled}>
          &laquo;
        </button>)}
      <button className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === 1 ? "cursor-not-allowed text-Gray" : "text-Gray"}`} onClick={() => !disabled && onPageChange(currentPage - 1)} disabled={currentPage === 1 || disabled}>
        &lt;
      </button>
      {pageNumbers.map((number, index) => (<React.Fragment key={index}>
          {typeof number === "string" ? (<span className="px-2">...</span>) : (<button className={`${baseButtonClasses} ${shapeClass} ${currentPage === number
                    ? styleType === "filled"
                        ? `${colorClasses[color]} text-white`
                        : styleType === "outlined"
                            ? `${colorClasses[color]} text-${color} border-2 bg-transparent`
                            : styleType === "outlined-focused"
                                ? `${colorClasses[color]} text-${color} border-2 bg-transparent`
                                : styleType === "filled-outlined"
                                    ? `${colorClasses[color]} text-white bg-${color} border-2`
                                    : `bg-${color} text-white`
                    : styleType === "outlined"
                        ? "border-none text-Gray"
                        : styleType === "outlined-focused"
                            ? "border text-Gray"
                            : styleType === "filled-outlined"
                                ? `border text-${color} border-${color}`
                                : "text-Gray"}`} onClick={() => !disabled && onPageChange(number)} disabled={disabled}>
              {number}
            </button>)}
        </React.Fragment>))}
      <button className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === totalPages
            ? "cursor-not-allowed text-Gray"
            : "text-Gray"}`} onClick={() => !disabled && onPageChange(currentPage + 1)} disabled={currentPage === totalPages || disabled}>
        &gt;
      </button>
      {showFirstLastButtons && (<button className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === totalPages
                ? "cursor-not-allowed text-Gray"
                : "text-Gray"}`} onClick={() => !disabled && onPageChange(totalPages)} disabled={currentPage === totalPages || disabled}>
          &raquo;
        </button>)}
    </div>);
};
export default Pagination;
