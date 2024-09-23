"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// interactive 컴포넌트 생성
const CardInteractive = ({ title, children }) => {
    // 카드 추가설명의 초기상태 설정
    const [expand, setExpand] = (0, react_1.useState)(false);
    // 카드확장 토글
    const toggleExpand = () => {
        setExpand(!expand);
    };
    return (<div className="m-4 max-w-sm cursor-pointer rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white" onClick={toggleExpand}>
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className={`overflow-hidden duration-500 ease-in-out ${expand ? "max-h-40" : "max-h-0"}`}>
          {expand && <div className="mt-4 text-slate-700">{children}</div>}
        </div>
      </div>
    </div>);
};
exports.default = CardInteractive;
