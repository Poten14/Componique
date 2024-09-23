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
const navigation_1 = require("next/navigation");
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const IconDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const iconNames = [
        "icon-login",
        "icon-logout",
        "icon-qr",
        "icon-reload",
        "icon-star",
        "icon-undo",
        "icon-bell",
        "icon-bell-off",
        "icon-bell-ring",
        "icon-call",
        "icon-camera",
        "icon-code",
        "icon-download",
        "icon-error",
        "icon-heart",
        "icon-help",
        "icon-home",
        "icon-image",
        "icon-info",
        "icon-web",
        "icon-mail",
        "icon-map",
        "icon-menu",
        "icon-pin",
        "icon-refresh",
        "icon-setting",
        "icon-share",
        "icon-user",
        "icon-video",
        "icon-docs",
        "icon-check",
        "icon-search",
        "icon-docs2",
        "icon-github",
        "icon-blog",
        "icon-comment",
        "icon-lock",
        "icon-unlock",
        "icon-bin",
        "icon-clip",
        "icon-emptyBookmark",
        "icon-bookmark",
        "icon-pencil",
        "icon-pen",
        "icon-music",
        "icon-wifi",
        "icon-sun",
        "icon-moon",
        "icon-play",
        "icon-pause",
        "icon-plus",
        "icon-minus",
        "icon-close",
        "icon-arrowUp",
        "icon-arrowDown",
        "icon-emptyHeart",
        "icon-heart",
        "icon-next",
        "icon-prev",
        "icon-up",
        "icon-down",
        "icon-github2",
        "icon-facebook",
        "icon-twitter",
        "icon-linkedin",
        "icon-line",
        "icon-instagram",
    ];
    const router = (0, navigation_1.useRouter)();
    return (<div className="prose w-[850px] max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Icon</h1>
      <p>
        <code>Icon</code> 컴포넌트는 다양한 SVG 아이콘을 폰트로 사용하여 웹 에서
        손쉽게 아이콘을 추가할 수 있게 해줍니다.
      </p>
      <p>
        이 컴포넌트는 아이콘의 크기, 색상, 추가적인 클래스 이름을 통해
        스타일링할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>

      <CodeBox_1.default code={`import Icon from '@components/Icon';`} copyText={`import Icon from '@components/Icon';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Icon_1.default name="icon-home"/>
      </div>
      <CodeBox_1.default code={`import Icon from '@components/Icon';

function Example() {
  return (
    <Icon name="icon-home" />
  );
}

export default Example;`} copyText={`import Icon from '@components/Icon';

function Example() {
  return (
    <Icon name="icon-home" />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">2. Size</h2>
      <p>
        <code>size</code> prop을 이용하여 아이콘의 크기를 설정할 수 있습니다.
        기본값은 <code>16</code>입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <Icon_1.default name="icon-star" size={16}/>
        <Icon_1.default name="icon-star" size={24}/>
        <Icon_1.default name="icon-star" size={32}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-star" size={16} />
      <Icon name="icon-star" size={24} />
      <Icon name="icon-star" size={32} />
    </>
  );
}

export default Example;`} copyText={`import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-star" size={16} />
      <Icon name="icon-star" size={24} />
      <Icon name="icon-star" size={32} />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">3. Color</h2>
      <p>
        <code>color</code> prop을 이용하여 아이콘의 색상을 설정할 수 있습니다.
        기본값은 <code>currentColor</code>입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <Icon_1.default name="icon-heart" color="red"/>
        <Icon_1.default name="icon-heart" color="green"/>
        <Icon_1.default name="icon-heart" color="blue"/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-heart" color="red" />
      <Icon name="icon-heart" color="green" />
      <Icon name="icon-heart" color="blue" />
    </>
  );
}

export default Example;`} copyText={`import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-heart" color="red" />
      <Icon name="icon-heart" color="green" />
      <Icon name="icon-heart" color="blue" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">4. All Icons</h2>
      <p>아래는 모든 아이콘을 표시한 예제입니다.</p>
      <div className="grid grid-cols-4 gap-4">
        {iconNames.map((iconName) => (<div key={iconName} className="flex items-center space-x-2">
            <Icon_1.default name={iconName} size={24}/>
            <span>{iconName}</span>
          </div>))}
      </div>

      <h2 className="text-[#2D3748]">5. Props</h2>
      <p>
        <code>Icon</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>사용할 아이콘의 이름을 지정합니다.</td>
            <td>
              <code>IconName</code>
            </td>
            <td>필수</td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>아이콘의 크기를 설정합니다. (픽셀 단위)</td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>16</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>아이콘의 색상을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>currentColor</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>추가적인 스타일링을 위한 클래스 이름을 지정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-[#2D3748]">6. Example with Button</h2>
      <p>아이콘을 포함한 버튼의 예제입니다:</p>
      <div className="space-x-4 space-y-4">
        <Button_1.default icon="icon-home" color="secondary" iconSize="small" size="small">
          Home small
        </Button_1.default>
        <Button_1.default icon="icon-docs" color="warning" iconSize="medium">
          Docs
        </Button_1.default>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { Button } from '@components/Button';

function Example() {
  return (
    <>
      <Button
        icon="icon-home"
        color="secondary"
        iconSize="small"
        size="small"
      >
        Home small
      </Button>
      <Button icon="icon-docs" color="warning" iconSize="medium">
        Docs
      </Button>
    </>
  );
}

export default Example;`} copyText={`import { Button } from '@components/Button';

function Example() {
  return (
    <>
      <Button
        icon="icon-home"
        color="secondary"
        iconSize="small"
        size="small"
      >
        Home small
      </Button>
      <Button icon="icon-docs" color="warning" iconSize="medium">
        Docs
      </Button>
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>
      <h2>7. 버튼에 대해 더 자세히 알고 싶다면?</h2>
      <p>
        Button 컴포넌트에 대한 자세한 설명은 아래의 버튼을 클릭하면 이동합니다.
      </p>
      <Button_1.default onClick={() => {
            router.push("/button");
        }}>
        Button Docs로 이동
      </Button_1.default>
    </div>);
};
exports.default = IconDoc;
