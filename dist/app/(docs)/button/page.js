"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("@components/Button/Button"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ButtonDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Button" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Button" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD074\uB9AD \uAC00\uB2A5\uD55C \uBC84\uD2BC\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2E4\uC591\uD55C \uD06C\uAE30, \uC0C9\uC0C1, \uBCC0\uD615, \uC544\uC774\uCF58 \uBC0F \uAE30\uD0C0 \uC635\uC158\uC744 \uD1B5\uD574 \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uC758 \uBC84\uD2BC\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';`, copyText: `import { Button } from '@components/Button';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { children: "Button" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
    <Button>
      Button
    </Button>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
    <Button>
      Button
    </Button>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "2. Size" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "size" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "large" }), " ", "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", children: "Small Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "medium", children: "Medium Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "large", children: "Large Button" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "3. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "primary" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "secondary" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "success" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "warning" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "danger" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "red" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "orange" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "green" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "blue" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "purple" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "pink" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { children: "Primary Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "secondary", children: "Secondary Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "success", children: "Success Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "warning", children: "Warning Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "danger", children: "Danger Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "red", children: "Red Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "orange", children: "Orange Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "yellow", children: "Yellow Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "green", children: "Green Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "blue", children: "Blue Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "purple", children: "Purple Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "pink", children: "Pink Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "basic", children: "Basic Button" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
        <>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
        </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
        <>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
        </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4. Radius" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "radius" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC758 \uBAA8\uC11C\uB9AC \uB465\uADFC \uC815\uB3C4\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "large" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "none" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "full" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { radius: "small", children: "Small Radius Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "medium", children: "Medium Radius Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "large", children: "Large Radius Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "none", children: "No Radius Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { radius: "full", children: "Full Radius Button" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button radius="small">Radius Small Button</Button>
        <Button radius="medium">Radius MediumButton</Button>
        <Button radius="large">Radius Large Button</Button>
        <Button radius="full">Radius Full Button</Button>
        <Button radius="none">Radius None Button</Button>
      </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button radius="small">Radius Small Button</Button>
        <Button radius="medium">Radius MediumButton</Button>
        <Button radius="large">Radius Large Button</Button>
        <Button radius="full">Radius Full Button</Button>
        <Button radius="none">Radius None Button</Button>
      </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "5. Variant" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "border" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "flat" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "light" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "solid", children: "Solid Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", children: "Border Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "flat", children: "Flat Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "light", children: "Light Button" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="light">Light Button</Button>
      </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="light">Light Button</Button>
      </>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "6. Icon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "icon" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC5D0 \uC544\uC774\uCF58\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", " "] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconPosition" }), " prop\uC73C\uB85C \uC544\uC774\uCF58\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconSize" }), " prop\uC73C\uB85C \uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconColor" }), " prop\uC73C\uB85C \uC544\uC774\uCF58\uC758 \uCEEC\uB7EC\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: " Icon\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uB294 Icon Docs\uB97C \uCC38\uACE0 \uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "left", iconSize: "small", children: "Left Small Icon Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "left", iconSize: "medium", children: "Left Medium Icon Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "left", iconSize: "large", children: "Left Large Icon Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "right", iconSize: "small", children: "Right Small Icon Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "right", iconSize: "medium", children: "Right Medium Icon Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", iconPosition: "right", iconSize: "large", children: "Right Large Icon Button" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
          <Button icon="icon-home" iconPosition="left" iconSize="small">
          Left Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="medium">
          Left Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="large">
          Left Large Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="small">
          Right Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="medium">
          Right Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="large">
          Right Large Icon Button
        </Button>
      </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
      <>
          <Button icon="icon-home" iconPosition="left" iconSize="small">
          Left Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="medium">
          Left Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="large">
          Left Large Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="small">
          Right Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="medium">
          Right Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="large">
          Right Large Icon Button
        </Button>
      </>
  );
}

export default Example;`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "7. Disabled" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "disabled" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBC84\uD2BC\uC744 \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "space-x-4 space-y-4", children: (0, jsx_runtime_1.jsx)(Button_1.default, { disabled: true, children: "Disabled Button" }) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
            <Button disabled>Button Disabled</Button>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
            <Button disabled>Button Disabled</Button>
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "8. ClassName" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "className" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC ", (0, jsx_runtime_1.jsx)("code", { children: "Button" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: " \uC544\uB798 \uC608\uC2DC\uB294 \uBC84\uD2BC\uC758 \uBC30\uACBD\uC0C9\uACFC \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD55C \uAC83\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("p", { children: "!\uC544\uB798 \uC608\uC2DC\uCC98\uB7FC \uBC14\uB85C \uC801\uC6A9\uC774 \uAC00\uB2A5\uD55C \uBD80\uBD84\uB3C4 \uC788\uC9C0\uB9CC CSS \uC6B0\uC120\uC21C\uC704\uC5D0 \uC758\uD574\uC11C !important\uB97C \uC0AC\uC6A9\uD574\uC57C \uC801\uC6A9\uB418\uB294 \uBD80\uBD84\uB3C4 \uC788\uC744\uC218 \uC788\uC2B5\uB2C8\uB2E4. (Tailwind\uB294 !text-xl \uCC98\uB7FC \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.)" }), (0, jsx_runtime_1.jsx)("div", { className: "space-x-4 space-y-4", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "warning", radius: "none", className: "w-[500px] !bg-red-200 !text-blue-600", children: "ClassNameCustomButton" }) }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
  );
}

export default Example;`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "9. Full Example with Mixed Props" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC5EC\uB7EC \uC18D\uC131\uC744 \uC11E\uC5B4\uC11C \uC0AC\uC6A9\uD55C \uBC84\uD2BC \uC608\uC81C\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "purple", radius: "full", children: "Border Purple Full Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "light", color: "warning", radius: "none", children: "Light Warning None Button" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "warning", radius: "none", className: "w-[500px] !bg-red-200 !text-blue-600", children: "ClassNameCustomButton" })] }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
    <div>
      <Button variant="border" color="purple" radius="full">
        Border Purple Full Button
      </Button>
      <Button variant="light" color="warning" radius="none">
        Light Warning None Button
      </Button>
      <Button
        variant="border"
        color="warning"
        radius="none"
        className="w-[500px] !bg-red-200 !text-blue-600"
      >
        ClassNameCustomButton
      </Button>
    </div>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
    <div>
      <Button variant="border" color="purple" radius="full">
        Border Purple Full Button
      </Button>
      <Button variant="light" color="warning" radius="none">
        Light Warning None Button
      </Button>
      <Button
        variant="border"
        color="warning"
        radius="none"
        className="w-[500px] !bg-red-200 !text-blue-600"
      >
        ClassNameCustomButton
      </Button>
    </div>
  );
}

export default Example;`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "10. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Button" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "radius" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC758 \uBAA8\uC11C\uB9AC \uB465\uADFC \uC815\uB3C4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\" | \"none\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC758 \uBCC0\uD615 \uC2A4\uD0C0\uC77C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\" | \"border\" | \"flat\" | \"light\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "icon" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC5D0 \uC544\uC774\uCF58\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "IconName" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "iconSize" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "iconPosition" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (\uC67C\uCABD \uB610\uB294 \uC624\uB978\uCABD)" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\" | \"right\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC744 \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uB85C \uB9CC\uB4ED\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClick" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Button\uC774 \uD074\uB9AD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] })] }));
};
exports.default = ButtonDoc;
