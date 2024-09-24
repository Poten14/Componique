"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Select_1 = __importDefault(require("@components/Select/Select"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const SelectList_1 = __importDefault(require("@components/Select/SelectList"));
const SelectValueAdd_1 = __importDefault(require("@components/Select/SelectValueAdd"));
const SelectDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handleSelect = (value) => {
        console.log("Selected option:", value);
    };
    const handleOptionClick = (value) => {
        console.log("Option clicked:", value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Select" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Select" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uC635\uC158 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB41C \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC785\uB2C8\uB2E4. \uC0C9\uC0C1\uACFC \uAE30\uBCF8 \uC120\uD0DD \uC635\uC158\uC744 \uC870\uC815\uD558\uC5EC \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Select } from '@components/Select';`, copyText: `import { Select } from '@components/Select';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Select_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select an option", color: "gray", onChange: handleSelect, onClick: handleOptionClick }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an option"
      color="gray"
      onChange={handleSelect}
      onClick={handleOptionClick}
    />
  );
}

export default Example;`, copyText: `import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an option"
      color="gray"
      onChange={handleSelect}
      onClick={handleOptionClick}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Color of the Select" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Select" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740", " ", (0, jsx_runtime_1.jsx)("code", { children: "gray" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9 \uD14C\uB450\uB9AC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "blue" }), ": \uD30C\uB780\uC0C9 \uD14C\uB450\uB9AC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "green" }), ": \uCD08\uB85D\uC0C9 \uD14C\uB450\uB9AC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "gray" }), ": \uD68C\uC0C9 \uD14C\uB450\uB9AC (\uAE30\uBCF8\uAC12)"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)(Select_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select an option", color: "red", onChange: handleSelect, onClick: handleOptionClick }), (0, jsx_runtime_1.jsx)(Select_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select an option", color: "blue", onChange: handleSelect, onClick: handleOptionClick }), (0, jsx_runtime_1.jsx)(Select_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select an option", color: "green", onChange: handleSelect, onClick: handleOptionClick }), (0, jsx_runtime_1.jsx)(Select_1.default, { option: ["Option 1", "Option 2", "Option 3"], placeholder: "Select an option", color: "gray", onChange: handleSelect, onClick: handleOptionClick })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Select from '@components/Select';

function Example() {
  return (
    <>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="red"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="green"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="gray"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
    </>
  );
}

export default Example;`, copyText: `import Select from '@components/Select';

function Example() {
  return (
    <ㅇ>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="red"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="green"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="gray"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
    </>
  );`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Select" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "option" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC5D0\uC11C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC635\uC158 \uBAA9\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB4DC\uB86D\uB2E4\uC6B4\uC758 \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"red\" | \"blue\" | \"green\" | \"gray\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"gray\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Select an option\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB41C \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClick" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uD074\uB9AD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
    </div>
  );
}

export default Example;`, copyText: `import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
        onChange={handleSelect}
        onClick={handleOptionClick}
      />
    </div>
  );`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. SelectList" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SelectList" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC5EC\uB7EC \uC635\uC158 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uB9AC\uC2A4\uD2B8 \uD615\uD0DC\uC758 \uC120\uD0DD \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uD654\uBA74\uC5D0 \uD3BC\uCCD0\uC9C4 \uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SelectList } from '@components/Select/SelectList';`, copyText: `import { SelectList } from '@components/Select/SelectList';`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SelectList_1.default, { option: ["Item 1", "Item 2", "Item 3", "Item 4"] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SelectList from '@components/Select/SelectList';

function Example() {
  return (
    <SelectList
      option={["Item 1", "Item 2", "Item 3", "Item 4"]}
    />
  );
}

export default Example;`, copyText: `import SelectList from '@components/Select/SelectList';

function Example() {
  return (
    <SelectList
      option={["Item 1", "Item 2", "Item 3", "Item 4"]}
    />
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SelectList" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "option" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uD56D\uBAA9 \uBAA9\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB41C \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uCD94\uAC00\uC801\uC778 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD074\uB798\uC2A4 \uC774\uB984\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SelectList from '@components/Select/SelectList';

function Example() {
  return (
    <div>
      <SelectList
        option={["Item 1", "Item 2", "Item 3", "Item 4"]}
      />
    </div>
  );
}

export default Example;`, copyText: `import SelectList from '@components/Select/SelectList';

function Example() {
  return (
    <div>
      <SelectList
        option={["Item 1", "Item 2", "Item 3", "Item 4"]}
      />
    </div>
  );`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. SelectValueAdd" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SelectValueAdd" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uC635\uC158 \uC911 \uC5EC\uB7EC \uAC1C\uB97C \uC120\uD0DD\uD558\uACE0, \uC120\uD0DD\uD55C \uD56D\uBAA9\uC744 \uC81C\uAC70\uD560 \uC218 \uC788\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 `placeholder`\uB97C \uC81C\uACF5\uD558\uC5EC \uCD08\uAE30 \uC0C1\uD0DC\uC5D0\uC11C \uD45C\uC2DC\uD560 \uAE30\uBCF8 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { SelectValueAdd } from '@components/SelectValueAdd';`, copyText: `import { SelectValueAdd } from '@components/SelectValueAdd';`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SelectValueAdd_1.default, { option: ["Option 1", "Option 2", "Option 3", "Option 4"], placeholder: "Select an option", onChange: (selectedValues) => console.log(selectedValues) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      placeholder="Select an option"
      onChange={(selectedValues) => console.log(selectedValues)}
    />
  );
}

export default Example;`, copyText: `import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      placeholder="Select an option"
      onChange={(selectedValues) => console.log(selectedValues)}
    />
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SelectValueAdd" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "option" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD \uAC00\uB2A5\uD55C \uC635\uC158 \uBAA9\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Option 1\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC120\uD0DD\uB41C \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string[]) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uCD94\uAC00\uC801\uC778 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD074\uB798\uC2A4 \uC774\uB984\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <div>
      <SelectValueAdd
        option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        placeholder="Select an option"
        onChange={(selectedValues) => console.log(selectedValues)}
      />
    </div>
  );
}

export default Example;`, copyText: `import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <div>
      <SelectValueAdd
        option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        placeholder="Select an option"
        onChange={(selectedValues) => console.log(selectedValues)}
      />
    </div>
  );`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = SelectDocs;
