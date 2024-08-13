"use client";
import exp from "constants";
import { useState } from "react";

// BasicCard 인터페이스 정의
interface interactiveCard {
  title: string;
  description: string;
  detail: string;
}

// interactive 컴포넌트 생성
const Card2 = ({ title, description, detail }: interactiveCard) => {
  // 카드 추가설명의 초기상태 설정
  const [expand, setExpand] = useState(false);

  // 카드확장 토글
  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div
      className="m-4 max-w-sm cursor-pointer rounded-xl border-2 border-[#4C89FF] bg-white shadow-lg"
      onClick={toggleExpand}
    >
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base text-gray-800">{description}</p>
        <div
          className={`overflow-hidden duration-500 ease-in-out ${expand ? "max-h-40" : "max-h-0"}`}
        >
          {expand && <div className="mt-4 text-gray-600">{detail}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card2;
