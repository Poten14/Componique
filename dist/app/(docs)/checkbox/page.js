"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CheckBoxDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [checkBoxStates, setCheckBoxStates] = (0, react_1.useState)({
        example: true,
        small: true,
        medium: true,
        large: true,
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        danger: true,
        solid: true,
        border: true,
        custom: true,
    });
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handleCheckBoxChange = (key) => (e) => {
        setCheckBoxStates((prevState) => ({
            ...prevState,
            [key]: e.target.checked,
        }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. CheckBox" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CheckBox" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uCCB4\uD06C\uBC15\uC2A4\uB97C \uC0DD\uC131\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2E4\uC591\uD55C \uD06C\uAE30, \uC0C9\uC0C1, \uBCC0\uD615 \uBC0F \uAE30\uD0C0 \uC635\uC158\uC744 \uD1B5\uD574 \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC758 \uCCB4\uD06C\uBC15\uC2A4\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';`, copyText: `import { CheckBox } from '@components/CheckBox';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Example CheckBox", checked: checkBoxStates.example, onChange: handleCheckBoxChange("example") }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Example CheckBox" />
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Example CheckBox" />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "3. Size" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "boxSize" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uCCB4\uD06C\uBC15\uC2A4\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "large" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { boxSize: "small", description: "Small CheckBox", checked: checkBoxStates.small, onChange: handleCheckBoxChange("small") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { boxSize: "medium", description: "Medium CheckBox", checked: checkBoxStates.medium, onChange: handleCheckBoxChange("medium") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { boxSize: "large", description: "Large CheckBox", checked: checkBoxStates.large, onChange: handleCheckBoxChange("large") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox boxSize="small" description="Small CheckBox" />
      <CheckBox boxSize="medium" description="Medium CheckBox" />
      <CheckBox boxSize="large" description="Large CheckBox" />
    </>
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox boxSize="small" description="Small CheckBox" />
      <CheckBox boxSize="medium" description="Medium CheckBox" />
      <CheckBox boxSize="large" description="Large CheckBox" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uCCB4\uD06C\uBC15\uC2A4\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "primary" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "secondary" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "success" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "warning" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "danger" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "red" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "orange" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "green" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "blue" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "purple" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "pink" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Primary CheckBox", color: "primary", checked: checkBoxStates.primary, onChange: handleCheckBoxChange("primary") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Secondary CheckBox", color: "secondary", checked: checkBoxStates.secondary, onChange: handleCheckBoxChange("secondary") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Success CheckBox", color: "success", checked: checkBoxStates.success, onChange: handleCheckBoxChange("success") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Warning CheckBox", color: "warning", checked: checkBoxStates.warning, onChange: handleCheckBoxChange("warning") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Danger CheckBox", color: "danger", checked: checkBoxStates.danger, onChange: handleCheckBoxChange("danger") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox" color="primary" />
      <CheckBox description="Secondary CheckBox" color="secondary" />
      <CheckBox description="Success CheckBox" color="success" />
      <CheckBox description="Warning CheckBox" color="warning" />
      <CheckBox description="Danger CheckBox" color="danger" />
    </>
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox" color="primary" />
      <CheckBox description="Secondary CheckBox" color="secondary" />
      <CheckBox description="Success CheckBox" color="success" />
      <CheckBox description="Warning CheckBox" color="warning" />
      <CheckBox description="Danger CheckBox" color="danger" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "5. Variant" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uCCB4\uD06C\uBC15\uC2A4\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), "\uC640 ", (0, jsx_runtime_1.jsx)("code", { children: "border" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Solid CheckBox", variant: "solid", checked: checkBoxStates.solid, onChange: handleCheckBoxChange("solid") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Border CheckBox", variant: "border", checked: checkBoxStates.border, onChange: handleCheckBoxChange("border") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Solid CheckBox" variant="solid" />
      <CheckBox description="Border CheckBox" variant="border" />
    </>
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Solid CheckBox" variant="solid" />
      <CheckBox description="Border CheckBox" variant="border" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "6. Variant Border\uC758 Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uCCB4\uD06C\uBC15\uC2A4\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "border" }), " \uC2A4\uD0C0\uC77C\uC740 \uCCB4\uD06C\uBC15\uC2A4\uC758 \uD14C\uB450\uB9AC\uB9CC \uC0C9\uC0C1\uC774 \uC801\uC6A9\uB418\uBA70, \uCCB4\uD06C\uB41C \uC0C1\uD0DC\uC77C \uB54C \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 \uAC15\uC870\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Primary CheckBox (Border)", color: "primary", variant: "border", checked: checkBoxStates.primary, onChange: handleCheckBoxChange("primary") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Secondary CheckBox (Border)", color: "secondary", variant: "border", checked: checkBoxStates.secondary, onChange: handleCheckBoxChange("secondary") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Success CheckBox (Border)", color: "success", variant: "border", checked: checkBoxStates.success, onChange: handleCheckBoxChange("success") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Warning CheckBox (Border)", color: "warning", variant: "border", checked: checkBoxStates.warning, onChange: handleCheckBoxChange("warning") }), (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Danger CheckBox (Border)", color: "danger", variant: "border", checked: checkBoxStates.danger, onChange: handleCheckBoxChange("danger") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox (Border)" color="primary" variant="border" />
      <CheckBox description="Secondary CheckBox (Border)" color="secondary" variant="border" />
      <CheckBox description="Success CheckBox (Border)" color="success" variant="border" />
      <CheckBox description="Warning CheckBox (Border)" color="warning" variant="border" />
      <CheckBox description="Danger CheckBox (Border)" color="danger" variant="border" />
    </>
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox (Border)" color="primary" variant="border" />
      <CheckBox description="Secondary CheckBox (Border)" color="secondary" variant="border" />
      <CheckBox description="Success CheckBox (Border)" color="success" variant="border" />
      <CheckBox description="Warning CheckBox (Border)" color="warning" variant="border" />
      <CheckBox description="Danger CheckBox (Border)" color="danger" variant="border" />
    </>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "7. Disabled" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "disabled" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uCCB4\uD06C\uBC15\uC2A4\uB97C \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: (0, jsx_runtime_1.jsx)(CheckBox_1.default, { description: "Disabled CheckBox", checked: checkBoxStates.example, disabled: true }) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Disabled CheckBox" disabled={true} />
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Disabled CheckBox" disabled={true} />
  );
}

export default Example;`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "8. ClassName" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "className" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC ", (0, jsx_runtime_1.jsx)("code", { children: "CheckBox" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798 \uC608\uC2DC\uB294 \uCCB4\uD06C\uD558\uBA74 \uBE68\uAC04\uC0C9 \uBC30\uACBD\uC774 \uB418\uB3C4\uB85D \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD55C \uAC83\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: (0, jsx_runtime_1.jsx)(CheckBox_1.default, { variant: "border", color: "basic", className: "checked:!bg-red-500", description: "Custom ClassName CheckBox", checked: checkBoxStates.custom, onChange: handleCheckBoxChange("custom") }) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox
      variant="border"
      color="basic"
      className="checked:!bg-red-500"
      description="Custom ClassName CheckBox"
    />
  );
}

export default Example;`, copyText: `import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox
      variant="border"
      color="basic"
      className="checked:!bg-red-500"
      description="Custom ClassName CheckBox"
    />
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "9. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CheckBox" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boxSize" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\" | \"border\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "description" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox \uC606\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC124\uBA85 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uC758 \uCD94\uAC00 \uC2A4\uD0C0\uC77C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uB97C \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uB85C \uB9CC\uB4ED\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "CheckBox\uC758 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(e: React.ChangeEvent<HTMLInputElement>) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] })] }));
};
exports.default = CheckBoxDoc;
