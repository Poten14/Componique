"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import RadioButtonBasic from "@components/RadioButton/RadioButtonBasic";
import RadioButtonDescription from "@components/RadioButton/RadioButtonDescription";
import RadioButtonInline from "@components/RadioButton/RadioButtonInline";
const RadioButton: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="prose max-w-[1000px] p-5">
      <div className="text-[#6D6D6D]">
        {/* RadioButton1 */}
        <h1 className="text-[#2D3748]">RadioButtonBasic</h1>
        <p>
          <code>RadioButtonBasic</code> 컴포넌트는 사용자가 선택할 수 있는
          라디오 버튼을 제공합니다. 다양한 크기와 색상을 지정할 수 있으며,
          비활성화 옵션도 지원합니다.
        </p>
        <h2 className="text-[#2D3748]">Import</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';`}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <RadioButtonBasic
            name="basicOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Option 1"
            size="small"
            color="sky"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Option 2"
            size="small"
            color="grey"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
            label="Option 3"
            size="medium"
            color="blue"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={handleChange}
            label="Option 4"
            size="medium"
            color="purple"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option5"
            checked={selectedValue === "option5"}
            onChange={handleChange}
            label="Option 5"
            size="medium"
            color="green"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option6"
            checked={selectedValue === "option6"}
            onChange={handleChange}
            label="Option 6"
            size="large"
            color="yellow"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option7"
            checked={selectedValue === "option7"}
            onChange={handleChange}
            label="Option 7"
            size="large"
            color="red"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <RadioButtonBasic
      name="basicOptions"
      value="option1"
      checked={basicSelectedValue === "option1"}
      onChange={handleBasicChange}
      label="Option 1"
      size="medium"
      color="blue"
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
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <RadioButtonBasic
      name="basicOptions"
      value="option1"
      checked={basicSelectedValue === "option1"}
      onChange={handleBasicChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;
`}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-[#2D3748]">
          Changing the Size of the Radio Button
        </h2>
        <p>
          <code>RadioButtonBasic</code> 컴포넌트는 다양한 크기로 제공됩니다.
          기본 크기는 <code>medium</code>입니다:
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
        <div className="space-y-4">
          <RadioButtonBasic
            name="basicOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Small Option"
            size="small"
            color="sky"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Medium Option"
            size="medium"
            color="blue"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
            label="Large Option"
            size="large"
            color="purple"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
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
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default Example;
`}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-[#2D3748]">
          Changing the Color of the Radio Button
        </h2>
        <p>
          <code>RadioButtonBasic</code> 컴포넌트는 다양한 색상으로 제공됩니다.
          기본 색상은 <code>sky</code>입니다:
        </p>
        <ul>
          <li>
            <code>sky</code>: 하늘색
          </li>
          <li>
            <code>grey</code>: 회색
          </li>
          <li>
            <code>blue</code>: 파란색
          </li>
          <li>
            <code>purple</code>: 보라색
          </li>
          <li>
            <code>green</code>: 녹색
          </li>
          <li>
            <code>yellow</code>: 노란색
          </li>
          <li>
            <code>red</code>: 빨간색
          </li>
        </ul>
        <div className="space-y-4">
          <RadioButtonBasic
            name="basicOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Sky Option"
            size="medium"
            color="sky"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Grey Option"
            size="medium"
            color="grey"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
            label="Blue Option"
            size="medium"
            color="blue"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={handleChange}
            label="Purple Option"
            size="medium"
            color="purple"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option5"
            checked={selectedValue === "option5"}
            onChange={handleChange}
            label="Green Option"
            size="medium"
            color="green"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option6"
            checked={selectedValue === "option6"}
            onChange={handleChange}
            label="Yellow Option"
            size="medium"
            color="yellow"
          />
          <RadioButtonBasic
            name="basicOptions"
            value="option7"
            checked={selectedValue === "option7"}
            onChange={handleChange}
            label="Red Option"
            size="medium"
            color="red"
          />
        </div>
        br
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option4"
        checked={basicSelectedValue === "option4"}
        onChange={handleBasicChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option5"
        checked={basicSelectedValue === "option5"}
        onChange={handleBasicChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option6"
        checked={basicSelectedValue === "option6"}
        onChange={handleBasicChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option7"
        checked={basicSelectedValue === "option7"}
        onChange={handleBasicChange}
        label="Red Option"
        size="medium"
        color="red"
      />
    </>
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
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option4"
        checked={basicSelectedValue === "option4"}
        onChange={handleBasicChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option5"
        checked={basicSelectedValue === "option5"}
        onChange={handleBasicChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option6"
        checked={basicSelectedValue === "option6"}
        onChange={handleBasicChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option7"
        checked={basicSelectedValue === "option7"}
        onChange={handleBasicChange}
        label="Red Option"
        size="medium"
        color="red"
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
          <code>RadioButtonBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>name</code>
              </td>
              <td>라디오 버튼 그룹의 이름입니다.</td>
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
              <td>라디오 버튼의 값입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>checked</code>
              </td>
              <td>라디오 버튼의 선택 상태를 설정합니다.</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onChange</code>
              </td>
              <td>라디오 버튼의 상태가 변경될 때 호출되는 함수입니다.</td>
              <td>
                <code>
                  (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void
                </code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
              </td>
              <td>라디오 버튼을 비활성화 상태로 설정합니다.</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>라디오 버튼의 크기를 설정합니다.</td>
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
              <td>라디오 버튼의 색상을 설정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-[#9AC5E5]"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>라디오 버튼 옆에 표시될 라벨 텍스트입니다.</td>
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
            text={`import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Option 2"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Option 3"
        size="large"
        color="purple"
      />
    </div>
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
import RadioButtonBasic from '@components/RadioButton/RadioButtonBasic';

function Example() {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonBasic
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Option 2"
        size="medium"
        color="blue"
      />
      <RadioButtonBasic
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Option 3"
        size="large"
        color="purple"
      />
    </div>
  );
}

export default Example;
`}
          </SyntaxHighlighter>
        </div>
      </div>

      <br />
      <br />
      {/* RadioButton2 */}
      <div>
        <h1 className="text-[#2D3748]">RadioButtonDescription</h1>
        <p>
          <code>RadioButtonDescription</code> 컴포넌트는 라디오 버튼 옆에 라벨과
          설명을 추가할 수 있는 컴포넌트입니다. 다양한 크기와 색상을 지원하며,
          비활성화 옵션도 설정할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748]">Import</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <RadioButtonDescription
            name="descriptionOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Option 1"
            description="This is a description for option 1."
            size="medium"
            color="blue"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DescriptionExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      description="This is a description for option 1."
      size="medium"
      color="blue"
    />
  );
}

export default DescriptionExample;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DescriptionExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      description="This is a description for option 1."
      size="medium"
      color="blue"
    />
  );
}

export default DescriptionExample;
`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">
          Changing the Size of the Radio Button
        </h2>
        <p>
          <code>RadioButtonDescription</code> 컴포넌트는 다양한 크기로
          제공됩니다. 기본 크기는 <code>medium</code>입니다:
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
        <div className="space-y-4">
          <RadioButtonDescription
            name="descriptionOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Small Option"
            description="This is a description for the small option."
            size="small"
            color="sky"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Medium Option"
            description="This is a description for the medium option."
            size="medium"
            color="blue"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
            label="Large Option"
            description="This is a description for the large option."
            size="large"
            color="purple"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        description="This is a description for the small option."
        size="small"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        description="This is a description for the medium option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        description="This is a description for the large option."
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        description="This is a description for the small option."
        size="small"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        description="This is a description for the medium option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        description="This is a description for the large option."
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;
`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">
          Changing the Color of the Radio Button
        </h2>
        <p>
          <code>RadioButtonDescription</code> 컴포넌트는 다양한 색상으로
          제공됩니다. 기본 색상은 <code>sky</code>입니다:
        </p>
        <ul>
          <li>
            <code>sky</code>: 하늘색
          </li>
          <li>
            <code>grey</code>: 회색
          </li>
          <li>
            <code>blue</code>: 파란색
          </li>
          <li>
            <code>purple</code>: 보라색
          </li>
          <li>
            <code>green</code>: 녹색
          </li>
          <li>
            <code>yellow</code>: 노란색
          </li>
          <li>
            <code>red</code>: 빨간색
          </li>
        </ul>
        <div className="space-y-4">
          <RadioButtonDescription
            name="descriptionOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Sky Option"
            description="This is a sky-colored option."
            size="medium"
            color="sky"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Grey Option"
            description="This is a grey-colored option."
            size="medium"
            color="grey"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
            label="Blue Option"
            description="This is a blue-colored option."
            size="medium"
            color="blue"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={handleChange}
            label="Purple Option"
            description="This is a purple-colored option."
            size="medium"
            color="purple"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option5"
            checked={selectedValue === "option5"}
            onChange={handleChange}
            label="Green Option"
            description="This is a green-colored option."
            size="medium"
            color="green"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option6"
            checked={selectedValue === "option6"}
            onChange={handleChange}
            label="Yellow Option"
            description="This is a yellow-colored option."
            size="medium"
            color="yellow"
          />
          <RadioButtonDescription
            name="descriptionOptions"
            value="option7"
            checked={selectedValue === "option7"}
            onChange={handleChange}
            label="Red Option"
            description="This is a red-colored option."
            size="medium"
            color="red"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        description="This is a sky-colored option."
        size="medium"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        description="This is a grey-colored option."
        size="medium"
        color="grey"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        description="This is a blue-colored option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        description="This is a purple-colored option."
        size="medium"
        color="purple"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        description="This is a green-colored option."
        size="medium"
        color="green"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        description="This is a yellow-colored option."
        size="medium"
        color="yellow"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        description="This is a red-colored option."
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonDescription
        name="descriptionOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        description="This is a sky-colored option."
        size="medium"
        color="sky"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        description="This is a grey-colored option."
        size="medium"
        color="grey"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        description="This is a blue-colored option."
        size="medium"
        color="blue"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        description="This is a purple-colored option."
        size="medium"
        color="purple"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        description="This is a green-colored option."
        size="medium"
        color="green"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        description="This is a yellow-colored option."
        size="medium"
        color="yellow"
      />
      <RadioButtonDescription
        name="descriptionOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        description="This is a red-colored option."
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;
`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">Disabled State</h2>
        <p>
          <code>RadioButtonDescription</code> 컴포넌트는 비활성화된 상태로
          설정할 수 있습니다. 이 상태에서는 사용자 입력을 받을 수 없습니다:
        </p>
        <div className="space-y-4">
          <RadioButtonDescription
            name="descriptionOptions"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Disabled Option"
            description="This option is disabled."
            size="medium"
            color="blue"
            disabled
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DisabledExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Disabled Option"
      description="This option is disabled."
      size="medium"
      color="blue"
      disabled
    />
  );
}

export default DisabledExample;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import RadioButtonDescription from '@components/RadioButton/RadioButtonDescription';

function DisabledExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonDescription
      name="descriptionOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Disabled Option"
      description="This option is disabled."
      size="medium"
      color="blue"
      disabled
    />
  );
}

export default DisabledExample;
`}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-[#2D3748]">Full Example</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
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
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
      />
    </div>
  );
}

export default FullExample;
`}
          </SyntaxHighlighter>
        </div>
        {/* RadioButton3 */}
        <br />
        <br />
        <div className="prose p-5 text-[#6D6D6D]">
          <h1 className="text-[#2D3748]">RadioButtonInline</h1>
          <p>
            <code>RadioButtonInline</code> 컴포넌트는 사용자가 선택할 수 있는
            인라인 스타일의 라디오 버튼을 제공합니다. 다양한 크기와 색상을
            지정할 수 있으며, 비활성화 옵션도 지원합니다.
          </p>
          <h2 className="text-[#2D3748]">Import</h2>
          <div className="relative">
            <CopyToClipboard
              text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Usage</h2>
          <p>기본 사용 예제는 아래와 같습니다:</p>
          <div style={{ marginBottom: "20px" }}>
            <RadioButtonInline
              name="inlineOptions"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleChange}
              label="Option 1"
              size="small"
              color="sky"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleChange}
              label="Option 2"
              size="small"
              color="grey"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleChange}
              label="Option 3"
              size="medium"
              color="blue"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option4"
              checked={selectedValue === "option4"}
              onChange={handleChange}
              label="Option 4"
              size="medium"
              color="purple"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option5"
              checked={selectedValue === "option5"}
              onChange={handleChange}
              label="Option 5"
              size="medium"
              color="green"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option6"
              checked={selectedValue === "option6"}
              onChange={handleChange}
              label="Option 6"
              size="large"
              color="yellow"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option7"
              checked={selectedValue === "option7"}
              onChange={handleChange}
              label="Option 7"
              size="large"
              color="red"
            />
          </div>
          <div className="relative">
            <CopyToClipboard
              text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function Example() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonInline
      name="inlineOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      size="medium"
      color="blue"
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
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function Example() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioButtonInline
      name="inlineOptions"
      value="option1"
      checked={selectedValue === "option1"}
      onChange={handleChange}
      label="Option 1"
      size="medium"
      color="blue"
    />
  );
}

export default Example;
`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">
            Changing the Size of the Radio Button
          </h2>
          <p>
            <code>RadioButtonInline</code> 컴포넌트는 다양한 크기로 제공됩니다.
            기본 크기는 <code>medium</code>입니다:
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
          <div className="space-y-4">
            <RadioButtonInline
              name="inlineOptions"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleChange}
              label="Small Option"
              size="small"
              color="sky"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleChange}
              label="Medium Option"
              size="medium"
              color="blue"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleChange}
              label="Large Option"
              size="large"
              color="purple"
            />
          </div>
          <div className="relative">
            <CopyToClipboard
              text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function SizeExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
    </>
  );
}

export default SizeExample;
`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">
            Changing the Color of the Radio Button
          </h2>
          <p>
            <code>RadioButtonInline</code> 컴포넌트는 다양한 색상으로
            제공됩니다. 기본 색상은 <code>sky</code>입니다:
          </p>
          <ul>
            <li>
              <code>sky</code>: 하늘색
            </li>
            <li>
              <code>grey</code>: 회색
            </li>
            <li>
              <code>blue</code>: 파란색
            </li>
            <li>
              <code>purple</code>: 보라색
            </li>
            <li>
              <code>green</code>: 녹색
            </li>
            <li>
              <code>yellow</code>: 노란색
            </li>
            <li>
              <code>red</code>: 빨간색
            </li>
          </ul>
          <div className="space-y-4">
            <RadioButtonInline
              name="inlineOptions"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleChange}
              label="Sky Option"
              size="medium"
              color="sky"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleChange}
              label="Grey Option"
              size="medium"
              color="grey"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleChange}
              label="Blue Option"
              size="medium"
              color="blue"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option4"
              checked={selectedValue === "option4"}
              onChange={handleChange}
              label="Purple Option"
              size="medium"
              color="purple"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option5"
              checked={selectedValue === "option5"}
              onChange={handleChange}
              label="Green Option"
              size="medium"
              color="green"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option6"
              checked={selectedValue === "option6"}
              onChange={handleChange}
              label="Yellow Option"
              size="medium"
              color="yellow"
            />
            <RadioButtonInline
              name="inlineOptions"
              value="option7"
              checked={selectedValue === "option7"}
              onChange={handleChange}
              label="Red Option"
              size="medium"
              color="red"
            />
          </div>
          <div className="relative">
            <CopyToClipboard
              text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;`}
              onCopy={handleCopy}
            >
              <button className="copyButton">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter language="tsx">
              {`
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function ColorExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Sky Option"
        size="medium"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Grey Option"
        size="medium"
        color="grey"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Blue Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Purple Option"
        size="medium"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option5"
        checked={selectedValue === "option5"}
        onChange={handleChange}
        label="Green Option"
        size="medium"
        color="green"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option6"
        checked={selectedValue === "option6"}
        onChange={handleChange}
        label="Yellow Option"
        size="medium"
        color="yellow"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option7"
        checked={selectedValue === "option7"}
        onChange={handleChange}
        label="Red Option"
        size="medium"
        color="red"
      />
    </>
  );
}

export default ColorExample;
`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-[#2D3748]">Props</h2>
          <p>
            <code>RadioButtonInline</code> 컴포넌트는 아래와 같은 Props를
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
                  <code>name</code>
                </td>
                <td>라디오 버튼 그룹의 이름입니다.</td>
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
                <td>라디오 버튼의 값입니다.</td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>""</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>checked</code>
                </td>
                <td>라디오 버튼의 선택 상태를 설정합니다.</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>라디오 버튼의 상태가 변경될 때 호출되는 함수입니다.</td>
                <td>
                  <code>
                    (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt;
                    void
                  </code>
                </td>
                <td>
                  <code>-</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>disabled</code>
                </td>
                <td>라디오 버튼을 비활성화 상태로 설정합니다.</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>size</code>
                </td>
                <td>라디오 버튼의 크기를 설정합니다.</td>
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
                <td>라디오 버튼의 색상을 설정합니다.</td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>"bg-[#9AC5E5]"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>label</code>
                </td>
                <td>라디오 버튼 옆에 표시될 라벨 텍스트입니다.</td>
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
              text={`import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
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
import RadioButtonInline from '@components/RadioButton/RadioButtonInline';

function FullExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButtonInline
        name="inlineOptions"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
        label="Small Option"
        size="small"
        color="sky"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        label="Medium Option"
        size="medium"
        color="blue"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleChange}
        label="Large Option"
        size="large"
        color="purple"
      />
      <RadioButtonInline
        name="inlineOptions"
        value="option4"
        checked={selectedValue === "option4"}
        onChange={handleChange}
        label="Disabled Option"
        size="medium"
        color="grey"
        disabled
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

export default RadioButton;
