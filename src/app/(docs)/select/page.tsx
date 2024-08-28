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
      <h1 className="text-[#2D3748]">1. Select</h1>
      <p>
        <code>Select</code> 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수
        있도록 설계된 드롭다운 메뉴입니다. 색상과 기본 선택 옵션을 조정하여
        다양한 스타일을 적용할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox
        code={`import { Select } from '@components/Select';`}
        copyText={`import { Select } from '@components/Select';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
          color="gray"
        />
      </div>
      <CodeBox
        code={`import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an option"
      color="gray"
    />
  );
}

export default Example;`}
        copyText={`import Select from '@components/Select';

function Example() {
  return (
    <Select
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an option"
      color="gray"
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.3. Changing the Color of the Select</h2>
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
      <div className="my-5 flex items-center gap-4">
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
          color="red"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
          color="blue"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
          color="green"
        />
        <Select
          option={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
          color="gray"
        />
      </div>
      <CodeBox
        code={`import Select from '@components/Select';

function Example() {
  return (
    <>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="red"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="green"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="gray"
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
        placeholder="Select an option"
        color="red"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="green"
      />
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="gray"
      />
    </>
  );`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.4. Props</h2>
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
              <code>placeholder</code>
            </td>
            <td>선택되지 않았을 때 표시되는 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Select an option"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.5. Full Example</h2>
      <CodeBox
        code={`import Select from '@components/Select';

function Example() {
  return (
    <div>
      <Select
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        color="blue"
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
        placeholder="Select an option"
        color="blue"
      />
    </div>
  );`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="mb-6 mt-12 text-[#2D3748]">2. SelectList</h1>
      <p>
        <code>SelectList</code> 컴포넌트는 여러 옵션 중 하나를 선택할 수 있는
        리스트 형태의 선택 컴포넌트입니다. 사용자는 화면에 펼쳐진 리스트에서
        옵션을 선택할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox
        code={`import { SelectList } from '@components/SelectList';`}
        copyText={`import { SelectList } from '@components/SelectList';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <SelectList option={["Item 1", "Item 2", "Item 3", "Item 4"]} />
      </div>
      <CodeBox
        code={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <SelectList
      option={["Item 1", "Item 2", "Item 3", "Item 4"]}
    />
  );
}

export default Example;`}
        copyText={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <SelectList
      option={["Item 1", "Item 2", "Item 3", "Item 4"]}
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.3. Props</h2>
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
              <code>option</code>
            </td>
            <td>리스트에서 선택할 수 있는 항목 목록을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onSelect</code>
            </td>
            <td>선택된 값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string) =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.4. Full Example</h2>
      <CodeBox
        code={`import SelectList from '@components/SelectList';

function Example() {
  return (
    <div>
      <SelectList
        option={["Item 1", "Item 2", "Item 3", "Item 4"]}
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
        option={["Item 1", "Item 2", "Item 3", "Item 4"]}
      />
    </div>
  );`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="mb-6 mt-12 text-[#2D3748]">3. SelectValueAdd</h1>
      <p>
        <code>SelectValueAdd</code> 컴포넌트는 사용자가 여러 옵션 중 여러 개를
        선택하고, 선택한 항목을 제거할 수 있는 UI 요소입니다. 이 컴포넌트는
        `placeholder`를 제공하여 초기 상태에서 표시할 기본 텍스트를 설정할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">3.1. Import</h2>
      <CodeBox
        code={`import { SelectValueAdd } from '@components/SelectValueAdd';`}
        copyText={`import { SelectValueAdd } from '@components/SelectValueAdd';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <SelectValueAdd
          option={["Option 1", "Option 2", "Option 3", "Option 4"]}
          placeholder="Select an option"
          onSelect={(selectedValues) => console.log(selectedValues)}
        />
      </div>
      <CodeBox
        code={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      placeholder="Select an option"
      onSelect={(selectedValues) => console.log(selectedValues)}
    />
  );
}

export default Example;`}
        copyText={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <SelectValueAdd
      option={["Option 1", "Option 2", "Option 3", "Option 4"]}
      placeholder="Select an option"
      onSelect={(selectedValues) => console.log(selectedValues)}
    />
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.3. Props</h2>
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
            <td>선택 가능한 옵션 목록을 설정합니다.</td>
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
            <td>선택된 항목이 없을 때 표시되는 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Option 1"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onSelect</code>
            </td>
            <td>선택된 값이 변경될 때 호출되는 콜백 함수입니다.</td>
            <td>
              <code>(value: string[]) =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.4. Full Example</h2>
      <CodeBox
        code={`import SelectValueAdd from '@components/SelectValueAdd';

function Example() {
  return (
    <div>
      <SelectValueAdd
        option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        placeholder="Select an option"
        onSelect={(selectedValues) => console.log(selectedValues)}
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
        placeholder="Select an option"
        onSelect={(selectedValues) => console.log(selectedValues)}
      />
    </div>
  );`}
        language="tsx"
        index={4}
        copied={copied}
        handleCopy={handleCopy}
      />
    </div>
  );
};

export default SelectDocs;
