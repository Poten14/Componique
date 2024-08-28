"use client";

import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import Autocomplete from "@components/Autocomplete/Autocomplete";
import Button from "@components/Button/Button";
import ButtonAutocomplete from "@components/Autocomplete/ButtonAutocomplete";
import GroupedAutocomplete from "@components/Autocomplete/GroupedAutocomplete";

const AutocompleteDoc: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];
  const options2 = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <div className="prose mb-40 max-w-[1000px] text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Autocomplete</h1>
      <p>
        <code>Autocomplete</code> 컴포넌트는 사용자가 텍스트를 입력할 때 관련
        옵션을 실시간으로 필터링하여 제공하는 컴포넌트입니다. 다양한 스타일과
        모양을 지원합니다.
      </p>
      <h2 className="text-[#2D3748]"> 1.1. Import</h2>
      <CodeBox
        code={`import { Autocomplete } from '@componique/react';`}
        copyText={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>
        아래는 <code>Autocomplete</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>

      <CodeBox
        code={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        1.3. Changing the Variant of the Autocomplete
      </h2>
      <p>
        <code>Autocomplete</code> 컴포넌트는 다양한 스타일로 제공됩니다. 기본
        스타일은 <code>outlined</code>입니다:
      </p>
      <ul>
        <li>
          <code>outlined</code>: 외곽선이 있는 스타일
        </li>
        <li>
          <code>filled</code>: 배경색이 채워진 스타일
        </li>
        <li>
          <code>borderless</code>: 외곽선이 없는 스타일
        </li>
      </ul>
      <div className="space-y-6">
        <Autocomplete
          options={options}
          placeholder="Outlined style"
          variant="outlined"
          onSelect={handleSelect}
        />
        <Autocomplete
          options={options}
          placeholder="Filled style"
          variant="filled"
          onSelect={handleSelect}
        />
        <Autocomplete
          options={options}
          placeholder="Borderless style"
          variant="borderless"
          onSelect={handleSelect}
        />
      </div>

      <CodeBox
        code={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Outlined style"
        variant="outlined"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Filled style"
        variant="filled"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Borderless style"
        variant="borderless"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        copyText={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Outlined style"
        variant="outlined"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Filled style"
        variant="filled"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Borderless style"
        variant="borderless"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">1.4. Props</h2>
      <p>
        <code>Autocomplete</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>사용자가 선택할 수 있는 옵션 목록입니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>입력 필드에 표시되는 플레이스홀더 텍스트입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Search..."</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>입력 필드의 스타일을 설정합니다.</td>
            <td>
              <code>"outlined" | "filled" | "borderless"</code>
            </td>
            <td>
              <code>"outlined"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>radius</code>
            </td>
            <td>입력 필드의 모서리 반경을 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large" | "none" | "full"</code>
            </td>
            <td>
              <code>"medium"</code>
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
              <code>"300px"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>입력 필드의 높이를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"auto"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>noOptionsMessage</code>
            </td>
            <td>필터링된 옵션이 없을 때 표시되는 메시지입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"No results found"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onSelect</code>
            </td>
            <td>옵션이 선택될 때 호출되는 함수입니다.</td>
            <td>
              <code>(selectedOption: string) =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.5. Full Example</h2>
      <CodeBox
        code={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        variant="filled"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        variant="filled"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="mt-40 text-[#2D3748]">2. ButtonAutocomplete</h1>
      <p>
        <code>ButtonAutocomplete</code> 컴포넌트는 사용자가 텍스트를 입력할 때
        관련 옵션을 필터링하여 제공하며, 입력 필드에 검색 버튼이 포함된
        형태입니다. 다양한 스타일과 색상을 지원합니다.
      </p>
      <h2 className="text-[#2D3748]"> 2.1. Import</h2>
      <CodeBox
        code={`import { ButtonAutocomplete } from '@componique/react';`}
        copyText={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>
        아래는 <code>ButtonAutocomplete</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>

      <CodeBox
        code={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        2.3. Changing the Color and Radius of the ButtonAutocomplete
      </h2>
      <p>
        <code>ButtonAutocomplete</code> 컴포넌트는 다양한 색상과 모서리 반경을
        지원합니다. 기본 색상은 <code>Basic</code>이고, 기본 모서리 반경은{" "}
        <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>color</code>: Basic, Primary, Secondary, Success, Warning,
          Danger
        </li>
        <li>
          <code>radius</code>: small, medium, large, full, none
        </li>
      </ul>
      <div className="space-y-4">
        <ButtonAutocomplete
          options={options}
          placeholder="Search with Basic color"
          color="Basic"
          radius="medium"
          onSelect={handleSelect}
        />
        <ButtonAutocomplete
          options={options}
          placeholder="Search with Primary color"
          color="Primary"
          radius="large"
          onSelect={handleSelect}
        />
        <ButtonAutocomplete
          options={options}
          placeholder="Search with Danger color"
          color="Danger"
          radius="full"
          onSelect={handleSelect}
        />
      </div>
      <CodeBox
        code={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Basic color"
        color="Basic"
        radius="medium"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Primary color"
        color="Primary"
        radius="large"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Danger color"
        color="Danger"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        copyText={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Basic color"
        color="Basic"
        radius="medium"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Primary color"
        color="Primary"
        radius="large"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Danger color"
        color="Danger"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>ButtonAutocomplete</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>사용자가 선택할 수 있는 옵션 목록입니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>입력 필드에 표시되는 플레이스홀더 텍스트입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Search..."</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>radius</code>
            </td>
            <td>입력 필드의 모서리 반경을 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large" | "none" | "full"</code>
            </td>
            <td>
              <code>"medium"</code>
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
              <code>"300px"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>입력 필드의 높이를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"auto"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>noOptionsMessage</code>
            </td>
            <td>필터링된 옵션이 없을 때 표시되는 메시지입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"No results found"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>검색 버튼과 포커스된 입력 필드의 색상을 설정합니다.</td>
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
              <code>onSelect</code>
            </td>
            <td>옵션이 선택될 때 호출되는 함수입니다.</td>
            <td>
              <code>(selectedOption: string) =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox
        code={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        color="Primary"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        color="Primary"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h1 className="mt-40 text-[#2D3748]">3. GroupedAutocomplete</h1>
      <p>
        <code>GroupedAutocomplete</code> 컴포넌트는 그룹화된 항목을 자동 완성할
        수 있는 기능을 제공하는 입력 필드입니다. 사용자 입력에 따라 관련 항목을
        실시간으로 필터링하며, 그룹별로 정렬하여 표시합니다.
      </p>
      <h2 className="text-[#2D3748]"> 3.1. Import</h2>
      <CodeBox
        code={`import { GroupedAutocomplete } from '@componique/react';`}
        copyText={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>
        아래는 <code>GroupedAutocomplete</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <GroupedAutocomplete
        options={options2}
        placeholder="Search items..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>

      <CodeBox
        code={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">
        3.3. Changing the Border and Radius of the GroupedAutocomplete
      </h2>
      <p>
        <code>GroupedAutocomplete</code> 컴포넌트는 다양한 테두리 두께와 모서리
        반경을 지원합니다. 기본 테두리 두께는 <code>medium</code>이고, 기본
        모서리 반경은 <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>border</code>: none, thin, medium, thick
        </li>
        <li>
          <code>radius</code>: none, small, medium, large, full
        </li>
      </ul>
      <div className="mb-4 space-x-4">
        <GroupedAutocomplete
          options={options2}
          placeholder="Search with thin border"
          border="thin"
          radius="small"
          onSelect={handleSelect}
        />
        <GroupedAutocomplete
          options={options2}
          placeholder="Search with thick border"
          border="thick"
          radius="large"
          onSelect={handleSelect}
        />
        <GroupedAutocomplete
          options={options2}
          placeholder="Search with no border"
          border="none"
          radius="full"
          onSelect={handleSelect}
        />
      </div>
      <CodeBox
        code={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thin border"
        border="thin"
        radius="small"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thick border"
        border="thick"
        radius="large"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with no border"
        border="none"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        copyText={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thin border"
        border="thin"
        radius="small"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thick border"
        border="thick"
        radius="large"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with no border"
        border="none"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`}
        language="tsx"
        index={3}
        copied={copied}
        handleCopy={handleCopy}
      />

      <h2 className="text-[#2D3748]">3.4. Props</h2>
      <p>
        <code>GroupedAutocomplete</code> 컴포넌트는 아래와 같은 Props를
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
            <td>
              그룹화된 항목 목록입니다. 각 그룹은 그룹명과 항목 배열로
              구성됩니다.
            </td>
            <td>
              <code>DropDownGroupedProps[]</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>입력 필드에 표시되는 플레이스홀더 텍스트입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Search..."</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onSelect</code>
            </td>
            <td>항목이 선택될 때 호출되는 함수입니다.</td>
            <td>
              <code>(selectedOption: string) =&gt; void</code>
            </td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <code>radius</code>
            </td>
            <td>입력 필드의 모서리 반경을 설정합니다.</td>
            <td>
              <code>"none" | "small" | "medium" | "large" | "full"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>border</code>
            </td>
            <td>입력 필드의 테두리 두께를 설정합니다.</td>
            <td>
              <code>"none" | "thin" | "medium" | "thick"</code>
            </td>
            <td>
              <code>"medium"</code>
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
              <code>"w-64"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>noOptionsMessage</code>
            </td>
            <td>필터링된 옵션이 없을 때 표시되는 메시지입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"No results found"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.5. Full Example</h2>
      <CodeBox
        code={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
        border="thin"
        radius="large"
        width="w-72"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        copyText={`import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
        border="thin"
        radius="large"
        width="w-72"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
    </div>
  );
};

export default AutocompleteDoc;
