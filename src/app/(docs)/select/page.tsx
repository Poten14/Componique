"use client";

import React, { useState } from "react";
import Select from "@components/Select/Select";
import CodeBox from "@components/CodeBox";
import SelectList from "@components/Select/SelectList";
import SelectValueAdd from "@components/Select/SelectValueAdd";

const SelectDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
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
      <CodeBox
        code={`import { Select } from '@components/Select';`}
        copyText={`import { Select } from '@components/Select';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          defaultValue="Select an option"
        />
      </div>
      <CodeBox
        code={`import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      defaultValue="Select an option"
    />
  );
}

export default Example;`}
        copyText={`import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      defaultValue="Select an option"
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

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
      <CodeBox
        code={`import Select from '@components/Select';

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
        copyText={`import Select from '@components/Select';

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
  );`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

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
      <CodeBox
        code={`import Select from '@components/Select';

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
        copyText={`import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        color="blue"
        defaultValue="Select an option"
      />
    </div>
  );`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="mt-8 text-[#2D3748]">SelectList</h1>
      <p>
        <code>SelectList</code> 컴포넌트는 사용자가 여러 항목 중에서 하나를
        선택할 수 있는 리스트를 제공합니다. 이 컴포넌트는 드롭다운과 달리,
        선택지가 화면에 리스트 형태로 펼쳐져 있으며, 사용자는 클릭을 통해 선택할
        수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <CodeBox
        code={`import { SelectList } from '@components/SelectList';`}
        copyText={`import { SelectList } from '@components/SelectList';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <SelectList option={["Item 1", "Item 2", "Item 3", "Item 4"]} />
      </div>
      <CodeBox
        code={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <SelectList
      options={["Item 1", "Item 2", "Item 3", "Item4"]}
    />
  );
}

export default Example;`}
        copyText={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <SelectList
      options={["Item 1", "Item 2", "Item 3", "Item4"]}
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>SelectList</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>리스트에서 선택할 수 있는 항목 목록을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <CodeBox
        code={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <div>
      <SelectList
        options={["Item 1", "Item 2", "Item 3", "Item4"]}
      />
    </div>
  );
}

export default Example;`}
        copyText={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <div>
      <SelectList
        options={["Item 1", "Item 2", "Item 3", "Item 4"]}
      />
    </div>
  );`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="text-[#2D3748]">SelectValueAdd</h1>
      <p>
        <code>SelectValueAdd</code> 컴포넌트는 사용자가 여러 옵션 중에서 하나
        이상의 옵션을 선택할 수 있도록 설계된 드롭다운 메뉴입니다. 선택된 값들은
        태그 형태로 표시되며, 사용자는 이를 추가하거나 제거할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <CodeBox
        code={`import { SelectValueAdd } from '@components/SelectValueAdd';`}
        copyText={`import { SelectValueAdd } from '@components/SelectValueAdd';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <SelectValueAdd
          option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
      </div>
      <CodeBox
        code={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
    />
  );
}

export default Example;`}
        copyText={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>SelectValueAdd</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <CodeBox
        code={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <div>
      <SelectValueAdd
        option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      />
    </div>
  );
}

export default Example;`}
        copyText={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <div>
      <SelectValueAdd
        option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      />
    </div>
  );`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />
    </div>
  );
};

export default SelectDocs;
