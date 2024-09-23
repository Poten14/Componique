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
    return (<div className="prose max-w-[850px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. Tooltip</h1>
        <p>
          <code>Tooltip</code> 컴포넌트는 사용자가 마우스를 요소 위에 올렸을 때
          추가적인 정보를 제공하는 UI 요소입니다. 위치, 내용, 스타일을 손쉽게
          커스터마이징할 수 있습니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
        <CodeBox_1.default code={`import Tooltip from '@components/Tooltip/Tooltip';`} copyText={`import Tooltip from '@components/Tooltip/Tooltip';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <TooltipBasic_1.default />
        </div>
        <CodeBox_1.default code={`
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
`} copyText={`
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
`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">
          1.3. Tooltip Positions
        </h2>
        <p>
          <code>Tooltip</code> 컴포넌트는 툴팁의 위치를 설정할 수 있는 다양한
          옵션을 제공합니다:
        </p>
        <ul>
          <li>
            <strong className="dark:text-[#dfdfdf]">Top:</strong> 요소의 위쪽에
            툴팁을 표시합니다.
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Bottom:</strong> 요소의
            아래쪽에 툴팁을 표시합니다.
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Left:</strong> 요소의 왼쪽에
            툴팁을 표시합니다.
          </li>
          <li>
            <strong className="dark:text-[#dfdfdf]">Right:</strong> 요소의
            오른쪽에 툴팁을 표시합니다.
          </li>
        </ul>
        <div className="my-7 space-y-7">
          <Tooltip_1.default content="Top Tooltip" position="top">
            <span>Hover me (Top)</span>
          </Tooltip_1.default>
          <Tooltip_1.default content="Bottom Tooltip" position="bottom">
            <span>Hover me (Bottom)</span>
          </Tooltip_1.default>
          <Tooltip_1.default content="Left Tooltip" position="left">
            <span>Hover me (Left)</span>
          </Tooltip_1.default>
          <Tooltip_1.default content="Right Tooltip" position="right">
            <span>Hover me (Right)</span>
          </Tooltip_1.default>
        </div>
        <CodeBox_1.default code={`
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
`} copyText={`
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
`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

        {/* TooltipIcon Section */}
        <h1 className="text-[#2D3748] dark:text-white">2. TooltipIcon</h1>
        <p>
          <code>TooltipIcon</code> 컴포넌트는 아이콘과 함께 툴팁을 표시하는
          컴포넌트입니다. 마우스를 아이콘 위에 올리면 아이콘에 대한 추가 정보를
          제공합니다.
        </p>

        <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
        <CodeBox_1.default code={`import TooltipIcon from '@components/Tooltip/TooltipIcon';`} copyText={`import TooltipIcon from '@components/Tooltip/TooltipIcon';`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

        <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
        <p>아이콘 툴팁의 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <TooltipIcon_1.default />
        </div>
        <CodeBox_1.default code={`
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
`} copyText={`
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
`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>

        {/* Full Example Section */}
        <h2 className="text-[#2D3748] dark:text-white">2.3. Full Example</h2>
        <CodeBox_1.default code={`
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
`} copyText={`
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
`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
exports.default = TooltipDocs;
