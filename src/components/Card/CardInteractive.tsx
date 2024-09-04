"use client";
import exp from "constants";
import { useState } from "react";

// BasicCard 인터페이스 정의
interface interactiveCard {
  title: string;

  children?: React.ReactNode;
}

// interactive 컴포넌트 생성
const CardInteractive = ({ title, children }: interactiveCard) => {
  // 카드 추가설명의 초기상태 설정
  const [expand, setExpand] = useState(false);

  // 카드확장 토글
  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div
      className="m-4 max-w-sm cursor-pointer rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39]"
      onClick={toggleExpand}
    >
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <div
          className={`overflow-hidden duration-500 ease-in-out ${expand ? "max-h-40" : "max-h-0"}`}
        >
          {expand && <div className="mt-4 text-slate-700">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default CardInteractive;
