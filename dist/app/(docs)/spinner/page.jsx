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
const BasicSpinner_1 = __importDefault(require("@components/Spinner/BasicSpinner"));
const BarsSpinner_1 = __importDefault(require("@components/Spinner/BarsSpinner"));
const SquareSpinner_1 = __importDefault(require("@components/Spinner/SquareSpinner"));
const PacManSpinner_1 = __importDefault(require("@components/Spinner/PacManSpinner"));
const FullScreenSpinner_1 = __importDefault(require("@components/Spinner/FullScreenSpinner"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const SpinnerDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [spinning, setSpinning] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const showLoader = (key) => {
        setSpinning((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
            setSpinning((prev) => ({ ...prev, [key]: false }));
        }, 1000); // 1초 동안 스피너를 표시한 후 숨김
    };
    return (<div className="prose mb-40 max-w-[850px] text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Spinner</h1>
      <p>
        <code>Spinner</code> 컴포넌트는 로딩 상태를 시각적으로 나타내기 위해
        사용되는 컴포넌트입니다. 크기, 색상, 회전 속도를 커스터마이즈할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]"> 1.1. Import</h2>
      <CodeBox_1.default code={`import { Spinner } from '@componique/react';`} copyText={`import { Spinner } from '@components/Spinner';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>
        아래는 <code>Spinner</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-y-4">
        <BasicSpinner_1.default />
      </div>
      <CodeBox_1.default code={`import { Spinner } from '@components/Spinner';

function Example() {
  return <Spinner />;
}

export default Example;`} copyText={`import { Spinner } from '@components/Spinner';

function Example() {
  return <Spinner />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.3. Changing the Size of the Spinner</h2>
      <p>
        <code>Spinner</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
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
      <div className="my-7 space-x-3 space-y-4">
        <BasicSpinner_1.default size="xs"/>
        <BasicSpinner_1.default size="small"/>
        <BasicSpinner_1.default size="medium"/>
        <BasicSpinner_1.default size="large"/>
        <BasicSpinner_1.default size="xl"/>
      </div>
      <CodeBox_1.default code={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner size="xs" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xl" />
    </>
  );
}

export default Example;`} copyText={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner size="xs" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xl" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.4. Changing the Color of the Spinner</h2>
      <p>
        <code>Spinner</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본 색상은{" "}
        <code>Primary</code>입니다:
      </p>
      <ul>
        <li>
          <code>Basic</code>: 기본 색상
        </li>
        <li>
          <code>Primary</code>: 주요 색상
        </li>
        <li>
          <code>gray</code>: 회색
        </li>
        <li>
          <code>Secondary</code>: 보조 색상
        </li>
        <li>
          <code>Success</code>: 성공 색상
        </li>
        <li>
          <code>Warning</code>: 경고 색상
        </li>
        <li>
          <code>Danger</code>: 위험 색상
        </li>
        <li>
          <code>White</code>: 흰색
        </li>
      </ul>
      <div className="my-7 space-x-3 space-y-4">
        <BasicSpinner_1.default color="Basic"/>
        <BasicSpinner_1.default color="Primary"/>
        <BasicSpinner_1.default color="gray"/>
        <BasicSpinner_1.default color="Secondary"/>
        <BasicSpinner_1.default color="Success"/>
        <BasicSpinner_1.default color="Warning"/>
        <BasicSpinner_1.default color="Danger"/>
        <BasicSpinner_1.default color="White"/>
      </div>
      <CodeBox_1.default code={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner color="Basic" />
      <Spinner color="Primary" />
      <Spinner color="gray" />
      <Spinner color="Secondary" />
      <Spinner color="Success" />
      <Spinner color="Warning" />
      <Spinner color="Danger" />
      <Spinner color="White" />
    </>
  );
}

export default Example;`} copyText={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner color="Basic" />
      <Spinner color="Primary" />
      <Spinner color="gray" />
      <Spinner color="Secondary" />
      <Spinner color="Success" />
      <Spinner color="Warning" />
      <Spinner color="Danger" />
      <Spinner color="White" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.5. Changing the Speed of the Spinner</h2>
      <p>
        <code>Spinner</code> 컴포넌트는 다양한 회전 속도로 제공됩니다. 기본
        속도는 <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>slow</code>: 느린 회전 속도
        </li>
        <li>
          <code>medium</code>: 중간 회전 속도 (기본값)
        </li>
        <li>
          <code>fast</code>: 빠른 회전 속도
        </li>
      </ul>
      <div className="my-7 space-x-3 space-y-4">
        <BasicSpinner_1.default speed="slow"/>
        <BasicSpinner_1.default speed="medium"/>
        <BasicSpinner_1.default speed="fast"/>
      </div>

      <CodeBox_1.default code={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner speed="slow" />
      <Spinner speed="medium" />
      <Spinner speed="fast" />
    </>
  );
}

export default Example;`} copyText={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <>
      <Spinner speed="slow" />
      <Spinner speed="medium" />
      <Spinner speed="fast" />
    </>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.6. Props</h2>
      <p>
        <code>Spinner</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>스피너의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>스피너의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "gray" | "Secondary" | "Success" |
                "Warning" | "Danger" | "White"
              </code>
            </td>
            <td>
              <code>"Primary"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>speed</code>
            </td>
            <td>스피너의 회전 속도를 설정합니다.</td>
            <td>
              <code>"slow" | "medium" | "fast"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.7. Full Example</h2>
      <CodeBox_1.default code={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <div>
      <Spinner size="large" color="Success" speed="fast" />
    </div>
  );
}

export default Example;`} copyText={`import { Spinner } from '@components/Spinner';

function Example() {
  return (
    <div>
      <Spinner size="large" color="Success" speed="fast" />
    </div>
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">2. BarsSpinner</h1>
      <p>
        <code>BarsSpinner</code> 컴포넌트는 로딩 상태를 시각적으로 나타내기 위해
        사용되는 컴포넌트입니다. 크기와 색상을 커스터마이즈할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox_1.default code={`import { BarsSpinner } from '@componique/react';`} copyText={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>
        {/* <BarsSpinner /> */}
        아래는 <code>BarsSpinner</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-x-3 space-y-4">
        <BarsSpinner_1.default />
      </div>
      <CodeBox_1.default code={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return <BarsSpinner />;
}

export default Example;`} copyText={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return <BarsSpinner />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        2.3. Changing the Size of the BarsSpinner
      </h2>
      <p>
        <code>BarsSpinner</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
        크기는 <code>medium</code>입니다:
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
      <div className="my-7 space-y-4">
        <BarsSpinner_1.default size="xs"/>
        <BarsSpinner_1.default size="small"/>
        <BarsSpinner_1.default size="medium"/>
        <BarsSpinner_1.default size="large"/>
        <BarsSpinner_1.default size="xl"/>
      </div>
      <CodeBox_1.default code={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner size="xs" />
      <BarsSpinner size="small" />
      <BarsSpinner size="medium" />
      <BarsSpinner size="large" />
      <BarsSpinner size="xl" />
    </>
  );
}

export default Example;`} copyText={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner size="xs" />
      <BarsSpinner size="small" />
      <BarsSpinner size="medium" />
      <BarsSpinner size="large" />
      <BarsSpinner size="xl" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        2.4. Changing the Color of the BarsSpinner
      </h2>
      <p>
        <code>BarsSpinner</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본
        색상은 <code className="bg-Basic text-white">Basic</code>입니다:
      </p>
      <ul>
        <li>
          <code className="bg-Basic text-white">Basic</code>: 기본 색상
        </li>
        <li>
          <code className="bg-Primary text-white">Primary</code>: 주요 색상
        </li>
        <li>
          <code className="bg-gray text-white">gray</code>: 회색
        </li>
        <li>
          <code className="bg-Secondary text-white">Secondary</code>: 보조 색상
        </li>
        <li>
          <code className="bg-Success text-white">Success</code>: 성공 색상
        </li>
        <li>
          <code className="bg-Warning text-white">Warning</code>: 경고 색상
        </li>
        <li>
          <code className="bg-Danger text-white">Danger</code>: 위험 색상
        </li>
        <li>
          <code className="bg-white text-Gray">White</code>: 흰색
        </li>
      </ul>
      <CodeBox_1.default code={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner color="Basic" />
      <BarsSpinner color="Primary" />
      <BarsSpinner color="gray" />
      <BarsSpinner color="Secondary" />
      <BarsSpinner color="Success" />
      <BarsSpinner color="Warning" />
      <BarsSpinner color="Danger" />
      <BarsSpinner color="White" />
    </>
  );
}

export default Example;`} copyText={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <>
      <BarsSpinner color="Basic" />
      <BarsSpinner color="Primary" />
      <BarsSpinner color="gray" />
      <BarsSpinner color="Secondary" />
      <BarsSpinner color="Success" />
      <BarsSpinner color="Warning" />
      <BarsSpinner color="Danger" />
      <BarsSpinner color="White" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.5. Props</h2>
      <p>
        <code>BarsSpinner</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>스피너의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>스피너의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "gray" | "Secondary" | "Success" |
                "Warning" | "Danger" | "White"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.6. Full Example</h2>
      <CodeBox_1.default code={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <div>
      <BarsSpinner size="large" color="Primary" />
    </div>
  );
}

export default Example;`} copyText={`import { BarsSpinner } from '@components/Spinners/BarsSpinner';

function Example() {
  return (
    <div>
      <BarsSpinner size="large" color="Primary" />
    </div>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">3. SquareSpinner</h1>
      <p>
        <code>SquareSpinner</code> 컴포넌트는 로딩 상태를 시각적으로 나타내기
        위해 사용되는 컴포넌트입니다. 크기, 색상, 속도를 커스터마이즈할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">3.1. Import</h2>
      <CodeBox_1.default code={`import { SquareSpinner } from '@componique/react';`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>
        {/* <SquareSpinner /> */}
        아래는 <code>SquareSpinner</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-y-4">
        <SquareSpinner_1.default />
      </div>
      <CodeBox_1.default code={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return <SquareSpinner />;
}

export default Example;`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return <SquareSpinner />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        3.3. Changing the Size of the SquareSpinner
      </h2>
      <p>
        <code>SquareSpinner</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
        크기는 <code>medium</code>입니다:
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
      <div className="my-7 space-y-4">
        <SquareSpinner_1.default size="xs"/>
        <SquareSpinner_1.default size="small"/>
        <SquareSpinner_1.default size="medium"/>
        <SquareSpinner_1.default size="large"/>
        <SquareSpinner_1.default size="xl"/>
      </div>
      <CodeBox_1.default code={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner size="xs" />
      <SquareSpinner size="small" />
      <SquareSpinner size="medium" />
      <SquareSpinner size="large" />
      <SquareSpinner size="xl" />
    </>
  );
}

export default Example;`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner size="xs" />
      <SquareSpinner size="small" />
      <SquareSpinner size="medium" />
      <SquareSpinner size="large" />
      <SquareSpinner size="xl" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        3.4. Changing the Color of the SquareSpinner
      </h2>
      <p>
        <code>SquareSpinner</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본
        색상은 <code className="bg-Primary text-white">Primary</code>입니다:
      </p>
      <ul>
        <li>
          <code className="bg-Basic text-white">Basic</code>: 기본 색상
        </li>
        <li>
          <code className="bg-Primary text-white">Primary</code>: 주요 색상
        </li>
        <li>
          <code className="bg-gray text-white">gray</code>: 회색
        </li>
        <li>
          <code className="bg-Secondary text-white">Secondary</code>: 보조 색상
        </li>
        <li>
          <code className="bg-Success text-white">Success</code>: 성공 색상
        </li>
        <li>
          <code className="bg-Warning text-white">Warning</code>: 경고 색상
        </li>
        <li>
          <code className="bg-Danger text-white">Danger</code>: 위험 색상
        </li>
        <li>
          <code className="bg-white text-Gray">White</code>: 흰색
        </li>
      </ul>
      <CodeBox_1.default code={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner color="Basic" />
      <SquareSpinner color="Primary" />
      <SquareSpinner color="gray" />
      <SquareSpinner color="Secondary" />
      <SquareSpinner color="Success" />
      <SquareSpinner color="Warning" />
      <SquareSpinner color="Danger" />
      <SquareSpinner color="White" />
    </>
  );
}

export default Example;`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner color="Basic" />
      <SquareSpinner color="Primary" />
      <SquareSpinner color="gray" />
      <SquareSpinner color="Secondary" />
      <SquareSpinner color="Success" />
      <SquareSpinner color="Warning" />
      <SquareSpinner color="Danger" />
      <SquareSpinner color="White" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        3.5. Changing the Speed of the SquareSpinner
      </h2>
      <p>
        <code>SquareSpinner</code> 컴포넌트는 다양한 속도로 제공됩니다. 기본
        속도는 <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>slow</code>: 느린 속도
        </li>
        <li>
          <code>medium</code>: 중간 속도 (기본값)
        </li>
        <li>
          <code>fast</code>: 빠른 속도
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <SquareSpinner_1.default speed="slow"/>
        <SquareSpinner_1.default speed="medium"/>
        <SquareSpinner_1.default speed="fast"/>
      </div>
      <CodeBox_1.default code={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner speed="slow" />
      <SquareSpinner speed="medium" />
      <SquareSpinner speed="fast" />
    </>
  );
}

export default Example;`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <>
      <SquareSpinner speed="slow" />
      <SquareSpinner speed="medium" />
      <SquareSpinner speed="fast" />
    </>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.6. Props</h2>
      <p>
        <code>SquareSpinner</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>스피너의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>스피너의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "gray" | "Secondary" | "Success" |
                "Warning" | "Danger" | "White"
              </code>
            </td>
            <td>
              <code>"Primary"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>speed</code>
            </td>
            <td>스피너의 애니메이션 속도를 설정합니다.</td>
            <td>
              <code>"slow" | "medium" | "fast"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.7. Full Example</h2>
      <CodeBox_1.default code={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <div>
      <SquareSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`} copyText={`import { SquareSpinner } from '@components/Spinners/SquareSpinner';

function Example() {
  return (
    <div>
      <SquareSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">4. PacManSpinner</h1>
      <p>
        <code>PacManSpinner</code> 컴포넌트는 로딩 상태를 시각적으로 나타내기
        위해 사용되는 컴포넌트입니다. 크기, 색상, 속도를 커스터마이즈할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">4.1. Import</h2>
      <CodeBox_1.default code={`import { PacManSpinner } from '@componique/react';`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">4.2. Usage</h2>
      <p>
        {/* <PacManSpinner /> */}
        아래는 <code>PacManSpinner</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-y-4">
        <PacManSpinner_1.default />
      </div>
      <CodeBox_1.default code={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return <PacManSpinner />;
}

export default Example;`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return <PacManSpinner />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        4.3. Changing the Size of the PacManSpinner
      </h2>
      <p>
        <code>PacManSpinner</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본
        크기는 <code>small</code>입니다:
      </p>
      <ul>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기
        </li>
        <li>
          <code>large</code>: 큰 크기
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <PacManSpinner_1.default size="small"/>
        <PacManSpinner_1.default size="medium"/>
        <PacManSpinner_1.default size="large"/>
      </div>
      <CodeBox_1.default code={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner size="small" />
      <PacManSpinner size="medium" />
      <PacManSpinner size="large" />
    </>
  );
}

export default Example;`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner size="small" />
      <PacManSpinner size="medium" />
      <PacManSpinner size="large" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        4.4. Changing the Color of the PacManSpinner
      </h2>
      <p>
        <code>PacManSpinner</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본
        색상은 <code className="bg-Basic text-white">Basic</code>입니다:
      </p>
      <ul>
        <li>
          <code className="bg-Basic text-white">Basic</code>: 기본 색상
        </li>
        <li>
          <code className="bg-Primary text-white">Primary</code>: 주요 색상
        </li>
        <li>
          <code className="bg-gray text-white">gray</code>: 회색
        </li>
        <li>
          <code className="bg-Secondary text-white">Secondary</code>: 보조 색상
        </li>
        <li>
          <code className="bg-Success text-white">Success</code>: 성공 색상
        </li>
        <li>
          <code className="bg-Warning text-white">Warning</code>: 경고 색상
        </li>
        <li>
          <code className="bg-Danger text-white">Danger</code>: 위험 색상
        </li>
        <li>
          <code className="bg-white text-Gray">White</code>: 흰색
        </li>
      </ul>
      <CodeBox_1.default code={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner color="Basic" />
      <PacManSpinner color="Primary" />
      <PacManSpinner color="gray" />
      <PacManSpinner color="Secondary" />
      <PacManSpinner color="Success" />
      <PacManSpinner color="Warning" />
      <PacManSpinner color="Danger" />
      <PacManSpinner color="White" />
    </>
  );
}

export default Example;`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner color="Basic" />
      <PacManSpinner color="Primary" />
      <PacManSpinner color="gray" />
      <PacManSpinner color="Secondary" />
      <PacManSpinner color="Success" />
      <PacManSpinner color="Warning" />
      <PacManSpinner color="Danger" />
      <PacManSpinner color="White" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        4.5. Changing the Speed of the PacManSpinner
      </h2>
      <p>
        <code>PacManSpinner</code> 컴포넌트는 다양한 속도로 제공됩니다. 기본
        속도는 <code>medium</code>입니다:
      </p>
      <ul>
        <li>
          <code>slow</code>: 느린 속도
        </li>
        <li>
          <code>medium</code>: 중간 속도 (기본값)
        </li>
        <li>
          <code>fast</code>: 빠른 속도
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <PacManSpinner_1.default speed="slow"/>
        <PacManSpinner_1.default speed="medium"/>
        <PacManSpinner_1.default speed="fast"/>
      </div>
      <CodeBox_1.default code={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner speed="slow" />
      <PacManSpinner speed="medium" />
      <PacManSpinner speed="fast" />
    </>
  );
}

export default Example;`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <>
      <PacManSpinner speed="slow" />
      <PacManSpinner speed="medium" />
      <PacManSpinner speed="fast" />
    </>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">4.6. Props</h2>
      <p>
        <code>PacManSpinner</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>스피너의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"small"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>스피너의 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "gray" | "Secondary" | "Success" |
                "Warning" | "Danger" | "White"
              </code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>speed</code>
            </td>
            <td>스피너의 애니메이션 속도를 설정합니다.</td>
            <td>
              <code>"slow" | "medium" | "fast"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">4.7. Full Example</h2>
      <CodeBox_1.default code={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <div>
      <PacManSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`} copyText={`import { PacManSpinner } from '@components/Spinners/PacManSpinner';

function Example() {
  return (
    <div>
      <PacManSpinner size="large" color="Primary" speed="fast" />
    </div>
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">5. FullScreenSpinner</h1>
      <p>
        <code>FullScreenSpinner</code> 컴포넌트는 전체 화면에 로딩 스피너를
        표시하는 컴포넌트입니다. 모양(Shape)과 스피너의 종류를 커스터마이즈할 수
        있습니다.
      </p>

      <h2 className="text-[#2D3748]">5.1. Import</h2>
      <CodeBox_1.default code={`import { FullScreenSpinner } from '@componique/react';`} copyText={`import FullScreenSpinner from '@components/Spinners/FullScreenSpinner';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">5.2. Usage</h2>
      <p>
        아래는 <code>FullScreenSpinner</code> 컴포넌트의 기본 사용 예제입니다:
      </p>
      <div className="my-7 space-x-3 space-y-4">
        <Button_1.default onClick={() => showLoader("spinner1")} variant="flat">
          Show Basic spinner
        </Button_1.default>
        <FullScreenSpinner_1.default spinning={spinning["spinner1"]} shape="Basic"/>
      </div>
      <CodeBox_1.default code={`import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 1000); // 1초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner1')} variant="flat">
        Show Basic spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner1']} shape="Basic" />
    </>
  );
}

export default Example;`} copyText={`import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";
        
function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner1')} variant="flat">
        Show Basic spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner1']} shape="Basic" />
    </>
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">
        5.3. Changing the Shape of the FullScreenSpinner
      </h2>
      <p>
        <code>FullScreenSpinner</code> 컴포넌트는 다양한 모양으로 제공됩니다.
        기본 모양은 <code>Basic</code>입니다:
      </p>
      <ul>
        <li>
          <code>Basic</code>: 기본 스피너
        </li>
        <li>
          <code>Square</code>: 사각형 스피너
        </li>
        <li>
          <code>Bars</code>: 바 스피너
        </li>
      </ul>
      <div className="my-7 space-x-3 space-y-4">
        <Button_1.default onClick={() => showLoader("spinner2")}>
          Show Square spinner
        </Button_1.default>
        <FullScreenSpinner_1.default spinning={spinning["spinner2"]} shape="Square"/>
        <Button_1.default onClick={() => showLoader("spinner3")} variant="border">
          Show Bars spinner
        </Button_1.default>
        <FullScreenSpinner_1.default spinning={spinning["spinner3"]} shape="Bars"/>
      </div>
      <CodeBox_1.default code={`import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner2')} variant="flat">
        Show Square spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner2']} shape="Square" />
      <Button onClick={() => showLoader('spinner3')} variant="flat">
        Show Bars spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner3']} shape="Bars" />
    </>
  );
}

export default Example;`} copyText={`import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";

function Example() {
  const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});

  const showLoader = (key: string) => {
    setSpinning((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
    }, 3000); // 3초 동안 스피너를 표시한 후 숨김
  };

  return (
    <>
      <Button onClick={() => showLoader('spinner2')}>
        Show Square spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner2']} shape="Square" />
      <Button onClick={() => showLoader('spinner3')} variant="border">
        Show Bars spinner
      </Button>
      <FullScreenSpinner spinning={spinning['spinner3']} shape="Bars" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">5.4. Props</h2>
      <p>
        <code>FullScreenSpinner</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>spinning</code>
            </td>
            <td>스피너가 활성화될지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>shape</code>
            </td>
            <td>스피너의 모양을 설정합니다.</td>
            <td>
              <code>"Basic" | "Square" | "Bars"</code>
            </td>
            <td>
              <code>"Basic"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">5.5. Full Example</h2>
      <CodeBox_1.default code={`import { FullScreenSpinner } from '@componique/react';
        import { Button } from "@componique/react";
                
          function Example() {
            const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});
                
            const showLoader = (key: string) => {
              setSpinning((prev) => ({ ...prev, [key]: true }));
                
              etTimeout(() => {
              setSpinning((prev) => ({ ...prev, [key]: false }));
                }, 3000); // 3초 동안 스피너를 표시한 후 숨김
                  };
          return (
            <div>
            <Button onClick={() => showLoader('spinner3')} variant="border">
            Show Bars spinner
            </Button>
              <FullScreenSpinner spinning={true} shape="Square" />
            </div>
          );
        }
        
        export default Example;`} copyText={`import { FullScreenSpinner } from '@componique/react';
import { Button } from "@componique/react";
        
  function Example() {
    const [spinning, setSpinning] = useState<{ [key: string]: boolean }>({});
        
    const showLoader = (key: string) => {
      setSpinning((prev) => ({ ...prev, [key]: true }));
        
      etTimeout(() => {
      setSpinning((prev) => ({ ...prev, [key]: false }));
        }, 3000); // 3초 동안 스피너를 표시한 후 숨김
          };
  return (
    <div>
    <Button onClick={() => showLoader('spinner3')} variant="border">
    Show Bars spinner
    </Button>
      <FullScreenSpinner spinning={true} shape="Square" />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
exports.default = SpinnerDoc;
