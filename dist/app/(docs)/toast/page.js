"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("@components/Button/Button"));
const Toast_1 = __importDefault(require("@components/Toast/Toast"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ToastGroup_1 = __importDefault(require("@components/Toast/ToastGroup"));
const ToastDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [isToastOpen, setIsToastOpen] = (0, react_1.useState)(false);
    const [isPositionToastOpen, setIsPositionToastOpen] = (0, react_1.useState)(false);
    const [isColorToastOpen, setIsColorToastOpen] = (0, react_1.useState)(false);
    const [isVariantToastOpen, setIsVariantToastOpen] = (0, react_1.useState)(false);
    const [isProgressToastOpen, setIsProgressToastOpen] = (0, react_1.useState)(false);
    const [isTimeToastOpen, setIsTimeToastOpen] = (0, react_1.useState)(false);
    const [isClassNameToastOpen, setIsClassNameToastOpen] = (0, react_1.useState)(false);
    const [isTimeProgressToastOpen, setIsTimeProgressToastOpen] = (0, react_1.useState)(false);
    const [isCloseButtonToastOpen, setIsCloseButtonToastOpen] = (0, react_1.useState)(false);
    const [isToastGroupOpen, setIsToastGroupOpen] = (0, react_1.useState)(false);
    const [showToastGroup, setShowToastGroup] = (0, react_1.useState)(false);
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    /* const onclickToastHandler = (open: boolean) => () => {
      setIsToastOpen(open);
    };*/
    const onclickToastHandler = (setOpen, open) => () => {
        setOpen(open);
    };
    const allToastsCloseHandler = () => {
        setShowToastGroup(false);
    };
    const handleClick = () => {
        setIsToastGroupOpen(true); // 클릭 시 ToastGroup을 다시 활성화
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Toast" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Toast" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9BC \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC704\uCE58, \uD06C\uAE30, \uC0C9\uC0C1, \uBCC0\uD615 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC6D0\uD558\uACE0 \uC9C4\uD589 \uBC14\uC640 \uB2EB\uAE30 \uBC84\uD2BC\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Toast from "@components/Toast/Toast";`, copyText: `import Toast from "@components/Toast/Toast";`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 Toast\uAC00 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onclickToastHandler(setIsToastOpen, true), children: "Toast Open Button" }), isToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isToastOpen, onClose: onclickToastHandler(setIsToastOpen, false), children: "Toast \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
      >
        Toast 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
      >
        Toast 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "2. Position" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "position" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "leftBottom" }), " \uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "leftTop" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "leftBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "rightTop" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "rightBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "centerTop" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "centerBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "left" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "center" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "right" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "primary", onClick: onclickToastHandler(setIsPositionToastOpen, true), children: "Position Toast Button" }), isPositionToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isPositionToastOpen, onClose: onclickToastHandler(setIsPositionToastOpen, false), position: "rightBottom", children: "\uC624\uB978\uCABD \uD558\uB2E8\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        position="rightBottom"
      >
        오른쪽 하단에 표시됩니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        position="rightBottom"
      >
        오른쪽 하단에 표시됩니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), " \uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "primary" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "secondary" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "success" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "warning" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "danger" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "red" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "orange" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "yellow" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "green" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "blue" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "purple" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "pink" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "basic" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "white" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "gray" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "black" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "orange", onClick: onclickToastHandler(setIsColorToastOpen, true), children: "Color Toast Button" }), isColorToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isColorToastOpen, onClose: onclickToastHandler(setIsColorToastOpen, false), color: "orange", children: "\uC624\uB80C\uC9C0\uC0C9 \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        color="orange"
      >
        오렌지색 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        color="orange"
      >
        오렌지색 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "4. Variant" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "variant" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), " \uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "solid" }), ",", " ", (0, jsx_runtime_1.jsx)("code", { children: "border" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", onClick: onclickToastHandler(setIsVariantToastOpen, true), children: "Variant Toast Button" }), isVariantToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isVariantToastOpen, onClose: onclickToastHandler(setIsVariantToastOpen, false), variant: "border", children: "border \uC2A4\uD0C0\uC77C\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        variant="border"
      >
        border 스타일의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        variant="border"
      >
        border 스타일의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "5. Time" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "time" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uAC00 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD788\uAE30 \uC804\uAE4C\uC9C0\uC758 \uC2DC\uAC04\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uAC04\uC740 \uCD08 \uB2E8\uC704\uB85C \uC124\uC815\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "success", onClick: onclickToastHandler(setIsTimeToastOpen, true), children: "Time Toast Button" }), isTimeToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isTimeToastOpen, onClose: onclickToastHandler(setIsTimeToastOpen, false), time: "5", children: "5\uCD08 \uD6C4\uC5D0 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD799\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        time="5"
      >
        5초 후에 자동으로 닫힙니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        time="5"
      >
        5초 후에 자동으로 닫힙니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "6. isClose" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "isClose" }), " prop\uC744 \uC0AC\uC6A9\uD558\uC5EC Toast\uC5D0 \uB2EB\uAE30 \uBC84\uD2BC\uC744 \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "false" }), "\uC774\uACE0 ", (0, jsx_runtime_1.jsx)("code", { children: "true" }), "\uB85C \uC124\uC815\uD558\uBA74 Toast\uC5D0 \uB2EB\uAE30 \uBC84\uD2BC\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2EB\uAE30 \uBC84\uD2BC\uC5D0 \uB300\uD574 true\uB85C \uC124\uC815\uD558\uACE0, \uC704\uC758 Time\uC744 \uBCC4\uB3C4\uB85C \uC9C0\uC815\uD574\uC8FC\uC9C0 \uC54A\uC73C\uBA74 \uB2EB\uC744\uC218 \uC5C6\uC73C\uB2C8 \uAF2D Time\uC744 \uCD94\uAC00\uD558\uC2DC\uAE38 \uAD8C\uC7A5\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "secondary", onClick: onclickToastHandler(setIsCloseButtonToastOpen, true), children: "Close Button Toast Button" }), isCloseButtonToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isCloseButtonToastOpen, time: "5", onClose: onclickToastHandler(setIsCloseButtonToastOpen, false), isClose: true, color: "secondary", children: "\uB2EB\uAE30 \uBC84\uD2BC\uC774 \uC5C6\uB294 \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isClose={true}
        time="5"
        color="secondary"
      >
        닫기 버튼이 없는 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isClose={true}
        time="5"
        color="secondary"
      >
        닫기 버튼이 없는 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "7. Progress" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "isProgress" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uC5D0 \uC9C4\uD589 \uBC14\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "Progress \uBC14\uB294 \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0 \uB530\uB77C \uBE44\uC6CC\uC9D1\uB2C8\uB2E4. \uAE30\uBCF8 \uAC12\uC740 false\uC774\uACE0 false\uC77C \uACBD\uC6B0 \uC0AC\uB77C\uC9C0\uACE0 true\uC77C \uACBD\uC6B0 Progress \uBC14\uAC00 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("p", { children: ["Time\uC774 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC73C\uBA74 Progress \uBC14\uAC00 \uD68C\uC0C9\uC774 \uB418\uACE0 \uB2EB\uAE30 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC9C0 \uC54A\uB294 \uD55C \uB2EB\uD788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", " "] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "danger", onClick: onclickToastHandler(setIsProgressToastOpen, true), children: "Progress Toast Button" }), isProgressToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isProgressToastOpen, onClose: onclickToastHandler(setIsProgressToastOpen, false), isProgress: true, children: "\uC9C4\uD589 \uBC14\uAC00 \uD3EC\uD568\uB41C \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
      >
        진행 바가 포함된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
      >
        진행 바가 포함된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "8. Progress + Time" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "isProgress" }), " prop\uACFC ", (0, jsx_runtime_1.jsx)("code", { children: "Time" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 Toast\uB97C \uB9CC\uB4E4\uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "secondary", onClick: onclickToastHandler(setIsTimeProgressToastOpen, true), children: "Time + Progress Toast Button" }), isTimeProgressToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isTimeProgressToastOpen, onClose: onclickToastHandler(setIsTimeProgressToastOpen, false), isProgress: true, color: "secondary", time: "5", variant: "border", children: "\uC9C4\uD589 \uBC14\uAC00 \uD3EC\uD568\uB41C 5\uCD08\uD6C4\uC5D0 \uC0AC\uB77C\uC9C0\uB294 border \uC2A4\uD0C0\uC77C\uC758 Secondary \uCEEC\uB7EC\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
        time="5"
        variant="border"
        color="secondary"
        >
          진행 바가 포함된 5초후에 사라지는 border 스타일의 Secondary 컬러의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        isProgress={true}
        variant="border"
        color="secondary"
      time="5"
        >
          진행 바가 포함된 5초후에 사라지는 border 스타일의 Secondary 컬러의 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "9. ClassName" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "className" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast\uC5D0 \uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "border", color: "secondary", onClick: onclickToastHandler(setIsClassNameToastOpen, true), children: "ClassName Toast Button" }), isClassNameToastOpen && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: isClassNameToastOpen, onClose: onclickToastHandler(setIsClassNameToastOpen, false), className: "rounded-lg bg-indigo-500 p-5 text-white", children: "\uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uC54C\uB9BC\uC785\uB2C8\uB2E4." })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        className="bg-indigo-500 text-white p-5 rounded-lg"
      >
        커스텀 스타일이 적용된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, copyText: `"use client";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import { useState } from "react";

const ToastExample = () => {
  const [isToastOpen, setIsToastOpen] = useState(true);
  const onclickToastHandler = (open: boolean) => () => {
    setIsToastOpen(open);
  };
  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={onclickToastHandler(false)}
        className="bg-indigo-500 text-white p-5 rounded-lg"
      >
        커스텀 스타일이 적용된 알림입니다.
      </Toast>
      <Button onClick={onclickToastHandler(true)}>Toast Open Button</Button>
    </>
  );
};
export default ToastExample;
`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-10 text-[#2D3748]", children: "10. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Toast" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isOpen" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uC5F4\uB9BC \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "position" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"leftTop\" | \"leftBottom\" | \"rightTop\" | \"rightBottom\" | \"centerTop\" | \"centerBottom\" | \"left\" | \"center\" | \"right\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"leftBottom\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"danger\" | \"red\" | \"orange\" | \"yellow\" | \"green\" | \"blue\" | \"purple\" | \"pink\" | \"basic\" | \"white\" | \"gray\" | \"black\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uC2A4\uD0C0\uC77C \uBCC0\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\" | \"border\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"solid\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "isProgress" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC5D0 \uC9C4\uD589 \uBC14\uB97C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "text" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast \uB0B4 \uD14D\uC2A4\uD2B8\uC758 \uC815\uB82C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\" | \"center\" | \"right\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"left\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "time" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uAC00 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD788\uAE30 \uC804\uAE4C\uC9C0\uC758 \uC2DC\uAC04\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onClose" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uAC00 \uB2EB\uD790 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Toast\uC758 \uCD94\uAC00\uC801\uC778 \uCEE4\uC2A4\uD140 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. ToastGroup" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ToastGroup" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC5EC\uB7EC \uAC1C\uC758 Toast\uB97C \uADF8\uB8F9\uD654\uD558\uC5EC \uC21C\uCC28\uC801\uC73C\uB85C \uD45C\uC2DC\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB2E4\uC591\uD55C \uC54C\uB9BC \uBA54\uC2DC\uC9C0\uB97C \uC2DC\uAC04\uCC28\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ToastGroup from "@components/Toast/ToastGroup";`, copyText: `import ToastGroup from "@components/Toast/ToastGroup";`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 \uB2E4\uC591\uD55C \uC635\uC158\uC744 \uAC00\uC9C4 \uC5EC\uB7EC \uAC1C\uC758 Toast\uAC00 \uC21C\uCC28\uC801\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleClick, children: "Toast Group Open Button" }), isToastGroupOpen && ((0, jsx_runtime_1.jsx)(ToastGroup_1.default, { position: "rightTop", 
                //모든 Toast가 닫혔을 때 호출되는 함수 전달
                onAllClosed: allToastsCloseHandler, toasts: [
                    {
                        children: "가입이 완료되었습니다.",
                        time: "5",
                        color: "yellow",
                        variant: "border",
                        isProgress: true,
                    },
                    {
                        children: "로그인으로 이동합니다.",
                        time: "6",
                        color: "success",
                        size: "large",
                        variant: "border",
                        path: "/login",
                        isProgress: true,
                    },
                    {
                        children: "로그아웃 되었습니다.",
                        time: "7",
                        color: "blue",
                        size: "medium",
                        variant: "solid",
                    },
                    {
                        children: "종료 되었습니다.",
                        time: "8",
                        color: "red",
                        size: "small",
                        variant: "border",
                        isProgress: true,
                    },
                ] })), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `"use client";
import ToastGroup from "@components/Toast/ToastGroup";
import { useState } from "react";
const ToastGroupExample = () => {
  const [showToastGroup, setShowToastGroup] = useState(true);
  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };
  return (
    <>
      <ToastGroup
        position="rightTop"
        onAllClosed={allToastsCloseHandler}
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
            isProgress: true,
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
            path: "/login",
            isProgress: true,
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
            isProgress: false,
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            isProgress: true,
            variant: "border",
          },
        ]}
      />
    </>
  );
};
export default ToastGroupExample;
`, copyText: `"use client";
import ToastGroup from "@components/Toast/ToastGroup";
import { useState } from "react";
const ToastGroupExample = () => {
  const [showToastGroup, setShowToastGroup] = useState(true);
  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };
  return (
    <>
      <ToastGroup
        position="rightTop"
        onAllClosed={allToastsCloseHandler}
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
            isProgress: true,
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
            path: "/login",
            isProgress: true,
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
            isProgress: false,
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            isProgress: true,
            variant: "border",
          },
        ]}
      />
    </>
  );
};
export default ToastGroupExample;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2. Position" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "position" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC Toast Group\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "Toast Group\uC5D0 \uD55C\uD574\uC11C \uAC1C\uBCC4 Toast\uC758 \uC704\uCE58\uB294 \uB530\uB85C \uC124\uC815\uD558\uC2E4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uBCF8 \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "leftBottom" }), " \uC774\uACE0, \uAC00\uB2A5\uD55C \uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "leftTop" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "leftBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "rightTop" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "rightBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "centerTop" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "centerBottom" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "left" }), ", ", (0, jsx_runtime_1.jsx)("code", { children: "center" }), ",", (0, jsx_runtime_1.jsx)("code", { children: "right" }), " \uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ToastGroup" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "toasts" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD45C\uC2DC\uD560 Toast\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "ToastConfig[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "position" }) }), (0, jsx_runtime_1.jsx)("td", { children: "ToastGroup\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"leftTop\" | \"leftBottom\" | \"rightTop\" | \"rightBottom\" | \"centerTop\" | \"centerBottom\" | \"left\" | \"right\" | \"center\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"leftBottom\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onAllClosed" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uBAA8\uB4E0 Toast\uAC00 \uB2EB\uD614\uC744 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "() => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] })] })] })] }));
};
exports.default = ToastDocs;
