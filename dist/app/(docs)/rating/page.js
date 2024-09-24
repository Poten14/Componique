"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RatingStar_1 = __importDefault(require("@components/Rating/RatingStar"));
const RatingNumSlider_1 = __importDefault(require("@components/Rating/RatingNumSlider"));
const RatingFeel_1 = __importDefault(require("@components/Rating/RatingFeel"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const RatingDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. RatingStar" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingStar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBCC4 \uBAA8\uC591\uC758 \uD3C9\uAC00 UI\uB85C, \uC0AC\uC6A9\uC790\uAC00 \uD074\uB9AD\uD558\uC5EC \uBCC4\uC810\uC744 \uB9E4\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD3C9\uAC00 \uC810\uC218\uB97C \uBCC0\uACBD\uD560 \uB54C\uB9C8\uB2E4 \uCF5C\uBC31 \uD568\uC218\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingStar from './components/RatingStar';`, copyText: `import RatingStar from './components/RatingStar';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(RatingStar_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingStar from './components/RatingStar';

function Example() {
  return <RatingStar />;
}

export default Example;
`, copyText: `import RatingStar from './components/RatingStar';

function Example() {
  return <RatingStar />;
}

export default Example;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingStar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "stars" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBCC4\uC758 \uAC1C\uC218\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "5" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onRatingChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD3C9\uAC00 \uC810\uC218\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(rating: number) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. RatingNumSlider" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingNumSlider" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC2AC\uB77C\uC774\uB354\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC810\uC218\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingNumSlider from './components/RatingNumSlider';`, copyText: `import RatingNumSlider from './components/RatingNumSlider';`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(RatingNumSlider_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingNumSlider from './components/RatingNumSlider';

function Example() {
  return <RatingNumSlider />;
}

export default Example;
`, copyText: `import RatingNumSlider from './components/RatingNumSlider';

function Example() {
  return <RatingNumSlider />;
}

export default Example;
`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingNumSlider" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "min" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB354\uC758 \uCD5C\uC18C\uAC12\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "1" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "max" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB354\uC758 \uCD5C\uB300\uAC12\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "10" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "step" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB354\uC758 \uB2E8\uACC4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "1" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onRatingChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC810\uC218\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(rating: number) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. RatingFeel" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingFeel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uAC10\uC815\uC744 \uB098\uD0C0\uB0B4\uB294 \uC774\uBAA8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC10\uC815\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingFeel from './components/RatingFeel';`, copyText: `import RatingFeel from './components/RatingFeel';`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(RatingFeel_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RatingFeel from './components/RatingFeel';

function Example() {
  return <RatingFeel />;
}

export default Example;
`, copyText: `import RatingFeel from './components/RatingFeel';

function Example() {
  return <RatingFeel />;
}

export default Example;
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RatingFeel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onRatingChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC10\uC815 \uC810\uC218\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(rating: number) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }) })] })] })] }));
};
exports.default = RatingDocs;
