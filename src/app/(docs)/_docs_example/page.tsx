"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
const DocsExample = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">제목</h1>
      {/* 카피버튼 시작 */}
      <CodeBox
        code={`code`}
        copyText={`code`}
        language="tsx"
        index={1} //2개 이상일 경우 index 순서를 정할 것
        copied={copied}
        handleCopy={handleCopy}
      />
      {/* 카피버튼 끝 */}
    </div> //최 상단 prose의 끝나는 지점
  );
};
export default DocsExample;
