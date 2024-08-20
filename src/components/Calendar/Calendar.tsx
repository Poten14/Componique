"use client";

interface CalendarProps {}

const Calendar = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <div className="w-64">
        <div className="mb-2 flex justify-between">
          <button>Prev</button>
          <button>Next</button>
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
        </div>
      </div>
    </>
  );
};
export default Calendar;
