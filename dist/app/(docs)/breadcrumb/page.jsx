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
const BreadCrumb_1 = __importDefault(require("@components/BreadCrumb/BreadCrumb"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const BreadCrumbSlash_1 = __importDefault(require("@components/BreadCrumb/BreadCrumbSlash"));
const BreadCrumbDropdown_1 = __importDefault(require("@components/BreadCrumb/BreadCrumbDropdown"));
const BreadCrumbDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. BreadCrumb</h1>
      <p>
        <code>BreadCrumb</code> 컴포넌트는 웹 페이지 내에서 사용자가 현재 위치한
        페이지의 경로를 나타내는 내비게이션 요소입니다. 각 경로는 화살표
        아이콘으로 구분되며, 링크를 클릭하여 다른 페이지로 이동할 수 있습니다.
        활성 상태 및 호버 상태에 따라 색상을 변경할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox_1.default code={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';`} copyText={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <BreadCrumb_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            { children: "Breadcrumb" },
        ]}/>
      </div>
      <CodeBox_1.default code={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`} copyText={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.3. Customizing BreadCrumb</h2>
      <p>
        <code>BreadCrumb</code> 컴포넌트는 다양한 색상 옵션을 통해 호버 및 활성
        상태의 링크 색상을 사용자 정의할 수 있습니다.
      </p>

      <div className="my-7">
        <BreadCrumb_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            { children: "Breadcrumb" },
        ]} hoverColor="Basic" activeColor="Basic"/>
      </div>

      <CodeBox_1.default code={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`} copyText={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.4. Props</h2>
      <p>
        <code>BreadCrumb</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>items</code>
            </td>
            <td>각 링크를 나타내는 객체들의 배열입니다.</td>
            <td>
              <code>{`{ href?: string, className?: string, children: React.ReactNode }[]`}</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hoverColor</code>
            </td>
            <td>링크에 마우스를 올렸을 때의 색상을 설정합니다.</td>
            <td>
              <code>"black" | "Basic" | "Primary" | "Danger"</code>
            </td>
            <td>
              <code>"black"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>activeColor</code>
            </td>
            <td>활성화된 링크의 색상을 설정합니다.</td>
            <td>
              <code>"black" | "Basic" | "Primary" | "Danger"</code>
            </td>
            <td>
              <code>"black"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.5. Full Example</h2>
      <CodeBox_1.default code={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <div>
      <BreadCrumb
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Basic"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`} copyText={`import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <div>
      <BreadCrumb
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Basic"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      <hr />
      <h1 className="text-[#2D3748]">2. BreadCrumbSlash</h1>
      <p>
        <code>BreadCrumbSlash</code> 컴포넌트는 웹 페이지 내에서 사용자가 현재
        위치한 페이지의 경로를 나타내는 내비게이션 요소입니다. 각 경로는
        슬래시(/) 기호로 구분되며, 링크를 클릭하여 다른 페이지로 이동할 수
        있습니다. 활성 상태 및 호버 상태에 따라 색상을 변경할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox_1.default code={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';`} copyText={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <BreadCrumbSlash_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            { children: "Breadcrumb" },
        ]}/>
      </div>
      <CodeBox_1.default code={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`} copyText={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.3. Customizing BreadCrumbSlash</h2>
      <p>
        <code>BreadCrumbSlash</code> 컴포넌트는 다양한 색상 옵션을 통해 호버 및
        활성 상태의 링크 색상을 사용자 정의할 수 있습니다.
      </p>

      <div className="my-7">
        <BreadCrumbSlash_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            { children: "Breadcrumb" },
        ]} hoverColor="Basic" activeColor="Basic"/>
      </div>

      <CodeBox_1.default code={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`} copyText={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>BreadCrumbSlash</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>items</code>
            </td>
            <td>각 링크를 나타내는 객체들의 배열입니다.</td>
            <td>
              <code>{`{ href?: string, className?: string, children: React.ReactNode }[]`}</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hoverColor</code>
            </td>
            <td>링크에 마우스를 올렸을 때의 색상을 설정합니다.</td>
            <td>
              <code>"black" | "Basic" | "Primary" | "Danger"</code>
            </td>
            <td>
              <code>"black"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>activeColor</code>
            </td>
            <td>활성화된 링크의 색상을 설정합니다.</td>
            <td>
              <code>"black" | "Basic" | "Primary" | "Danger"</code>
            </td>
            <td>
              <code>"black"</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox_1.default code={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <div>
      <BreadCrumbSlash
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Primary"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`} copyText={`import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <div>
      <BreadCrumbSlash
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Primary"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <h1 className="text-[#2D3748]">3. BreadCrumbDropdown</h1>
      <p>
        <code>BreadCrumbDropdown</code> 컴포넌트는 웹 페이지 내에서 사용자가
        현재 위치한 페이지의 경로를 나타내는 내비게이션 요소로, 드롭다운 메뉴를
        통해 추가적인 경로를 선택할 수 있는 기능을 제공합니다. 사용자는 드롭다운
        메뉴에서 옵션을 선택하거나 직접 링크를 클릭하여 이동할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">3.1. Import</h2>
      <CodeBox_1.default code={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';`} copyText={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <BreadCrumbDropdown_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
                children: "Components",
                dropdownItems: [
                    { label: "Button", href: "/docs/button" },
                    { label: "Input", href: "/docs/input" },
                ],
            },
        ]}/>
      </div>
      <CodeBox_1.default code={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        {
          children: "Components",
          dropdownItems: [
            { label: "Button", href: "/docs/button" },
            { label: "Input", href: "/docs/input" },
          ],
        },
      ]}
    />
  );
}

export default Example;`} copyText={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        {
          children: "Components",
          dropdownItems: [
            { label: "Button", href: "/docs/button" },
            { label: "Input", href: "/docs/input" },
          ],
        },
      ]}
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.3. Customizing BreadCrumbDropdown</h2>
      <p>
        <code>BreadCrumbDropdown</code> 컴포넌트는 다양한 드롭다운 메뉴를
        지원하며, 각 경로에 대해 여러 개의 드롭다운 항목을 추가할 수 있습니다.
        이러한 옵션은 사용자가 특정 경로와 관련된 여러 페이지로 쉽게 이동할 수
        있도록 합니다.
      </p>

      <div className="my-7">
        <BreadCrumbDropdown_1.default items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
                children: "Components",
                dropdownItems: [
                    { label: "Home", href: "/" },
                    { label: "Breadcrumb", href: "/components/breadcrumb" },
                    { label: "UserPage", href: "/userpage" },
                ],
            },
            { children: "Breadcrumb" },
        ]}/>
      </div>

      <CodeBox_1.default code={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
     items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
    />
  );
}

export default Example;`} copyText={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
     items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.4. Props</h2>
      <p>
        <code>BreadCrumbDropdown</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>items</code>
            </td>
            <td>각 링크와 드롭다운 항목을 나타내는 객체들의 배열입니다.</td>
            <td>
              <code>{`{ href?: string, className?: string, children: React.ReactNode, dropdownItems?: { label: string, href: string }[] }[]`}</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.5. Full Example</h2>
      <CodeBox_1.default code={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <div>
      <BreadCrumbDropdown
      items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
      />
    </div>
  );
}

export default Example;`} copyText={`import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <div>
      <BreadCrumbDropdown
        items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
exports.default = BreadCrumbDocs;
