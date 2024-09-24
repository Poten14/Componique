"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AvatarBasic_1 = __importDefault(require("@components/Avatar/AvatarBasic"));
const AvatarLabel_1 = __importDefault(require("@components/Avatar/AvatarLabel"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const AvatarBasicDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. AvatarBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "AvatarBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC758 \uC544\uBC14\uD0C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uB610\uB294 \uC0AC\uC6A9\uC790\uC758 \uC774\uB984 \uC774\uB2C8\uC15C\uC744 \uC544\uBC14\uD0C0\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC73C\uBA70, \uD06C\uAE30\uC640 \uC774\uB2C8\uC15C\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import AvatarBasic from '@components/Avatar/AvatarBasic';`, copyText: `import AvatarBasic from '@components/Avatar/AvatarBasic';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-[#2D3748] dark:text-white", children: "1) \uC774\uBBF8\uC9C0\uAC00 \uC788\uB294 \uACBD\uC6B0" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { src: "/avatar1.svg" // public 폴더에 위치한 이미지 경로
                            , alt: "User Avatar", size: 80 }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithImage() {
  return (
    <AvatarBasic
      src="/images/avatar1.svg"
      alt="User Avatar"
      size={80}
    />
  );
}

export default ExampleWithImage;`, copyText: `import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithImage() {
  return (
    <AvatarBasic
      src="/images/avatar1.svg"
      alt="User Avatar"
      size={80}
    />
  );
}

export default ExampleWithImage;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h3", { className: "text-[#2D3748] dark:text-white", children: "2) \uC774\uBBF8\uC9C0\uAC00 \uC5C6\uB294 \uACBD\uC6B0 (\uC774\uB2C8\uC15C \uC0AC\uC6A9)" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { initial: "CQ", size: 80 }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithInitial() {
  return <AvatarBasic initial="JD" size={80} />;
}

export default ExampleWithInitial;`, copyText: `import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithInitial() {
  return <AvatarBasic initial="JD" size={80} />;
}

export default ExampleWithInitial;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "AvatarBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "src" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0\uB85C \uC0AC\uC6A9\uD560 \uC774\uBBF8\uC9C0\uC758 URL." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "alt" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uC758 \uB300\uCCB4 \uD14D\uC2A4\uD2B8." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "initial" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC744 \uB54C \uD45C\uC2DC\uD560 \uC774\uB2C8\uC15C \uD14D\uC2A4\uD2B8 (\uCD5C\uB300 5\uC790 \uAD8C\uC7A5)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0\uC758 \uD06C\uAE30\uB97C \uD53D\uC140 \uB2E8\uC704\uB85C \uC124\uC815." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "100" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { useState } from "react";

interface AvatarBasicProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
}

const AvatarBasic = ({ src, alt, initial, size = 100 }: AvatarBasicProps) => {
  return (
    <div
      className="m-2 flex flex-shrink-0 items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
    </div>
  );
};

export default AvatarBasic;`, copyText: `import { useState } from "react";

interface AvatarBasicProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
}

const AvatarBasic = ({ src, alt, initial, size = 100 }: AvatarBasicProps) => {
  return (
    <div
      className="m-2 flex flex-shrink-0 items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
    </div>
  );
};

export default AvatarBasic;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[1000px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. AvatarLabel" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "AvatarLabel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC758 \uC544\uBC14\uD0C0\uC640 \uD568\uAED8 \uB77C\uBCA8\uC744 \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uB610\uB294 \uC0AC\uC6A9\uC790\uC758 \uC774\uB984 \uC774\uB2C8\uC15C\uC744 \uC544\uBC14\uD0C0\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC73C\uBA70, \uD06C\uAE30\uC640 \uB77C\uBCA8\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import AvatarLabel from '@components/Avatar/AvatarLabel';`, copyText: `import AvatarLabel from '@components/Avatar/AvatarLabel';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "-scroll-my-72", children: (0, jsx_runtime_1.jsx)(AvatarLabel_1.default, { src: "/avatar1.svg", initial: "CQ", size: 80, label: "Com_Que" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import AvatarLabel from '@components/Avatar/AvatarLabel';

function Example() {
  return <AvatarLabel initial="JD" size={80} label="John Doe" />;
}

export default Example;`, copyText: `import AvatarLabel from '@components/Avatar/AvatarLabel';

function Example() {
  return <AvatarLabel initial="JD" size={80} label="John Doe" />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "AvatarLabel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "src" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0\uB85C \uC0AC\uC6A9\uD560 \uC774\uBBF8\uC9C0\uC758 URL." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "alt" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uC758 \uB300\uCCB4 \uD14D\uC2A4\uD2B8." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "initial" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC744 \uB54C \uD45C\uC2DC\uD560 \uC774\uB2C8\uC15C \uD14D\uC2A4\uD2B8 (\uCD5C\uB300 5\uC790 \uAD8C\uC7A5)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0\uC758 \uD06C\uAE30\uB97C \uD53D\uC140 \uB2E8\uC704\uB85C \uC124\uC815." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "50" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "label" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0 \uC606\uC5D0 \uD45C\uC2DC\uB420 \uB77C\uBCA8 \uD14D\uC2A4\uD2B8." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `interface AvatarLabelProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
  label: string;
}

const AvatarLabel = ({
  src,
  alt,
  initial,
  size = 50,
  label,
}: AvatarLabelProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${sWize * 0.2}px\`,
      }}
    >
      {!src && initial}
      <span>{label}</span>W
    </div>
  );
};

export default AvatarLabel;`, copyText: `interface AvatarLabelProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
  label: string;
}

const AvatarLabel = ({
  src,
  alt,
  initial,
  size = 50,
  label,
}: AvatarLabelProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
      <span>{label}</span>
    </div>
  );
};

export default AvatarLabel;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = AvatarBasicDocs;
