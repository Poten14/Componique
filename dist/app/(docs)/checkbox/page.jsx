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
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CheckBoxDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [checkBoxStates, setCheckBoxStates] = (0, react_1.useState)({
        example: true,
        small: true,
        medium: true,
        large: true,
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        danger: true,
        solid: true,
        border: true,
        custom: true,
    });
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handleCheckBoxChange = (key) => (e) => {
        setCheckBoxStates((prevState) => ({
            ...prevState,
            [key]: e.target.checked,
        }));
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. CheckBox</h1>
      <p>
        <code>CheckBox</code> 컴포넌트는 사용자가 선택할 수 있는 체크박스를
        생성하기 위해 사용됩니다.
      </p>
      <p>
        다양한 크기, 색상, 변형 및 기타 옵션을 통해 다양한 스타일의 체크박스를
        구현할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';`} copyText={`import { CheckBox } from '@components/CheckBox';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <CheckBox_1.default description="Example CheckBox" checked={checkBoxStates.example} onChange={handleCheckBoxChange("example")}/>
      </div>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Example CheckBox" />
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Example CheckBox" />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">3. Size</h2>
      <p>
        <code>boxSize</code> prop을 이용하여 체크박스의 크기를 설정할 수
        있습니다. 가능한 값은 <code>small</code>, <code>medium</code>,
        <code>large</code>입니다.
      </p>
      <div className="space-y-4">
        <CheckBox_1.default boxSize="small" description="Small CheckBox" checked={checkBoxStates.small} onChange={handleCheckBoxChange("small")}/>
        <CheckBox_1.default boxSize="medium" description="Medium CheckBox" checked={checkBoxStates.medium} onChange={handleCheckBoxChange("medium")}/>
        <CheckBox_1.default boxSize="large" description="Large CheckBox" checked={checkBoxStates.large} onChange={handleCheckBoxChange("large")}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox boxSize="small" description="Small CheckBox" />
      <CheckBox boxSize="medium" description="Medium CheckBox" />
      <CheckBox boxSize="large" description="Large CheckBox" />
    </>
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox boxSize="small" description="Small CheckBox" />
      <CheckBox boxSize="medium" description="Medium CheckBox" />
      <CheckBox boxSize="large" description="Large CheckBox" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">4. Color</h2>
      <p>
        <code>color</code> prop을 이용하여 체크박스의 색상을 설정할 수 있습니다.
      </p>
      <p>
        가능한 값은 <code>primary</code>, <code>secondary</code>,
        <code>success</code>, <code>warning</code>, <code>danger</code>,{" "}
        <code>red</code>, <code>orange</code>, <code>yellow</code>,{" "}
        <code>green</code>, <code>blue</code>, <code>purple</code>,{" "}
        <code>pink</code>, <code>basic</code>입니다.
      </p>
      <div className="space-y-4">
        <CheckBox_1.default description="Primary CheckBox" color="primary" checked={checkBoxStates.primary} onChange={handleCheckBoxChange("primary")}/>
        <CheckBox_1.default description="Secondary CheckBox" color="secondary" checked={checkBoxStates.secondary} onChange={handleCheckBoxChange("secondary")}/>
        <CheckBox_1.default description="Success CheckBox" color="success" checked={checkBoxStates.success} onChange={handleCheckBoxChange("success")}/>
        <CheckBox_1.default description="Warning CheckBox" color="warning" checked={checkBoxStates.warning} onChange={handleCheckBoxChange("warning")}/>
        <CheckBox_1.default description="Danger CheckBox" color="danger" checked={checkBoxStates.danger} onChange={handleCheckBoxChange("danger")}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox" color="primary" />
      <CheckBox description="Secondary CheckBox" color="secondary" />
      <CheckBox description="Success CheckBox" color="success" />
      <CheckBox description="Warning CheckBox" color="warning" />
      <CheckBox description="Danger CheckBox" color="danger" />
    </>
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox" color="primary" />
      <CheckBox description="Secondary CheckBox" color="secondary" />
      <CheckBox description="Success CheckBox" color="success" />
      <CheckBox description="Warning CheckBox" color="warning" />
      <CheckBox description="Danger CheckBox" color="danger" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">5. Variant</h2>
      <p>
        <code>variant</code> prop을 이용하여 체크박스의 스타일 변형을 설정할 수
        있습니다.
      </p>
      <p>
        가능한 값은 <code>solid</code>와 <code>border</code>입니다.
      </p>
      <div className="space-y-4">
        <CheckBox_1.default description="Solid CheckBox" variant="solid" checked={checkBoxStates.solid} onChange={handleCheckBoxChange("solid")}/>
        <CheckBox_1.default description="Border CheckBox" variant="border" checked={checkBoxStates.border} onChange={handleCheckBoxChange("border")}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Solid CheckBox" variant="solid" />
      <CheckBox description="Border CheckBox" variant="border" />
    </>
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Solid CheckBox" variant="solid" />
      <CheckBox description="Border CheckBox" variant="border" />
    </>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">6. Variant Border의 Color</h2>
      <p>
        <code>variant</code> prop을 이용하여 체크박스의 스타일 변형을 설정할 수
        있습니다.
      </p>
      <p>
        <code>border</code> 스타일은 체크박스의 테두리만 색상이 적용되며, 체크된
        상태일 때 테두리 색상이 강조됩니다.
      </p>
      <div className="space-y-4">
        <CheckBox_1.default description="Primary CheckBox (Border)" color="primary" variant="border" checked={checkBoxStates.primary} onChange={handleCheckBoxChange("primary")}/>
        <CheckBox_1.default description="Secondary CheckBox (Border)" color="secondary" variant="border" checked={checkBoxStates.secondary} onChange={handleCheckBoxChange("secondary")}/>
        <CheckBox_1.default description="Success CheckBox (Border)" color="success" variant="border" checked={checkBoxStates.success} onChange={handleCheckBoxChange("success")}/>
        <CheckBox_1.default description="Warning CheckBox (Border)" color="warning" variant="border" checked={checkBoxStates.warning} onChange={handleCheckBoxChange("warning")}/>
        <CheckBox_1.default description="Danger CheckBox (Border)" color="danger" variant="border" checked={checkBoxStates.danger} onChange={handleCheckBoxChange("danger")}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox (Border)" color="primary" variant="border" />
      <CheckBox description="Secondary CheckBox (Border)" color="secondary" variant="border" />
      <CheckBox description="Success CheckBox (Border)" color="success" variant="border" />
      <CheckBox description="Warning CheckBox (Border)" color="warning" variant="border" />
      <CheckBox description="Danger CheckBox (Border)" color="danger" variant="border" />
    </>
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <>
      <CheckBox description="Primary CheckBox (Border)" color="primary" variant="border" />
      <CheckBox description="Secondary CheckBox (Border)" color="secondary" variant="border" />
      <CheckBox description="Success CheckBox (Border)" color="success" variant="border" />
      <CheckBox description="Warning CheckBox (Border)" color="warning" variant="border" />
      <CheckBox description="Danger CheckBox (Border)" color="danger" variant="border" />
    </>
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">7. Disabled</h2>
      <p>
        <code>disabled</code> prop을 이용하여 체크박스를 비활성화할 수 있습니다.
      </p>
      <div className="space-y-4">
        <CheckBox_1.default description="Disabled CheckBox" checked={checkBoxStates.example} disabled={true}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Disabled CheckBox" disabled={true} />
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox description="Disabled CheckBox" disabled={true} />
  );
}

export default Example;`} language="tsx" index={7} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">8. ClassName</h2>
      <p>
        <code>className</code> prop을 사용하여 <code>CheckBox</code> 컴포넌트의
        스타일을 커스터마이징할 수 있습니다.
      </p>
      <p>아래 예시는 체크하면 빨간색 배경이 되도록 커스터마이징한 것입니다.</p>
      <div className="space-y-4">
        <CheckBox_1.default variant="border" color="basic" className="checked:!bg-red-500" description="Custom ClassName CheckBox" checked={checkBoxStates.custom} onChange={handleCheckBoxChange("custom")}/>
      </div>
      <div className="my-7 space-y-4"/>
      <CodeBox_1.default code={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox
      variant="border"
      color="basic"
      className="checked:!bg-red-500"
      description="Custom ClassName CheckBox"
    />
  );
}

export default Example;`} copyText={`import { CheckBox } from '@components/CheckBox';

function Example() {
  return (
    <CheckBox
      variant="border"
      color="basic"
      className="checked:!bg-red-500"
      description="Custom ClassName CheckBox"
    />
  );
}

export default Example;`} language="tsx" index={8} copied={copied} handleCopy={handleCopy}/>

      <h2 className="pt-2 text-[#2D3748]">9. Props</h2>
      <p>
        <code>CheckBox</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>boxSize</code>
            </td>
            <td>CheckBox의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>CheckBox의 색상을 설정합니다.</td>
            <td>
              <code>
                "primary" | "secondary" | "success" | "warning" | "danger" |
                "red" | "orange" | "yellow" | "green" | "blue" | "purple" |
                "pink" | "basic"
              </code>
            </td>
            <td>
              <code>"basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>CheckBox의 스타일 변형을 설정합니다.</td>
            <td>
              <code>"solid" | "border"</code>
            </td>
            <td>
              <code>"solid"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>description</code>
            </td>
            <td>CheckBox 옆에 표시되는 설명 텍스트입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>CheckBox의 추가 스타일을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>CheckBox를 비활성화 상태로 만듭니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>CheckBox의 상태가 변경될 때 호출되는 핸들러입니다.</td>
            <td>
              <code>{"(e: React.ChangeEvent<HTMLInputElement>) => void"}</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>);
};
exports.default = CheckBoxDoc;
