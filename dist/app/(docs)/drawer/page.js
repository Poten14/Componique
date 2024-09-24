"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@components/Button/Button"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Drawer_1 = __importDefault(require("@components/Drawer/Drawer"));
const react_1 = require("react");
const react_2 = require("react");
const DrawerDocs = () => {
    //Drawer 관련 코드
    const [copied, setCopied] = (0, react_1.useState)({});
    const [isDrawerOpen, setIsDrawerOpen] = (0, react_1.useState)(false);
    const [isLeftDrawerOpen, setIsLeftDrawerOpen] = (0, react_1.useState)(false);
    const [isRightDrawerOpen, setIsRightDrawerOpen] = (0, react_1.useState)(false);
    const [isTopDrawerOpen, setIsTopDrawerOpen] = (0, react_1.useState)(false);
    const [isBottomDrawerOpen, setIsBottomDrawerOpen] = (0, react_1.useState)(false);
    const [isColorDrawerOpen, setIsColorDrawerOpen] = (0, react_1.useState)(false);
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = (0, react_1.useState)(false);
    const [isClassDrawerOpen, setIsClassDrawerOpen] = (0, react_1.useState)(false);
    const [isLogoDrawerOpen, setIsLogoDrawerOpen] = (0, react_1.useState)(false);
    const [isIconDrawerOpen, setIsIconoDrawerOpen] = (0, react_1.useState)(false);
    const [isGroupDrawerOpen, setIsGroupDrawerOpen] = (0, react_1.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const onclickDrawerHandler = (open) => () => {
        setIsDrawerOpen(open);
    };
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    (0, react_2.useEffect)(() => {
        // 다크 모드 상태를 확인하고 설정
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // 초기 다크 모드 상태 확인
        checkDarkMode();
        // 다크 모드 변경을 감지하는 Observer 설정
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        // 컴포넌트가 언마운트될 때 Observer를 정리
        return () => observer.disconnect();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Drawer" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Drawer" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC2AC\uB77C\uC774\uB529 \uBA54\uB274 \uB610\uB294 \uC0AC\uC774\uB4DC\uBC14\uB97C \uAD6C\uD604\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBA54\uB274 \uD56D\uBAA9, \uB85C\uACE0, \uC0C9\uC0C1, \uC704\uCE58 \uB4F1\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Drawer from "@components/Drawer/Drawer"`, copyText: `import Drawer from "@components/Drawer/Drawer"`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isDrawerOpen, className: "not-prose", onClose: onclickDrawerHandler(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: onclickDrawerHandler(true), children: "Drawer Open Button" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/"},
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile"},
                  { name: "Contact", path: "/contact"},
                ],
              },
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
`, copyText: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "2. Menu" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "menu" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Drawer\uC5D0 \uD45C\uC2DC\uD560 \uBA54\uB274 \uD56D\uBAA9\uC744 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC01 \uBA54\uB274 \uD56D\uBAA9\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "name" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "path" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "className" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "icon" }), " \uC18D\uC131\uC744 \uAC00\uC9D1\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["menu\uC758 ", (0, jsx_runtime_1.jsx)("code", { children: "name" }), "\uACFC ", (0, jsx_runtime_1.jsx)("code", { children: "path" }), "\uB294 \uD544\uC218\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isMenuDrawerOpen, className: "not-prose", onClose: () => setIsMenuDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "menu1", path: "/menu1" },
                            { name: "menu2", path: "/menu2" },
                            { name: "menu3", path: "/menu3" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsMenuDrawerOpen(true), children: "Drawer Open Button" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
          {
            items: [
              { name: "menu1", path: "/menu1" },
              { name: "menu2", path: "/menu2" },
              { name: "menu3", path: "/menu3" },
            ],
          },
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
`, copyText: `"use client";
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
          {
            items: [
              { name: "menu1", path: "/menu1" },
              { name: "menu2", path: "/menu2" },
              { name: "menu3", path: "/menu3" },
            ],
          },
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
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3. Logo" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "logo" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC Drawer \uC0C1\uB2E8\uC5D0 \uB85C\uACE0 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uACE0\uB294 \uC774\uBBF8\uC9C0 URL\uC744 \uBB38\uC790\uC5F4\uB85C \uC804\uB2EC\uD558\uBA70, \uB85C\uACE0 \uC774\uBBF8\uC9C0\uB294 \uD074\uB9AD \uC2DC \uC9C0\uC815\uB41C \uACBD\uB85C\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isLogoDrawerOpen, className: "not-prose", onClose: () => setIsLogoDrawerOpen(false), logo: isDarkMode ? "/LogoDark.svg" : "/Logo.svg", menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsLogoDrawerOpen(true), children: "Logo Drawer" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useEffect } from "react";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
      logo={isDarkMode ? "/LogoDark.svg" : "/Logo.svg"}
        onClose={onclickDrawerHandler(false)}
       menu={[
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, copyText: `"use client";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import { useEffect } from "react";
import { useState } from "react";
function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
      logo={isDarkMode ? "/LogoDark.svg" : "/Logo.svg"}
        onClose={onclickDrawerHandler(false)}
      menu={[
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4. Position" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "postion" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Drawer\uC758 \uC2AC\uB77C\uC774\uB529 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "left" }), "\uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "top" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "bottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "left" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "right" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isLeftDrawerOpen, position: "left", className: "not-prose", onClose: () => setIsLeftDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isRightDrawerOpen, position: "right", className: "not-prose", onClose: () => setIsRightDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isTopDrawerOpen, position: "top", className: "not-prose", onClose: () => setIsTopDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isBottomDrawerOpen, position: "bottom", className: "not-prose", onClose: () => setIsBottomDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsxs)("div", { className: "m-auto flex justify-center space-x-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "yellow", onClick: () => setIsLeftDrawerOpen(true), children: "Left Drawer" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "blue", onClick: () => setIsRightDrawerOpen(true), children: "Right Drawer" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "green", onClick: () => setIsTopDrawerOpen(true), children: "Top Drawer" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "red", onClick: () => setIsBottomDrawerOpen(true), children: "Bottom Drawer" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, copyText: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC704\uC758 \uC608\uC2DC \uCF54\uB4DC\uB294 \uC704\uCE58\uB97C right\uB85C \uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "5. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uBA54\uB274 \uD56D\uBAA9\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "bgColor" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Drawer\uC758 \uC804\uCCB4 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAC00\uB2A5\uD55C \uC0C9\uC0C1 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "primary" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "secondary" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "success" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "warning" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "danger" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "red" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "orange" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "green" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "blue" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "purple" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "pink" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "white" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "gray" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "black" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isColorDrawerOpen, className: "not-prose", onClose: () => setIsColorDrawerOpen(false), bgColor: "blue", color: "primary", menu: [
                    {
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsColorDrawerOpen(true), children: "Color Drawer" }), " ", (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, copyText: `"use client";
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
              {
                items: [
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about"},
                  { name: "Profile", path: "/profile" },
                  { name: "Contact", path: "/contact" },
                ],
              },
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
`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "6. Group" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "groupName" }), " \uBC0F ", (0, jsx_runtime_1.jsx)("code", { children: "groupNameClassName" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC Drawer \uB0B4\uC5D0\uC11C \uBA54\uB274 \uD56D\uBAA9\uC744 \uADF8\uB8F9\uD654\uD558\uACE0 \uADF8\uB8F9 \uC774\uB984\uC5D0 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "groupName" }), "\uC740 \uAC01 \uADF8\uB8F9\uC758 \uC81C\uBAA9\uC744 \uB098\uD0C0\uB0B4\uACE0,", " ", (0, jsx_runtime_1.jsx)("code", { children: "groupNameClassName" }), "\uC744 \uD1B5\uD574 \uADF8\uB8F9 \uC774\uB984\uC758 \uC2A4\uD0C0\uC77C\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isGroupDrawerOpen, className: "not-prose", onClose: () => setIsGroupDrawerOpen(false), menu: [
                    {
                        groupName: "Main",
                        items: [
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                        ],
                    },
                    {
                        groupName: "User",
                        groupNameClassName: "!text-[#FF6347]",
                        items: [
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsGroupDrawerOpen(true), children: "Group Drawer" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
          {
            groupName: "Main",
            items: [
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ],
          },
          {
            groupName: "User",
            groupNameClassName: "!text-[#FF6347]",
            items: [
              { name: "Profile", path: "/profile" },
              { name: "Contact", path: "/contact" },
            ],
          },
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

export default Example;`, copyText: `"use client";
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
          {
            groupName: "Main",
            items: [
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ],
          },
          {
            groupName: "User",
            groupNameClassName: "!text-[#FF6347]",
            items: [
              { name: "Profile", path: "/profile" },
              { name: "Contact", path: "/contact" },
            ],
          },
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

export default Example;`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "7. ClassName" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "className" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC ", (0, jsx_runtime_1.jsx)("code", { children: "Drawer" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "Drawer \uC804\uCCB4 \uD639\uC740 \uAC01\uAC01\uC758 \uBA54\uB274\uC5D0 className\uC744 \uAC1C\uBCC4\uC801\uC73C\uB85C \uC801\uC6A9 \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798 \uC608\uC2DC\uB294 \uBA54\uB274\uC758 \uBE68\uAC04 \uD14D\uC2A4\uD2B8 \uCEEC\uB7EC\uC640 \uC804\uCCB4\uC801\uC73C\uB85C \uD3F0\uD2B8 \uAD75\uAE30\uB97C bold\uB85C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD55C \uAC83\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("p", { children: "!\uC544\uB798 \uC608\uC2DC\uCC98\uB7FC \uBC14\uB85C \uC801\uC6A9\uC774 \uAC00\uB2A5\uD55C \uBD80\uBD84\uB3C4 \uC788\uC9C0\uB9CC CSS \uC6B0\uC120\uC21C\uC704\uC5D0 \uC758\uD574\uC11C !important\uB97C \uC0AC\uC6A9\uD574\uC57C \uC801\uC6A9\uB418\uB294 \uBD80\uBD84\uB3C4 \uC788\uC744\uC218 \uC788\uC2B5\uB2C8\uB2E4. (Tailwind\uB294 !font-bold \uCC98\uB7FC \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.)" }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isClassDrawerOpen, className: "not-prose font-bold", onClose: () => setIsClassDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/", className: "text-Red" },
                            { name: "About", path: "/about" },
                            { name: "Profile", path: "/profile" },
                            { name: "Contact", path: "/contact" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsClassDrawerOpen(true), children: "ClassName Drawer" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
`, copyText: `"use client";
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
`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "8. Icon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "icon" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC01 \uBA54\uB274 \uD56D\uBAA9 \uC55E\uC5D0 \uC544\uC774\uCF58\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: " Icon\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uB294 Icon Docs\uB97C \uCC38\uACE0 \uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { isOpen: isIconDrawerOpen, className: "not-prose", onClose: () => setIsIconoDrawerOpen(false), menu: [
                    {
                        items: [
                            { name: "Home", path: "/", icon: "icon-home" },
                            { name: "About", path: "/about", icon: "icon-info" },
                            { name: "Profile", path: "/profile", icon: "icon-user" },
                            { name: "Contact", path: "/contact", icon: "icon-call" },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: () => setIsIconoDrawerOpen(true), children: "Icon Drawer" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
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
          {
            items: [
              { name: "Home", path: "/", icon: "icon-home" },
              { name: "About", path: "/about", icon: "icon-info" },
              { name: "Profile", path: "/profile", icon: "icon-user" },
              { name: "Contact", path: "/contact", icon: "icon-call" },
            ],
          },
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
`, copyText: `"use client";
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
          {
            items: [
              { name: "Home", path: "/", icon: "icon-home" },
              { name: "About", path: "/about", icon: "icon-info" },
              { name: "Profile", path: "/profile", icon: "icon-user" },
              { name: "Contact", path: "/contact", icon: "icon-call" },
            ],
          },
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
`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "9. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Drawer" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "menu" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC5D0 \uD45C\uC2DC\uD560 \uBA54\uB274 \uD56D\uBAA9 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "MenuProps[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isOpen" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC758 \uC5F4\uB9BC \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "logo" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC5D0 \uD45C\uC2DC\uD560 \uB85C\uACE0 \uC774\uBBF8\uC9C0 \uACBD\uB85C\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClose" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uAC00 \uB2EB\uD790 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer \uBA54\uB274 \uD56D\uBAA9\uC758 \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\" | \"white\" | \"gray\" | \"black\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "bgColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\" | \"white\" | \"gray\" | \"black\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "postion" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC758 \uC2AC\uB77C\uC774\uB529 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"top\" | \"bottom\" | \"left\" | \"right\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Drawer\uC758 \uCD94\uAC00\uC801\uC778 \uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] })] }) //last
    );
};
exports.default = DrawerDocs;
