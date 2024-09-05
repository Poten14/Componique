"use client";

import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import SwitchBasic from "@components/Swtich/SwitchBasic";
import SwitchHorizental from "@components/Swtich/SwitchHorizental";
import SwitchLong from "@components/Swtich/SwitchLong";
import SwitchRound from "@components/Swtich/SwitchRound";
import SwitchLabeled from "@components/Swtich/SwitchLabeled";

const SwitchDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. SwitchBasic</h1>
        <p>
          <code>SwitchBasic</code> 컴포넌트는 사용자가 토글할 수 있는 스위치 UI
          요소입니다. 다양한 크기로 사용할 수 있으며, 클릭 시 상태가 전환됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox
          code={`import SwitchBasic from '@components/Switch/SwitchBasic';`}
          copyText={`import SwitchBasic from '@components/Switch/SwitchBasic';`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchBasic />
        </div>
        <CodeBox
          code={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return <SwitchBasic />;
}

export default Example;
`}
          copyText={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return <SwitchBasic />;
}

export default Example;
`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.3. Switch Sizes</h2>
        <p>
          <code>SwitchBasic</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
          예시는 3가지 크기에서 작동하는 스위치를 보여줍니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">Small:</strong> 작은 크기의
            스위치
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Medium:</strong> 중간 크기의
            스위치 (기본값)
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Large:</strong> 큰 크기의
            스위치
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchBasic />
        </div>
        <CodeBox
          code={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`}
          copyText={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`}
          language="tsx"
          index={3}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">1.4. Props</h2>
        <p>
          <code>SwitchBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>isOn</code>
              </td>
              <td>스위치의 현재 상태입니다 (켜짐 또는 꺼짐).</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>toggleSwitch</code>
              </td>
              <td>스위치를 토글하는 함수입니다.</td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.5. Full Example</h2>
        <CodeBox
          code={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <div>
      <SwitchBasic />
    </div>
  );
}

export default Example;
`}
          copyText={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <div>
      <SwitchBasic />
    </div>
  );
}

export default Example;
`}
          language="tsx"
          index={4}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* switch2 */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">2. SwitchHorizental</h1>
        <p>
          <code>SwitchHorizental</code> 컴포넌트는 수직 방향으로 토글할 수 있는
          스위치 UI 요소입니다. 클릭 시 스위치의 상태가 위아래로 전환되며,
          다양한 크기로 제공됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox
          code={`import SwitchHorizental from '@components/Switch/SwitchHorizental';`}
          copyText={`import SwitchHorizental from '@components/Switch/SwitchHorizental';`}
          language="tsx"
          index={5}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchHorizental />
        </div>
        <CodeBox
          code={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`}
          copyText={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`}
          language="tsx"
          index={6}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.3. Switch Sizes</h2>
        <p>
          <code>SwitchHorizental</code> 컴포넌트는 다양한 크기로 제공됩니다.
          아래 예시에서는 세 가지 크기의 수직 스위치를 보여줍니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">Small:</strong> 작은 크기의
            수직 스위치
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Medium:</strong> 중간 크기의
            수직 스위치
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Large:</strong> 큰 크기의
            수직 스위치
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchHorizental />
        </div>
        <CodeBox
          code={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental />
    </>
  );
}

export default Example;
`}
          copyText={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental />
    </>
  );
}

export default Example;
`}
          language="tsx"
          index={7}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">2.4. Props</h2>
        <p>
          <code>SwitchHorizental</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>isOn</code>
              </td>
              <td>스위치의 현재 상태입니다 (켜짐 또는 꺼짐).</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>toggleSwitch</code>
              </td>
              <td>스위치를 토글하는 함수입니다.</td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">2.5. Full Example</h2>
        <CodeBox
          code={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental />
    </div>
  );
}

export default Example;
`}
          copyText={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental />
    </div>
  );
}

export default Example;
`}
          language="tsx"
          index={8}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* switch3 */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">3. SwitchLong</h1>
        <p>
          <code>SwitchLong</code> 컴포넌트는 넓은 영역에서 토글할 수 있는 스위치
          UI 요소입니다. 스위치의 길이에 따라 다양한 크기로 제공되며, 클릭 시
          스위치의 상태가 좌우로 전환됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">3.1. Import</h2>
        <CodeBox
          code={`import SwitchLong from '@components/Switch/SwitchLong';`}
          copyText={`import SwitchLong from '@components/Switch/SwitchLong';`}
          language="tsx"
          index={9}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchLong />
        </div>
        <CodeBox
          code={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`}
          copyText={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`}
          language="tsx"
          index={10}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.3. Switch Sizes</h2>
        <p>
          <code>SwitchLong</code> 컴포넌트는 다양한 길이와 크기로 제공됩니다.
          아래 예시에서는 세 가지 크기의 긴 스위치를 보여줍니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">Small:</strong> 짧은 길이의
            스위치
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Medium:</strong> 중간 길이의
            스위치
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Large:</strong> 긴 길이의
            스위치
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchLong />
        </div>
        <CodeBox
          code={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong />
    </>
  );
}

export default Example;
`}
          copyText={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong />
    </>
  );
}

export default Example;
`}
          language="tsx"
          index={11}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">3.4. Props</h2>
        <p>
          <code>SwitchLong</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>isOn</code>
              </td>
              <td>스위치의 현재 상태입니다 (켜짐 또는 꺼짐).</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>toggleSwitch</code>
              </td>
              <td>스위치를 토글하는 함수입니다.</td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">3.5. Full Example</h2>
        <CodeBox
          code={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong />
    </div>
  );
}

export default Example;
`}
          copyText={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong />
    </div>
  );
}

export default Example;
`}
          language="tsx"
          index={12}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* switch4 */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">4. SwitchRound</h1>
        <p>
          <code>SwitchRound</code> 컴포넌트는 둥근 디자인의 토글 스위치입니다.
          클릭 시 상태가 전환되며, 상태에 따라 스위치의 위치와 색상이
          변경됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">4.1. Import</h2>
        <CodeBox
          code={`import SwitchRound from '@components/Switch/SwitchRound';`}
          copyText={`import SwitchRound from '@components/Switch/SwitchRound';`}
          language="tsx"
          index={13}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">4.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchRound />
        </div>
        <br />
        <CodeBox
          code={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`}
          copyText={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`}
          language="tsx"
          index={14}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">4.3. Switch Examples</h2>
        <p>
          <code>SwitchRound</code> 컴포넌트는 두 가지 방식으로 상태를 전환하는
          스위치를 제공합니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">첫 번째 스위치:</strong>{" "}
            클릭 시 오른쪽으로 이동하여 상태가 전환되며, 스위치가 켜집니다.
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">두 번째 스위치:</strong>{" "}
            클릭 시 왼쪽으로 이동하여 상태가 전환되며, 스위치가 꺼집니다.
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchRound />
        </div>
        <br />
        <CodeBox
          code={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`}
          copyText={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`}
          language="tsx"
          index={15}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">4.4. Props</h2>
        <p>
          <code>SwitchRound</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>isOn</code>
              </td>
              <td>스위치의 현재 상태를 나타냅니다 (켜짐 또는 꺼짐).</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>toggleSwitch</code>
              </td>
              <td>스위치를 토글하는 함수입니다.</td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">4.5. Full Example</h2>
        <CodeBox
          code={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`}
          copyText={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`}
          language="tsx"
          index={16}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <hr />
      {/* switch5 */}
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">5. SwitchLabeled</h1>
        <p>
          <code>SwitchLabeled</code> 컴포넌트는 상태를 시각적으로 표시하는
          레이블이 포함된 토글 스위치입니다. 사용자가 스위치를 클릭하면 상태가
          전환되며, "ON"과 "OFF" 레이블이 상태에 따라 표시됩니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">5.1. Import</h2>
        <CodeBox
          code={`import SwitchLabeled from '@components/Switch/SwitchLabeled';`}
          copyText={`import SwitchLabeled from '@components/Switch/SwitchLabeled';`}
          language="tsx"
          index={17}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">5.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchLabeled />
        </div>
        <CodeBox
          code={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`}
          copyText={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`}
          language="tsx"
          index={18}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">5.3. Switch Examples</h2>
        <p>
          <code>SwitchLabeled</code> 컴포넌트는 상태에 따라 "ON"과 "OFF"
          레이블이 표시되는 스위치를 제공합니다. 아래는 두 가지 예시입니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">첫 번째 스위치:</strong>{" "}
            클릭 시 오른쪽으로 이동하며 "ON" 레이블이 표시됩니다.
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">두 번째 스위치:</strong>{" "}
            클릭 시 왼쪽으로 이동하며 "OFF" 레이블이 표시됩니다.
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchLabeled />
        </div>
        <CodeBox
          code={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`}
          copyText={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`}
          language="tsx"
          index={19}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748] dark:text-white">5.4. Props</h2>
        <p>
          <code>SwitchLabeled</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>isOn</code>
              </td>
              <td>스위치의 현재 상태를 나타냅니다 (켜짐 또는 꺼짐).</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>toggleSwitch</code>
              </td>
              <td>스위치를 토글하는 함수입니다.</td>
              <td>
                <code>() =&gt; void</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">5.5. Full Example</h2>
        <CodeBox
          code={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`}
          copyText={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`}
          language="tsx"
          index={20}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default SwitchDocs;
