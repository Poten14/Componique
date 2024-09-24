"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ImageUploadDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [imageData, setImageData] = (0, react_1.useState)(null);
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const onSelectImageHandler = (data) => {
        setImageData(data);
        console.log("Selected Image data =>", data);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. ImageUpload" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ImageUpload" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8\uC9C0\uB97C \uC5C5\uB85C\uB4DC\uD558\uAC70\uB098 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2E4\uC591\uD55C \uD06C\uAE30, \uC0C9\uC0C1, \uBAA8\uC591, \uD14D\uC2A4\uD2B8, \uC2A4\uD0C0\uC77C \uBCC0\uD615 \uBC0F \uAE30\uD0C0 \uC635\uC158\uC744 \uD1B5\uD574 \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(Imageupload_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload />
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "2. Size" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "size" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "large" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { size: "small" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { size: "medium" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { size: "large" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload size="small" />
      <ImageUpload size="medium" />
      <ImageUpload size="large" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload size="small" />
      <ImageUpload size="medium" />
      <ImageUpload size="large" />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "3. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "primary" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "secondary" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "success" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "warning" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "danger" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "red" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "orange" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "green" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "blue" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "purple" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "pink" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "white" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "gray" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "black" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "primary" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "secondary" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "success" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "warning" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "danger" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "red" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "orange" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "yellow" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "green" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "blue" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "purple" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "pink" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "basic" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "white" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "gray" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "black" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" />
        <ImageUpload color="secondary" />
        <ImageUpload color="success" />
        <ImageUpload color="warning" />
        <ImageUpload color="danger" />
        <ImageUpload color="red" />
        <ImageUpload color="orange" />
        <ImageUpload color="yellow" />
        <ImageUpload color="green" />
        <ImageUpload color="blue" />
        <ImageUpload color="purple" />
        <ImageUpload color="pink" />
        <ImageUpload color="basic" />
        <ImageUpload color="white" />
        <ImageUpload color="gray" />
        <ImageUpload color="black" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4. Shape" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "shape" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "circle" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "rectangle" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "circle" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { shape: "rectangle" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { shape: "circle" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload shape="rectangle" />
      <ImageUpload shape="circle" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload shape="rectangle" />
      <ImageUpload shape="circle" />
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "5. Variant" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), "\uC640", " ", (0, jsx_runtime_1.jsx)("code", { children: "border" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { variant: "solid", color: "primary" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { variant: "border", color: "secondary" })] }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload variant="solid" color="primary" />
      <ImageUpload variant="border" color="secondary" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload variant="solid" color="primary" />
      <ImageUpload variant="border" color="secondary" />
    </>
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "6. Variant Border\uC758 Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "border" }), " \uC2A4\uD0C0\uC77C\uC740 ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD14C\uB450\uB9AC\uB9CC \uC0C9\uC0C1\uC774 \uC801\uC6A9\uB418\uACE0 \uC774\uBBF8\uC9C0\uAC00 \uC5C5\uB85C\uB4DC\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC5D0\uC11C \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 \uAC15\uC870\uB418\uC11C \uC2DC\uAC01\uC801\uC73C\uB85C \uAD6C\uBD84\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "primary", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "secondary", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "success", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "warning", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "danger", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "red", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "orange", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "yellow", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "green", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "blue", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "purple", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "pink", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "basic", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "white", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "gray", variant: "border" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { color: "black", variant: "border" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { ImageUpload } from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
    </>
  );
}

export default Example;`, copyText: `import { ImageUpload } from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload color="primary" variant="border" />
        <ImageUpload color="secondary" variant="border" />
        <ImageUpload color="success" variant="border" />
        <ImageUpload color="warning" variant="border" />
        <ImageUpload color="danger" variant="border" />
        <ImageUpload color="red" variant="border" />
        <ImageUpload color="orange" variant="border" />
        <ImageUpload color="yellow" variant="border" />
        <ImageUpload color="green" variant="border" />
        <ImageUpload color="blue" variant="border" />
        <ImageUpload color="purple" variant="border" />
        <ImageUpload color="pink" variant="border" />
        <ImageUpload color="basic" variant="border" />
        <ImageUpload color="white" variant="border" />
        <ImageUpload color="gray" variant="border" />
        <ImageUpload color="black" variant="border" />
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "7. Text" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "text" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "+ upload" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { text: "Add Image" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { text: "Upload Here" })] }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload text="Add Image" />
      <ImageUpload text="Upload Here" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload text="Add Image" />
      <ImageUpload text="Upload Here" />
    </>
  );
}

export default Example;`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "8. ClassName" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "className" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC ", (0, jsx_runtime_1.jsx)("code", { children: "ImageUpload" }), " ", "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "space-x-4 space-y-4", children: (0, jsx_runtime_1.jsx)(Imageupload_1.default, { className: "bg-red-600 text-white" }) }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload className="bg-red-600 text-white" />
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <ImageUpload className="bg-red-600 text-white" />
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "9. OnImageSelect" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "onImageSelect" }), " prop\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC120\uD0DD\uB41C \uC774\uBBF8\uC9C0\uC758 Base64 \uB370\uC774\uD130\uB97C \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uD558\uACE0, \uC774\uBBF8\uC9C0\uAC00 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC744 \uACBD\uC6B0 ", (0, jsx_runtime_1.jsx)("code", { children: "null" }), "\uC744 \uC804\uB2EC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uB0B4\uBD80\uC801\uC73C\uB85C ", (0, jsx_runtime_1.jsx)("code", { children: "onChangeImageHandler" }), " \uD568\uC218\uAC00 \uC0AC\uC6A9\uB418\uACE0, \uC774 \uD568\uC218\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "FileReader" }), "\uB97C \uC774\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C Base64 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658 \uD6C4, \uBCC0\uD658\uB41C \uB370\uC774\uD130\uB97C ", (0, jsx_runtime_1.jsx)("code", { children: "previewImage" }), " \uC0C1\uD0DC\uB85C \uC124\uC815\uD55C \uD6C4", " ", (0, jsx_runtime_1.jsx)("code", { children: "onImageSelect" }), " \uCF5C\uBC31\uC73C\uB85C \uC804\uB2EC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC608\uB97C \uB4E4\uC5B4, \uC544\uB798\uC640 \uAC19\uC740 \uBC29\uC2DD\uC73C\uB85C ", (0, jsx_runtime_1.jsx)("code", { children: "onImageSelect" }), "\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { onImageSelect: onSelectImageHandler }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import ImageUpload from '@components/ImageUpload/Imageupload';
import { useState } from 'react';

function Example() {
  const [imageData, setImageData] = useState<string | null>(null);

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };

  return (
    <ImageUpload onImageSelect={onSelectImageHandler} />
  );
}

export default Example;`, copyText: `"use client";
import ImageUpload from '@components/ImageUpload/Imageupload';
import { useState } from 'react';

function Example() {
  const [imageData, setImageData] = useState<string | null>(null);

  const onSelectImageHandler = (data: string | null) => {
    setImageData(data);
    console.log("Selected Image data =>", data);
  };

  return (
    <ImageUpload onImageSelect={onSelectImageHandler} />
  );
}

export default Example;`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "10. Icon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "icon" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC544\uC774\uCF58\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "\"icon-plus\"" }), " \uC785\uB2C8\uB2E4. Icon\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uB294 Icon Docs\uB97C \uCC38\uACE0 \uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-plus" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-image" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload icon="icon-plus" />
      <ImageUpload icon="icon-image" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload icon="icon-plus" />
      <ImageUpload icon="icon-image" />
    </>
  );
}

export default Example;`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "11. Icon Size" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconSize" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740", " ", (0, jsx_runtime_1.jsx)("code", { children: "\"small\"" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "\"large\"" }), " ", "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { iconSize: "small" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { iconSize: "medium" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { iconSize: "large" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload iconSize="small" />
      <ImageUpload iconSize="medium" />
      <ImageUpload iconSize="large" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload iconSize="small" />
      <ImageUpload iconSize="medium" />
      <ImageUpload iconSize="large" />
    </>
  );
}

export default Example;`, language: "tsx", index: 11, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "12. Icon Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconColor" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uCF58\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "\"currentColor\"" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { iconColor: "red" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { iconColor: "blue" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload iconColor="red" />
      <ImageUpload iconColor="blue" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
      <ImageUpload iconColor="red" />
      <ImageUpload iconColor="blue" />
    </>
  );
}

export default Example;`, language: "tsx", index: 12, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "13. Icon Position" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "iconPosition" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uCF58\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uC774\uCF58 \uC704\uCE58\uB294 text prop\uC774 \uC788\uC744 \uB54C, ", (0, jsx_runtime_1.jsx)("code", { children: "text\uC758 \uC67C\uCABD(left)" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "\uC624\uB978\uCABD(right)" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "\uC704\uCABD(top)" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "\uC544\uB798\uCABD(bottom)" }), "\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["text\uAC00 \uC5C6\uB294 \uACBD\uC6B0 \uC544\uC774\uCF58\uC740 \uC790\uB3D9\uC73C\uB85C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uC6B4\uB370\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "top" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798 \uC608\uC2DC\uB294 icon-image \uC544\uC774\uCF58\uC744 \uD3EC\uD568\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-image", iconPosition: "left", text: "left" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-image", iconPosition: "right", text: "right" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-image", iconPosition: "top", text: "top" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { icon: "icon-image", iconPosition: "bottom", text: "bottom" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload icon="icon-image" iconPosition="left" text="left" />
        <ImageUpload icon="icon-image" iconPosition="right" text="right" />
        <ImageUpload icon="icon-image" iconPosition="top" text="top" />
        <ImageUpload icon="icon-image" iconPosition="bottom" text="bottom" />
    </>
  );
}

export default Example;`, copyText: `import ImageUpload from '@components/ImageUpload/Imageupload';

function Example() {
  return (
    <>
        <ImageUpload icon="icon-image" iconPosition="left" text="left" />
        <ImageUpload icon="icon-image" iconPosition="right" text="right" />
        <ImageUpload icon="icon-image" iconPosition="top" text="top" />
        <ImageUpload icon="icon-image" iconPosition="bottom" text="bottom" />
    </>
  );
}

export default Example;`, language: "tsx", index: 13, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "14. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ImageUpload" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "shape" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"rectangle\" | \"circle\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"circle\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\" | \"white\" | \"gray\" | \"black\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\" | \"border\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "text" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD45C\uC2DC\uD560 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uC124\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 \uAE30\uBCF8\uC801\uC73C\uB85C \uC544\uC774\uCF58\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD94\uAC00\uC801\uC778 \uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onImageSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0 \uC120\uD0DD \uC2DC \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(data: string | null) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "icon" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ImageUpload \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uC544\uC774\uCF58\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "IconName" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"icon-plus\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "iconSize" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "iconColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"currentColor\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "iconPosition" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\" | \"right\" | \"top\" | \"bottom\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"top\"" }) })] })] })] })] }));
};
exports.default = ImageUploadDoc;
