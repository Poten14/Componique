"use client";

import CodeBox from "@components/CodeBox";
import { useState } from "react";

const IntroPage = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };
  return (
    <>
      <div className="prose mb-40 max-w-[850px] text-[#6D6D6D]">
        <div>
          <div className="text-4xl font-bold text-black">
            Componique - Tailwind CSS component library
          </div>
          <p className="mb-4s text-lg dark:text-gray">
            Tailwind CSS의 유틸리티 클래스들로 구축된 가장 인기 있는 오픈 소스
            인터랙티브 UI 컴포넌트 라이브러리인 Componique로 시작해보세요.
          </p>
        </div>
        <div className="my-12">
          <h1 className="text-3xl">Componique 다른 컴포넌트와 다른점</h1>
        </div>
        <div className="prose my-5 max-w-[850px] text-[#6D6D6D]">
          <h2 className="mb-2">직관적인 설명 및 예제코드</h2>
          <p className="text-lg dark:text-gray">
            각 컴포넌트마다 지원하는 속성(prop)에 대한 구체적인 설명을
            제공합니다.
          </p>
        </div>
        <div className="prose my-5 max-w-[850px] text-[#6D6D6D]">
          <h2 className="mb-2">다양한 컴포넌트의 재사용성과 확장성</h2>
          <p className="mb-4 text-lg dark:text-gray">
            베이직한 UI 요소를 빠르게 구축하고, 확장성이 용이하여 개발 과정에서
            시간을 절약할 수 있습니다.
          </p>
        </div>
        <div className="prose my-5 max-w-[850px] text-[#6D6D6D]">
          <h2 className="mb-2">사용자 친화적인 UI 템플릿 커스터마이징</h2>
          <p className="mb-4 text-lg dark:text-gray">
            복잡한 코드 없이 사용자가 템플릿을 즉각적으로 수정하고 확인할 수
            있는 기능을 제공합니다.
          </p>
        </div>
        <div className="mt-10">
          <div>
            <h1>Componique - Quickstart</h1>
            <p>
              Componique는 Tailwind CSS의 플러그인으로 작동하며, 사용자가 직접
              커스터마이징, 확장이 가능하며 다크모드도 지원하고있습니다.
            </p>
            <CodeBox
              code={`npm install @componique`}
              copyText={`npm install @componique`}
              language="tsx"
              index={0}
              copied={copied}
              handleCopy={handleCopy}
            />
          </div>
        </div>
        {/* 퀵메뉴, 다크모드 지원, 템플릿 코드박스, 컴포넌트의 유연성과 확장성, 사용자ui */}
      </div>
    </>
  );
};
export default IntroPage;
