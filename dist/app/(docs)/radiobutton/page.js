"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const RadioButtonBasic_1 = __importDefault(require("@components/RadioButton/RadioButtonBasic"));
const RadioButtonDescription_1 = __importDefault(require("@components/RadioButton/RadioButtonDescription"));
const RadioButtonInline_1 = __importDefault(require("@components/RadioButton/RadioButtonInline"));
const RadioButton = () => {
    const [selectedValue, setSelectedValue] = (0, react_1.useState)("");
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#dfdfdf]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. RadioButtonBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uB77C\uB514\uC624 \uBC84\uD2BC\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uC0C9\uC0C1\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC73C\uBA70, \uBE44\uD65C\uC131\uD654 \uC635\uC158\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';`, copyText: `import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-7", style: { marginBottom: "20px" }, children: [(0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Option 1", size: "small", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Option 2", size: "small", color: "grey" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <RadioButtonBasic
      name="basicOptions"
      value="option1"
      checked={basicSelectedValue === "option1"}
      onChange={handleBasicChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;`, copyText: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <RadioButtonBasic
      name="basicOptions"
      value="option1"
      checked={basicSelectedValue === "option1"}
      onChange={handleBasicChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Changing the Size of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Small Option", size: "small", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Medium Option", size: "medium", color: "blue" }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Large Option", size: "large", color: "purple" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default Example;`, copyText: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Changing the Color of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "sky" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "y-space-7 my-7", children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "sky" }), ": \uD558\uB298\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "grey" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "blue" }), ": \uD30C\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "purple" }), ": \uBCF4\uB77C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "green" }), ": \uB179\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ": \uB178\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Sky Option", size: "medium", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonBasic_1.default, { name: "basicOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Grey Option", size: "medium", color: "grey" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      {/* 기타 옵션들 */}
    </>
  );
}

export default Example;`, copyText: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      {/* 기타 옵션들 */}
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.5 Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uADF8\uB8F9\uC758 \uC774\uB984\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "checked" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC120\uD0DD \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(event: React.ChangeEvent<HTMLInputElement>) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC744 \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uB85C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-[#9AC5E5]\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "label" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uC606\uC5D0 \uD45C\uC2DC\uB420 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.6. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Option 2"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Option 3"
        size="large"
        color="purple"
      />
    </div>
  );
}

export default Example;`, copyText: `
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Option 2"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Option 3"
        size="large"
        color="purple"
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. RadioButtonDescription" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonDescription" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB77C\uB514\uC624 \uBC84\uD2BC \uC606\uC5D0 \uB77C\uBCA8\uACFC \uC124\uBA85\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uC0C9\uC0C1\uC744 \uC9C0\uC6D0\uD558\uBA70, \uBE44\uD65C\uC131\uD654 \uC635\uC158\uB3C4 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1 Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';`, copyText: `import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Option 1", description: "This is a description for option 1.", size: "medium", color: "blue" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DescriptionExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      description="This is a description for option 1."
      size="medium"
      color="blue"
    />
  );
}

export default DescriptionExample;`, copyText: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DescriptionExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      description="This is a description for option 1."
      size="medium"
      color="blue"
    />
  );
}

export default DescriptionExample;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Changing the Size of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonDescription" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Small Option", description: "This is a description for the small option.", size: "small", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Medium Option", description: "This is a description for the medium option.", size: "medium", color: "blue" }), (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Large Option", description: "This is a description for the large option.", size: "large", color: "purple" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        description="This is a description for the small option."
        size="small"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        description="This is a description for the medium option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        description="This is a description for the large option."
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`, copyText: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        description="This is a description for the small option."
        size="small"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        description="This is a description for the medium option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        description="This is a description for the large option."
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Changing the Color of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonDescription" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "sky" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "sky" }), ": \uD558\uB298\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "grey" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "blue" }), ": \uD30C\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "purple" }), ": \uBCF4\uB77C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "green" }), ": \uB179\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ": \uB178\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Sky Option", description: "This is a sky-colored option.", size: "medium", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Grey Option", description: "This is a grey-colored option.", size: "medium", color: "grey" }), (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Blue Option", description: "This is a blue-colored option.", size: "medium", color: "blue" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        description="This is a sky-colored option."
        size="medium"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        description="This is a grey-colored option."
        size="medium"
        color="grey"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        description="This is a blue-colored option."
        size="medium"
        color="blue"
      />
      {/* 기타 옵션들 */}
    </>
  );
}

export default ColorExample;`, copyText: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        description="This is a sky-colored option."
        size="medium"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        description="This is a grey-colored option."
        size="medium"
        color="grey"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        description="This is a blue-colored option."
        size="medium"
        color="blue"
      />
      {/* 기타 옵션들 */}
    </>
  );
}

export default ColorExample;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.5. Disabled State" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonDescription" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBE44\uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC0C1\uD0DC\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uBC1B\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-7", children: (0, jsx_runtime_1.jsx)(RadioButtonDescription_1.default, { name: "descriptionOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Disabled Option", description: "This option is disabled.", size: "medium", color: "blue", disabled: true }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DisabledExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Disabled Option"
      description="This option is disabled."
      size="medium"
      color="blue"
      disabled
    />
  );
}

export default DisabledExample;`, copyText: `
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DisabledExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Disabled Option"
      description="This option is disabled."
      size="medium"
      color="blue"
      disabled
    />
  );
}

export default DisabledExample;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonDescription" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uADF8\uB8F9\uC758 \uC774\uB984\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "checked" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC120\uD0DD \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(event: React.ChangeEvent<HTMLInputElement>) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC744 \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uB85C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-[#9AC5E5]\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "label" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uC606\uC5D0 \uD45C\uC2DC\uB420 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "description" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uC606\uC5D0 \uD45C\uC2DC\uB420 \uC124\uBA85 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
      />
    </div>
  );
}

export default FullExample;`, copyText: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. RadioButtonInline" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonInline" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC778\uB77C\uC778 \uC2A4\uD0C0\uC77C\uC758 \uB77C\uB514\uC624 \uBC84\uD2BC\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uC0C9\uC0C1\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC73C\uBA70, \uBE44\uD65C\uC131\uD654 \uC635\uC158\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import RadioButtonInline from '@components/RadioButton/RadioButtonInline';`, copyText: `import RadioButtonInline from '@components/RadioButton/RadioButtonInline';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: "20px" }, children: [(0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Option 1", size: "small", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Option 2", size: "small", color: "grey" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Option 3", size: "medium", color: "blue" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option4", checked: selectedValue === "option4", onChange: handleChange, label: "Option 4", size: "medium", color: "purple" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option5", checked: selectedValue === "option5", onChange: handleChange, label: "Option 5", size: "medium", color: "green" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option6", checked: selectedValue === "option6", onChange: handleChange, label: "Option 6", size: "large", color: "yellow" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option7", checked: selectedValue === "option7", onChange: handleChange, label: "Option 7", size: "large", color: "red" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function Example() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonInline
      name="inlineOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;`, copyText: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function Example() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonInline
      name="inlineOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Changing the Size of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonInline" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Small Option", size: "small", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Medium Option", size: "medium", color: "blue" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Large Option", size: "large", color: "purple" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`, copyText: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Changing the Color of the Radio Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonInline" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "sky" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "sky" }), ": \uD558\uB298\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "grey" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "blue" }), ": \uD30C\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "purple" }), ": \uBCF4\uB77C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "green" }), ": \uB179\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ": \uB178\uB780\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option1", checked: selectedValue === "option1", onChange: handleChange, label: "Sky Option", size: "medium", color: "sky" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option2", checked: selectedValue === "option2", onChange: handleChange, label: "Grey Option", size: "medium", color: "grey" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option3", checked: selectedValue === "option3", onChange: handleChange, label: "Blue Option", size: "medium", color: "blue" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option4", checked: selectedValue === "option4", onChange: handleChange, label: "Purple Option", size: "medium", color: "purple" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option5", checked: selectedValue === "option5", onChange: handleChange, label: "Green Option", size: "medium", color: "green" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option6", checked: selectedValue === "option6", onChange: handleChange, label: "Yellow Option", size: "medium", color: "yellow" }), (0, jsx_runtime_1.jsx)(RadioButtonInline_1.default, { name: "inlineOptions", value: "option7", checked: selectedValue === "option7", onChange: handleChange, label: "Red Option", size: "medium", color: "red" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;`, copyText: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.5. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "RadioButtonInline" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uADF8\uB8F9\uC758 \uC774\uB984\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "checked" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC120\uD0DD \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(event: React.ChangeEvent<HTMLInputElement>) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC744 \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uB85C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"bg-[#9AC5E5]\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "label" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB77C\uB514\uC624 \uBC84\uD2BC \uC606\uC5D0 \uD45C\uC2DC\uB420 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.6. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
      />
    </div>
  );
}

export default FullExample;`, copyText: `
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy })] })] })] }));
};
exports.default = RadioButton;
