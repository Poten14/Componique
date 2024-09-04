"use client";

import { useState } from "react";

interface CalendarProps {
  onDateSelect?: (startDate: Date, endDate: Date) => void;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

const CalendarRange = ({ onDateSelect }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  // 다음달
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  // 선택날짜
  const handleDateClick = (day: number) => {
    const selectedDate = new Date(year, month, day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (selectedDate >= startDate) {
        setEndDate(selectedDate);
        if (onDateSelect) {
          onDateSelect(startDate, selectedDate);
        }
      } else {
        setStartDate(selectedDate);
        setEndDate(null);
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2" />);
    }

    for (let day = 1; day <= endDay; day++) {
      const date = new Date(year, month, day);
      const isSelectedStart =
        startDate && date.getTime() === startDate.getTime();
      const isSelectedEnd = endDate && date.getTime() === endDate.getTime();
      const isInRange = isDateInRange(date);

      days.push(
        <div
          key={day}
          className={`m-auto h-10 w-10 cursor-pointer rounded-full p-2 text-center text-sm ${
            isSelectedStart || isSelectedEnd
              ? "bg-[#9AC5E5] text-white"
              : isInRange
                ? "bg-[#9AC5E5] text-white"
                : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>,
      );
    }
    return days;
  };

  return (
    <>
      <div className="m-auto w-2/5">
        <div className="w-full">
          <div className="mb-2 flex justify-between">
            <span>
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </span>
            <div>
              <button className="pr-6" onClick={handlePrevMonth}>{`<`}</button>
              <button className="pr-2" onClick={handleNextMonth}>{`>`}</button>
            </div>
          </div>
          {/* 월,달,날짜 */}
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-[#ddd]">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {renderDays()}
          </div>
        </div>
      </div>
    </>
  );
};
export default CalendarRange;
