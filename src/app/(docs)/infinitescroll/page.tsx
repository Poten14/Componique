"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import InfiniteScrollBasic from "@components/InfiniteScroll/InfiniteScrollBasic";
import InfiniteScrollImage from "@components/InfiniteScroll/InfiniteScrollImage";
import InfiniteScrollKoJson from "@components/InfiniteScroll/InfiniteScrollKoJson";
import CodeBox from "@components/CodeBox";

const InfiniteScrollDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const handleCopy = (index: number) => {
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

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* infinitescroll1 */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">
          1. InfiniteScrollBasic
        </h1>
        <p>
          <code>InfiniteScrollBasic</code> 컴포넌트는 사용자가 페이지를 스크롤할
          때마다 새로운 항목을 로드하는 기본적인 인피니티 스크롤을 제공합니다.
          아래는 이 컴포넌트를 사용하는 방법에 대한 설명입니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox
          code={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';`}
          copyText={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <InfiniteScrollBasic content={content} />
        </div>
        <CodeBox
          code={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function Example() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    "The third sentence shows up as you scroll down.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default Example;`}
          copyText={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function Example() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    "The third sentence shows up as you scroll down.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
        <p>
          <code>InfiniteScrollBasic</code> 컴포넌트는 아래와 같은 Props를
          가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>content</code>
              </td>
              <td>스크롤 시 로드할 항목들의 리스트입니다.</td>
              <td>
                <code>string[]</code>
              </td>
              <td>
                <code>[]</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
        <CodeBox
          code={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function FullExample() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default FullExample;`}
          copyText={`import InfiniteScrollBasic from '@components/InfiniteScroll/InfiniteScrollBasic';

function FullExample() {
  const content = [
    "This is the first sentence of the infinite scroll example.",
    "Here is the second sentence that will appear.",
    // ... (더 많은 문장들)
  ];

  return <InfiniteScrollBasic content={content} />;
}

export default FullExample;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* infinitescroll2 */}
      <div className="">
        <h1 className="text-[#2D3748] dark:text-white">
          2. InfiniteScrollImage
        </h1>
        <p>
          <code>InfiniteScrollImage</code> 컴포넌트는 사용자가 페이지를 스크롤할
          때마다 새로운 이미지를 로드하는 인피니티 스크롤을 제공합니다. 이
          컴포넌트는 이미지 URL 배열을 받아 이미지를 무한히 로드할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox
          code={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';`}
          copyText={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <InfiniteScrollImage images={images} />
        </div>
        <CodeBox
          code={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

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

export default Example;`}
          copyText={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

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

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
        <p>
          <code>InfiniteScrollImage</code> 컴포넌트는 아래와 같은 Props를
          가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>images</code>
              </td>
              <td>스크롤 시 로드할 이미지들의 URL 배열입니다.</td>
              <td>
                <code>string[]</code>
              </td>
              <td>
                <code>[]</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">2.4. Full Example</h2>
        <CodeBox
          code={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

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

export default FullExample;`}
          copyText={`import InfiniteScrollImage from '@components/InfiniteScroll/InfiniteScrollImage';

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

export default FullExample;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* infinitescroll3 */}
      <div className="">
        <h1 className="text-[#2D3748] dark:text-white">
          3. InfiniteScrollBlogPosts
        </h1>
        <p>
          <code>InfiniteScrollBlogPosts</code> 컴포넌트는 외부 API에서 블로그
          포스트 데이터를 가져와 무한 스크롤을 통해 표시하는 예제입니다. 이
          컴포넌트는 <code>InfiniteScrollBasic</code>을 사용하여 데이터를
          스크롤하면서 표시합니다.
        </p>
        <p>
          데이터는{" "}
          <a
            href="https://koreanjson.com/posts/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            koreanjson.com
          </a>{" "}
          에서 제공되는 샘플 블로그 포스트 데이터를 사용하며, 제목과 본문을 무한
          스크롤로 표시합니다. 각 포스트의 문장은 구분자로 나뉘어 각각의
          항목으로 표시됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox
          code={`import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';`}
          copyText={`import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <InfiniteScrollKoJson />
        </div>
        <CodeBox
          code={`import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';

function Example() {
  return <InfiniteScrollBlogPosts />;
}

export default Example;`}
          copyText={`import InfiniteScrollBlogPosts from '@components/InfiniteScroll/InfiniteScrollBlogPosts';

function Example() {
  return <InfiniteScrollBlogPosts />;
}

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.3. Props</h2>
        <p>
          <code>InfiniteScrollBlogPosts</code> 컴포넌트는 별도의 props를
          사용하지 않으며, 내부에서 데이터를 가져와 표시하는 기능을 수행합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.4. Full Example</h2>
        <CodeBox
          code={`import { useState, useEffect } from "react";
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

export default InfiniteScrollBlogPosts;`}
          copyText={`import { useState, useEffect } from "react";
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

export default InfiniteScrollBlogPosts;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default InfiniteScrollDocs;
