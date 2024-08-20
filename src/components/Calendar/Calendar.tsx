"use client";

import { useState } from "react";

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

const Calendar = ({ onDateSelect }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  // 해당 날짜 선택
  const handleDateClick = (day: number) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    setSelectedDate(selectedDate);
    if (onDateSelect) {
      onDateSelect(selectedDate);
    }
    console.log("selectedDate", selectedDate);
  };

  // 빈칸, 날짜 추가 반복문
  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i} className="p-2"`} />);
    }

    for (let day = 1; day <= endDay; day++) {
      days.push(
        <div
          key={day}
          className={`cursor-pointer p-2 text-center hover:bg-gray ${
            selectedDate?.getDate() === day &&
            selectedDate?.getMonth() === currentDate.getMonth() &&
            selectedDate?.getFullYear() === currentDate.getFullYear()
              ? "bg-[#9AC5E5] text-white"
              : "bg-white"
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
      <div className="w-64">
        <div className="mb-2 flex justify-between">
          <button onClick={handlePrevMonth}>Prev</button>
          <span>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </span>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        {/* 월,달,날짜 */}
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center font-bold">Sun</div>
          <div className="text-center font-bold">Mon</div>
          <div className="text-center font-bold">Tue</div>
          <div className="text-center font-bold">Wed</div>
          <div className="text-center font-bold">Thu</div>
          <div className="text-center font-bold">Fri</div>
          <div className="text-center font-bold">Sat</div>
          {renderDays()}
        </div>
      </div>
    </>
  );
};
export default Calendar;
