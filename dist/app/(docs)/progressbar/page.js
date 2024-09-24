"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressBarBasic_1 = __importDefault(require("@components/ProgressBar/ProgressBarBasic"));
const ProgressBarCircle_1 = __importDefault(require("@components/ProgressBar/ProgressBarCircle"));
const ProgressBarSlider_1 = __importDefault(require("@components/ProgressBar/ProgressBarSlider"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ProgressBarBasicDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. ProgressBarBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC791\uC5C5\uC758 \uC9C4\uD589 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uC2DC\uD558\uB294 \uAE30\uBCF8 \uC9C4\uD589 \uBC14(Progress Bar) \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC9C4\uD589\uB960\uC744 \uBC31\uBD84\uC728\uB85C \uD45C\uC2DC\uD558\uBA70, \uC635\uC158\uC73C\uB85C \uC9C4\uD589\uB960 \uD45C\uC2DC \uBC0F \uC791\uC5C5 \uC644\uB8CC \uC5EC\uBD80\uB97C \uC544\uC774\uCF58\uC73C\uB85C \uB098\uD0C0\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';`, copyText: `import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(ProgressBarBasic_1.default, { percent: 70, showPercent: true, completed: true }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';

function Example() {
  return <ProgressBarBasic percent={70} showPercent completed />;
}

export default Example;`, copyText: `import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';

function Example() {
  return <ProgressBarBasic percent={70} showPercent completed />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "percent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C4\uD589 \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0B4\uB294 \uBC31\uBD84\uC728 \uAC12 (0-100)" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "0" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showPercent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C4\uD589\uB960\uC744 \uD14D\uC2A4\uD2B8\uB85C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "completed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC791\uC5C5 \uC644\uB8CC \uC5EC\uBD80\uB97C \uCCB4\uD06C \uC544\uC774\uCF58\uC73C\uB85C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { useState, useEffect } from "react";

interface ProgressBarBasicProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

const ProgressBarBasic = ({
  percent,
  showPercent,
  completed,
}: ProgressBarBasicProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  return (
    <div className="flex w-10/12 items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div
          className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out"
          style={{ width: \`\${progressBar}%\` }}
        ></div>
      </div>
      {showPercent && <span className="ml-2">{\`\${progressBar}%\`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>
  );
};

export default ProgressBarBasic;`, copyText: `import { useState, useEffect } from "react";

interface ProgressBarBasicProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

const ProgressBarBasic = ({
  percent,
  showPercent,
  completed,
}: ProgressBarBasicProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  return (
    <div className="flex w-10/12 items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div
          className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out"
          style={{ width: \`\${progressBar}%\` }}
        ></div>
      </div>
      {showPercent && <span className="ml-2">{\`\${progressBar}%\`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>
  );
};

export default ProgressBarBasic;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. ProgressBarCircle" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarCircle" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6D0\uD615 \uC9C4\uD589 \uBC14\uB97C \uD45C\uC2DC\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB85C, \uC9C4\uD589\uB960\uACFC \uC644\uB8CC \uC5EC\uBD80\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';`, copyText: `import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(ProgressBarCircle_1.default, { percent: 75, showPercent: true, completed: false }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';

function Example() {
  return <ProgressBarCircle percent={75} showPercent={true} completed={false} />;
}

export default Example;`, copyText: `import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';

function Example() {
  return <ProgressBarCircle percent={75} showPercent={true} completed={false} />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarCircle" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "percent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C4\uD589\uB960\uC744 \uB098\uD0C0\uB0B4\uB294 \uAC12 (0-100)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "0" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showPercent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C4\uD589\uB960\uC744 \uD14D\uC2A4\uD2B8\uB85C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "completed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC5C8\uB294\uC9C0 \uC5EC\uBD80. true\uC77C \uACBD\uC6B0 \uC644\uB8CC \uD45C\uC2DC (\uCCB4\uD06C \uC544\uC774\uCF58)\uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { useState, useEffect } from "react";

interface ProgressBarCircleProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({
  percent,
  showPercent = true, // showPercent 기본값을 true로 설정
  completed = false, // completed 기본값을 false로 설정
}: ProgressBarCircleProps) => {
  const [progressBar, setProgressBar] = useState(percent); // 진행률 상태를 관리하는 state

  // percent 값이 변경될 때마다 progressBar 상태를 업데이트
  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  // 원형 진행 바의 크기와 둘레 계산
  const circleRadius = 50; // 원의 반지름 설정
  const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
  const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          // 진행률에 따라 원형 진행 바의 색상이 채워짐
          background: \`conic-gradient(#9AC5E5 \${progressBar * 3.6}deg, #d1d5db \${progressBar * 3.6}deg)\`,
        }}
      >
        {/* 원형의 중앙에 흰색 원을 배치, 그 안에 진행률 텍스트나 체크 표시 */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* showPercent가 true이면 진행률을 텍스트로 표시 */}
          {showPercent && (
            <span className="text-lg font-medium text-Basic">
              {\`\${progressBar}%\`}
            </span>
          )}
          {/* 진행률이 100%이고 completed가 true이면 체크 표시를 보여줌 */}
          {completed && progressBar === 100 && (
            <span className="text-lg font-medium text-Basic">✅</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;`, copyText: `import { useState, useEffect } from "react";

interface ProgressBarCircleProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({
  percent,
  showPercent = true, // showPercent 기본값을 true로 설정
  completed = false, // completed 기본값을 false로 설정
}: ProgressBarCircleProps) => {
  const [progressBar, setProgressBar] = useState(percent); // 진행률 상태를 관리하는 state

  // percent 값이 변경될 때마다 progressBar 상태를 업데이트
  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  // 원형 진행 바의 크기와 둘레 계산
  const circleRadius = 50; // 원의 반지름 설정
  const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
  const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          // 진행률에 따라 원형 진행 바의 색상이 채워짐
          background: \`conic-gradient(#9AC5E5 \${progressBar * 3.6}deg, #d1d5db \${progressBar * 3.6}deg)\`,
        }}
      >
        {/* 원형의 중앙에 흰색 원을 배치, 그 안에 진행률 텍스트나 체크 표시 */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* showPercent가 true이면 진행률을 텍스트로 표시 */}
          {showPercent && (
            <span className="text-lg font-medium text-Basic">
              {\`\${progressBar}%\`}
            </span>
          )}
          {/* 진행률이 100%이고 completed가 true이면 체크 표시를 보여줌 */}
          {completed && progressBar === 100 && (
            <span className="text-lg font-medium text-Basic">✅</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. ProgressBarSlider" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarSlider" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC2AC\uB77C\uC774\uB354\uB97C \uD1B5\uD574 \uC9C4\uD589\uB960\uC744 \uC870\uC815\uD560 \uC218 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC9C4\uD589\uB960\uC5D0 \uB530\uB77C \uBCC0\uD654\uD558\uB294 \uD504\uB85C\uADF8\uB808\uC2A4 \uBC14\uC640, \uC635\uC158\uC5D0 \uB530\uB77C \uC9C4\uD589\uB960\uC744 \uD14D\uC2A4\uD2B8\uB85C \uD45C\uC2DC\uD558\uAC70\uB098 \uC644\uB8CC \uC5EC\uBD80\uB97C \uCCB4\uD06C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';`, copyText: `import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(ProgressBarSlider_1.default, { percent: 50, showPercent: true, completed: true }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';

function Example() {
  return <ProgressBarSlider percent={50} showPercent={true} completed={true} />;
}

export default Example;`, copyText: `import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';

function Example() {
  return <ProgressBarSlider percent={50} showPercent={true} completed={true} />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ProgressBarSlider" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "percent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCD08\uAE30 \uC9C4\uD589\uB960\uC744 \uB098\uD0C0\uB0B4\uB294 \uAC12 (0-100)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "0" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showPercent" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C4\uD589\uB960\uC744 \uD14D\uC2A4\uD2B8\uB85C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "completed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC5C8\uC744 \uB54C \uCCB4\uD06C \uD45C\uC2DC\uB97C \uBCF4\uC5EC\uC904\uC9C0 \uC5EC\uBD80." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { useState, useEffect } from "react";

interface ProgressBarSliderProps {
  percent: number;
  showPercent?: boolean;
  completed?: boolean;
}

const ProgressBarSlider = ({
  percent,
  showPercent = true,
  completed = true,
}: ProgressBarSliderProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  const handleSliderChange = (event: any) => {
    setProgressBar(Number(event.target.value));
  };

  return (
    <div className="w-10/12">
      <div className="flex items-center">
        <div className="h-4 w-10/12 rounded-full bg-[#D9D9D9]">
          <div
            className="h-4 rounded-full bg-Basic transition-all"
            style={{ width: \`\${progressBar}%\` }}
          />
        </div>
        {showPercent && <span className="ml-2">{\`\${progressBar}\`}</span>}
        {progressBar === 100 && <span className="ml-2">✅</span>}
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={progressBar}
          onChange={handleSliderChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};
export default ProgressBarSlider;`, copyText: `import { useState, useEffect } from "react";

interface ProgressBarSliderProps {
  percent: number;
  showPercent?: boolean;
  completed?: boolean;
}

const ProgressBarSlider = ({
  percent,
  showPercent = true,
  completed = true,
}: ProgressBarSliderProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  const handleSliderChange = (event: any) => {
    setProgressBar(Number(event.target.value));
  };

  return (
    <div className="w-10/12">
      <div className="flex items-center">
        <div className="h-4 w-10/12 rounded-full bg-[#D9D9D9]">
          <div
            className="h-4 rounded-full bg-Basic transition-all"
            style={{ width: \`\${progressBar}%\` }}
          />
        </div>
        {showPercent && <span className="ml-2">{\`\${progressBar}\`}</span>}
        {progressBar === 100 && <span className="ml-2">✅</span>}
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={progressBar}
          onChange={handleSliderChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};
export default ProgressBarSlider;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = ProgressBarBasicDocs;
