"use client";
import React from "react";
import Survey from "./components/Survey";
import SurveyRemote from "app/userpage/Remote/RemoteSurvey";

const SurveyPage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        {/* pb-24는 로그인폼 기준 로그인폼의 아래 여백을 위해 표시한 것이므로 그외 작업시 생략 혹은 수정해도 됨 */}
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          설문조사 페이지
        </h1>
        <Survey />
      </div>
      <div className="fixed right-4 top-14">
        <SurveyRemote />
      </div>
    </div>
  );
};

export default SurveyPage;