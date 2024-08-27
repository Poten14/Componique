"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DropDownBasic from "@components/DropDown/DropDownBasic";
import DropDownMutilSelect from "@components/DropDown/DropDownMutilSelect";
import DropDownGrouped from "@components/DropDown/DropDownGrouped";

const DropDownComponent: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      {/* dropdown1 */}
      <div>
        <h1 className="text-[#2D3748]">DropDownBasic</h1>
        <p>
          <code>DropDownBasic</code> 컴포넌트는 사용자가 옵션을 선택할 수 있는
          간단한 드롭다운 메뉴를 제공합니다. 여러 가지 스타일의 드롭다운을
          제공하며, 선택된 값은 부모 컴포넌트로 전달될 수 있습니다.
        </p>
        <h2 className="text-[#2D3748]">Import</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import DropDownBasic from '@components/DropDown/DropDownBasic';`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`import DropDownBasic from '@components/DropDown/DropDownBasic';`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <DropDownBasic
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select an Option"
            onSelect={(value) => console.log("Selected:", value)}
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;
`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">Props</h2>
        <p>
          <code>DropDownBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <td>드롭다운에서 선택 가능한 옵션들의 배열입니다.</td>
              <td>
                <code>string[]</code>
              </td>
              <td>
                <code>[]</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>placeholder</code>
              </td>
              <td>선택되지 않은 경우 표시되는 플레이스홀더 텍스트입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"Select Option"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onSelect</code>
              </td>
              <td>옵션이 선택되었을 때 호출되는 콜백 함수입니다.</td>
              <td>
                <code>(value: string) =&gt; void</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">Full Example</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;
`}
          </SyntaxHighlighter>
        </div>
      </div>
      <br />
      <br />
      {/* dropdown2 */}
      <div>
        <div>
          <h1 className="text-[#2D3748]">DropDownMutilSelect</h1>
          <p>
            <code>DropDownMutilSelect</code> 컴포넌트는 사용자가 여러 옵션을
            선택할 수 있는 멀티 셀렉트 드롭다운 메뉴를 제공합니다. 선택된 값들은
            컴포넌트의 부모 컴포넌트로 전달됩니다.
          </p>
          <h2 className="text-[#2D3748]">Import</h2>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Usage</h2>
          <p>기본 사용 예제는 아래와 같습니다:</p>
          <div style={{ marginBottom: "20px" }}>
            <DropDownMutilSelect
              option={["Option 1", "Option 2", "Option 3"]}
              defaultOption="Select Options"
              onSelect={(value) => console.log("Selected:", value)}
            />
          </div>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';

function Example() {
  return (
    <DropDownMutilSelect
      option={["Option 1", "Option 2", "Option 3"]}
      defaultOption="Select Options"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';

function Example() {
  return (
    <DropDownMutilSelect
      option={["Option 1", "Option 2", "Option 3"]}
      defaultOption="Select Options"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;
`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Props</h2>
          <p>
            <code>DropDownMutilSelect</code> 컴포넌트는 아래와 같은 Props를
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
                  <code>option</code>
                </td>
                <td>드롭다운에서 선택 가능한 옵션들의 배열입니다.</td>
                <td>
                  <code>string[]</code>
                </td>
                <td>
                  <code>[]</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>defaultOption</code>
                </td>
                <td>선택되지 않은 경우 표시되는 플레이스홀더 텍스트입니다.</td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>"Select Option"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onSelect</code>
                </td>
                <td>옵션이 선택되었을 때 호출되는 콜백 함수입니다.</td>
                <td>
                  <code>(value: string[]) =&gt; void</code>
                </td>
                <td>
                  <code>undefined</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-[#2D3748]">Full Example</h2>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';

function FullExample() {
  return (
    <div>
      <DropDownMutilSelect
        option={["Option 1", "Option 2", "Option 3"]}
        defaultOption="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownMutilSelect
        option={["Option A", "Option B", "Option C"]}
        defaultOption="Choose Options"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import DropDownMutilSelect from '@components/DropDown/DropDownMutilSelect';

function FullExample() {
  return (
    <div>
      <DropDownMutilSelect
        option={["Option 1", "Option 2", "Option 3"]}
        defaultOption="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownMutilSelect
        option={["Option A", "Option B", "Option C"]}
        defaultOption="Choose Options"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;
`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* dropdown3 */}
      <div>
        <div>
          <h1 className="text-[#2D3748]">DropDownGrouped</h1>
          <p>
            <code>DropDownGrouped</code> 컴포넌트는 그룹화된 옵션을 선택할 수
            있는 드롭다운 메뉴를 제공합니다. 사용자는 각 그룹에서 옵션을 선택할
            수 있으며, 선택된 값은 부모 컴포넌트로 전달될 수 있습니다.
          </p>
          <h2 className="text-[#2D3748]">Import</h2>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`import DropDownGrouped from '@components/DropDown/DropDownGrouped';`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Usage</h2>
          <p>기본 사용 예제는 아래와 같습니다:</p>
          <div style={{ marginBottom: "20px" }}>
            <DropDownGrouped
              options={[
                {
                  groupName: "Fruits",
                  items: ["Apple", "Banana", "Orange", "Grapes"],
                },
                {
                  groupName: "Vegetables",
                  items: ["Carrot", "Broccoli", "Spinach", "Potato"],
                },
              ]}
              onSelect={(value) => console.log("Selected:", value)}
            />
          </div>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;
`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Props</h2>
          <p>
            <code>DropDownGrouped</code> 컴포넌트는 아래와 같은 Props를
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
                  <code>options</code>
                </td>
                <td>각 그룹의 이름과 아이템을 포함한 배열입니다.</td>
                <td>
                  <code>{`{ groupName: string; items: string[] }[]`}</code>
                </td>
                <td>
                  <code>[]</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>defaultOption</code>
                </td>
                <td>선택되지 않은 경우 표시되는 플레이스홀더 텍스트입니다.</td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>"Select Option"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onSelect</code>
                </td>
                <td>옵션이 선택되었을 때 호출되는 콜백 함수입니다.</td>
                <td>
                  <code>(value: string) =&gt; void</code>
                </td>
                <td>
                  <code>undefined</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-[#2D3748]">Full Example</h2>
          <div className="relative">
            <CopyToClipboard
              text={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;
`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownComponent;
