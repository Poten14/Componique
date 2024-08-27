"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Input1 from "@components/Input/Input";
import SearchInput from "@components/Input/SearchInput";
import SearchInput2 from "@components/Input/SearchInput2";
import SearchInput3 from "@components/Input/SearchInput3";
import NumInput from "@components/Input/NumInput";
import CurrencyInput from "@components/Input/CurrencyInput";
import DecimalInput from "@components/Input/DecimalInput";
import PinInput from "@components/Input/PinInput";

const Input: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose mb-40 max-w-[1000px] text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">Input</h1>
      <p>
        <code>Input</code> 컴포넌트는 사용자 입력을 처리하기 위해 사용되는 기본
        UI 요소입니다. 크기와 변형을 조정하여 다양한 스타일을 적용할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import { Input } from '@components/Input';`}
          onCopy={() => handleCopy(1)}
        >
          <button className="copyButton">
            {copied[1] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { Input } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Input1 placeholder="Basic usage" />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Input } from '@components/Input';

function Example() {
  return (
    <Input placeholder="Basic usage" />
  );
}

export default Example;`}
          onCopy={() => handleCopy(2)}
        >
          <button className="copyButton">
            {copied[2] ? "copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Input } from '@components/Input';

function Example() {
  return (
    <Input placeholder="Basic usage" />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Size of the Input</h2>
      <p>
        <code>Input</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
        <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>xs</code>: 아주 작은 크기
        </li>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기 (기본값)
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
        <li>
          <code>xl</code>: 아주 큰 크기
        </li>
      </ul>
      <div className="space-y-4">
        <Input1 placeholder="extra small size" size="xs" />
        <Input1 placeholder="small size" size="small" />
        <Input1 placeholder="medium size" size="medium" />
        <Input1 placeholder="large size" size="large" />
        <Input1 placeholder="extra large size" size="xl" />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Input } from '@components/Input';

function Example() {
  return (
    <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="medium size" size="medium" />
      <Input placeholder="large size" size="large" />
      <Input placeholder="extra large size" size="xl" />
    </>
  );
}
export default Example;`}
          onCopy={() => handleCopy(3)}
        >
          <button className="copyButton">
            {copied[3] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Input } from '@components/Input';

function Example() {
  return (
    <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="medium size" size="medium" />
      <Input placeholder="large size" size="large" />
      <Input placeholder="extra large size" size="xl" />
    </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>Input</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>size</code>
            </td>
            <td>Input의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>Input의 변형을 설정합니다.</td>
            <td>
              <code>"outlined" | "filled"</code>
            </td>
            <td>
              <code>"outlined"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>Input에 표시될 플레이스홀더 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>Input의 값입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>값이 변경될 때 호출되는 핸들러입니다.</td>
            <td>
              <code>(e: React.ChangeEvent&lt;HTMLInputElement&gt;)</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import { Input } from '@components/Input';

function Example() {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="outlined" variant="outlined" />
    </div>
  );
}

export default Example;`}
          onCopy={() => handleCopy(4)}
        >
          <button className="copyButton">
            {copied[4] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Input } from '@components/Input';

function Example() {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Input placeholder="small size" size="small" />
      <Input placeholder="outlined" variant="outlined" />
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">SearchInput</h1>
      <p>
        <code>SearchInput</code> 컴포넌트는 사용자가 검색어를 입력할 수 있도록
        해주는 기본적인 UI 요소입니다. 활성화 여부에 따라 버튼과 입력 필드가
        동적으로 변합니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput from '@components/SearchInput/SearchInput';`}
          onCopy={() => handleCopy(5)}
        >
          <button className="copyButton">
            {copied[5] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { SearchInput } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <SearchInput placeholder="Search..." />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput placeholder="Search..." />
  );
}

export default Example;`}
          onCopy={() => handleCopy(6)}
        >
          <button className="copyButton">
            {copied[6] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput placeholder="Search..." />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">
        Changing the Active and Inactive Colors
      </h2>
      <p>
        <code>SearchInput</code> 컴포넌트는 활성화 및 비활성화 상태에 따른
        색상을 커스터마이즈할 수 있습니다. 예제는 다음과 같습니다:
      </p>
      <div style={{ marginBottom: "20px" }}>
        <SearchInput activeColor="bg-Primary" inactiveColor="bg-gray-400" />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput activeColor="bg-Primary" inactiveColor="bg-gray-400" />
  );
}

export default Example;`}
          onCopy={() => handleCopy(7)}
        >
          <button className="copyButton">
            {copied[7] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput activeColor="bg-Primary" inactiveColor="bg-gray-400" />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Width of the Input</h2>
      <p>
        <code>SearchInput</code> 컴포넌트의 너비는 동적으로 조정 가능합니다.
        기본 너비는 <code>w-80</code>입니다.
      </p>
      <div style={{ marginBottom: "20px" }}>
        <SearchInput width="w-96" placeholder="Custom width..." />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput width="w-96" placeholder="Custom width..." />
  );
}

export default Example;`}
          onCopy={() => handleCopy(8)}
        >
          <button className="copyButton">
            {copied[8] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  return (
    <SearchInput width="w-96" placeholder="Custom width..." />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>SearchInput</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>placeholder</code>
            </td>
            <td>검색 입력 필드에 표시될 플레이스홀더 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Search..."</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>activeColor</code>
            </td>
            <td>활성화된 상태에서 버튼의 색상을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"bg-Basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>inactiveColor</code>
            </td>
            <td>비활성화된 상태에서 버튼의 색상을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"bg-gray-300"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>검색 입력 필드의 너비를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"w-80"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onSearch</code>
            </td>
            <td>
              사용자가 검색어를 입력하고 확인을 클릭했을 때 호출되는 함수입니다.
            </td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  const handleSearch = (value: string) => {
    console.log('Searched:', value);
  };

  return (
    <div>
      <SearchInput placeholder="Search something..." onSearch={handleSearch} />
      <SearchInput activeColor="bg-Primary" inactiveColor="bg-gray-400" />
      <SearchInput width="w-96" placeholder="Custom width..." />
    </div>
  );
}

export default Example;`}
          onCopy={() => handleCopy(9)}
        >
          <button className="copyButton">
            {copied[9] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput from '@components/SearchInput/SearchInput';

function Example() {
  const handleSearch = (value: string) => {
    console.log('Searched:', value);
  };

  return (
    <div>
      <SearchInput placeholder="Search something..." onSearch={handleSearch} />
      <SearchInput activeColor="bg-Primary" inactiveColor="bg-gray-400" />
      <SearchInput width="w-96" placeholder="Custom width..." />
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">SearchInput2</h1>
      <p>
        <code>SearchInput2</code> 컴포넌트는 검색 입력 필드가 포커스될 때 크기가
        동적으로 확장되는 기능을 제공합니다. 크기와 스타일을 조정하여 다양한
        스타일을 적용할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput2 from '@components/SearchInput2/SearchInput2';`}
          onCopy={() => handleCopy(10)}
        >
          <button className="copyButton">
            {copied[10] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { SearchInput2 } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="mb-5">
        <SearchInput2 placeholder="Search..." />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <SearchInput2 placeholder="Search..." />
  );
}

export default Example;`}
          onCopy={() => handleCopy(11)}
        >
          <button className="copyButton">
            {copied[11] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <SearchInput2 placeholder="Search..." />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Size of the Input</h2>
      <p>
        <code>SearchInput2</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
        크기는 <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기 (기본값)
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
      </ul>
      <div className="m-4 space-y-4">
        <SearchInput2 size="small" placeholder="Search..." />
        <SearchInput2 size="medium" placeholder="Search..." />
        <SearchInput2 size="large" placeholder="Search..." />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <>
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </>
  );
}

export default Example;`}
          onCopy={() => handleCopy(12)}
        >
          <button className="copyButton">
            {copied[12] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  return (
    <>
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </>
  );
}
export default Example;`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>SearchInput2</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>size</code>
            </td>
            <td>Input의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>검색 입력 필드에 표시될 플레이스홀더 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Search..."</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>Input의 값입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>값이 변경될 때 호출되는 핸들러입니다.</td>
            <td>
              <code>(e: React.ChangeEvent&lt;HTMLInputElement&gt;)</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchInput2
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </div>
  );
}

export default Example;`}
          onCopy={() => handleCopy(13)}
        >
          <button className="copyButton">
            {copied[13] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput2 from '@components/SearchInput2/SearchInput2';

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchInput2
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchInput2 placeholder="small size" size="small" />
      <SearchInput2 placeholder="medium size" size="medium" />
      <SearchInput2 placeholder="large size" size="large" />
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <h1 className="mt-40 text-[#2D3748]">SearchInput3</h1>
      <p>
        <code>SearchInput3</code> 컴포넌트는 검색 입력 필드와 버튼을 함께
        제공하는 UI 요소입니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput3 from '@components/SearchInput3/SearchInput3';`}
          onCopy={() => handleCopy(14)}
        >
          <button className="copyButton">
            {copied[14] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { SearchInput3 } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <div style={{ marginBottom: "20px" }}>
        <SearchInput3 placeholder="Search..." />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`<SearchInput3 placeholder="Search..." />`}
          onCopy={() => handleCopy(15)}
        >
          <button className="copyButton">
            {copied[15] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`<SearchInput3 placeholder="Search..." />`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>크기(size)와 색상(color)를 조절할 수 있습니다.</p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>
              <code>
                "Basic" | "Primary" | "Secondary" | "Success" | "Warning" |
                "Danger"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="ml-4 space-y-3">
        <SearchInput3
          size="small"
          color="Basic"
          placeholder="Small Search..."
        />
        <SearchInput3
          size="medium"
          color="Primary"
          placeholder="Medium Search..."
        />
        <SearchInput3
          size="large"
          color="Danger"
          placeholder="Large Search..."
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput3 from '@components/SearchInput3/SearchInput3';

function Example() {
  return (
    <div>
      <SearchInput3 size="small" color="Basic" placeholder="Small Search..." />
      <SearchInput3 size="medium" color="Primary" placeholder="Medium Search..." />
      <SearchInput3 size="large" color="Danger" placeholder="Large Search..." />
    </div>
  );
}

export default Example;`}
          onCopy={() => handleCopy(16)}
        >
          <button className="copyButton">
            {copied[16] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import SearchInput3 from '@components/SearchInput3/SearchInput3';

function Example() {
  return (
    <div>
      <SearchInput3 size="small" color="Basic" placeholder="Small Search..." />
      <SearchInput3 size="medium" color="Primary" placeholder="Medium Search..." />
      <SearchInput3 size="large" color="Danger" placeholder="Large Search..." />
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">NumInput</h1>
      <p>
        <code>NumInput</code> 컴포넌트는 숫자를 입력하거나 증감할 수 있는
        인터페이스를 제공합니다. 버튼을 사용해 숫자를 증가시키거나 감소시킬 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import SearchInput3 from '@components/SearchInput3/SearchInput3';`}
          onCopy={() => handleCopy(17)}
        >
          <button className="copyButton">
            {copied[17] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import {NumInput} from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <NumInput
          size="medium"
          color="Basic"
          onValueChange={(value) => console.log("New value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import NumInput from '@components/Input/NumInput';

function Example() {
  return (
    <NumInput/>
  );
}

export default Example;`}
          onCopy={() => handleCopy(18)}
        >
          <button className="copyButton">
            {copied[18] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import NumInput from '@components/Input/NumInput';

function Example() {
  return (
    <NumInput />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>NumInput</code> 컴포넌트는 다음과 같은 props를 가집니다:
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
              <code>size</code>
            </td>
            <td>입력 필드 및 버튼의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>버튼의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "Secondary" | "Success" | "Warning" |
                "Gray" | "Danger"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>입력 필드의 초기 값입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"0"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onValueChange</code>
            </td>
            <td>값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>컴포넌트의 너비를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"200px"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div style={{ marginBottom: "20px" }}>
        <NumInput
          size="large"
          color="Basic"
          value="5"
          width="250px"
          onValueChange={(value) => console.log("Updated value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import NumInput from '@components/Input/NumInput';

function FullExample() {
  return (
    <NumInput
    size="large"
    color="Basic"
    value="5"
    width="250px"
    onValueChange={(value) => console.log("Updated value:", value)}
  />
  );
}

export default FullExample;`}
          onCopy={() => handleCopy(19)}
        >
          <button className="copyButton">
            {copied[19] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import NumInput from '@components/Input/NumInput';

function FullExample() {
  return (
    <NumInput
    size="large"
    color="Basic"
    value="5"
    width="250px"
    onValueChange={(value) => console.log("Updated value:", value)}
  />
  );
}

export default FullExample;
    `}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">CurrencyInput</h1>
      <p>
        <code>CurrencyInput</code> 컴포넌트는 금액을 입력하거나 증감할 수 있는
        인터페이스를 제공합니다. 사용자가 입력 필드를 통해 금액을 입력하거나,
        증감 버튼을 통해 금액을 조정할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import CurrencyInput from '@components/Input/CurrencyInput';`}
          onCopy={() => handleCopy(20)}
        >
          <button className="copyButton">
            {copied[20] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { CurrencyInput } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <div style={{ marginBottom: "20px" }}>
        <CurrencyInput
          size="medium"
          color="Primary"
          value="$10.00"
          onValueChange={(value) => console.log("New value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`<CurrencyInput
  size="medium"
  color="Primary"
  value="$10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`}
          onCopy={() => handleCopy(21)}
        >
          <button className="copyButton">
            {copied[21] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
<CurrencyInput
  size="medium"
  color="Primary"
  value="$10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>
    `}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>CurrencyInput</code> 컴포넌트는 다음과 같은 props를 가집니다:
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
              <code>size</code>
            </td>
            <td>입력 필드 및 버튼의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>버튼의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "Secondary" | "Success" | "Warning" |
                "Danger"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>입력 필드의 초기 금액 값입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"$0.00"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onValueChange</code>
            </td>
            <td>값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>컴포넌트의 너비를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"200px"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div style={{ marginBottom: "20px" }}>
        <CurrencyInput
          size="large"
          color="Basic"
          value="$50.00"
          width="300px"
          onValueChange={(value) => console.log("Updated value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import CurrencyInput from '@components/Input/CurrencyInput';

function FullExample() {
  return (
    <CurrencyInput
      size="large"
      color="Basic"
      value="$50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`}
          onCopy={() => handleCopy(22)}
        >
          <button className="copyButton">
            {copied[22] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import CurrencyInput from '@components/Input/CurrencyInput';

function FullExample() {
  return (
    <CurrencyInput
      size="large"
      color="Basic"
      value="$50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;
    `}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">DecimalInput</h1>
      <p>
        <code>DecimalInput</code> 컴포넌트는 사용자가 소수점이 포함된 숫자를
        입력하거나 증감할 수 있도록 도와주는 인터페이스를 제공합니다. 사용자는
        입력 필드를 통해 값을 입력하거나, 증감 버튼을 통해 값을 조정할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import DecimalInput from '@components/Input/DecimalInput';`}
          onCopy={() => handleCopy(23)}
        >
          <button className="copyButton">
            {copied[23] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { DecimalInput } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <div style={{ marginBottom: "20px" }}>
        <DecimalInput
          size="medium"
          color="Primary"
          onValueChange={(value) => console.log("New value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`<DecimalInput
  size="medium"
  color="Primary"
  value="10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>`}
          onCopy={() => handleCopy(24)}
        >
          <button className="copyButton">
            {copied[24] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
<DecimalInput
  size="medium"
  color="Primary"
  value="10.00"
  onValueChange={(value) => console.log("New value:", value)}
/>
    `}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>DecimalInput</code> 컴포넌트는 다음과 같은 props를 가집니다:
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
              <code>size</code>
            </td>
            <td>입력 필드 및 버튼의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>버튼의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "Secondary" | "Success" | "Warning" |
                "Gray" | "Danger"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>입력 필드의 초기 값입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"0.00"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onValueChange</code>
            </td>
            <td>값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>컴포넌트의 너비를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"200px"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div style={{ marginBottom: "20px" }}>
        <DecimalInput
          size="large"
          color="Basic"
          value="50.00"
          width="300px"
          onValueChange={(value) => console.log("Updated value:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import DecimalInput from '@components/Input/DecimalInput';

function FullExample() {
  return (
    <DecimalInput
      size="large"
      color="Basic"
      value="50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;`}
          onCopy={() => handleCopy(25)}
        >
          <button className="copyButton">
            {copied[25] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import DecimalInput from '@components/Input/DecimalInput';

function FullExample() {
  return (
    <DecimalInput
      size="large"
      color="Basic"
      value="50.00"
      width="300px"
      onValueChange={(value) => console.log("Updated value:", value)}
    />
  );
}

export default FullExample;
    `}
        </SyntaxHighlighter>
      </div>

      <h1 className="mt-40 text-[#2D3748]">PinInput</h1>
      <p>
        <code>PinInput</code> 컴포넌트는 사용자에게 PIN 코드를 입력받기 위한 UI
        요소입니다. 사용자는 각 입력 칸에 개별적으로 숫자를 입력할 수 있으며,
        숫자가 입력되면 자동으로 다음 칸으로 포커스가 이동합니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import PinInput from '@components/Input/PinInput';`}
          onCopy={() => handleCopy(26)}
        >
          <button className="copyButton">
            {copied[26] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { PinInput } from '@componique/react';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <PinInput length={4} />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={4} />
  );
}

export default Example;`}
          onCopy={() => handleCopy(27)}
        >
          <button className="copyButton">
            {copied[27] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={4} />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Customizing the PinInput</h2>
      <p>
        <code>PinInput</code> 컴포넌트는 다양한 옵션을 통해 커스터마이징 할 수
        있습니다. 예를 들어, 필드의 개수, 변형 스타일, 비활성화 상태 등을 설정할
        수 있습니다:
      </p>
      <div style={{ marginBottom: "10px" }}>
        <PinInput length={6} variant="filled" disabled={true} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <PinInput customCharacter="🥳" />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={6} variant="filled" disabled={true} />
    <PinInput customCharacter="🥳" />
  );
}

export default Example;`}
          onCopy={() => handleCopy(28)}
        >
          <button className="copyButton">
            {copied[28] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import PinInput from '@components/Input/PinInput';

function Example() {
  return (
    <PinInput length={6} variant="filled" disabled={true} />
    <PinInput customCharacter="🥳" />
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>PinInput</code> 컴포넌트는 다음과 같은 props를 가집니다:
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
              <code>length</code>
            </td>
            <td>PIN 입력 칸의 개수를 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>6</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>입력 필드를 비활성화할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>formatter</code>
            </td>
            <td>입력된 값을 형식화하기 위한 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>입력 필드의 스타일 변형을 설정합니다.</td>
            <td>
              <code>"filled" | "outline"</code>
            </td>
            <td>
              <code>"outline"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>customCharacter</code>
            </td>
            <td>입력 대신 표시할 사용자 지정 문자를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div style={{ marginBottom: "20px" }}>
        <PinInput
          length={4}
          variant="filled"
          formatter={(value) => value.toUpperCase()}
          onChange={(value) => console.log("Updated PIN:", value)}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import PinInput from '@components/Input/PinInput';

function FullExample() {
  return (
    <PinInput
      length={4}
      variant="filled"
      formatter={(value) => value.toUpperCase()}
      onChange={(value) => console.log("Updated PIN:", value)}
    />
  );
}

export default FullExample;`}
          onCopy={() => handleCopy(29)}
        >
          <button className="copyButton">
            {copied[29] ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import PinInput from '@components/Input/PinInput';

function FullExample() {
  return (
    <PinInput
      length={4}
      variant="filled"
      formatter={(value) => value.toUpperCase()}
      onChange={(value) => console.log("Updated PIN:", value)}
    />
  );
}

export default FullExample;
`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Input;
