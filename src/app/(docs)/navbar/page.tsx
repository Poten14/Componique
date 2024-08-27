"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Logo from "../../../../public/images/logo.svg";
import Navbar from "@components/Navbar/Navbar";
import NavbarSearch from "@components/Navbar/NavbarSearch";

const NavbarDocs: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500); // 0.5초 후에 상태를 초기화
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">Navbar</h1>
      <p>
        <code>Navbar</code> 컴포넌트는 웹 사이트의 상단에 위치하여 사용자에게
        주요 페이지로의 링크를 제공합니다. 로고, 링크, 크기, 색상, 위치를
        설정하여 커스터마이즈 할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import { Navbar } from '@components/Navbar';`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { Navbar } from '@components/Navbar';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <Navbar
      logoName="Componique"
      logoSrc={Logo}
      links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]}
    />
  );
}
export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <Navbar
      logoName="Componique"
      logoSrc={Logo}
      links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]}
    />
  );
}
export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Size of the Navbar</h2>
      <p>
        <code>Navbar</code> 컴포넌트는 다양한 크기로 제공됩니다. 기본 크기는{" "}
        <code>small</code>입니다:
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
      <div className="space-y-4">
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          size="small"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          size="medium"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          size="large"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} size="small" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="medium" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      ]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="large" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      ]} />
    </>
  );
}
export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} size="small" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="medium" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="large" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Changing the Hover Color</h2>
      <p>
        <code>Navbar</code> 컴포넌트는 링크에 마우스를 올렸을 때 텍스트 색상을
        변경할 수 있습니다:
      </p>
      <ul>
        <li>
          <code>skyblue</code>: 하늘색
        </li>
        <li>
          <code>blue</code>: 파란색 (기본값)
        </li>
        <li>
          <code>red</code>: 빨간색
        </li>
      </ul>
      <div className="space-y-4">
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          hoverColor="skyblue"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          hoverColor="blue"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <Navbar
          logoName="Componique"
          logoSrc={Logo}
          hoverColor="red"
          links={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ]}
        />
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="skyblue" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="blue" links={[
         { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="red" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="skyblue" links={[
         { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="blue" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="red" links={[
         { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Props</h2>
      <p>
        <code>Navbar</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
            <td>Navbar의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"small"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hoverColor</code>
            </td>
            <td>
              Navbar의 링크에 마우스를 올렸을 때 텍스트 색상을 설정합니다.
            </td>
            <td>
              <code>"skyblue" | "blue" | "red"</code>
            </td>
            <td>
              <code>"blue"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>position</code>
            </td>
            <td>Navbar의 위치를 설정합니다.</td>
            <td>
              <code>"static" | "sticky" | "relative"</code>
            </td>
            <td>
              <code>"static"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>logoSrc</code>
            </td>
            <td>로고 이미지의 경로를 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>logoName</code>
            </td>
            <td>로고 옆에 표시될 이름을 설정합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>links</code>
            </td>
            <td>네비게이션 링크들의 배열을 설정합니다.</td>
            <td>
              <code>{`{ name: string; href: string }[]`}</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">Full Example</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import { Navbar } from '@components/Navbar';
            import Logo from "@/images/logo.svg";
            
function Example() {
  return (
    <div>
      <Navbar
        logoName="Componique"
        logoSrc={Logo}
        size="medium"
        hoverColor="blue"
        position="sticky"
        links={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <button className="copyButton">{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Navbar } from '@components/Navbar';
import Logo from "@/images/logo.svg";

function Example() {
  return (
    <div>
      <Navbar
        logoName="Componique"
        logoSrc={Logo}
        size="medium"
        hoverColor="blue"
        position="sticky"
        links={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}
export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
        <h1 className="text-[#2D3748]">NavbarSearch</h1>
        <p>
          <code>NavbarSearch</code> 컴포넌트는 웹 사이트의 상단에 로고와 검색
          필드를 포함한 네비게이션 바를 제공합니다. 다양한 크기와 입력 필드
          설정을 통해 사용자 맞춤형 검색 바를 만들 수 있습니다.
        </p>

        <h2 className="text-[#2D3748]">Import</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import NavbarSearch from '@components/NavbarSearch/NavbarSearch';`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`import NavbarSearch from '@components/NavbarSearch/NavbarSearch';`}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <NavbarSearch
            name="search"
            id="searchInput"
            maxLength={8}
            type="search"
            size="medium"
            placeholder="Search"
            value=""
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import NavbarSearch from '@components/NavbarSearch/NavbarSearch';
  

function Example() {
  return (
    <NavbarSearch
      name="search"
      id="searchInput"
      maxLength={8}
      type="search"
      size="medium"
      placeholder="Search"
      value=""
      onChange={(e) => console.log(e.target.value)}
    />
  );
}

export default Example;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <NavbarSearch
      name="search"
      id="searchInput"
      maxLength={8}
      type="search"
      size="medium"
      placeholder="Search"
      value=""
      onChange={(e) => console.log(e.target.value)}
    />
  );
}

export default Example;
`}
          </SyntaxHighlighter>
          {/* </div>

        <h2 className="text-[#2D3748]">
          Changing the Size of the Search Input
        </h2>
        <p>
          <code>NavbarSearch</code> 컴포넌트는 검색 입력 필드의 크기를 설정할 수
          있습니다. 기본 크기는 <code>medium</code>입니다:
        </p>
        <ul>
          <li>
            <code>small</code>: 작은 크기
          </li>
          <li>
            <code>medium</code>: 중간 크기 (기본값)
          </li>
          <li>
            <code>large</code>: 큰 크기
          </li>
        </ul>
        <div className="space-y-4">
          <NavbarSearch
            name="search"
            id="searchInput"
            maxLength={8}
            type="search"
            size="medium"
            placeholder="Search"
          />
        </div>
        <div className="relative">
          <CopyToClipboard
            text={`import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </>
  );
}

export default Example;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </>
  );
}

export default Example;
`}
          </SyntaxHighlighter> */}
        </div>

        <h2 className="text-[#2D3748]">Props</h2>
        <p>
          <code>NavbarSearch</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <td>검색 입력 필드의 name 속성을 설정합니다.</td>
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
              <td>검색 입력 필드의 id 속성을 설정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>maxLength</code>
              </td>
              <td>검색 입력 필드의 최대 길이를 설정합니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>검색 입력 필드의 크기를 설정합니다.</td>
              <td>
                <code>"small" | "medium" | "large"</code>
              </td>
              <td>
                <code>"medium"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>placeholder</code>
              </td>
              <td>검색 입력 필드의 플레이스홀더 텍스트를 설정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>검색 입력 필드의 타입을 설정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>"text"</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>value</code>
              </td>
              <td>검색 입력 필드의 값을 설정합니다.</td>
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
              <td>검색 입력 필드의 값이 변경될 때 호출되는 핸들러입니다.</td>
              <td>
                <code>(e: React.ChangeEvent&lt;HTMLInputElement&gt;)</code>
              </td>
              <td>
                <code>-</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">Full Example</h2>
        <div className="relative">
          <CopyToClipboard
            text={`import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <div>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </div>
  );
}

export default Example;`}
            onCopy={handleCopy}
          >
            <button className="copyButton">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="tsx">
            {`
import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <div>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </div>
  );
}

export default Example;
`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default NavbarDocs;
