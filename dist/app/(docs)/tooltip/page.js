"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Tooltip_1 = __importDefault(require("@components/Tooltip/Tooltip"));
const TooltipBasic_1 = __importDefault(require("@components/Tooltip/TooltipBasic"));
const TooltipIcon_1 = __importDefault(require("@components/Tooltip/TooltipIcon"));
const TooltipDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]", children: (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. Tooltip" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Tooltip" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB9C8\uC6B0\uC2A4\uB97C \uC694\uC18C \uC704\uC5D0 \uC62C\uB838\uC744 \uB54C \uCD94\uAC00\uC801\uC778 \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uC704\uCE58, \uB0B4\uC6A9, \uC2A4\uD0C0\uC77C\uC744 \uC190\uC27D\uAC8C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Tooltip from '@components/Tooltip/Tooltip';`, copyText: `import Tooltip from '@components/Tooltip/Tooltip';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(TooltipBasic_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Tooltip from '@components/Tooltip/Tooltip';
import { FaGithub } from 'react-icons/fa';

function Example() {
  return (
    <Tooltip content="GitHub">
      <FaGithub />
    </Tooltip>
  );
}

export default Example;
`, copyText: `
import Tooltip from '@components/Tooltip/Tooltip';
import { FaGithub } from 'react-icons/fa';

function Example() {
  return (
    <Tooltip content="GitHub">
      <FaGithub />
    </Tooltip>
  );
}

export default Example;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Tooltip Positions" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Tooltip" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD234\uD301\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Top:" }), " \uC694\uC18C\uC758 \uC704\uCABD\uC5D0 \uD234\uD301\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Bottom:" }), " \uC694\uC18C\uC758 \uC544\uB798\uCABD\uC5D0 \uD234\uD301\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Left:" }), " \uC694\uC18C\uC758 \uC67C\uCABD\uC5D0 \uD234\uD301\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("strong", { className: "dark:text-[#dfdfdf]", children: "Right:" }), " \uC694\uC18C\uC758 \uC624\uB978\uCABD\uC5D0 \uD234\uD301\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-7", children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Top Tooltip", position: "top", children: (0, jsx_runtime_1.jsx)("span", { children: "Hover me (Top)" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Bottom Tooltip", position: "bottom", children: (0, jsx_runtime_1.jsx)("span", { children: "Hover me (Bottom)" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Left Tooltip", position: "left", children: (0, jsx_runtime_1.jsx)("span", { children: "Hover me (Left)" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { content: "Right Tooltip", position: "right", children: (0, jsx_runtime_1.jsx)("span", { children: "Hover me (Right)" }) })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Tooltip from '@components/Tooltip/Tooltip';

function Example() {
  return (
    <>
      <Tooltip content="Top Tooltip" position="top">
        <span>Hover me (Top)</span>
      </Tooltip>
      <Tooltip content="Bottom Tooltip" position="bottom">
        <span>Hover me (Bottom)</span>
      </Tooltip>
      <Tooltip content="Left Tooltip" position="left">
        <span>Hover me (Left)</span>
      </Tooltip>
      <Tooltip content="Right Tooltip" position="right">
        <span>Hover me (Right)</span>
      </Tooltip>
    </>
  );
}

export default Example;
`, copyText: `
import Tooltip from '@components/Tooltip/Tooltip';

function Example() {
  return (
    <>
      <Tooltip content="Top Tooltip" position="top">
        <span>Hover me (Top)</span>
      </Tooltip>
      <Tooltip content="Bottom Tooltip" position="bottom">
        <span>Hover me (Bottom)</span>
      </Tooltip>
      <Tooltip content="Left Tooltip" position="left">
        <span>Hover me (Left)</span>
      </Tooltip>
      <Tooltip content="Right Tooltip" position="right">
        <span>Hover me (Right)</span>
      </Tooltip>
    </>
  );
}

export default Example;
`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. TooltipIcon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "TooltipIcon" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uC774\uCF58\uACFC \uD568\uAED8 \uD234\uD301\uC744 \uD45C\uC2DC\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uB9C8\uC6B0\uC2A4\uB97C \uC544\uC774\uCF58 \uC704\uC5D0 \uC62C\uB9AC\uBA74 \uC544\uC774\uCF58\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import TooltipIcon from '@components/Tooltip/TooltipIcon';`, copyText: `import TooltipIcon from '@components/Tooltip/TooltipIcon';`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uC774\uCF58 \uD234\uD301\uC758 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(TooltipIcon_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Tooltip from '@components/Tooltip/Tooltip';
import { FaGithub, FaFacebookSquare, FaInstagramSquare, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Example() {
  return (
    <div className="flex">
      <Tooltip content={<FaGithub />}>
        <FaGithub className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaFacebookSquare />}>
        <FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaInstagramSquare />}>
        <FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaLine />}>
        <FaLine className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaSquareXTwitter />}>
        <FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
    </div>
  );
}

export default Example;
`, copyText: `
import Tooltip from '@components/Tooltip/Tooltip';
import { FaGithub, FaFacebookSquare, FaInstagramSquare, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Example() {
  return (
    <div className="flex">
      <Tooltip content={<FaGithub />}>
        <FaGithub className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaFacebookSquare />}>
        <FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaInstagramSquare />}>
        <FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaLine />}>
        <FaLine className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
      <Tooltip content={<FaSquareXTwitter />}>
        <FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
      </Tooltip>
    </div>
  );
}

export default Example;
`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// TooltipIcon.tsx
import React from 'react';
import Tooltip from './Tooltip';
import { FaGithub, FaFacebookSquare, FaInstagramSquare, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const TooltipIcon = () => {
  return (
    <div className="flex">
      <Tooltip content={<FaGithub />}>
        <FaGithub className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaFacebookSquare />}>
        <FaFacebookSquare className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaInstagramSquare />}>
        <FaInstagramSquare className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaLine />}>
        <FaLine className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaSquareXTwitter />}>
        <FaSquareXTwitter className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
`, copyText: `
// TooltipIcon.tsx
import React from 'react';
import Tooltip from './Tooltip';
import { FaGithub, FaFacebookSquare, FaInstagramSquare, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const TooltipIcon = () => {
  return (
    <div className="flex">
      <Tooltip content={<FaGithub />}>
        <FaGithub className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaFacebookSquare />}>
        <FaFacebookSquare className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaInstagramSquare />}>
        <FaInstagramSquare className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaLine />}>
        <FaLine className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
      <Tooltip content={<FaSquareXTwitter />}>
        <FaSquareXTwitter className="mr-2 text-2xl dark:text-white" />
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy })] }) }));
};
exports.default = TooltipDocs;
