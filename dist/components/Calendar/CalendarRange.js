"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const CalendarRange = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = (0, react_1.useState)(new Date());
    const [startDate, setStartDate] = (0, react_1.useState)(null);
    const [endDate, setEndDate] = (0, react_1.useState)(null);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // 현재 달의 첫 날
    // 현재 달의 첫 날짜 요일을 숫자로 반환 일 = 1, 월 = 1
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay();
    // 현재 달의 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endDay = lastDayOfMonth.getDate();
    // 이전달
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    // 다음달
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    // 선택날짜
    const handleDateClick = (day) => {
        const selectedDate = new Date(year, month, day);
        if (!startDate || (startDate && endDate)) {
            setStartDate(selectedDate);
            setEndDate(null);
        }
        else if (startDate && !endDate) {
            if (selectedDate >= startDate) {
                setEndDate(selectedDate);
                if (onDateSelect) {
                    onDateSelect(startDate, selectedDate);
                }
            }
            else {
                setStartDate(selectedDate);
                setEndDate(null);
            }
        }
    };
    const isDateInRange = (date) => {
        if (!startDate || !endDate)
            return false;
        return date >= startDate && date <= endDate;
    };
    const renderDays = () => {
        const days = [];
        for (let i = 0; i < startDay; i++) {
            days.push((0, jsx_runtime_1.jsx)("div", { className: "p-2" }, `empty-${i}`));
        }
        for (let day = 1; day <= endDay; day++) {
            const date = new Date(year, month, day);
            const isSelectedStart = startDate && date.getTime() === startDate.getTime();
            const isSelectedEnd = endDate && date.getTime() === endDate.getTime();
            const isInRange = isDateInRange(date);
            days.push((0, jsx_runtime_1.jsx)("div", { className: `m-auto h-10 w-10 cursor-pointer rounded-full p-2 text-center text-sm ${isSelectedStart || isSelectedEnd
                    ? "bg-[#9AC5E5] text-white"
                    : isInRange
                        ? "bg-[#9AC5E5] text-white"
                        : ""}`, onClick: () => handleDateClick(day), children: day }, day));
        }
        return days;
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "m-auto w-2/5", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-2 flex justify-between", children: [(0, jsx_runtime_1.jsxs)("span", { children: [currentDate.toLocaleString("default", { month: "long" }), " ", currentDate.getFullYear()] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: "pr-6", onClick: handlePrevMonth, children: `<` }), (0, jsx_runtime_1.jsx)("button", { className: "pr-2", onClick: handleNextMonth, children: `>` })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-2", children: daysOfWeek.map((day) => ((0, jsx_runtime_1.jsx)("div", { className: "text-center text-[#ddd]", children: day }, day))) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-2 text-center", children: renderDays() })] }) }) }));
};
exports.default = CalendarRange;
