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
const Skeleton_1 = __importDefault(require("@components/Skeleton/Skeleton"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const SkeletonCard_1 = __importDefault(require("@components/Skeleton/SkeletonCard"));
const SkeletonDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Skeleton</h1>
      <p>
        <code>Skeleton</code> 컴포넌트는 로딩 상태에서 사용자에게 시각적인
        피드백을 제공하기 위해 사용됩니다. 다양한 크기, 모양, 애니메이션 옵션을
        제공하여 유연하게 사용할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox_1.default code={`import { Skeleton } from '@components/Skeleton';`} copyText={`import { Skeleton } from '@components/Skeleton';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <Skeleton_1.default size="medium" variants="rounded" animate={true}/>
      </div>
      <CodeBox_1.default code={`import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <Skeleton size="medium" variants="rounded" animate={true} />
  );
}

export default Example;`} copyText={`import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <Skeleton size="medium" variants="rounded" animate={true} />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.3. Props</h2>
      <p>
        <code>Skeleton</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              Skeleton의 크기를 설정합니다. `small`, `medium`, `large` 중 하나를
              선택할 수 있습니다.
            </td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"small"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variants</code>
            </td>
            <td>
              Skeleton의 모양을 설정합니다. `rounded` 또는 `rectangular` 중
              하나를 선택할 수 있습니다.
            </td>
            <td>
              <code>"rounded" | "rectangular"</code>
            </td>
            <td>
              <code>"rectangular"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>animate</code>
            </td>
            <td>로딩 애니메이션을 활성화할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.4. Full Example</h2>
      <CodeBox_1.default code={`import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <div>
      <Skeleton size="large" variants="rectangular" animate={false} />
    </div>
  );
}

export default Example;`} copyText={`import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <div>
      <Skeleton size="large" variants="rectangular" animate={false} />
    </div>
  );`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <br />
      <br />
      <h1 className="text-[#2D3748]">2. SkeletonCard</h1>
      <p>
        <code>SkeletonCard</code> 컴포넌트는 로딩 상태를 시각적으로 나타내기
        위한 스켈레톤 UI를 제공합니다. 카드 형태로 다양한 속성을 조정하여 맞춤형
        스켈레톤 카드를 만들 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox_1.default code={`import SkeletonCard from '@components/SkeletonCard';`} copyText={`import SkeletonCard from '@components/SkeletonCard';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <SkeletonCard_1.default width="w-2/5"/>
      </div>
      <CodeBox_1.default code={`import SkeletonCard from '@components/SkeletonCard';
function Example() {
  return <SkeletonCard />;
}

export default Example;`} copyText={`import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return <SkeletonCard />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.3. Customizing SkeletonCard</h2>
      <p>
        <code>SkeletonCard</code> 컴포넌트는 다양한 속성을 통해 사용자 정의할 수
        있습니다. 카드의 크기, 이미지 유무, 아바타 표시 여부, 애니메이션 효과
        등을 설정할 수 있습니다.
      </p>

      <div className="my-7 flex flex-wrap gap-4">
        <SkeletonCard_1.default width="w-1/4"/>
        <SkeletonCard_1.default width="w-1/5" hasAvatar={false}/>
        <SkeletonCard_1.default width="w-1/4" hasImage={false}/>
        <SkeletonCard_1.default width="w-1/4" animate={false}/>
      </div>

      <CodeBox_1.default code={`import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <>
      <SkeletonCard width="w-1/4" />
      <SkeletonCard width="w-1/5" hasAvatar={false} />
      <SkeletonCard width="w-1/4" hasImage={false} />
      <SkeletonCard width="w-1/4" animate={false} />
    </>
  );
}

export default Example;`} copyText={`import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <>
      <SkeletonCard width="w-1/4" />
      <SkeletonCard width="w-1/5" hasAvatar={false} />
      <SkeletonCard width="w-1/4" hasImage={false} />
      <SkeletonCard width="w-1/4" animate={false} />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>SkeletonCard</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>width</code>
            </td>
            <td>카드의 너비를 설정합니다. TailwindCSS 클래스를 사용합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"w-1/5"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>카드의 높이를 설정합니다. TailwindCSS 클래스를 사용합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"h-auto"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imageHeight</code>
            </td>
            <td>
              이미지의 높이를 설정합니다. TailwindCSS 클래스를 사용합니다.
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"h-48"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hasAvatar</code>
            </td>
            <td>아바타를 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hasImage</code>
            </td>
            <td>이미지를 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>animate</code>
            </td>
            <td>스켈레톤 카드에 애니메이션을 적용할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox_1.default code={`import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <div>
      <SkeletonCard width="w-2/5" />
    </div>
  );
}

export default Example;`} copyText={`import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <div>
      <SkeletonCard width="w-2/5" />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
exports.default = SkeletonDocs;
