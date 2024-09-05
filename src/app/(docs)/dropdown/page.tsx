"use client";

import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import DropDownBasic from "@components/DropDown/DropDownBasic";
import DropDownBasicMultiSelect from "@components/DropDown/DropDownMutilSelect";
import DropDownGrouped from "@components/DropDown/DropDownGrouped";

const DropDownComponent: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* dropdown1 */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">1. DropDownBasic</h1>
        <p>
          <code>DropDownBasic</code> 컴포넌트는 사용자가 옵션을 선택할 수 있는
          간단한 드롭다운 메뉴를 제공합니다. 다양한 스타일의 드롭다운을
          지원하며, 선택된 값은 부모 컴포넌트로 전달될 수 있습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox
          code={`import DropDownBasic from '@components/DropDown/DropDownBasic';`}
          copyText={`import DropDownBasic from '@components/DropDown/DropDownBasic';`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <DropDownBasic
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Option"
            type="basic"
            onSelect={(value) => console.log("Selected:", value)}
          />
          <DropDownBasic
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Option"
            type="rounded"
            onSelect={(value) => console.log("Selected:", value)}
          />
          <DropDownBasic
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Option"
            type="borderless-rounded"
            onSelect={(value) => console.log("Selected:", value)}
          />
          <DropDownBasic
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="less-rounded"
            type="basic"
            onSelect={(value) => console.log("Selected:", value)}
          />
        </div>

        <CodeBox
          code={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          copyText={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function Example() {
  return (
    <DropDownBasic
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
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
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                드롭다운의 스타일을 결정합니다. ("basic", "rounded",
                "borderless-rounded", "less-rounded")
              </td>
              <td>
                <code>
                  "basic" | "rounded" | "borderless-rounded" | "less-rounded"
                </code>
              </td>
              <td>
                <code>"basic"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
        <CodeBox
          code={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select one"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          copyText={`import DropDownBasic from '@components/DropDown/DropDownBasic';

function FullExample() {
  return (
    <div>
      <DropDownBasic
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownBasic
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select one"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={3}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>

      <hr />
      {/* dropdown2 */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">
          2. DropDownBasicMultiSelect
        </h1>
        <p>
          <code>DropDownBasicMultiSelect</code> 컴포넌트는 사용자가 여러 옵션을
          선택할 수 있는 멀티 셀렉트 드롭다운 메뉴를 제공합니다. 선택된 값들은
          컴포넌트의 부모 컴포넌트로 전달됩니다. 다양한 스타일을 지원합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox
          code={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';`}
          copyText={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';`}
          language="tsx"
          index={4}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="m-7 flex gap-4">
          <DropDownBasicMultiSelect
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Options"
            type="basic"
            onSelect={(value: string[]) => console.log("Selected:", value)}
          />
          <DropDownBasicMultiSelect
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Options"
            type="rounded"
            onSelect={(value: string[]) => console.log("Selected:", value)}
          />
          <DropDownBasicMultiSelect
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Options"
            type="borderless-rounded"
            onSelect={(value: string[]) => console.log("Selected:", value)}
          />
          <DropDownBasicMultiSelect
            option={["Option 1", "Option 2", "Option 3"]}
            placeholder="Select Options"
            type="less-rounded"
            onSelect={(value: string[]) => console.log("Selected:", value)}
          />
        </div>

        <CodeBox
          code={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function Example() {
  return (
    <DropDownBasicMultiSelect
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select Options"
      type="basic"
      onSelect={(value: string[]) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          copyText={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function Example() {
  return (
    <DropDownBasicMultiSelect
      option={["Option 1", "Option 2", "Option 3"]}
      placeholder="Select Options"
      type="basic"
      onSelect={(value: string[]) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          language="tsx"
          index={5}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
        <p>
          <code>DropDownBasicMultiSelect</code> 컴포넌트는 아래와 같은 Props를
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
                <code>placeholder</code>
              </td>
              <td>선택되지 않은 경우 표시되는 플레이스홀더 텍스트입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"Select Options"</code>
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
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                드롭다운의 스타일을 결정합니다. ("basic", "rounded",
                "borderless-rounded", "less-rounded")
              </td>
              <td>
                <code>
                  "basic" | "rounded" | "borderless-rounded" | "less-rounded"
                </code>
              </td>
              <td>
                <code>"basic"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">2.4. Full Example</h2>
        <CodeBox
          code={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function FullExample() {
  return (
    <div>
      <DropDownBasicMultiSelect
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Options"
        type="basic"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose Options"
        type="rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick Options"
        type="borderless-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select Multiple"
        type="less-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          copyText={`import DropDownBasicMultiSelect from '@components/DropDown/DropDownBasicMultiSelect';

function FullExample() {
  return (
    <div>
      <DropDownBasicMultiSelect
        option={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select Options"
        type="basic"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option A", "Option B", "Option C"]}
        placeholder="Choose Options"
        type="rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option X", "Option Y", "Option Z"]}
        placeholder="Pick Options"
        type="borderless-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
      <DropDownBasicMultiSelect
        option={["Option 10", "Option 20", "Option 30"]}
        placeholder="Select Multiple"
        type="less-rounded"
        onSelect={(value: string[]) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={6}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>

      {/* dropdown3 */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">3. DropDownGrouped</h1>
        <p>
          <code>DropDownGrouped</code> 컴포넌트는 그룹화된 옵션을 선택할 수 있는
          드롭다운 메뉴를 제공합니다. 사용자는 각 그룹에서 옵션을 선택할 수
          있으며, 선택된 값은 부모 컴포넌트로 전달될 수 있습니다. 다양한
          스타일을 지원합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox
          code={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';`}
          copyText={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';`}
          language="tsx"
          index={7}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7 flex gap-4">
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
            defaultOption="Select Option"
            type="basic"
            onSelect={(value) => console.log("Selected:", value)}
          />
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
            defaultOption="Select Option"
            type="rounded"
            onSelect={(value) => console.log("Selected:", value)}
          />
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
            defaultOption="Select Option"
            type="borderless-rounded"
            onSelect={(value) => console.log("Selected:", value)}
          />
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
            defaultOption="Select Option"
            type="less-rounded"
            onSelect={(value) => console.log("Selected:", value)}
          />
        </div>

        <CodeBox
          code={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          copyText={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function Example() {
  return (
    <DropDownGrouped
      options={[
        { groupName: "Group 1", items: ["Option 1", "Option 2"] },
        { groupName: "Group 2", items: ["Option 3", "Option 4"] },
      ]}
      defaultOption="Select an Option"
      type="basic"
      onSelect={(value) => console.log("Selected:", value)}
    />
  );
}

export default Example;`}
          language="tsx"
          index={8}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.3. Props</h2>
        <p>
          <code>DropDownGrouped</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                드롭다운의 스타일을 결정합니다. ("basic", "rounded",
                "borderless-rounded", "less-rounded")
              </td>
              <td>
                <code>
                  "basic" | "rounded" | "borderless-rounded" | "less-rounded"
                </code>
              </td>
              <td>
                <code>"basic"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">3.4. Full Example</h2>
        <CodeBox
          code={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group X", items: ["Option X1", "Option X2"] },
          { groupName: "Group Y", items: ["Option Y1", "Option Y2"] },
        ]}
        defaultOption="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group 10", items: ["Option 10A", "Option 10B"] },
          { groupName: "Group 20", items: ["Option 20A", "Option 20B"] },
        ]}
        defaultOption="Select from List"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          copyText={`import DropDownGrouped from '@components/DropDown/DropDownGrouped';

function FullExample() {
  return (
    <div>
      <DropDownGrouped
        options={[
          { groupName: "Group 1", items: ["Option 1", "Option 2"] },
          { groupName: "Group 2", items: ["Option 3", "Option 4"] },
        ]}
        defaultOption="Select Option"
        type="basic"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group A", items: ["Option A", "Option B"] },
          { groupName: "Group B", items: ["Option C", "Option D"] },
        ]}
        defaultOption="Choose an Option"
        type="rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group X", items: ["Option X1", "Option X2"] },
          { groupName: "Group Y", items: ["Option Y1", "Option Y2"] },
        ]}
        defaultOption="Pick an Option"
        type="borderless-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
      <DropDownGrouped
        options={[
          { groupName: "Group 10", items: ["Option 10A", "Option 10B"] },
          { groupName: "Group 20", items: ["Option 20A", "Option 20B"] },
        ]}
        defaultOption="Select from List"
        type="less-rounded"
        onSelect={(value) => console.log("Selected:", value)}
      />
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={9}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default DropDownComponent;
