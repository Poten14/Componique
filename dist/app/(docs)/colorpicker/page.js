"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ColorPickerUI_1 = __importDefault(require("@components/ColorPicker/ColorPickerUI"));
const GradientPicker_1 = __importDefault(require("@components/ColorPicker/GradientPicker"));
const TwoPicker_1 = __importDefault(require("@components/ColorPicker/TwoPicker"));
const ColorPicker_1 = __importDefault(require("@components/ColorPicker/ColorPicker"));
const ColorPickerDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. ColorPicker - \uAE30\uBCF8" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ColorPicker" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC0C9\uC0C1\uC744 \uC120\uD0DD\uD558\uACE0 \uBCF5\uC0AC\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", " "] }), (0, jsx_runtime_1.jsx)("p", { children: "\uBBF8\uB9AC \uAD6C\uC131\uB41C \uC0C9\uC0C1 \uD314\uB808\uD2B8\uB97C \uC0AC\uC6A9\uD558\uACE0\uC2F6\uB2E4\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ColorPicker from "@components/ColorPicker/ColorPicker";`, copyText: `import ColorPicker from "@components/ColorPicker/ColorPicker";`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(ColorPicker_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ColorPicker from "@components/ColorPicker/ColorPicker";

function Example() {
  return (
      <ColorPicker />
  );
}

export default Example;`, copyText: `import ColorPicker from "@components/ColorPicker/ColorPicker";

function Example() {
  return (
      <ColorPicker />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. ColorPickerUI - \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ColorPickerUI" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uC0C9\uC0C1\uC744 \uD314\uB808\uD2B8\uC5D0 \uB2F4\uC740 \uD6C4, \uC0C9\uC0C1\uC744 \uC120\uD0DD\uD558\uACE0 \uBCF5\uC0AC\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';`, copyText: `import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(ColorPickerUI_1.default, { colors: ["#ff0000", "#00ff00", "#0000ff"] }) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';

function Example() {
  return (
    <ColorPickerUI colors={["#ff0000", "#00ff00", "#0000ff"]} />
  );
}

export default Example;`, copyText: `import ColorPickerUI from '@components/ColorPicker/ColorPickerUI';

function Example() {
  return (
    <ColorPickerUI colors={["#ff0000", "#00ff00", "#0000ff"]} />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "colors" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC0C9\uC0C1 \uBAA9\uB85D\uC785\uB2C8\uB2E4. \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2F6\uB2E4\uBA74 \uC704\uC758 colorpicker\uB97C \uC0AC\uC6A9\uD574\uC57C\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD544\uC218" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "selectColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0C9\uC0C1\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(color: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "None" })] })] })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. GradientPicker" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "GradientPicker" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uADF8\uB77C\uB370\uC774\uC158 \uC0C9\uC0C1\uC744 \uC120\uD0DD\uD558\uACE0 \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uC81C\uACF5\uD558\uBA70, \uC774\uB97C \uBCF5\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import GradientPicker from '@components/ColorPicker/GradientPicker';`, copyText: `import GradientPicker from '@components/ColorPicker/GradientPicker';`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(GradientPicker_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import GradientPicker from '@components/ColorPicker/GradientPicker';

function Example() {
  return (
    <GradientPicker />
  );
}

export default Example;`, copyText: `import GradientPicker from '@components/ColorPicker/GradientPicker';

function Example() {
  return (
    <GradientPicker />
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "colors" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uADF8\uB77C\uB370\uC774\uC158\uC758 \uC2DC\uC791\uACFC \uB05D \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ startColor: string; endColor: string; }` }) }), (0, jsx_runtime_1.jsx)("td", { children: `{ startColor: "#ffffff", endColor: "#000000" }` })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "position" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uADF8\uB77C\uB370\uC774\uC158\uC758 \uBC29\uD5A5\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("code", { children: "to right" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to left" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to bottom" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to top" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to bottom right" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to bottom left" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to top right" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "to top left" })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"to right\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "4. TwoPicker" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "TwoPicker" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 ColorPicker\uC640 GradientPicker \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TwoPicker from '@components/ColorPicker/TwoPicker';`, copyText: `import TwoPicker from '@components/ColorPicker/TwoPicker';`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(TwoPicker_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TwoPicker from '@components/ColorPicker/TwoPicker';

function Example() {
  return (
    <TwoPicker />
  );
}

export default Example;`, copyText: `import TwoPicker from '@components/ColorPicker/TwoPicker';

function Example() {
  return (
    <TwoPicker />
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4.3. Props" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "activePicker" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uD53D\uCEE4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \"Color\" \uB610\uB294 \"Gradient\" \uAC12\uC744 \uAC00\uC9D1\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Color\" | \"Gradient\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Color\"" }) })] }) })] })] }));
};
exports.default = ColorPickerDoc;
