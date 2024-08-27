"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Select from "@components/Select/Select";

const SelectDocs: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500); // 0.5초 후에 상태를 초기화
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">Select</h1>
      <p>
        <code>Select</code> 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수
        있도록 설계된 드롭다운 메뉴입니다. 색상과 기본 선택 옵션을 조정하여
        다양한 스타일을 적용할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import Select from '@components/Select';`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import Select from '@components/Select';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          defaultValue="Select an option"
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      defaultValue="Select an option"
    />
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      defaultValue="Select an option"
    />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Color of the Select</h2>
      <p>
        <code>Select</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본 색상은{" "}
        <code>gray</code>입니다:
      </p>
      <ul>
        <li>
          <code>red</code>: 빨간색 테두리
        </li>
        <li>
          <code>blue</code>: 파란색 테두리
        </li>
        <li>
          <code>green</code>: 초록색 테두리
        </li>
        <li>
          <code>gray</code>: 회색 테두리 (기본값)
        </li>
      </ul>
      <div className="mb-5 flex items-center gap-4">
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          color="red"
          defaultValue="Select an option"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          color="blue"
          defaultValue="Select an option"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          color="green"
          defaultValue="Select an option"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          color="gray"
          defaultValue="Select an option"
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import Select from '@components/Select';

function Example() {
  return (
    <>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="red"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="blue"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="green"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="gray"
        defaultValue="Select an option"
      />
    </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import Select from '@components/Select';

function Example() {
  return (
    <>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="red"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="blue"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="green"
        defaultValue="Select an option"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="gray"
        defaultValue="Select an option"
      />
    </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>Select</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>option</code>
            </td>
            <td>드롭다운에서 선택할 수 있는 옵션 목록을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>드롭다운의 테두리 색상을 설정합니다.</td>
            <td>
              <code>"red" | "blue" | "green" | "gray"</code>
            </td>
            <td>
              <code>"gray"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>defaultValue</code>
            </td>
            <td>기본적으로 표시될 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="blue"
        defaultValue="Select an option"
      />
    </div>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="blue"
        defaultValue="Select an option"
      />
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SelectDocs;
