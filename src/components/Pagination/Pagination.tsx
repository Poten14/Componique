import React from "react";
import { Color } from "types/type";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  variant?: "circle" | "square";
  styleType?: "filled" | "outlined" | "outlined-focused" | "filled-outlined";
  color?: Color;
  onPageChange: (page: number) => void;
  showFirstLastButtons?: boolean; // 첫 페이지와 마지막 페이지 버튼 표시
  boundaryRange?: number; // 첫/마지막 페이지 근처에 표시할 페이지 수
  siblingRange?: number; // 현재 페이지를 중심으로 표시할 페이지 수
  disabled?: boolean; // 전체 페이지네이션 비활성화
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 10,
  variant = "circle",
  styleType = "outlined",
  color = "Basic",
  onPageChange,
  showFirstLastButtons = false,
  disabled = false,
}) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // 한 번에 보여줄 최대 페이지 수

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }

    return pageNumbers;
  };

  const colorClasses = {
    Basic: "bg-Basic border-Basic",
    Primary: "bg-Primary border-Primary",
    gray: "bg-gray border-gray",
    Secondary: "bg-Secondary border-Secondary",
    Success: "bg-Success border-Success",
    Warning: "bg-Warning border-Warning",
    Danger: "bg-Danger border-Danger",
    White: "bg-white border-white text-[#ccc]",
  };

  const baseButtonClasses = "w-10 h-10 flex items-center justify-center";
  const shapeClass = variant === "circle" ? "rounded-full" : "rounded-md";

  const pageNumbers = generatePageNumbers();

  return (
    <div
      className={`flex items-center space-x-1 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {showFirstLastButtons && (
        <button
          className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === 1 ? "cursor-not-allowed text-Gray" : "text-Gray"}`}
          onClick={() => !disabled && onPageChange(1)}
          disabled={currentPage === 1 || disabled}
        >
          &laquo;
        </button>
      )}
      <button
        className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === 1 ? "cursor-not-allowed text-Gray" : "text-Gray"}`}
        onClick={() => !disabled && onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
      >
        &lt;
      </button>
      {pageNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {typeof number === "string" ? (
            <span className="px-2">...</span>
          ) : (
            <button
              className={`${baseButtonClasses} ${shapeClass} ${
                currentPage === number
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
                        : "text-Gray"
              }`}
              onClick={() => !disabled && onPageChange(number)}
              disabled={disabled}
            >
              {number}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === totalPages ? "cursor-not-allowed text-Gray" : "text-Gray"}`}
        onClick={() => !disabled && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
      >
        &gt;
      </button>
      {showFirstLastButtons && (
        <button
          className={`${baseButtonClasses} ${shapeClass} border-none ${currentPage === totalPages ? "cursor-not-allowed text-Gray" : "text-Gray"}`}
          onClick={() => !disabled && onPageChange(totalPages)}
          disabled={currentPage === totalPages || disabled}
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
