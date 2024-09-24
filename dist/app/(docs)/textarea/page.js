"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Textarea_1 = __importDefault(require("@components/Textarea/Textarea"));
const TextareaValue_1 = __importDefault(require("@components/Textarea/TextareaValue"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const TextareaDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Textarea" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Textarea" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uAE34 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB41C \uC785\uB825 \uD544\uB4DC\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC0C9\uC0C1, \uBC0F \uD06C\uAE30 \uC870\uC808 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uC870\uC815\uD558\uC5EC \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';`, copyText: `import Textarea from '@components/Textarea';`, language: "tsx", index: 1, copied: copied, handleCopy: () => handleCopy(1) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Description", id: "description", placeholder: "Enter your text here" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <Textarea
      label="Description"
      id="description"
      placeholder="Enter your text here"
    />
  );
}

export default Example;`, copyText: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <Textarea
      label="Description"
      id="description"
      placeholder="Enter your text here"
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: () => handleCopy(2) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Size of the Textarea" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Textarea" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "large" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xs" }), ": \uC544\uC8FC \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "xl" }), ": \uC544\uC8FC \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Extra Small Size", id: "xs", size: "xs", placeholder: "Extra small size" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Small Size", id: "small", size: "small", placeholder: "Small size" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Medium Size", id: "medium", size: "medium", placeholder: "Medium size" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Large Size", id: "large", size: "large", placeholder: "Large size" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Extra Large Size", id: "xl", size: "xl", placeholder: "Extra large size" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Extra Small Size" id="xs" size="xs" placeholder="Extra small size" />
      <Textarea label="Small Size" id="small" size="small" placeholder="Small size" />
      <Textarea label="Medium Size" id="medium" size="medium" placeholder="Medium size" />
      <Textarea label="Large Size" id="large" size="large" placeholder="Large size" />
      <Textarea label="Extra Large Size" id="xl" size="xl" placeholder="Extra large size" />
    </>
  );
}

export default Example;`, copyText: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Extra Small Size" id="xs" size="xs" placeholder="Extra small size" />
      <Textarea label="Small Size" id="small" size="small" placeholder="Small size" />
      <Textarea label="Medium Size" id="medium" size="medium" placeholder="Medium size" />
      <Textarea label="Large Size" id="large" size="large" placeholder="Large size" />
      <Textarea label="Extra Large Size" id="xl" size="xl" placeholder="Extra large size" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: () => handleCopy(3) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Changing the Color of the Textarea" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Textarea" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740", " ", (0, jsx_runtime_1.jsx)("code", { children: "skyblue" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9 \uD14C\uB450\uB9AC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "skyblue" }), ": \uD30C\uB780\uC0C9 \uD14C\uB450\uB9AC (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "green" }), ": \uCD08\uB85D\uC0C9 \uD14C\uB450\uB9AC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "gray" }), ": \uD68C\uC0C9 \uD14C\uB450\uB9AC"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Red Color", id: "red", color: "red", placeholder: "Red color" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Skyblue Color", id: "skyblue", color: "skyblue", placeholder: "Skyblue color" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Green Color", id: "green", color: "green", placeholder: "Green color" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Gray Color", id: "gray", color: "gray", placeholder: "Gray color" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Red Color" id="red" color="red" placeholder="Red color" />
      <Textarea label="Skyblue Color" id="skyblue" color="skyblue" placeholder="Skyblue color" />
      <Textarea label="Green Color" id="green" color="green" placeholder="Green color" />
      <Textarea label="Gray Color" id="gray" color="gray" placeholder="Gray color" />
    </>
  );
}

export default Example;`, copyText: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Red Color" id="red" color="red" placeholder="Red color" />
      <Textarea label="Skyblue Color" id="skyblue" color="skyblue" placeholder="Skyblue color" />
      <Textarea label="Green Color" id="green" color="green" placeholder="Green color" />
      <Textarea label="Gray Color" id="gray" color="gray" placeholder="Gray color" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: () => handleCopy(4) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Changing the Resize Property" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Textarea" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30 \uC870\uC808 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8 ", (0, jsx_runtime_1.jsx)("code", { children: "resize" }), " \uC18D\uC131\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "vertical" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "none" }), ": \uD06C\uAE30 \uC870\uC808 \uBD88\uAC00"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "both" }), ": \uAC00\uB85C \uBC0F \uC138\uB85C \uD06C\uAE30 \uC870\uC808 \uAC00\uB2A5"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "horizontal" }), ": \uAC00\uB85C \uD06C\uAE30\uB9CC \uC870\uC808 \uAC00\uB2A5"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "vertical" }), ": \uC138\uB85C \uD06C\uAE30\uB9CC \uC870\uC808 \uAC00\uB2A5 (\uAE30\uBCF8\uAC12)"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "No Resize", id: "resize-none", resize: "none", placeholder: "Resize disabled" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Resize Both", id: "resize-both", resize: "both", placeholder: "Resize in both directions" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Resize Horizontal", id: "resize-horizontal", resize: "horizontal", placeholder: "Resize horizontally" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { label: "Resize Vertical", id: "resize-vertical", resize: "vertical", placeholder: "Resize vertically" })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="No Resize" id="resize-none" resize="none" placeholder="Resize disabled" />
      <Textarea label="Resize Both" id="resize-both" resize="both" placeholder="Resize in both directions" />
      <Textarea label="Resize Horizontal" id="resize-horizontal" resize="horizontal" placeholder="Resize horizontally" />
      <Textarea label="Resize Vertical" id="resize-vertical" resize="vertical" placeholder="Resize vertically" />
    </>
  );
}

export default Example;`, copyText: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="No Resize" id="resize-none" resize="none" placeholder="Resize disabled" />
      <Textarea label="Resize Both" id="resize-both" resize="both" placeholder="Resize in both directions" />
      <Textarea label="Resize Horizontal" id="resize-horizontal" resize="horizontal" placeholder="Resize horizontally" />
      <Textarea label="Resize Vertical" id="resize-vertical" resize="vertical" placeholder="Resize vertically" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: () => handleCopy(5) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Textarea" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "label" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC758 \uB808\uC774\uBE14\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "id" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC758 id \uC18D\uC131\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"xs\" | \"small\" | \"medium\" | \"large\" | \"xl\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"large\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC758 \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"red\" | \"skyblue\" | \"green\" | \"gray\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"skyblue\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "resize" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC758 \uD06C\uAE30 \uC870\uC808 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"none\" | \"both\" | \"horizontal\" | \"vertical\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"vertical\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC5D0 \uCD94\uAC00\uC801\uC778 CSS \uD074\uB798\uC2A4\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Textarea \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <div>
      <Textarea 
        label="Description" 
        id="description" 
        size="large" 
        color="gray" 
        resize="none" 
        placeholder="Enter your text here" 
        className="mt-4"
      />
    </div>
  );
}

export default Example;`, copyText: `import Textarea from '@components/Textarea';

function Example() {
  return (
    <div>
      <Textarea 
        label="Description" 
        id="description" 
        size="large" 
        color="gray" 
        resize="none" 
        placeholder="Enter your text here" 
        className="mt-4"
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: () => handleCopy(6) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. TextareaValue" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "TextareaValue" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0 \uC785\uB825\uB41C \uAC12\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD45C\uC2DC\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uB0B4\uC6A9\uC774 \uD654\uBA74\uC5D0 \uC989\uC2DC \uBC18\uC601\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TextareaValue from '@components/TextareaValue';`, copyText: `import TextareaValue from '@components/TextareaValue';`, language: "tsx", index: 7, copied: copied, handleCopy: () => handleCopy(7) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(TextareaValue_1.default, { placeholder: "Type something...", value: "Initial text", onChange: (e) => console.log(e.target.value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("Initial text");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <TextareaValue 
      placeholder="Type something..." 
      value={text}
      onChange={handleChange}
    />
  );
}

export default Example;`, copyText: `import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("Initial text");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <TextareaValue 
      placeholder="Type something..." 
      value={text}
      onChange={handleChange}
    />
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: () => handleCopy(8) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "TextareaValue" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0 \uD45C\uC2DC\uB420 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC758 \uAC12\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC758 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(e: React.ChangeEvent<HTMLTextAreaElement>)" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextareaValue 
        placeholder="Type your message here..." 
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Example;`, copyText: `import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextareaValue 
        placeholder="Type your message here..." 
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 9, copied: copied, handleCopy: () => handleCopy(9) })] }));
};
exports.default = TextareaDocs;
