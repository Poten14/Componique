import React from "react";
import { Color } from "types/type";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  variant: "circle" | "square";
  styleType: "filled" | "outlined" | "outlined-focused" | "filled-outlined";
  color: Color;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  variant,
  styleType,
  color,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // 한 번에 보여줄 최대 페이지 수

    if (totalPages <= maxVisiblePages) {
      // 전체 페이지 수가 최대 표시 가능한 페이지 수 이하일 때
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // 현재 페이지가 첫 부분일 때
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      }
      // 현재 페이지가 마지막 부분일 때
      else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      }
      // 현재 페이지가 중간일 때
      else {
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
    White: "bg-white border-white",
  };

  const baseButtonClasses = "w-10 h-10 flex items-center justify-center";
  const shapeClass = variant === "circle" ? "rounded-full" : "rounded-md";

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center space-x-1">
      <button
        className={`${baseButtonClasses} ${shapeClass} border-none ${
          currentPage === 1 ? "text-Gray cursor-not-allowed" : "text-Gray"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
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
                    ? "text-Gray border-none"
                    : styleType === "outlined-focused"
                      ? "text-Gray border"
                      : styleType === "filled-outlined"
                        ? `border text-${color} border-${color}`
                        : "text-Gray"
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        className={`${baseButtonClasses} ${shapeClass} border-none ${
          currentPage === totalPages
            ? "text-Gray cursor-not-allowed"
            : "text-Gray"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
