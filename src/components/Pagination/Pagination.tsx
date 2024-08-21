import React from "react";
import { Color } from "types/type";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  variant: "circle" | "square";
  styleType: "filled" | "outlined" | "no-border";
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
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
  const borderStyle =
    styleType === "outlined"
      ? "border-2"
      : styleType === "no-border"
        ? "border-none"
        : "border";

  return (
    <div className="flex items-center space-x-1">
      <button
        className={`${baseButtonClasses} ${shapeClass} ${borderStyle} ${
          currentPage === 1 ? "text-Gray cursor-not-allowed" : "text-Basic"
        } border-none`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`${baseButtonClasses} ${shapeClass} ${borderStyle} ${
            currentPage === number
              ? styleType === "filled"
                ? `${colorClasses[color]} text-white`
                : styleType === "outlined"
                  ? `${colorClasses[color]} text-${color} bg-transparent focus:border-2`
                  : `bg-${color} text-white`
              : "text-Gray"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={`${baseButtonClasses} ${shapeClass} ${borderStyle} ${
          currentPage === totalPages
            ? "text-Gray cursor-not-allowed"
            : "text-Basic"
        } border-none`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
