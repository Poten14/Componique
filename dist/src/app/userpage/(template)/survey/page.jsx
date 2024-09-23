"use client";
import React from "react";
import Survey from "./components/Survey";
import SurveyRemote from "app/userpage/Remote/RemoteSurvey";
const SurveyPage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <Survey />
      </div>
      <div className="fixed right-4 top-14">
        <SurveyRemote />
      </div>
    </div>);
};
export default SurveyPage;
