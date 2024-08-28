"use client";
import React, { useState } from "react";
import Button from "@components/Button/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DocsExample = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">제목</h1>
      {/* 카피버튼 시작 */}
      <div className="relative">
        <CopyToClipboard text={`code`} onCopy={handleCopy}>
          <Button
            icon={copied ? "icon-check" : undefined}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">{`code`}</SyntaxHighlighter>
      </div>
      {/* 카피버튼 끝 */}
    </div> //최 상단 prose의 끝나는 지점
  );
};
export default DocsExample;
