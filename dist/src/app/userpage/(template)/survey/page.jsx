"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Survey_1 = __importDefault(require("./components/Survey"));
const RemoteSurvey_1 = __importDefault(require("app/userpage/Remote/RemoteSurvey"));
const SurveyPage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <Survey_1.default />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteSurvey_1.default />
      </div>
    </div>);
};
exports.default = SurveyPage;
