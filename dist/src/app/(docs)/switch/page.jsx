"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const SwitchBasic_1 = __importDefault(require("@components/Swtich/SwitchBasic"));
const SwitchHorizental_1 = __importDefault(require("@components/Swtich/SwitchHorizental"));
const SwitchLong_1 = __importDefault(require("@components/Swtich/SwitchLong"));
const SwitchRound_1 = __importDefault(require("@components/Swtich/SwitchRound"));
const SwitchLabeled_1 = __importDefault(require("@components/Swtich/SwitchLabeled"));
const SwitchDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. SwitchBasic</h1>
        <p>
          <code>SwitchBasic</code> 컴포넌트는 사용자가 토글할 수 있는 기본적인
          스위치 UI 요소입니다. 다양한 크기 옵션과 색상 스타일을 제공하며, 클릭
          시 상태가 전환됩니다. 이 컴포넌트는 props를 통해 크기와 색상을
          커스터마이징할 수 있습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox_1.default code={`import SwitchBasic from '@components/Switch/SwitchBasic';`} copyText={`import SwitchBasic from '@components/Switch/SwitchBasic';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchBasic_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic />
    </>
  );
}

export default Example;
`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.3. Switch Sizes</h2>
        <p>
          <code>SwitchBasic</code> 컴포넌트는 다양한 크기 옵션을 제공합니다.
          기본적으로 3가지 크기에서 작동하는 스위치를 사용할 수 있습니다:
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
          <SwitchBasic_1.default size="small"/>
          <SwitchBasic_1.default size="medium"/>
          <SwitchBasic_1.default size="large"/>
        </div>
        <CodeBox_1.default code={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic size="small" />
      <SwitchBasic size="medium" />
      <SwitchBasic size="large" />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchBasic from '@components/Switch/SwitchBasic';

function Example() {
  return (
    <>
      <SwitchBasic size="small" />
      <SwitchBasic size="medium" />
      <SwitchBasic size="large" />
    </>
  );
}

export default Example;
`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

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
                <code>size</code>
              </td>
              <td>
                스위치의 크기를 지정합니다. "small", "medium", "large" 중 하나를
                선택할 수 있습니다.
              </td>
              <td>
                <code>'small' | 'medium' | 'large'</code>
              </td>
              <td>
                <code>'medium'</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onColor</code>
              </td>
              <td>스위치가 켜졌을 때의 배경색을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>'bg-Basic'</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>offColor</code>
              </td>
              <td>스위치가 꺼졌을 때의 배경색을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>'bg-[#9E9E9E] dark:bg-[#333742]'</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.5. Full Example</h2>
        <CodeBox_1.default code={`
// SwitchBasic.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchBasicProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchBasic = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchBasicProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-14",
      height: "h-7",
      circleSize: "h-5 w-5",
      translateDistance: "translate-x-7",
    },
    medium: {
      width: "w-20",
      height: "h-10",
      circleSize: "h-7 w-7",
      translateDistance: "translate-x-11",
    },
    large: {
      width: "w-36",
      height: "h-16",
      circleSize: "h-12 w-12",
      translateDistance: "translate-x-20",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchBasic;
`} copyText={`
// SwitchBasic.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchBasicProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchBasic = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchBasicProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-14",
      height: "h-7",
      circleSize: "h-5 w-5",
      translateDistance: "translate-x-7",
    },
    medium: {
      width: "w-20",
      height: "h-10",
      circleSize: "h-7 w-7",
      translateDistance: "translate-x-11",
    },
    large: {
      width: "w-36",
      height: "h-16",
      circleSize: "h-12 w-12",
      translateDistance: "translate-x-20",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchBasic;
`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
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
        <CodeBox_1.default code={`import SwitchHorizental from '@components/Switch/SwitchHorizental';`} copyText={`import SwitchHorizental from '@components/Switch/SwitchHorizental';`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchHorizental_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`} copyText={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return <SwitchHorizental />;
}

export default Example;
`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>

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
            수직 스위치 (기본값)
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Large:</strong> 큰 크기의
            수직 스위치
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchHorizental_1.default size="small"/>
          <SwitchHorizental_1.default size="medium"/>
          <SwitchHorizental_1.default size="large"/>
        </div>
        <CodeBox_1.default code={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental size="small" />
      <SwitchHorizental size="medium" />
      <SwitchHorizental size="large" />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <>
      <SwitchHorizental size="small" />
      <SwitchHorizental size="medium" />
      <SwitchHorizental size="large" />
    </>
  );
}

export default Example;
`} language="tsx" index={7} copied={copied} handleCopy={handleCopy}/>

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
                <code>size</code>
              </td>
              <td>스위치의 크기를 설정합니다 ("small", "medium", "large").</td>
              <td>
                <code>"small" | "medium" | "large"</code>
              </td>
              <td>
                <code>"medium"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onColor</code>
              </td>
              <td>스위치가 켜졌을 때의 배경 색상입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-Basic"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>offColor</code>
              </td>
              <td>스위치가 꺼졌을 때의 배경 색상입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-[#9E9E9E] dark:bg-[#333742]"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">2.5. Full Example</h2>
        <CodeBox_1.default code={`
// SwitchHorizental.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchHorizentalProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchHorizental = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchHorizentalProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
      initialOffset: string;
    }
  > = {
    small: {
      width: "w-7",
      height: "h-16",
      circleSize: "h-5 w-5",
      translateDistance: "translate-y-5",
      initialOffset: "-translate-y-4",
    },
    medium: {
      width: "w-9",
      height: "h-24",
      circleSize: "h-8 w-8",
      translateDistance: "translate-y-7",
      initialOffset: "-translate-y-7",
    },
    large: {
      width: "w-12",
      height: "h-32",
      circleSize: "h-10 w-10",
      translateDistance: "translate-y-10",
      initialOffset: "-translate-y-10",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center justify-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : currentSize.initialOffset}\`}
        />
      </div>
    </div>
  );
};

export default SwitchHorizental;

// Example.tsx
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchHorizental size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchHorizental size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`} copyText={`
// SwitchHorizental.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchHorizentalProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchHorizental = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchHorizentalProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
      initialOffset: string;
    }
  > = {
    small: {
      width: "w-7",
      height: "h-16",
      circleSize: "h-5 w-5",
      translateDistance: "translate-y-5",
      initialOffset: "-translate-y-4",
    },
    medium: {
      width: "w-9",
      height: "h-24",
      circleSize: "h-8 w-8",
      translateDistance: "translate-y-7",
      initialOffset: "-translate-y-7",
    },
    large: {
      width: "w-12",
      height: "h-32",
      circleSize: "h-10 w-10",
      translateDistance: "translate-y-10",
      initialOffset: "-translate-y-10",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center justify-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : currentSize.initialOffset}\`}
        />
      </div>
    </div>
  );
};

export default SwitchHorizental;

// Example.tsx
import SwitchHorizental from '@components/Switch/SwitchHorizental';

function Example() {
  return (
    <div>
      <SwitchHorizental size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchHorizental size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchHorizental size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`} language="tsx" index={8} copied={copied} handleCopy={handleCopy}/>
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
        <CodeBox_1.default code={`import SwitchLong from '@components/Switch/SwitchLong';`} copyText={`import SwitchLong from '@components/Switch/SwitchLong';`} language="tsx" index={9} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchLong_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`} copyText={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return <SwitchLong />;
}

export default Example;
`} language="tsx" index={10} copied={copied} handleCopy={handleCopy}/>

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
            스위치 (기본값)
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Large:</strong> 긴 길이의
            스위치
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <SwitchLong_1.default size="small"/>
          <SwitchLong_1.default size="medium"/>
          <SwitchLong_1.default size="large"/>
        </div>
        <CodeBox_1.default code={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong size="small" />
      <SwitchLong size="medium" />
      <SwitchLong size="large" />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <>
      <SwitchLong size="small" />
      <SwitchLong size="medium" />
      <SwitchLong size="large" />
    </>
  );
}

export default Example;
`} language="tsx" index={11} copied={copied} handleCopy={handleCopy}/>

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
                <code>size</code>
              </td>
              <td>스위치의 크기를 설정합니다 ("small", "medium", "large").</td>
              <td>
                <code>"small" | "medium" | "large"</code>
              </td>
              <td>
                <code>"medium"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onColor</code>
              </td>
              <td>스위치가 켜졌을 때의 배경 색상입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-Basic"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>offColor</code>
              </td>
              <td>스위치가 꺼졌을 때의 배경 색상입니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"bg-[#9E9E9E] dark:bg-[#333742]"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">3.5. Full Example</h2>
        <CodeBox_1.default code={`
// SwitchLong.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchLongProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchLong = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchLongProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-24",
      height: "h-7",
      circleSize: "h-5 w-12",
      translateDistance: "translate-x-10",
    },
    medium: {
      width: "w-36",
      height: "h-9",
      circleSize: "h-7 w-16",
      translateDistance: "translate-x-16",
    },
    large: {
      width: "w-64",
      height: "h-16",
      circleSize: "h-12 w-28",
      translateDistance: "translate-x-32",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchLong;

// Example.tsx
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchLong size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchLong size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`} copyText={`
// SwitchLong.tsx
import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchLongProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchLong = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchLongProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
    }
  > = {
    small: {
      width: "w-24",
      height: "h-7",
      circleSize: "h-5 w-12",
      translateDistance: "translate-x-10",
    },
    medium: {
      width: "w-36",
      height: "h-9",
      circleSize: "h-7 w-16",
      translateDistance: "translate-x-16",
    },
    large: {
      width: "w-64",
      height: "h-16",
      circleSize: "h-12 w-28",
      translateDistance: "translate-x-32",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        onClick={toggleSwitch}
        className={\`flex \${currentSize.height} \${currentSize.width} cursor-pointer items-center rounded-full p-1 \${isOn ? onColor : offColor}\`}
      >
        <div
          className={\`transform rounded-full bg-white shadow-lg duration-700 ease-in-out \${currentSize.circleSize} \${isOn ? currentSize.translateDistance : ""}\`}
        />
      </div>
    </div>
  );
};

export default SwitchLong;

// Example.tsx
import SwitchLong from '@components/Switch/SwitchLong';

function Example() {
  return (
    <div>
      <SwitchLong size="medium" onColor="bg-blue-500" offColor="bg-gray-300" />
      <SwitchLong size="large" onColor="bg-green-500" offColor="bg-red-500" />
      <SwitchLong size="small" onColor="bg-yellow-500" offColor="bg-purple-500" />
    </div>
  );
}

export default Example;
`} language="tsx" index={12} copied={copied} handleCopy={handleCopy}/>
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
        <CodeBox_1.default code={`import SwitchRound from '@components/Switch/SwitchRound';`} copyText={`import SwitchRound from '@components/Switch/SwitchRound';`} language="tsx" index={13} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">4.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchRound_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`} copyText={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return <SwitchRound />;
}

export default Example;
`} language="tsx" index={14} copied={copied} handleCopy={handleCopy}/>

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
          <SwitchRound_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <>
      <SwitchRound />
    </>
  );
}

export default Example;
`} language="tsx" index={15} copied={copied} handleCopy={handleCopy}/>

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
        <CodeBox_1.default code={`
// SwitchRound.tsx
import { useState } from "react";

const SwitchRound = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
    </div>
  );
};

export default SwitchRound;

// Example.tsx
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`} copyText={`
// SwitchRound.tsx
import { useState } from "react";

const SwitchRound = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD] dark:bg-[#333742]"
      >
        <div
          className={\`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}\`}
        />
      </div>
    </div>
  );
};

export default SwitchRound;

// Example.tsx
import SwitchRound from '@components/Switch/SwitchRound';

function Example() {
  return (
    <div>
      <SwitchRound />
    </div>
  );
}

export default Example;
`} language="tsx" index={16} copied={copied} handleCopy={handleCopy}/>
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
        <CodeBox_1.default code={`import SwitchLabeled from '@components/Switch/SwitchLabeled';`} copyText={`import SwitchLabeled from '@components/Switch/SwitchLabeled';`} language="tsx" index={17} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">5.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <SwitchLabeled_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`} copyText={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return <SwitchLabeled />;
}

export default Example;
`} language="tsx" index={18} copied={copied} handleCopy={handleCopy}/>

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
          <SwitchLabeled_1.default />
        </div>
        <CodeBox_1.default code={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`} copyText={`
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <>
      <SwitchLabeled />
    </>
  );
}

export default Example;
`} language="tsx" index={19} copied={copied} handleCopy={handleCopy}/>

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
        <CodeBox_1.default code={`
// SwitchLabeled.tsx
import { useState } from "react";

const SwitchLabeled = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLabeled;

// Example.tsx
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`} copyText={`
// SwitchLabeled.tsx
import { useState } from "react";

const SwitchLabeled = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={\`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out \${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}\`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLabeled;

// Example.tsx
import SwitchLabeled from '@components/Switch/SwitchLabeled';

function Example() {
  return (
    <div>
      <SwitchLabeled />
    </div>
  );
}

export default Example;
`} language="tsx" index={20} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
exports.default = SwitchDocs;
