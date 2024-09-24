"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const DropDownBasic_1 = __importDefault(require("@components/DropDown/DropDownBasic"));
const DropDownMutilSelect_1 = __importDefault(require("@components/DropDown/DropDownMutilSelect"));
const DropDownGrouped_1 = __importDefault(require("@components/DropDown/DropDownGrouped"));
const DropDownComponent = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. DropDownBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uAC04\uB2E8\uD55C \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC758 \uB4DC\uB86D\uB2E4\uC6B4\uC744 \uC9C0\uC6D0\uD558\uBA70, \uC120\uD0DD\uB41C \uAC12\uC740 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasic from '@components/DropDown/DropDownBasic';`, copyText: `import DropDownBasic from '@components/DropDown/DropDownBasic';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { className: "m-7 flex gap-4", children: [(0, jsx_runtime_1.jsx)(DropDownBasic_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Option", type: "basic", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownBasic_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Option", type: "rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownBasic_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Option", type: "borderless-rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownBasic_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "less-rounded", type: "basic", onSelect: (value) => console.log("Selected:", value) })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, copyText: `import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "option" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC5D0\uC11C \uC120\uD0DD \uAC00\uB2A5\uD55C \uC635\uC158\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Select Option\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "type" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC758 \uC2A4\uD0C0\uC77C\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. (\"basic\", \"rounded\", \"borderless-rounded\", \"less-rounded\")" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\" | \"rounded\" | \"borderless-rounded\" | \"less-rounded\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select one"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, copyText: `import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select one"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. DropDownBasicMultiSelect" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownBasicMultiSelect" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uBA40\uD2F0 \uC140\uB809\uD2B8 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC120\uD0DD\uB41C \uAC12\uB4E4\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';`, copyText: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { className: "m-7 flex gap-4", children: [(0, jsx_runtime_1.jsx)(DropDownMutilSelect_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Options", type: "basic", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownMutilSelect_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Options", type: "rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownMutilSelect_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Options", type: "borderless-rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownMutilSelect_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select Options", type: "less-rounded", onSelect: (value) => console.log("Selected:", value) })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function Example() {
  return (
    <DropDownBasicMultiSelect
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select Options"
      type="basic"
      onSelect={(value: string[]) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, copyText: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function Example() {
  return (
    <DropDownBasicMultiSelect
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select Options"
      type="basic"
      onSelect={(value: string[]) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownBasicMultiSelect" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "option" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC5D0\uC11C \uC120\uD0DD \uAC00\uB2A5\uD55C \uC635\uC158\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Select Options\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string[]) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "type" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC758 \uC2A4\uD0C0\uC77C\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. (\"basic\", \"rounded\", \"borderless-rounded\", \"less-rounded\")" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\" | \"rounded\" | \"borderless-rounded\" | \"less-rounded\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function FullExample() {
  return (
    <div>
      <DropDownBasicMultiSelect
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Options"
        type="basic"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose Options"
        type="rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick Options"
        type="borderless-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select Multiple"
        type="less-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, copyText: `import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function FullExample() {
  return (
    <div>
      <DropDownBasicMultiSelect
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Options"
        type="basic"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose Options"
        type="rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick Options"
        type="borderless-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select Multiple"
        type="less-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. DropDownGrouped" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownGrouped" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uADF8\uB8F9\uD654\uB41C \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uAC01 \uADF8\uB8F9\uC5D0\uC11C \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70, \uC120\uD0DD\uB41C \uAC12\uC740 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';`, copyText: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 flex gap-4", children: [(0, jsx_runtime_1.jsx)(DropDownGrouped_1.default, { options: [
                                    {
                                        groupName: "Fruits",
                                        items: ["Apple", "Banana", "Orange", "Grapes"],
                                    },
                                    {
                                        groupName: "Vegetables",
                                        items: ["Carrot", "Broccoli", "Spinach", "Potato"],
                                    },
                                ], defaultOption: "Select Option", type: "basic", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownGrouped_1.default, { options: [
                                    {
                                        groupName: "Fruits",
                                        items: ["Apple", "Banana", "Orange", "Grapes"],
                                    },
                                    {
                                        groupName: "Vegetables",
                                        items: ["Carrot", "Broccoli", "Spinach", "Potato"],
                                    },
                                ], defaultOption: "Select Option", type: "rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownGrouped_1.default, { options: [
                                    {
                                        groupName: "Fruits",
                                        items: ["Apple", "Banana", "Orange", "Grapes"],
                                    },
                                    {
                                        groupName: "Vegetables",
                                        items: ["Carrot", "Broccoli", "Spinach", "Potato"],
                                    },
                                ], defaultOption: "Select Option", type: "borderless-rounded", onSelect: (value) => console.log("Selected:", value) }), (0, jsx_runtime_1.jsx)(DropDownGrouped_1.default, { options: [
                                    {
                                        groupName: "Fruits",
                                        items: ["Apple", "Banana", "Orange", "Grapes"],
                                    },
                                    {
                                        groupName: "Vegetables",
                                        items: ["Carrot", "Broccoli", "Spinach", "Potato"],
                                    },
                                ], defaultOption: "Select Option", type: "less-rounded", onSelect: (value) => console.log("Selected:", value) })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, copyText: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DropDownGrouped" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "options" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC01 \uADF8\uB8F9\uC758 \uC774\uB984\uACFC \uC544\uC774\uD15C\uC744 \uD3EC\uD568\uD55C \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ groupName: string; items: string[] }[]` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "defaultOption" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Select Option\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "type" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC758 \uC2A4\uD0C0\uC77C\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. (\"basic\", \"rounded\", \"borderless-rounded\", \"less-rounded\")" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\" | \"rounded\" | \"borderless-rounded\" | \"less-rounded\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group X", items: ["Option X1", "Option X2"] },
          { groupName: "Group Y", items: ["Option Y1", "Option Y2"] },
        ]}
        defaultOption="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group 10", items: ["Option 10A", "Option 10B"] },
          { groupName: "Group 20", items: ["Option 20A", "Option 20B"] },
        ]}
        defaultOption="Select from List"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, copyText: `import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group X", items: ["Option X1", "Option X2"] },
          { groupName: "Group Y", items: ["Option Y1", "Option Y2"] },
        ]}
        defaultOption="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group 10", items: ["Option 10A", "Option 10B"] },
          { groupName: "Group 20", items: ["Option 20A", "Option 20B"] },
        ]}
        defaultOption="Select from List"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = DropDownComponent;
