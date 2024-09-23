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
const AvatarBasic_1 = __importDefault(require("@components/Avatar/AvatarBasic"));
const AvatarLabel_1 = __importDefault(require("@components/Avatar/AvatarLabel"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const AvatarBasicDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* avatar1 */}
      <div>
        <h1 className="text-[#2D3748] dark:text-white">1. AvatarBasic</h1>
        <p>
          <code>AvatarBasic</code> 컴포넌트는 사용자의 아바타를 표시할 수 있는
          컴포넌트입니다. 이미지 또는 사용자의 이름 이니셜을 아바타로 표시할 수
          있으며, 크기와 이니셜을 설정할 수 있습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox_1.default code={`import AvatarBasic from '@components/Avatar/AvatarBasic';`} copyText={`import AvatarBasic from '@components/Avatar/AvatarBasic';`} language="tsx" index={0} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>

        <h3 className="text-[#2D3748] dark:text-white">
          1) 이미지가 있는 경우
        </h3>
        <div style={{ marginBottom: "20px" }}>
          <AvatarBasic_1.default src="/avatar1.svg" // public 폴더에 위치한 이미지 경로
     alt="User Avatar" size={80}/>
        </div>
        <CodeBox_1.default code={`import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithImage() {
  return (
    <AvatarBasic
      src="/images/avatar1.svg"
      alt="User Avatar"
      size={80}
    />
  );
}

export default ExampleWithImage;`} copyText={`import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithImage() {
  return (
    <AvatarBasic
      src="/images/avatar1.svg"
      alt="User Avatar"
      size={80}
    />
  );
}

export default ExampleWithImage;`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h3 className="text-[#2D3748] dark:text-white">
          2) 이미지가 없는 경우 (이니셜 사용)
        </h3>
        <div style={{ marginBottom: "20px" }}>
          <AvatarBasic_1.default initial="CQ" size={80}/>
        </div>
        <CodeBox_1.default code={`import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithInitial() {
  return <AvatarBasic initial="JD" size={80} />;
}

export default ExampleWithInitial;`} copyText={`import AvatarBasic from '@components/Avatar/AvatarBasic';

function ExampleWithInitial() {
  return <AvatarBasic initial="JD" size={80} />;
}

export default ExampleWithInitial;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
        <p>
          <code>AvatarBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>src</code>
              </td>
              <td>아바타로 사용할 이미지의 URL.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>alt</code>
              </td>
              <td>이미지의 대체 텍스트.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>initial</code>
              </td>
              <td>이미지가 없을 때 표시할 이니셜 텍스트 (최대 5자 권장).</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>아바타의 크기를 픽셀 단위로 설정.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>100</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
        <CodeBox_1.default code={`import { useState } from "react";

interface AvatarBasicProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
}

const AvatarBasic = ({ src, alt, initial, size = 100 }: AvatarBasicProps) => {
  return (
    <div
      className="m-2 flex flex-shrink-0 items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
    </div>
  );
};

export default AvatarBasic;`} copyText={`import { useState } from "react";

interface AvatarBasicProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
}

const AvatarBasic = ({ src, alt, initial, size = 100 }: AvatarBasicProps) => {
  return (
    <div
      className="m-2 flex flex-shrink-0 items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
    </div>
  );
};

export default AvatarBasic;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>
      </div>
      <hr />
      {/* avatar2 */}
      <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
        <h1 className="text-[#2D3748] dark:text-white">2. AvatarLabel</h1>
        <p>
          <code>AvatarLabel</code> 컴포넌트는 사용자의 아바타와 함께 라벨을
          표시할 수 있는 컴포넌트입니다. 이미지 또는 사용자의 이름 이니셜을
          아바타로 표시할 수 있으며, 크기와 라벨을 설정할 수 있습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox_1.default code={`import AvatarLabel from '@components/Avatar/AvatarLabel';`} copyText={`import AvatarLabel from '@components/Avatar/AvatarLabel';`} language="tsx" index={0} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="-scroll-my-72">
          <AvatarLabel_1.default src="/avatar1.svg" initial="CQ" size={80} label="Com_Que"/>
        </div>
        <CodeBox_1.default code={`import AvatarLabel from '@components/Avatar/AvatarLabel';

function Example() {
  return <AvatarLabel initial="JD" size={80} label="John Doe" />;
}

export default Example;`} copyText={`import AvatarLabel from '@components/Avatar/AvatarLabel';

function Example() {
  return <AvatarLabel initial="JD" size={80} label="John Doe" />;
}

export default Example;`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
        <p>
          <code>AvatarLabel</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
                <code>src</code>
              </td>
              <td>아바타로 사용할 이미지의 URL.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>alt</code>
              </td>
              <td>이미지의 대체 텍스트.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>undefined</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>initial</code>
              </td>
              <td>이미지가 없을 때 표시할 이니셜 텍스트 (최대 5자 권장).</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>아바타의 크기를 픽셀 단위로 설정.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>50</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>아바타 옆에 표시될 라벨 텍스트.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748] dark:text-white">2.4. Full Example</h2>
        <CodeBox_1.default code={`interface AvatarLabelProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
  label: string;
}

const AvatarLabel = ({
  src,
  alt,
  initial,
  size = 50,
  label,
}: AvatarLabelProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${sWize * 0.2}px\`,
      }}
    >
      {!src && initial}
      <span>{label}</span>W
    </div>
  );
};

export default AvatarLabel;`} copyText={`interface AvatarLabelProps {
  src?: string;
  alt?: string;
  initial?: string;
  size?: number;
  label: string;
}

const AvatarLabel = ({
  src,
  alt,
  initial,
  size = 50,
  label,
}: AvatarLabelProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        backgroundImage: src ? \`url(\${src})\` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: \`\${size * 0.2}px\`,
      }}
    >
      {!src && initial}
      <span>{label}</span>
    </div>
  );
};

export default AvatarLabel;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
exports.default = AvatarBasicDocs;
