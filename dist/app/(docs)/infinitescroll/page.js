"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const InfiniteScrollBasic_1 = __importDefault(require("@components/InfiniteScroll/InfiniteScrollBasic"));
const InfiniteScrollImage_1 = __importDefault(require("@components/InfiniteScroll/InfiniteScrollImage"));
const InfiniteScrollKoJson_1 = __importDefault(require("@components/InfiniteScroll/InfiniteScrollKoJson"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const InfiniteScrollDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const content = [
        "This is the first sentence of the infinite scroll example.",
        "Here is the second sentence that will appear.",
        "The third sentence shows up as you scroll down.",
        "Continuing with the fourth sentence in the list.",
        "Fifth sentence, still more to load!",
        "Sixth sentence, scrolling further.",
        "Seventh sentence, almost there.",
        "Eighth sentence, nearing the end.",
        "Ninth sentence, just a bit more.",
        "Tenth sentence, the last one for this example.",
    ];
    const images = [
        "/images/IfSc1.svg",
        "/images/IfSc2.svg",
        "/images/IfSc3.svg",
        "/images/IfSc4.svg",
        "/images/IfSc5.svg",
        "/images/IfSc6.svg",
        "/images/IfSc7.svg",
        "/images/IfSc8.svg",
        "/images/IfSc9.svg",
        "/images/IfSc10.svg",
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. InfiniteScrollBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uC2A4\uD06C\uB864\uD560 \uB54C\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uD56D\uBAA9\uC744 \uB85C\uB4DC\uD558\uB294 \uAE30\uBCF8\uC801\uC778 \uC778\uD53C\uB2C8\uD2F0 \uC2A4\uD06C\uB864\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC544\uB798\uB294 \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC124\uBA85\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';`, copyText: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(InfiniteScrollBasic_1.default, { content: content }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function Example() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    "The third sentence shows up as you scroll down.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default Example;`, copyText: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function Example() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    "The third sentence shows up as you scroll down.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "content" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD06C\uB864 \uC2DC \uB85C\uB4DC\uD560 \uD56D\uBAA9\uB4E4\uC758 \uB9AC\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function FullExample() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default FullExample;`, copyText: `import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function FullExample() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default FullExample;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. InfiniteScrollImage" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollImage" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uC2A4\uD06C\uB864\uD560 \uB54C\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uB294 \uC778\uD53C\uB2C8\uD2F0 \uC2A4\uD06C\uB864\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC774\uBBF8\uC9C0 URL \uBC30\uC5F4\uC744 \uBC1B\uC544 \uC774\uBBF8\uC9C0\uB97C \uBB34\uD55C\uD788 \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';`, copyText: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(InfiniteScrollImage_1.default, { images: images }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

function Example() {
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  // ... 더 많은 이미지
];

return <InfiniteScrollImage images={images} />;
}

export default Example;`, copyText: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

function Example() {
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  // ... 더 많은 이미지
];

return <InfiniteScrollImage images={images} />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollImage" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "images" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uD06C\uB864 \uC2DC \uB85C\uB4DC\uD560 \uC774\uBBF8\uC9C0\uB4E4\uC758 URL \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

function FullExample() {
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  // ... 더 많은 이미지
];

return <InfiniteScrollImage images={images} />;
}

export default FullExample;`, copyText: `import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

function FullExample() {
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  // ... 더 많은 이미지
];

return <InfiniteScrollImage images={images} />;
}

export default FullExample;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. InfiniteScrollBlogPosts" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollBlogPosts" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC678\uBD80 API\uC5D0\uC11C \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uBB34\uD55C \uC2A4\uD06C\uB864\uC744 \uD1B5\uD574 \uD45C\uC2DC\uD558\uB294 \uC608\uC81C\uC785\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollBasic" }), "\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uB97C \uC2A4\uD06C\uB864\uD558\uBA74\uC11C \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uB370\uC774\uD130\uB294", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://koreanjson.com/posts/1", target: "_blank", rel: "noopener noreferrer", children: "koreanjson.com" }), " ", "\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uC0D8\uD50C \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8 \uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uD558\uBA70, \uC81C\uBAA9\uACFC \uBCF8\uBB38\uC744 \uBB34\uD55C \uC2A4\uD06C\uB864\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uAC01 \uD3EC\uC2A4\uD2B8\uC758 \uBB38\uC7A5\uC740 \uAD6C\uBD84\uC790\uB85C \uB098\uB258\uC5B4 \uAC01\uAC01\uC758 \uD56D\uBAA9\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';`, copyText: `import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(InfiniteScrollKoJson_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';

function Example() {
  return <InfiniteScrollBlogPosts />;
}

export default Example;`, copyText: `import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';

function Example() {
  return <InfiniteScrollBlogPosts />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "InfiniteScrollBlogPosts" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBCC4\uB3C4\uC758 props\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA70, \uB0B4\uBD80\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uD45C\uC2DC\uD558\uB294 \uAE30\uB2A5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { useState, useEffect } from "react";
import InfiniteScrollBasic from "./InfiniteScrollBasic";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

const InfiniteScrollBlogPosts = () => {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://koreanjson.com/posts/1");
        const data: BlogPost = await response.json();

        const titleParts = data.title.split(".");
        const contentParts = data.content.split(".");

        const displayText = [...titleParts, ...contentParts];
        setContent(displayText);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <InfiniteScrollBasic content={content} />
    </div>
  );
};

export default InfiniteScrollBlogPosts;`, copyText: `import { useState, useEffect } from "react";
import InfiniteScrollBasic from "./InfiniteScrollBasic";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

const InfiniteScrollBlogPosts = () => {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://koreanjson.com/posts/1");
        const data: BlogPost = await response.json();

        const titleParts = data.title.split(".");
        const contentParts = data.content.split(".");

        const displayText = [...titleParts, ...contentParts];
        setContent(displayText);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <InfiniteScrollBasic content={content} />
    </div>
  );
};

export default InfiniteScrollBlogPosts;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = InfiniteScrollDocs;
