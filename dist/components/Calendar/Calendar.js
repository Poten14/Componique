"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const Calendar = ({ onDateSelect, defaultValue }) => {
    const [currentDate, setCurrentDate] = (0, react_1.useState)(defaultValue || new Date());
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(defaultValue || null);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // 현재 달의 첫 날
    // 현재 달의 첫 날짜 요일을 숫자로 반환 일 = 1, 월 = 1
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay();
    // 현재 달의 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endDay = lastDayOfMonth.getDate();
    (0, react_1.useEffect)(() => {
        if (defaultValue) {
            setCurrentDate(defaultValue);
            setSelectedDate(defaultValue);
        }
    }, [defaultValue]);
    // 이전달
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    // 다음달
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    // 해당 날짜 선택
    const handleDateClick = (day) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selectedDate);
        if (onDateSelect) {
            onDateSelect(selectedDate);
        }
    };
    // 빈칸, 날짜 추가 반복문
    const renderDays = () => {
        const days = [];
        for (let i = 0; i < startDay; i++) {
            days.push((0, jsx_runtime_1.jsx)("div", { className: "p-2" }, `empty-${i}`));
        }
        for (let day = 1; day <= endDay; day++) {
            const isSelected = selectedDate?.getDate() === day &&
                selectedDate?.getMonth() === currentDate.getMonth() &&
                selectedDate?.getFullYear() === currentDate.getFullYear();
            days.push((0, jsx_runtime_1.jsx)("div", { className: `m-auto h-10 w-10 cursor-pointer rounded-full p-2 text-center text-sm ${isSelected ? "bg-[#9AC5E5] text-white" : ""} `, onClick: () => handleDateClick(day), children: day }, day));
        }
        return days;
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "m-auto w-2/5", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-2 flex justify-between", children: [(0, jsx_runtime_1.jsxs)("span", { children: [currentDate.toLocaleString("default", { month: "long" }), " ", currentDate.getFullYear()] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: "pr-6", onClick: handlePrevMonth, children: `<` }), (0, jsx_runtime_1.jsx)("button", { className: "pr-2", onClick: handleNextMonth, children: `>` })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-2", children: daysOfWeek.map((day) => ((0, jsx_runtime_1.jsx)("div", { className: "text-center text-[#ddd]", children: day }, day))) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-2 text-center", children: renderDays() })] }) }) }));
};
exports.default = Calendar;