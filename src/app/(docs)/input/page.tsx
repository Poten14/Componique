import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Input1 from "@components/Input/Input";

const Input: React.FC = () => {
  return (
    <div className="prose p-5 text-[#2D3748]">
      <h1 className="text-color-gray">Input</h1>
      <p>
        <code>Input</code> 컴포넌트는 사용자 입력을 처리하기 위해 사용되는 기본
        UI 요소입니다. 크기와 변형을 조정하여 다양한 스타일을 적용할 수
        있습니다.
      </p>

      <h2>Import</h2>
      <SyntaxHighlighter language="tsx">
        {`import { Input } from '@components/Input';`}
      </SyntaxHighlighter>

      <h2>Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Input1 placeholder="Basic usage" />
      </div>
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

      <h2>Changing the size of the Input</h2>
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
      <div style={{ marginBottom: "20px" }}>
        <Input1 placeholder="extra small size" size="xs" />
        <Input1 placeholder="small size" size="small" />
        <Input1 placeholder="medium size" size="medium" />
        <Input1 placeholder="large size" size="large" />
        <Input1 placeholder="extra large size" size="xl" />
      </div>
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

      <h2>Changing the appearance of the Input</h2>
      <p>
        <code>Input</code> 컴포넌트는 여러 가지 변형이 가능합니다:
      </p>
      <ul>
        <li>
          <code>outlined</code>: 기본적으로 테두리가 있는 스타일
        </li>
        <li>
          <code>filled</code>: 내부가 채워진 스타일
        </li>
      </ul>
      <div style={{ marginBottom: "20px" }}>
        <Input1 placeholder="outlined" variant="outlined" />
        <Input1 placeholder="filled" variant="filled" />
      </div>
      <SyntaxHighlighter language="tsx">
        {`
import { Input } from '@components/Input';

function Example() {
  return (
    <>
      <Input placeholder="outlined" variant="outlined" />
      <Input placeholder="filled" variant="filled" />
    </>
  );
}

export default Example;
`}
      </SyntaxHighlighter>

      <h2>Props</h2>
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

      <h2>Full Example</h2>
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
  );
};

export default Input;
