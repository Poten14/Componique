"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const BasicSpinner_1 = __importDefault(require("@components/Spinner/BasicSpinner"));
const BarsSpinner_1 = __importDefault(require("@components/Spinner/BarsSpinner"));
const SquareSpinner_1 = __importDefault(require("@components/Spinner/SquareSpinner"));
const PacManSpinner_1 = __importDefault(require("@components/Spinner/PacManSpinner"));
const FullScreenSpinner_1 = __importDefault(require("@components/Spinner/FullScreenSpinner"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const SpinnerDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [spinning, setSpinning] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const showLoader = (key) => {
        setSpinning((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
            setSpinning((prev) => ({ ...prev, [key]: false }));
        }, 1000); // 1초 동안 스피너를 표시한 후 숨김
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose mb-40 max-w-[850px] text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Spinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC0C9\uC0C1, \uD68C\uC804 \uC18D\uB3C4\uB97C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@componique/react';`, copyText: `import { Spinner } from '@components/Spinner';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@components/Spinner';

function Example() {
  return <Spinner />;
}

export default Example;`, copyText: `import { Spinner } from '@components/Spinner';

function Example() {
  return <Spinner />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Size of the Spinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { size: "xs" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { size: "large" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { size: "xl" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner size="xs" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xl" />
    </>
  );
}

export default Example;`, copyText: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner size="xs" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xl" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Changing the Color of the Spinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740", " ", (0, jsx_runtime_1.jsx)("code", { children: "Primary" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Basic" }), ": \uAE30\uBCF8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Primary" }), ": \uC8FC\uC694 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "gray" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Secondary" }), ": \uBCF4\uC870 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Success" }), ": \uC131\uACF5 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Warning" }), ": \uACBD\uACE0 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Danger" }), ": \uC704\uD5D8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "White" }), ": \uD770\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Basic" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Primary" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "gray" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Secondary" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Success" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Warning" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "Danger" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { color: "White" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner color="Basic" />
      <Spinner color="Primary" />
      <Spinner color="gray" />
      <Spinner color="Secondary" />
      <Spinner color="Success" />
      <Spinner color="Warning" />
      <Spinner color="Danger" />
      <Spinner color="White" />
    </>
  );
}

export default Example;`, copyText: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner color="Basic" />
      <Spinner color="Primary" />
      <Spinner color="gray" />
      <Spinner color="Secondary" />
      <Spinner color="Success" />
      <Spinner color="Warning" />
      <Spinner color="Danger" />
      <Spinner color="White" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Changing the Speed of the Spinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD68C\uC804 \uC18D\uB3C4\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC18D\uB3C4\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "slow" }), ": \uB290\uB9B0 \uD68C\uC804 \uC18D\uB3C4"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD68C\uC804 \uC18D\uB3C4 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "fast" }), ": \uBE60\uB978 \uD68C\uC804 \uC18D\uB3C4"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { speed: "slow" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { speed: "medium" }), (0, jsx_runtime_1.jsx)(BasicSpinner_1.default, { speed: "fast" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner speed="slow" />
      <Spinner speed="medium" />
      <Spinner speed="fast" />
    </>
  );
}

export default Example;`, copyText: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner speed="slow" />
      <Spinner speed="medium" />
      <Spinner speed="fast" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Spinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\" | \"White\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Primary\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "speed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uD68C\uC804 \uC18D\uB3C4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"slow\" | \"medium\" | \"fast\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <div>
      <Spinner size="large" color="Success" speed="fast" />
    </div>
  );
}

export default Example;`, copyText: `import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <div>
      <Spinner size="large" color="Success" speed="fast" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. BarsSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BarsSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uD06C\uAE30\uC640 \uC0C9\uC0C1\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BarsSpinner } from '@componique/react';`, copyText: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "BarsSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-x-3 space-y-4", children: (0, jsx_runtime_1.jsx)(BarsSpinner_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return <BarsSpinner />;
}

export default Example;`, copyText: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return <BarsSpinner />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Changing the Size of the BarsSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BarsSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(BarsSpinner_1.default, { size: "xs" }), (0, jsx_runtime_1.jsx)(BarsSpinner_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(BarsSpinner_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(BarsSpinner_1.default, { size: "large" }), (0, jsx_runtime_1.jsx)(BarsSpinner_1.default, { size: "xl" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner size="xs" />
      <BarsSpinner size="small" />
      <BarsSpinner size="medium" />
      <BarsSpinner size="large" />
      <BarsSpinner size="xl" />
    </>
  );
}

export default Example;`, copyText: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner size="xs" />
      <BarsSpinner size="small" />
      <BarsSpinner size="medium" />
      <BarsSpinner size="large" />
      <BarsSpinner size="xl" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Changing the Color of the BarsSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BarsSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), ": \uAE30\uBCF8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Primary text-white", children: "Primary" }), ": \uC8FC\uC694 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-gray text-white", children: "gray" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Secondary text-white", children: "Secondary" }), ": \uBCF4\uC870 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Success text-white", children: "Success" }), ": \uC131\uACF5 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Warning text-white", children: "Warning" }), ": \uACBD\uACE0 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Danger text-white", children: "Danger" }), ": \uC704\uD5D8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-white text-Gray", children: "White" }), ": \uD770\uC0C9"] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner color="Basic" />
      <BarsSpinner color="Primary" />
      <BarsSpinner color="gray" />
      <BarsSpinner color="Secondary" />
      <BarsSpinner color="Success" />
      <BarsSpinner color="Warning" />
      <BarsSpinner color="Danger" />
      <BarsSpinner color="White" />
    </>
  );
}

export default Example;`, copyText: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner color="Basic" />
      <BarsSpinner color="Primary" />
      <BarsSpinner color="gray" />
      <BarsSpinner color="Secondary" />
      <BarsSpinner color="Success" />
      <BarsSpinner color="Warning" />
      <BarsSpinner color="Danger" />
      <BarsSpinner color="White" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BarsSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\" | \"White\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.6. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <div>
      <BarsSpinner size="large" color="Primary" />
    </div>
  );
}

export default Example;`, copyText: `import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <div>
      <BarsSpinner size="large" color="Primary" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. SquareSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC0C9\uC0C1, \uC18D\uB3C4\uB97C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@componique/react';`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return <SquareSpinner />;
}

export default Example;`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return <SquareSpinner />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Changing the Size of the SquareSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { size: "xs" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { size: "large" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { size: "xl" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner size="xs" />
      <SquareSpinner size="small" />
      <SquareSpinner size="medium" />
      <SquareSpinner size="large" />
      <SquareSpinner size="xl" />
    </>
  );
}

export default Example;`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner size="xs" />
      <SquareSpinner size="small" />
      <SquareSpinner size="medium" />
      <SquareSpinner size="large" />
      <SquareSpinner size="xl" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Changing the Color of the SquareSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { className: "bg-Primary text-white", children: "Primary" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), ": \uAE30\uBCF8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Primary text-white", children: "Primary" }), ": \uC8FC\uC694 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-gray text-white", children: "gray" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Secondary text-white", children: "Secondary" }), ": \uBCF4\uC870 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Success text-white", children: "Success" }), ": \uC131\uACF5 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Warning text-white", children: "Warning" }), ": \uACBD\uACE0 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Danger text-white", children: "Danger" }), ": \uC704\uD5D8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-white text-Gray", children: "White" }), ": \uD770\uC0C9"] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner color="Basic" />
      <SquareSpinner color="Primary" />
      <SquareSpinner color="gray" />
      <SquareSpinner color="Secondary" />
      <SquareSpinner color="Success" />
      <SquareSpinner color="Warning" />
      <SquareSpinner color="Danger" />
      <SquareSpinner color="White" />
    </>
  );
}

export default Example;`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner color="Basic" />
      <SquareSpinner color="Primary" />
      <SquareSpinner color="gray" />
      <SquareSpinner color="Secondary" />
      <SquareSpinner color="Success" />
      <SquareSpinner color="Warning" />
      <SquareSpinner color="Danger" />
      <SquareSpinner color="White" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Changing the Speed of the SquareSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC18D\uB3C4\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC18D\uB3C4\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "slow" }), ": \uB290\uB9B0 \uC18D\uB3C4"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uC18D\uB3C4 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "fast" }), ": \uBE60\uB978 \uC18D\uB3C4"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { speed: "slow" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { speed: "medium" }), (0, jsx_runtime_1.jsx)(SquareSpinner_1.default, { speed: "fast" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner speed="slow" />
      <SquareSpinner speed="medium" />
      <SquareSpinner speed="fast" />
    </>
  );
}

export default Example;`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner speed="slow" />
      <SquareSpinner speed="medium" />
      <SquareSpinner speed="fast" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SquareSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\" | \"White\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Primary\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "speed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC560\uB2C8\uBA54\uC774\uC158 \uC18D\uB3C4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"slow\" | \"medium\" | \"fast\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <div>
      <SquareSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`, copyText: `import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <div>
      <SquareSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "4. PacManSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC0C9\uC0C1, \uC18D\uB3C4\uB97C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@componique/react';`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(PacManSpinner_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return <PacManSpinner />;
}

export default Example;`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return <PacManSpinner />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.3. Changing the Size of the PacManSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { size: "large" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner size="small" />
      <PacManSpinner size="medium" />
      <PacManSpinner size="large" />
    </>
  );
}

export default Example;`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner size="small" />
      <PacManSpinner size="medium" />
      <PacManSpinner size="large" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.4. Changing the Color of the PacManSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), ": \uAE30\uBCF8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Primary text-white", children: "Primary" }), ": \uC8FC\uC694 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-gray text-white", children: "gray" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Secondary text-white", children: "Secondary" }), ": \uBCF4\uC870 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Success text-white", children: "Success" }), ": \uC131\uACF5 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Warning text-white", children: "Warning" }), ": \uACBD\uACE0 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Danger text-white", children: "Danger" }), ": \uC704\uD5D8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-white text-Gray", children: "White" }), ": \uD770\uC0C9"] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner color="Basic" />
      <PacManSpinner color="Primary" />
      <PacManSpinner color="gray" />
      <PacManSpinner color="Secondary" />
      <PacManSpinner color="Success" />
      <PacManSpinner color="Warning" />
      <PacManSpinner color="Danger" />
      <PacManSpinner color="White" />
    </>
  );
}

export default Example;`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner color="Basic" />
      <PacManSpinner color="Primary" />
      <PacManSpinner color="gray" />
      <PacManSpinner color="Secondary" />
      <PacManSpinner color="Success" />
      <PacManSpinner color="Warning" />
      <PacManSpinner color="Danger" />
      <PacManSpinner color="White" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.5. Changing the Speed of the PacManSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC18D\uB3C4\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC18D\uB3C4\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "slow" }), ": \uB290\uB9B0 \uC18D\uB3C4"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uC18D\uB3C4 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "fast" }), ": \uBE60\uB978 \uC18D\uB3C4"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { speed: "slow" }), (0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { speed: "medium" }), (0, jsx_runtime_1.jsx)(PacManSpinner_1.default, { speed: "fast" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner speed="slow" />
      <PacManSpinner speed="medium" />
      <PacManSpinner speed="fast" />
    </>
  );
}

export default Example;`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner speed="slow" />
      <PacManSpinner speed="medium" />
      <PacManSpinner speed="fast" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PacManSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\" | \"White\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "speed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uC560\uB2C8\uBA54\uC774\uC158 \uC18D\uB3C4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"slow\" | \"medium\" | \"fast\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <div>
      <PacManSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`, copyText: `import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <div>
      <PacManSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "5. FullScreenSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FullScreenSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC804\uCCB4 \uD654\uBA74\uC5D0 \uB85C\uB529 \uC2A4\uD53C\uB108\uB97C \uD45C\uC2DC\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uBAA8\uC591(Shape)\uACFC \uC2A4\uD53C\uB108\uC758 \uC885\uB958\uB97C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FullScreenSpinner } from '@componique/react';`, copyText: `import FullScreenSpinner from '@components/Spinners/FullScreenSpinner';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "FullScreenSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => showLoader("spinner1"), variant: "flat", children: "Show Basic spinner" }), (0, jsx_runtime_1.jsx)(FullScreenSpinner_1.default, { spinning: spinning["spinner1"], shape: "Basic" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 1000); // 1초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner1')} variant="flat">
        Show Basic spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner1']} shape="Basic" />
    </>
  );
}

export default Example;`, copyText: `import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";
        
function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner1')} variant="flat">
        Show Basic spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner1']} shape="Basic" />
    </>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.3. Changing the Shape of the FullScreenSpinner" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FullScreenSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uBAA8\uC591\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uBAA8\uC591\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "Basic" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Basic" }), ": \uAE30\uBCF8 \uC2A4\uD53C\uB108"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Square" }), ": \uC0AC\uAC01\uD615 \uC2A4\uD53C\uB108"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Bars" }), ": \uBC14 \uC2A4\uD53C\uB108"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => showLoader("spinner2"), children: "Show Square spinner" }), (0, jsx_runtime_1.jsx)(FullScreenSpinner_1.default, { spinning: spinning["spinner2"], shape: "Square" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => showLoader("spinner3"), variant: "border", children: "Show Bars spinner" }), (0, jsx_runtime_1.jsx)(FullScreenSpinner_1.default, { spinning: spinning["spinner3"], shape: "Bars" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner2')} variant="flat">
        Show Square spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner2']} shape="Square" />
      <Button onClick={() => showLoader('spinner3')} variant="flat">
        Show Bars spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner3']} shape="Bars" />
    </>
  );
}

export default Example;`, copyText: `import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner2')}>
        Show Square spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner2']} shape="Square" />
      <Button onClick={() => showLoader('spinner3')} variant="border">
        Show Bars spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner3']} shape="Bars" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "FullScreenSpinner" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "spinning" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uAC00 \uD65C\uC131\uD654\uB420\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "shape" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD53C\uB108\uC758 \uBAA8\uC591\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Square\" | \"Bars\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { FullScreenSpinner } from '@componique/react';
        import { Button } from "@componique/react";
                
          function Example() {
            const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});
                
            const showLoader = (key: string) => {
              setSpinning((prev) => ({ ...prev, [key]: true }));
                
              etTimeout(() => {
              setSpinning((prev) => ({ ...prev, [key]: false }));
                }, 3000); // 3초 동안 스피너를 표시한 후 숨김
                  };
          return (
            <div>
            <Button onClick={() => showLoader('spinner3')} variant="border">
            Show Bars spinner
            </Button>
              <FullScreenSpinner spinning={true} shape="Square" />
            </div>
          );
        }
        
        export default Example;`, copyText: `import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";
        
  function Example() {
    const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});
        
    const showLoader = (key: string) => {
      setSpinning((prev) => ({ ...prev, [key]: true }));
        
      etTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
        }, 3000); // 3초 동안 스피너를 표시한 후 숨김
          };
  return (
    <div>
    <Button onClick={() => showLoader('spinner3')} variant="border">
    Show Bars spinner
    </Button>
      <FullScreenSpinner spinning={true} shape="Square" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = SpinnerDoc;
