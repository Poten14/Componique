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
      const isSelected =
        selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === currentDate.getMonth() &&
        selectedDate?.getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`m-auto h-10 w-10 cursor-pointer rounded-full p-2 text-center text-sm ${isSelected ? "bg-[#9AC5E5] text-white" : "bg-white hover:bg-[#1976d20a]"} `}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>,
      );
    }
    return days;
  };

  const dateClass = "text-center text-[#ddd]";

  return (
    <>
      <div className="w-1/5">
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
            <div className={dateClass}>Sun</div>
            <div className={dateClass}>Mon</div>
            <div className={dateClass}>Tue</div>
            <div className={dateClass}>Wed</div>
            <div className={dateClass}>Thu</div>
            <div className={dateClass}>Fri</div>
            <div className={dateClass}>Sat</div>
            {renderDays()}
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
