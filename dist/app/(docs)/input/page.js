"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = __importDefault(require("@components/Input/Input"));
const SearchInput_1 = __importDefault(require("@components/Input/SearchInput"));
const SearchInput2_1 = __importDefault(require("@components/Input/SearchInput2"));
const SearchInput3_1 = __importDefault(require("@components/Input/SearchInput3"));
const NumInput_1 = __importDefault(require("@components/Input/NumInput"));
const CurrencyInput_1 = __importDefault(require("@components/Input/CurrencyInput"));
const DecimalInput_1 = __importDefault(require("@components/Input/DecimalInput"));
const PinInput_1 = __importDefault(require("@components/Input/PinInput"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const react_1 = require("react");
const Input = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose mb-40 max-w-[850px] text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Input" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Input" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uAE30\uBCF8 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uD06C\uAE30\uC640 \uBCC0\uD615\uC744 \uC870\uC815\uD558\uC5EC \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Input } from '@componique/react';`, copyText: `import { Input } from '@components/Input';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "Basic usage" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Input } from '@components/Input';

function Example() {
  return (
    <Input placeholder="Basic usage" />
  );
}

export default Example;
`, copyText: `import { Input } from '@components/Input';

function Example() {
  return (
    <Input placeholder="Basic usage" />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Size of the Input" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Input" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "extra small size", size: "xs" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "small size", size: "small" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "medium size", size: "medium" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "large size", size: "large" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "extra large size", size: "xl" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Input } from '@components/Input';

function Example() {
  return (
    <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="medium size" size="medium" />
      <Input placeholder="large size" size="large" />
      <Input placeholder="extra large size" size="xl" />
    </>
  );
}
export default Example;`, copyText: `import { Input } from '@components/Input';

function Example() {
  return (
    <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="medium size" size="medium" />
      <Input placeholder="large size" size="large" />
      <Input placeholder="extra large size" size="xl" />
    </>
  );
}
export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Input" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC758 \uBCC0\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"outlined\" | \"filled\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"outlined\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC5D0 \uD45C\uC2DC\uB420 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC758 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(e: React.ChangeEvent<HTMLInputElement>)" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "Basic usage" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "small size", size: "small" }), (0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "filled", variant: "filled" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Input } from '@components/Input';

function Example() {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="filled" variant="filled" />
    </div>
  );
}

export default Example;`, copyText: `import { Input } from '@components/Input';

function Example() {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="outlined" variant="outlined" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. SearchInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uB294 \uAE30\uBCF8\uC801\uC778 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uD65C\uC131\uD654 \uC5EC\uBD80\uC5D0 \uB530\uB77C \uBC84\uD2BC\uACFC \uC785\uB825 \uD544\uB4DC\uAC00 \uB3D9\uC801\uC73C\uB85C \uBCC0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SearchInput } from '@componique/react';`, copyText: `import SearchInput from '@components/SearchInput/SearchInput';`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(SearchInput_1.default, { placeholder: "Search..." }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput placeholder="Search..." />
  );
}

export default Example;`, copyText: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput placeholder="Search..." />
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Changing the Width of the Input" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB294 \uB3D9\uC801\uC73C\uB85C \uC870\uC815 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uB108\uBE44\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "w-80" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(SearchInput_1.default, { width: "w-96", placeholder: "Custom width..." }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput width="w-96" placeholder="Custom width..." />
  );
}

export default Example;`, copyText: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput width="w-96" placeholder="Custom width..." />
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "activeColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"w-80\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSearch" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uACE0 \uD655\uC778\uC744 \uD074\uB9AD\uD588\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  const handleSearch = (value: string) => {
    console.log('Searched:', value);
  };

  return (
    <div>
      <SearchInput placeholder="Search something..." onSearch={handleSearch} />
      <SearchInput width="w-96" placeholder="Custom width..." />
    </div>
  );
}

export default Example;`, copyText: `import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  const handleSearch = (value: string) => {
    console.log('Searched:', value);
  };

  return (
    <div>
      <SearchInput placeholder="Search something..." onSearch={handleSearch} />
      <SearchInput width="w-96" placeholder="Custom width..." />
    </div>
  );
}

export default Example;`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. SearchInput2" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput2" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uAC00 \uD3EC\uCEE4\uC2A4\uB420 \uB54C \uD06C\uAE30\uAC00 \uB3D9\uC801\uC73C\uB85C \uD655\uC7A5\uB418\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD06C\uAE30\uC640 \uC2A4\uD0C0\uC77C\uC744 \uC870\uC815\uD558\uC5EC \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SearchInput2 } from '@componique/react';`, copyText: `import SearchInput2 from '@components/SearchInput2/SearchInput2';`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(SearchInput2_1.default, { placeholder: "Search..." }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <SearchInput2 placeholder="Search..." />
  );
}

export default Example;`, copyText: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <SearchInput2 placeholder="Search..." />
  );
}

export default Example;`, language: "tsx", index: 11, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Changing the Size of the Input" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput2" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(SearchInput2_1.default, { placeholder: "small size", size: "small" }), (0, jsx_runtime_1.jsx)(SearchInput2_1.default, { placeholder: "medium size", size: "medium" }), (0, jsx_runtime_1.jsx)(SearchInput2_1.default, { placeholder: "large size", size: "large" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <>
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </>
  );
}

export default Example;`, copyText: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <>
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </>
  );
}

export default Example;`, language: "tsx", index: 12, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput2" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Input\uC758 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(e: React.ChangeEvent<HTMLInputElement>)" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchInput2
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </div>
  );
}

export default Example;`, copyText: `import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchInput2
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 13, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "4. SearchInput3" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SearchInput3" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC640 \uBC84\uD2BC\uC744 \uD568\uAED8 \uC81C\uACF5\uD558\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SearchInput3 } from '@componique/react';`, copyText: `import SearchInput3 from '@components/SearchInput3/SearchInput3';`, language: "tsx", index: 14, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.2. Usage" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(SearchInput3_1.default, { placeholder: "Search..." }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput3 from '@components/SearchInput2/SearchInput2';

  function Example() {
    return (
      <SearchInput3 placeholder="Search..." />
    );
  }

export default Example;`, copyText: `import SearchInput3 from '@components/SearchInput2/SearchInput2';

        function Example() {
          return (
            <SearchInput3 placeholder="Search..." />
          );
        }
      
      export default Example;`, language: "tsx", index: 15, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.3. Props" }), (0, jsx_runtime_1.jsx)("p", { children: "\uD06C\uAE30(size)\uC640 \uC0C9\uC0C1(color)\uB97C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.4. Full Example" }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(SearchInput3_1.default, { size: "small", color: "Basic", placeholder: "Small Search..." }), (0, jsx_runtime_1.jsx)(SearchInput3_1.default, { size: "medium", color: "Primary", placeholder: "Medium Search..." }), (0, jsx_runtime_1.jsx)(SearchInput3_1.default, { size: "large", color: "Danger", placeholder: "Large Search..." })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SearchInput3 from '@components/SearchInput3/SearchInput3';

function Example() {
  return (
    <div>
      <SearchInput3 size="small" color="Basic" placeholder="Small Search..." />
      <SearchInput3 size="medium" color="Primary" placeholder="Medium Search..." />
      <SearchInput3 size="large" color="Danger" placeholder="Large Search..." />
    </div>
  );
}

export default Example;`, copyText: `import SearchInput3 from '@components/SearchInput3/SearchInput3';

function Example() {
  return (
    <div>
      <SearchInput3 size="small" color="Basic" placeholder="Small Search..." />
      <SearchInput3 size="medium" color="Primary" placeholder="Medium Search..." />
      <SearchInput3 size="large" color="Danger" placeholder="Large Search..." />
    </div>
  );
}

export default Example;`, language: "tsx", index: 16, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "5. NumInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "NumInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC22B\uC790\uB97C \uC785\uB825\uD558\uAC70\uB098 \uC99D\uAC10\uD560 \uC218 \uC788\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uC22B\uC790\uB97C \uC99D\uAC00\uC2DC\uD0A4\uAC70\uB098 \uAC10\uC18C\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { NumInput } from '@componique/react';`, copyText: `import NumInput from '@components/Input/NumInput';`, language: "tsx", index: 17, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(NumInput_1.default, { size: "medium", color: "Basic", onValueChange: (value) => console.log("New value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import NumInput from '@components/Input/NumInput';

function Example() {
  return (
    <NumInput />
  );
}

export default Example;`, copyText: `import NumInput from '@components/Input/NumInput';

function Example() {
  return (
    <NumInput />
  );
}

export default Example;`, language: "tsx", index: 18, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "NumInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC \uBC0F \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Gray\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uCD08\uAE30 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"0\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onValueChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"200px\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5.4. Full Example" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(NumInput_1.default, { size: "large", color: "Basic", value: "5", width: "250px", onValueChange: (value) => console.log("Updated value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import NumInput from '@components/Input/NumInput';

function FullExample() {
  return (
    <NumInput
      size="large"
      color="Basic"
      value="5"
      width="250px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, copyText: `import NumInput from '@components/Input/NumInput';

function FullExample() {
  return (
    <NumInput
      size="large"
      color="Basic"
      value="5"
      width="250px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, language: "tsx", index: 19, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "6. CurrencyInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CurrencyInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAE08\uC561\uC744 \uC785\uB825\uD558\uAC70\uB098 \uC99D\uAC10\uD560 \uC218 \uC788\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825 \uD544\uB4DC\uB97C \uD1B5\uD574 \uAE08\uC561\uC744 \uC785\uB825\uD558\uAC70\uB098, \uC99D\uAC10 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uAE08\uC561\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "6.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CurrencyInput } from '@componique/react';`, copyText: `import CurrencyInput from '@components/Input/CurrencyInput';`, language: "tsx", index: 20, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "6.2. Usage" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(CurrencyInput_1.default, { size: "medium", color: "Primary", value: "$10.00", onValueChange: (value) => console.log("New value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `<CurrencyInput
  size="medium"
  color="Primary"
  value="$10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`, copyText: `<CurrencyInput
  size="medium"
  color="Primary"
  value="$10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`, language: "tsx", index: 21, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "6.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CurrencyInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC \uBC0F \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uCD08\uAE30 \uAE08\uC561 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"$0.00\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onValueChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"200px\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "6.4. Full Example" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(CurrencyInput_1.default, { size: "large", color: "Basic", value: "$50.00", width: "300px", onValueChange: (value) => console.log("Updated value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CurrencyInput from '@components/Input/CurrencyInput';

function FullExample() {
  return (
    <CurrencyInput
      size="large"
      color="Basic"
      value="$50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, copyText: `import CurrencyInput from '@components/Input/CurrencyInput';

function FullExample() {
  return (
    <CurrencyInput
      size="large"
      color="Basic"
      value="$50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, language: "tsx", index: 22, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "7. DecimalInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DecimalInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC18C\uC218\uC810\uC774 \uD3EC\uD568\uB41C \uC22B\uC790\uB97C \uC785\uB825\uD558\uAC70\uB098 \uC99D\uAC10\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC785\uB825 \uD544\uB4DC\uB97C \uD1B5\uD574 \uAC12\uC744 \uC785\uB825\uD558\uAC70\uB098, \uC99D\uAC10 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uAC12\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "7.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { DecimalInput } from '@componique/react';`, copyText: `import DecimalInput from '@components/Input/DecimalInput';`, language: "tsx", index: 23, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "7.2. Usage" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(DecimalInput_1.default, { size: "medium", color: "Primary", onValueChange: (value) => console.log("New value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `<DecimalInput
  size="medium"
  color="Primary"
  value="10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`, copyText: `<DecimalInput
  size="medium"
  color="Primary"
  value="10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`, language: "tsx", index: 24, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "7.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DecimalInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC \uBC0F \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Gray\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uCD08\uAE30 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"0.00\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onValueChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"200px\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "7.4. Full Example" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(DecimalInput_1.default, { size: "large", color: "Basic", value: "50.00", width: "300px", onValueChange: (value) => console.log("Updated value:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DecimalInput from '@components/Input/DecimalInput';

function FullExample() {
  return (
    <DecimalInput
      size="large"
      color="Basic"
      value="50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, copyText: `import DecimalInput from '@components/Input/DecimalInput';

function FullExample() {
  return (
    <DecimalInput
      size="large"
      color="Basic"
      value="50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`, language: "tsx", index: 25, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "8. PinInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PinInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C PIN \uCF54\uB4DC\uB97C \uC785\uB825\uBC1B\uAE30 \uC704\uD55C UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uAC01 \uC785\uB825 \uCE78\uC5D0 \uAC1C\uBCC4\uC801\uC73C\uB85C \uC22B\uC790\uB97C \uC785\uB825\uD560 \uC218 \uC788\uC73C\uBA70, \uC22B\uC790\uAC00 \uC785\uB825\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uB2E4\uC74C \uCE78\uC73C\uB85C \uD3EC\uCEE4\uC2A4\uAC00 \uC774\uB3D9\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { PinInput } from '@componique/react';`, copyText: `import PinInput from '@components/Input/PinInput';`, language: "tsx", index: 26, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(PinInput_1.default, { length: 4 }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={4} />
  );
}

export default Example;`, copyText: `import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={4} />
  );
}

export default Example;`, language: "tsx", index: 27, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8.3. Customizing the PinInput" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PinInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC635\uC158\uC744 \uD1B5\uD574 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD544\uB4DC\uC758 \uAC1C\uC218, \uBCC0\uD615 \uC2A4\uD0C0\uC77C, \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC \uB4F1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(PinInput_1.default, { length: 6, variant: "filled", disabled: true }) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(PinInput_1.default, { customCharacter: "\uD83E\uDD73" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={6} variant="filled" disabled={true} />
    <PinInput customCharacter="🥳" />
  );
}

export default Example;`, copyText: `import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={6} variant="filled" disabled={true} />
    <PinInput customCharacter="🥳" />
  );
}

export default Example;`, language: "tsx", index: 28, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8.4 Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "PinInput" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "length" }) }), (0, jsx_runtime_1.jsx)("td", { children: "PIN \uC785\uB825 \uCE78\uC758 \uAC1C\uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "6" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uB97C \uBE44\uD65C\uC131\uD654\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "formatter" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825\uB41C \uAC12\uC744 \uD615\uC2DD\uD654\uD558\uAE30 \uC704\uD55C \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"filled\" | \"outline\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"outline\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "customCharacter" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uB300\uC2E0 \uD45C\uC2DC\uD560 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uBB38\uC790\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8.5 Full Example" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(PinInput_1.default, { length: 4, variant: "filled", formatter: (value) => value.toUpperCase(), onChange: (value) => console.log("Updated PIN:", value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import PinInput from '@components/Input/PinInput';

function FullExample() {
  return (
    <PinInput
      length={4}
      variant="filled"
      formatter={(value) => value.toUpperCase()}
      onChange={(value) => console.log("Updated PIN:", value)}
    />
  );
}

export default FullExample;`, copyText: `import PinInput from '@components/Input/PinInput';

function FullExample() {
  return (
    <PinInput
      length={4}
      variant="filled"
      formatter={(value) => value.toUpperCase()}
      onChange={(value) => console.log("Updated PIN:", value)}
    />
  );
}

export default FullExample;`, language: "tsx", index: 29, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = Input;
