"use client";
import Button from "@components/Button/Button";
import CodeBox from "@components/CodeBox";
import Drawer from "@components/Drawer/Drawer";
import { useState } from "react";

const DrawerDocs = () => {
  //Drawer 관련 코드

  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [isColorDrawerOpen, setIsColorDrawerOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isClassDrawerOpen, setIsClassDrawerOpen] = useState(false);
  const [isLogoDrawerOpen, setIsLogoDrawerOpen] = useState(false);
  const [isIconDrawerOpen, setIsIconoDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">Drawer</h1>
      <p>
        <code>Drawer</code> 컴포넌트는 슬라이딩 메뉴 또는 사이드바를 구현하기
        위해 사용됩니다.
      </p>{" "}
      <p>
        이 컴포넌트는 메뉴 항목, 로고, 색상, 위치 등을 사용자 정의할 수 있는
        다양한 옵션을 제공합니다.
      </p>
      <h2 className="text-[#2D3748]">Import</h2>
      <CodeBox
        code={`import Drawer from "@components/Drawer/Drawer"`}
        copyText={`import Drawer from "@components/Drawer/Drawer"`}
        language="tsx"
        index={1}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <Drawer
        isOpen={isDrawerOpen}
        className="not-prose"
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button variant="border" onClick={onclickDrawerHandler(true)}>
        Drawer Open Button
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"

        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
  
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        language="tsx"
        index={2}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="pt-2 text-[#2D3748]">Menu</h1>
      <p>
        <code>menu</code> prop을 이용하여 Drawer에 표시할 메뉴 항목을 정의할 수
        있습니다.
      </p>
      <p>
        각 메뉴 항목은 <code>name</code>, <code>path</code>,
        <code>className</code>, <code>icon</code> 속성을 가집니다.
      </p>
      <p>
        menu의 <code>name</code>과 <code>path</code>는 필수입니다.
      </p>
      <Drawer
        isOpen={isMenuDrawerOpen}
        className="not-prose"
        onClose={() => setIsMenuDrawerOpen(false)}
        menu={[
          { name: "menu1", path: "/menu1" },
          { name: "menu2", path: "/menu2" },
          { name: "menu3", path: "/menu3" },
        ]}
      />
      <Button variant="border" onClick={() => setIsMenuDrawerOpen(true)}>
        Drawer Open Button
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "menu1", path: "/menu1" },
          { name: "menu2", path: "/menu2" },
          { name: "menu3", path: "/menu3" },
        ]}
      />
      <Button
        variant="border"
   
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "menu1", path: "/menu1" },
          { name: "menu2", path: "/menu2" },
          { name: "menu3", path: "/menu3" },
        ]}
      />
      <Button
        variant="border"

        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        language="tsx"
        index={6}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="text-[#2D3748]">Logo</h1>
      <p>
        <code>logo</code> prop을 사용하여 Drawer 상단에 로고 이미지를 표시할 수
        있습니다. 로고는 이미지 URL을 문자열로 전달하며, 로고 이미지는 클릭 시
        지정된 경로로 이동할 수 있습니다.
      </p>
      <Drawer
        isOpen={isLogoDrawerOpen}
        className="not-prose"
        onClose={() => setIsLogoDrawerOpen(false)}
        logo="/componique_logo_full.svg"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button variant="border" onClick={() => setIsLogoDrawerOpen(true)}>
        Logo Drawer
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        logo="/componique_logo_full.svg"
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", className: "text-Red" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
        
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        logo="/componique_logo_full.svg" 
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", className: "text-Red" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
    
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        language="tsx"
        index={8}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="pt-2 text-[#2D3748]">Position</h1>
      <p>
        <code>postion</code> prop을 이용하여 Drawer의 슬라이딩 위치를 설정할 수
        있습니다.
      </p>
      <p>
        기본 값은 <code>left</code>이고, 가능한 값은 <code>top</code>,{" "}
        <code>bottom</code>, <code>left</code>,<code>right</code> 입니다.
      </p>
      <Drawer
        isOpen={isLeftDrawerOpen}
        position="left"
        className="not-prose"
        onClose={() => setIsLeftDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Drawer
        isOpen={isRightDrawerOpen}
        position="right"
        className="not-prose"
        onClose={() => setIsRightDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Drawer
        isOpen={isTopDrawerOpen}
        position="top"
        className="not-prose"
        onClose={() => setIsTopDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Drawer
        isOpen={isBottomDrawerOpen}
        position="bottom"
        className="not-prose"
        onClose={() => setIsBottomDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <div className="m-auto flex justify-center space-x-4">
        <Button
          variant="border"
          color="yellow"
          onClick={() => setIsLeftDrawerOpen(true)}
        >
          Left Drawer
        </Button>

        <Button
          variant="border"
          color="blue"
          onClick={() => setIsRightDrawerOpen(true)}
        >
          Right Drawer
        </Button>
        <Button
          variant="border"
          color="green"
          onClick={() => setIsTopDrawerOpen(true)}
        >
          Top Drawer
        </Button>
        <Button
          variant="border"
          color="red"
          onClick={() => setIsBottomDrawerOpen(true)}
        >
          Bottom Drawer
        </Button>
      </div>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        position="right"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
     
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        position="right"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
    
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
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
      <p>위의 예시 코드는 위치를 right로 한 예시입니다.</p>
      <h1 className="pt-2 text-[#2D3748]">Color</h1>
      <p>
        <code>color</code> prop을 이용하여 메뉴 항목의 배경 색상을 설정할 수
        있습니다.
      </p>
      <p>
        <code>bgColor</code> prop을 이용하여 Drawer의 전체 배경 색상을 설정할 수
        있습니다.
      </p>
      <p>
        가능한 색상 값은 <code>primary</code>, <code>secondary</code>,{" "}
        <code>success</code>, <code>warning</code>, <code>danger</code>,
        <code>red</code>, <code>orange</code>, <code>yellow</code>,{" "}
        <code>green</code>, <code>blue</code>, <code>purple</code>,
        <code>pink</code>, <code>basic</code>, <code>white</code>,{" "}
        <code>gray</code>, <code>black</code> 입니다.
      </p>
      <Drawer
        isOpen={isColorDrawerOpen}
        className="not-prose"
        onClose={() => setIsColorDrawerOpen(false)}
        bgColor="blue"
        color="primary"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button variant="border" onClick={() => setIsColorDrawerOpen(true)}>
        Color Drawer
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        bgColor="blue"
        color="primary"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
        
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
       bgColor="blue"
        color="primary"
        menu={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
        color="yellow"
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        language="tsx"
        index={5}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="pt-2 text-[#2D3748]">ClassName</h1>
      <p>
        <code>className</code> prop을 사용하여 <code>Drawer</code> 컴포넌트의
        스타일을 커스터마이징할 수 있습니다.
      </p>
      <p>
        Drawer 전체 혹은 각각의 메뉴에 className을 개별적으로 적용 하실 수
        있습니다.
      </p>
      <p>
        아래 예시는 메뉴의 빨간 텍스트 컬러와 전체적으로 폰트 굵기를 bold로
        커스터마이징한 것입니다.
      </p>
      <p>
        !아래 예시처럼 바로 적용이 가능한 부분도 있지만 CSS 우선순위에 의해서
        !important를 사용해야 적용되는 부분도 있을수 있습니다. (Tailwind는
        !font-bold 처럼 사용해야 합니다.)
      </p>
      <Drawer
        isOpen={isClassDrawerOpen}
        className="not-prose font-bold"
        onClose={() => setIsClassDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/", className: "text-Red" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button variant="border" onClick={() => setIsClassDrawerOpen(true)}>
        ClassName Drawer
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        className="font-bold"
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", className: "text-Red" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
       
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        className="font-bold"
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", className: "text-Red" },
          { name: "About", path: "/about" },
          { name: "Profile", path: "/profile" },
          { name: "Contact", path: "/Contact" },
        ]}
      />
      <Button
        variant="border"
       
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
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
      <h1 className="text-[#2D3748]">Icon</h1>
      <p>
        <code>icon</code> prop을 사용하여 각 메뉴 항목 앞에 아이콘을 추가할 수
        있습니다.
      </p>
      <p> Icon에 대한 자세한 정보는 Icon Docs를 참고 하시면 됩니다.</p>
      <Drawer
        isOpen={isIconDrawerOpen}
        className="not-prose"
        onClose={() => setIsIconoDrawerOpen(false)}
        menu={[
          { name: "Home", path: "/", icon: "icon-home" },
          { name: "About", path: "/about", icon: "icon-info" },
          { name: "Profile", path: "/profile", icon: "icon-user" },
          { name: "Contact", path: "/Contact", icon: "icon-call" },
        ]}
      />
      <Button variant="border" onClick={() => setIsIconoDrawerOpen(true)}>
        Icon Drawer
      </Button>
      <CodeBox
        code={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", icon: "icon-home" },
          { name: "About", path: "/about", icon: "icon-info" },
          { name: "Profile", path: "/profile", icon: "icon-user" },
          { name: "Contact", path: "/Contact", icon: "icon-call" },
        ]}
      />
      <Button
        variant="border"

        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        copyText={`"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={onclickDrawerHandler(false)}
        menu={[
          { name: "Home", path: "/", icon: "icon-home" },
          { name: "About", path: "/about", icon: "icon-info" },
          { name: "Profile", path: "/profile", icon: "icon-user" },
          { name: "Contact", path: "/Contact", icon: "icon-call" },
        ]}
      />
      <Button
        variant="border"
     
        onClick={onclickDrawerHandler(true)}
      >
        Drawer Open Button
      </Button>
    </>
  );
}

export default Example;
`}
        language="tsx"
        index={9}
        copied={copied}
        handleCopy={handleCopy}
      />
      <h1 className="pt-2 text-[#2D3748]">Props</h1>
      <p>
        <code>Drawer</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>menu</code>
            </td>
            <td>Drawer에 표시할 메뉴 항목 배열입니다.</td>
            <td>
              <code>MenuProps[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>isOpen</code>
            </td>
            <td>Drawer의 열림 상태를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>logo</code>
            </td>
            <td>Drawer에 표시할 로고 이미지 경로입니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>onClose</code>
            </td>
            <td>Drawer가 닫힐 때 호출되는 함수입니다.</td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>Drawer 메뉴 항목의 텍스트 색상을 설정합니다.</td>
            <td>
              <code>
                "primary" | "secondary" | "success" | "warning" | "danger" |
                "red" | "orange" | "yellow" | "green" | "blue" | "purple" |
                "pink" | "basic" | "white" | "gray" | "black"
              </code>
            </td>
            <td>
              <code>"basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>bgColor</code>
            </td>
            <td>Drawer의 배경 색상을 설정합니다.</td>
            <td>
              <code>
                "primary" | "secondary" | "success" | "warning" | "danger" |
                "red" | "orange" | "yellow" | "green" | "blue" | "purple" |
                "pink" | "basic" | "white" | "gray" | "black"
              </code>
            </td>
            <td>
              <code>"basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>postion</code>
            </td>
            <td>Drawer의 슬라이딩 위치를 설정합니다.</td>
            <td>
              <code>"top" | "bottom" | "left" | "right"</code>
            </td>
            <td>
              <code>"left"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>className</code>
            </td>
            <td>Drawer의 추가적인 커스텀 스타일을 적용할 때 사용합니다.</td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>""</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div> //last
  );
};
export default DrawerDocs;
