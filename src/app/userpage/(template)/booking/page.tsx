"use client";

import Calendarform from "./components/calendarform";
import CalendarRemote from "app/userpage/Remote/CalendarRemote";

const page = () => {
  return (
    <div className="flex justify-between">
      {/* 전체 레이아웃을 수평으로 배치 */}
      <div className="w-full p-6 pb-24">
        {/* 캘린더 폼이 들어갈 영역 */}
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          캘린더 페이지
        </h1>
        {/* 캘린더 폼 컴포넌트 렌더링 */}
        <Calendarform />
      </div>
      <div className="fixed right-4 top-14">
        {/* 오른쪽 상단에 리모트 컨트롤러 배치 */}
        <CalendarRemote />
      </div>
    </div>
  );
};
export default page;
