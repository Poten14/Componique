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
const Textarea_1 = __importDefault(require("@components/Textarea/Textarea"));
const TextareaValue_1 = __importDefault(require("@components/Textarea/TextareaValue"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const TextareaDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Textarea</h1>
      <p>
        <code>Textarea</code> 컴포넌트는 사용자가 긴 텍스트를 입력할 수 있도록
        설계된 입력 필드입니다. 크기, 색상, 및 크기 조절 가능 여부를 조정하여
        다양한 스타일을 적용할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';`} copyText={`import Textarea from '@components/Textarea';`} language="tsx" index={1} copied={copied} handleCopy={() => handleCopy(1)}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <Textarea_1.default label="Description" id="description" placeholder="Enter your text here"/>
      </div>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <Textarea
      label="Description"
      id="description"
      placeholder="Enter your text here"
    />
  );
}

export default Example;`} copyText={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <Textarea
      label="Description"
      id="description"
      placeholder="Enter your text here"
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={() => handleCopy(2)}/>

      <h2 className="text-[#2D3748]">1.3. Changing the Size of the Textarea</h2>
      <p>
        <code>Textarea</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
        <code>large</code>입니다:
      </p>
      <ul>
        <li>
          <code>xs</code>: 아주 작은 크기
        </li>
        <li>
          <code>small</code>: 작은 크기
        </li>
        <li>
          <code>medium</code>: 중간 크기
        </li>
        <li>
          <code>large</code>: 큰 크기 (기본값)
        </li>
        <li>
          <code>xl</code>: 아주 큰 크기
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Textarea_1.default label="Extra Small Size" id="xs" size="xs" placeholder="Extra small size"/>
        <Textarea_1.default label="Small Size" id="small" size="small" placeholder="Small size"/>
        <Textarea_1.default label="Medium Size" id="medium" size="medium" placeholder="Medium size"/>
        <Textarea_1.default label="Large Size" id="large" size="large" placeholder="Large size"/>
        <Textarea_1.default label="Extra Large Size" id="xl" size="xl" placeholder="Extra large size"/>
      </div>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Extra Small Size" id="xs" size="xs" placeholder="Extra small size" />
      <Textarea label="Small Size" id="small" size="small" placeholder="Small size" />
      <Textarea label="Medium Size" id="medium" size="medium" placeholder="Medium size" />
      <Textarea label="Large Size" id="large" size="large" placeholder="Large size" />
      <Textarea label="Extra Large Size" id="xl" size="xl" placeholder="Extra large size" />
    </>
  );
}

export default Example;`} copyText={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Extra Small Size" id="xs" size="xs" placeholder="Extra small size" />
      <Textarea label="Small Size" id="small" size="small" placeholder="Small size" />
      <Textarea label="Medium Size" id="medium" size="medium" placeholder="Medium size" />
      <Textarea label="Large Size" id="large" size="large" placeholder="Large size" />
      <Textarea label="Extra Large Size" id="xl" size="xl" placeholder="Extra large size" />
    </>
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={() => handleCopy(3)}/>

      <h2 className="text-[#2D3748]">
        1.4. Changing the Color of the Textarea
      </h2>
      <p>
        <code>Textarea</code> 컴포넌트는 다양한 색상으로 제공됩니다. 기본 색상은{" "}
        <code>skyblue</code>입니다:
      </p>
      <ul>
        <li>
          <code>red</code>: 빨간색 테두리
        </li>
        <li>
          <code>skyblue</code>: 파란색 테두리 (기본값)
        </li>
        <li>
          <code>green</code>: 초록색 테두리
        </li>
        <li>
          <code>gray</code>: 회색 테두리
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Textarea_1.default label="Red Color" id="red" color="red" placeholder="Red color"/>
        <Textarea_1.default label="Skyblue Color" id="skyblue" color="skyblue" placeholder="Skyblue color"/>
        <Textarea_1.default label="Green Color" id="green" color="green" placeholder="Green color"/>
        <Textarea_1.default label="Gray Color" id="gray" color="gray" placeholder="Gray color"/>
      </div>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Red Color" id="red" color="red" placeholder="Red color" />
      <Textarea label="Skyblue Color" id="skyblue" color="skyblue" placeholder="Skyblue color" />
      <Textarea label="Green Color" id="green" color="green" placeholder="Green color" />
      <Textarea label="Gray Color" id="gray" color="gray" placeholder="Gray color" />
    </>
  );
}

export default Example;`} copyText={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="Red Color" id="red" color="red" placeholder="Red color" />
      <Textarea label="Skyblue Color" id="skyblue" color="skyblue" placeholder="Skyblue color" />
      <Textarea label="Green Color" id="green" color="green" placeholder="Green color" />
      <Textarea label="Gray Color" id="gray" color="gray" placeholder="Gray color" />
    </>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={() => handleCopy(4)}/>

      <h2 className="text-[#2D3748]">1.5. Changing the Resize Property</h2>
      <p>
        <code>Textarea</code> 컴포넌트는 다양한 크기 조절 가능 여부를 설정할 수
        있습니다. 기본 <code>resize</code> 속성은 <code>vertical</code>입니다:
      </p>
      <ul>
        <li>
          <code>none</code>: 크기 조절 불가
        </li>
        <li>
          <code>both</code>: 가로 및 세로 크기 조절 가능
        </li>
        <li>
          <code>horizontal</code>: 가로 크기만 조절 가능
        </li>
        <li>
          <code>vertical</code>: 세로 크기만 조절 가능 (기본값)
        </li>
      </ul>
      <div className="my-7 space-y-4">
        <Textarea_1.default label="No Resize" id="resize-none" resize="none" placeholder="Resize disabled"/>
        <Textarea_1.default label="Resize Both" id="resize-both" resize="both" placeholder="Resize in both directions"/>
        <Textarea_1.default label="Resize Horizontal" id="resize-horizontal" resize="horizontal" placeholder="Resize horizontally"/>
        <Textarea_1.default label="Resize Vertical" id="resize-vertical" resize="vertical" placeholder="Resize vertically"/>
      </div>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="No Resize" id="resize-none" resize="none" placeholder="Resize disabled" />
      <Textarea label="Resize Both" id="resize-both" resize="both" placeholder="Resize in both directions" />
      <Textarea label="Resize Horizontal" id="resize-horizontal" resize="horizontal" placeholder="Resize horizontally" />
      <Textarea label="Resize Vertical" id="resize-vertical" resize="vertical" placeholder="Resize vertically" />
    </>
  );
}

export default Example;`} copyText={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <>
      <Textarea label="No Resize" id="resize-none" resize="none" placeholder="Resize disabled" />
      <Textarea label="Resize Both" id="resize-both" resize="both" placeholder="Resize in both directions" />
      <Textarea label="Resize Horizontal" id="resize-horizontal" resize="horizontal" placeholder="Resize horizontally" />
      <Textarea label="Resize Vertical" id="resize-vertical" resize="vertical" placeholder="Resize vertically" />
    </>
  );
}

export default Example;`} language="tsx" index={5} copied={copied} handleCopy={() => handleCopy(5)}/>

      <h2 className="text-[#2D3748]">1.6. Props</h2>
      <p>
        <code>Textarea</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>label</code>
            </td>
            <td>Textarea 필드의 레이블을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>id</code>
            </td>
            <td>Textarea 필드의 id 속성을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>Textarea 필드의 크기를 설정합니다.</td>
            <td>
              <code>"xs" | "small" | "medium" | "large" | "xl"</code>
            </td>
            <td>
              <code>"large"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>Textarea 필드의 테두리 색상을 설정합니다.</td>
            <td>
              <code>"red" | "skyblue" | "green" | "gray"</code>
            </td>
            <td>
              <code>"skyblue"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>resize</code>
            </td>
            <td>Textarea 필드의 크기 조절 가능 여부를 설정합니다.</td>
            <td>
              <code>"none" | "both" | "horizontal" | "vertical"</code>
            </td>
            <td>
              <code>"vertical"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>Textarea 필드에 추가적인 CSS 클래스를 적용합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>placeholder</code>
            </td>
            <td>Textarea 필드에 표시될 플레이스홀더 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.7. Full Example</h2>
      <CodeBox_1.default code={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <div>
      <Textarea 
        label="Description" 
        id="description" 
        size="large" 
        color="gray" 
        resize="none" 
        placeholder="Enter your text here" 
        className="mt-4"
      />
    </div>
  );
}

export default Example;`} copyText={`import Textarea from '@components/Textarea';

function Example() {
  return (
    <div>
      <Textarea 
        label="Description" 
        id="description" 
        size="large" 
        color="gray" 
        resize="none" 
        placeholder="Enter your text here" 
        className="mt-4"
      />
    </div>
  );
}

export default Example;`} language="tsx" index={6} copied={copied} handleCopy={() => handleCopy(6)}/>

      <hr />
      <h1 className="text-[#2D3748]">2. TextareaValue</h1>
      <p>
        <code>TextareaValue</code> 컴포넌트는 텍스트 영역에 입력된 값을
        실시간으로 표시하는 기능을 제공합니다. 사용자가 입력한 내용이 화면에
        즉시 반영됩니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox_1.default code={`import TextareaValue from '@components/TextareaValue';`} copyText={`import TextareaValue from '@components/TextareaValue';`} language="tsx" index={7} copied={copied} handleCopy={() => handleCopy(7)}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7 space-y-4">
        <TextareaValue_1.default placeholder="Type something..." value="Initial text" onChange={(e) => console.log(e.target.value)}/>
      </div>
      <CodeBox_1.default code={`import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("Initial text");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <TextareaValue 
      placeholder="Type something..." 
      value={text}
      onChange={handleChange}
    />
  );
}

export default Example;`} copyText={`import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("Initial text");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <TextareaValue 
      placeholder="Type something..." 
      value={text}
      onChange={handleChange}
    />
  );
}

export default Example;`} language="tsx" index={8} copied={copied} handleCopy={() => handleCopy(8)}/>

      <h2 className="text-[#2D3748]">2.3. Props</h2>
      <p>
        <code>TextareaValue</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>placeholder</code>
            </td>
            <td>텍스트 영역에 표시될 플레이스홀더 텍스트를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td>텍스트 영역의 값을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>텍스트 영역의 값이 변경될 때 호출되는 핸들러입니다.</td>
            <td>
              <code>(e: React.ChangeEvent&lt;HTMLTextAreaElement&gt;)</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.4. Full Example</h2>
      <CodeBox_1.default code={`import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextareaValue 
        placeholder="Type your message here..." 
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Example;`} copyText={`import TextareaValue from '@components/TextareaValue';

function Example() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextareaValue 
        placeholder="Type your message here..." 
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Example;`} language="tsx" index={9} copied={copied} handleCopy={() => handleCopy(9)}/>
    </div>);
};
exports.default = TextareaDocs;
