"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const SwitchBasic_1 = __importDefault(require("@components/Swtich/SwitchBasic"));
const SwitchHorizental_1 = __importDefault(require("@components/Swtich/SwitchHorizental"));
const SwitchLong_1 = __importDefault(require("@components/Swtich/SwitchLong"));
const SwitchRound_1 = __importDefault(require("@components/Swtich/SwitchRound"));
const SwitchLabeled_1 = __importDefault(require("@components/Swtich/SwitchLabeled"));
const SwitchDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. SwitchBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD1A0\uAE00\uD560 \uC218 \uC788\uB294 \uAE30\uBCF8\uC801\uC778 \uC2A4\uC704\uCE58 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30 \uC635\uC158\uACFC \uC0C9\uC0C1 \uC2A4\uD0C0\uC77C\uC744 \uC81C\uACF5\uD558\uBA70, \uD074\uB9AD \uC2DC \uC0C1\uD0DC\uAC00 \uC804\uD658\uB429\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 props\uB97C \uD1B5\uD574 \uD06C\uAE30\uC640 \uC0C9\uC0C1\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SwitchBasic from '@components/Switch/SwitchBasic';`, copyText: `import SwitchBasic from '@components/Switch/SwitchBasic';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SwitchBasic_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Switch Sizes" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30 \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C 3\uAC00\uC9C0 \uD06C\uAE30\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uC2A4\uC704\uCE58\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Small:" }), " \uC791\uC740 \uD06C\uAE30\uC758 \uC2A4\uC704\uCE58"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Medium:" }), " \uC911\uAC04 \uD06C\uAE30\uC758 \uC2A4\uC704\uCE58 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Large:" }), " \uD070 \uD06C\uAE30\uC758 \uC2A4\uC704\uCE58"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(SwitchBasic_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(SwitchBasic_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(SwitchBasic_1.default, { size: "large" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic size="small" />
      <SwitchBasic size="medium" />
      <SwitchBasic size="large" />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic size="small" />
      <SwitchBasic size="medium" />
      <SwitchBasic size="large" />
    </>
  );
}

export default Example;
`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. \"small\", \"medium\", \"large\" \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "'small' | 'medium' | 'large'" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "'medium'" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uCF1C\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD\uC0C9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "'bg-Basic'" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "offColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uAEBC\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD\uC0C9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "'bg-[#9E9E9E] dark:bg-[#333742]'" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// SwitchBasic.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchBasicProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchBasic = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchBasicProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-14",
      height: "h-7",
      circleSize: "h-5 w-5",
      translateDistance: "translate-x-7",
    },
    medium: {
      width: "w-20",
      height: "h-10",
      circleSize: "h-7 w-7",
      translateDistance: "translate-x-11",
    },
    large: {
      width: "w-36",
      height: "h-16",
      circleSize: "h-12 w-12",
      translateDistance: "translate-x-20",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchBasic;
`, copyText: `
// SwitchBasic.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchBasicProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchBasic = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchBasicProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-14",
      height: "h-7",
      circleSize: "h-5 w-5",
      translateDistance: "translate-x-7",
    },
    medium: {
      width: "w-20",
      height: "h-10",
      circleSize: "h-7 w-7",
      translateDistance: "translate-x-11",
    },
    large: {
      width: "w-36",
      height: "h-16",
      circleSize: "h-12 w-12",
      translateDistance: "translate-x-20",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchBasic;
`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. SwitchHorizental" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchHorizental" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC218\uC9C1 \uBC29\uD5A5\uC73C\uB85C \uD1A0\uAE00\uD560 \uC218 \uC788\uB294 \uC2A4\uC704\uCE58 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uD074\uB9AD \uC2DC \uC2A4\uC704\uCE58\uC758 \uC0C1\uD0DC\uAC00 \uC704\uC544\uB798\uB85C \uC804\uD658\uB418\uBA70, \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SwitchHorizental from '@components/Switch/SwitchHorizental';`, copyText: `import SwitchHorizental from '@components/Switch/SwitchHorizental';`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SwitchHorizental_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`, copyText: `
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Switch Sizes" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchHorizental" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uC5D0\uC11C\uB294 \uC138 \uAC00\uC9C0 \uD06C\uAE30\uC758 \uC218\uC9C1 \uC2A4\uC704\uCE58\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Small:" }), " \uC791\uC740 \uD06C\uAE30\uC758 \uC218\uC9C1 \uC2A4\uC704\uCE58"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Medium:" }), " \uC911\uAC04 \uD06C\uAE30\uC758 \uC218\uC9C1 \uC2A4\uC704\uCE58 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Large:" }), " \uD070 \uD06C\uAE30\uC758 \uC218\uC9C1 \uC2A4\uC704\uCE58"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(SwitchHorizental_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(SwitchHorizental_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(SwitchHorizental_1.default, { size: "large" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental size="small" />
      <SwitchHorizental size="medium" />
      <SwitchHorizental size="large" />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental size="small" />
      <SwitchHorizental size="medium" />
      <SwitchHorizental size="large" />
    </>
  );
}

export default Example;
`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchHorizental" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4 (\"small\", \"medium\", \"large\")." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uCF1C\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "offColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uAEBC\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-[#9E9E9E] dark:bg-[#333742]\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// SwitchHorizental.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchHorizentalProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchHorizental = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchHorizentalProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
      initialOffset: string;
    }
  > = {
    small: {
      width: "w-7",
      height: "h-16",
      circleSize: "h-5 w-5",
      translateDistance: "translate-y-5",
      initialOffset: "-translate-y-4",
    },
    medium: {
      width: "w-9",
      height: "h-24",
      circleSize: "h-8 w-8",
      translateDistance: "translate-y-7",
      initialOffset: "-translate-y-7",
    },
    large: {
      width: "w-12",
      height: "h-32",
      circleSize: "h-10 w-10",
      translateDistance: "translate-y-10",
      initialOffset: "-translate-y-10",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center justify-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : currentSize.initialOffset}\`}
        />
      </div>
    </div>
  );
};

export default SwitchHorizental;

// Example.tsx
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchHorizental size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchHorizental size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`, copyText: `
// SwitchHorizental.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchHorizentalProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchHorizental = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchHorizentalProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
      initialOffset: string;
    }
  > = {
    small: {
      width: "w-7",
      height: "h-16",
      circleSize: "h-5 w-5",
      translateDistance: "translate-y-5",
      initialOffset: "-translate-y-4",
    },
    medium: {
      width: "w-9",
      height: "h-24",
      circleSize: "h-8 w-8",
      translateDistance: "translate-y-7",
      initialOffset: "-translate-y-7",
    },
    large: {
      width: "w-12",
      height: "h-32",
      circleSize: "h-10 w-10",
      translateDistance: "translate-y-10",
      initialOffset: "-translate-y-10",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center justify-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : currentSize.initialOffset}\`}
        />
      </div>
    </div>
  );
};

export default SwitchHorizental;

// Example.tsx
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchHorizental size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchHorizental size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. SwitchLong" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLong" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB113\uC740 \uC601\uC5ED\uC5D0\uC11C \uD1A0\uAE00\uD560 \uC218 \uC788\uB294 \uC2A4\uC704\uCE58 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uC2A4\uC704\uCE58\uC758 \uAE38\uC774\uC5D0 \uB530\uB77C \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB418\uBA70, \uD074\uB9AD \uC2DC \uC2A4\uC704\uCE58\uC758 \uC0C1\uD0DC\uAC00 \uC88C\uC6B0\uB85C \uC804\uD658\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SwitchLong from '@components/Switch/SwitchLong';`, copyText: `import SwitchLong from '@components/Switch/SwitchLong';`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SwitchLong_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`, copyText: `
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Switch Sizes" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLong" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uAE38\uC774\uC640 \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uC5D0\uC11C\uB294 \uC138 \uAC00\uC9C0 \uD06C\uAE30\uC758 \uAE34 \uC2A4\uC704\uCE58\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Small:" }), " \uC9E7\uC740 \uAE38\uC774\uC758 \uC2A4\uC704\uCE58"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Medium:" }), " \uC911\uAC04 \uAE38\uC774\uC758 \uC2A4\uC704\uCE58 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Large:" }), " \uAE34 \uAE38\uC774\uC758 \uC2A4\uC704\uCE58"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(SwitchLong_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(SwitchLong_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(SwitchLong_1.default, { size: "large" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong size="small" />
      <SwitchLong size="medium" />
      <SwitchLong size="large" />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong size="small" />
      <SwitchLong size="medium" />
      <SwitchLong size="large" />
    </>
  );
}

export default Example;
`, language: "tsx", index: 11, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLong" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4 (\"small\", \"medium\", \"large\")." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uCF1C\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "offColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uAC00 \uAEBC\uC84C\uC744 \uB54C\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-[#9E9E9E] dark:bg-[#333742]\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// SwitchLong.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchLongProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchLong = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchLongProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-24",
      height: "h-7",
      circleSize: "h-5 w-12",
      translateDistance: "translate-x-10",
    },
    medium: {
      width: "w-36",
      height: "h-9",
      circleSize: "h-7 w-16",
      translateDistance: "translate-x-16",
    },
    large: {
      width: "w-64",
      height: "h-16",
      circleSize: "h-12 w-28",
      translateDistance: "translate-x-32",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchLong;

// Example.tsx
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchLong size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchLong size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`, copyText: `
// SwitchLong.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchLongProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchLong = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchLongProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-24",
      height: "h-7",
      circleSize: "h-5 w-12",
      translateDistance: "translate-x-10",
    },
    medium: {
      width: "w-36",
      height: "h-9",
      circleSize: "h-7 w-16",
      translateDistance: "translate-x-16",
    },
    large: {
      width: "w-64",
      height: "h-16",
      circleSize: "h-12 w-28",
      translateDistance: "translate-x-32",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchLong;

// Example.tsx
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchLong size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchLong size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`, language: "tsx", index: 12, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "4. SwitchRound" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchRound" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB465\uADFC \uB514\uC790\uC778\uC758 \uD1A0\uAE00 \uC2A4\uC704\uCE58\uC785\uB2C8\uB2E4. \uD074\uB9AD \uC2DC \uC0C1\uD0DC\uAC00 \uC804\uD658\uB418\uBA70, \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC2A4\uC704\uCE58\uC758 \uC704\uCE58\uC640 \uC0C9\uC0C1\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SwitchRound from '@components/Switch/SwitchRound';`, copyText: `import SwitchRound from '@components/Switch/SwitchRound';`, language: "tsx", index: 13, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SwitchRound_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`, copyText: `
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`, language: "tsx", index: 14, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.3. Switch Examples" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchRound" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB450 \uAC00\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uC0C1\uD0DC\uB97C \uC804\uD658\uD558\uB294 \uC2A4\uC704\uCE58\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "\uCCAB \uBC88\uC9F8 \uC2A4\uC704\uCE58:" }), " ", "\uD074\uB9AD \uC2DC \uC624\uB978\uCABD\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC0C1\uD0DC\uAC00 \uC804\uD658\uB418\uBA70, \uC2A4\uC704\uCE58\uAC00 \uCF1C\uC9D1\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "\uB450 \uBC88\uC9F8 \uC2A4\uC704\uCE58:" }), " ", "\uD074\uB9AD \uC2DC \uC67C\uCABD\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC0C1\uD0DC\uAC00 \uC804\uD658\uB418\uBA70, \uC2A4\uC704\uCE58\uAC00 \uAEBC\uC9D1\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-7", children: (0, jsx_runtime_1.jsx)(SwitchRound_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`, language: "tsx", index: 15, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchRound" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isOn" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4 (\uCF1C\uC9D0 \uB610\uB294 \uAEBC\uC9D0)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "toggleSwitch" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uB97C \uD1A0\uAE00\uD558\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// SwitchRound.tsx
import { useState } from "react";

const SwitchRound = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
    </div>
  );
};

export default SwitchRound;

// Example.tsx
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`, copyText: `
// SwitchRound.tsx
import { useState } from "react";

const SwitchRound = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
    </div>
  );
};

export default SwitchRound;

// Example.tsx
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`, language: "tsx", index: 16, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "5. SwitchLabeled" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLabeled" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uC2DC\uD558\uB294 \uB808\uC774\uBE14\uC774 \uD3EC\uD568\uB41C \uD1A0\uAE00 \uC2A4\uC704\uCE58\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC2A4\uC704\uCE58\uB97C \uD074\uB9AD\uD558\uBA74 \uC0C1\uD0DC\uAC00 \uC804\uD658\uB418\uBA70, \"ON\"\uACFC \"OFF\" \uB808\uC774\uBE14\uC774 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uD45C\uC2DC\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SwitchLabeled from '@components/Switch/SwitchLabeled';`, copyText: `import SwitchLabeled from '@components/Switch/SwitchLabeled';`, language: "tsx", index: 17, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SwitchLabeled_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`, copyText: `
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`, language: "tsx", index: 18, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.3. Switch Examples" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLabeled" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \"ON\"\uACFC \"OFF\" \uB808\uC774\uBE14\uC774 \uD45C\uC2DC\uB418\uB294 \uC2A4\uC704\uCE58\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC544\uB798\uB294 \uB450 \uAC00\uC9C0 \uC608\uC2DC\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "\uCCAB \uBC88\uC9F8 \uC2A4\uC704\uCE58:" }), " ", "\uD074\uB9AD \uC2DC \uC624\uB978\uCABD\uC73C\uB85C \uC774\uB3D9\uD558\uBA70 \"ON\" \uB808\uC774\uBE14\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "\uB450 \uBC88\uC9F8 \uC2A4\uC704\uCE58:" }), " ", "\uD074\uB9AD \uC2DC \uC67C\uCABD\uC73C\uB85C \uC774\uB3D9\uD558\uBA70 \"OFF\" \uB808\uC774\uBE14\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-7", children: (0, jsx_runtime_1.jsx)(SwitchLabeled_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`, copyText: `
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`, language: "tsx", index: 19, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SwitchLabeled" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isOn" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4 (\uCF1C\uC9D0 \uB610\uB294 \uAEBC\uC9D0)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "toggleSwitch" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uC704\uCE58\uB97C \uD1A0\uAE00\uD558\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// SwitchLabeled.tsx
import { useState } from "react";

const SwitchLabeled = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLabeled;

// Example.tsx
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`, copyText: `
// SwitchLabeled.tsx
import { useState } from "react";

const SwitchLabeled = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLabeled;

// Example.tsx
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`, language: "tsx", index: 20, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = SwitchDocs;
