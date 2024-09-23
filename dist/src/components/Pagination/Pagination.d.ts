import React from "react";
import { Color } from "types/type";
interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    variant?: "circle" | "square";
    styleType?: "filled" | "outlined" | "outlined-focused" | "filled-outlined";
    color?: Color;
    onPageChange: (page: number) => void;
    showFirstLastButtons?: boolean;
    boundaryRange?: number;
    siblingRange?: number;
    disabled?: boolean;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
