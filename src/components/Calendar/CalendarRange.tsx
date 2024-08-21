"use client";

import { useState } from "react";

interface CalendarProps {
  onDateSelect?: (startDate: Date, endDate: Date) => void;
}

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
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className={dateClass}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CalendarRange;
