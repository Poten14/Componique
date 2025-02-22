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
const BadgeBasic_1 = __importDefault(require("@components/Badge/BadgeBasic"));
const BadgeCounter_1 = __importDefault(require("@components/Badge/BadgeCounter"));
const BadgeDot_1 = __importDefault(require("@components/Badge/BadgeDot"));
const BadgeIcon_1 = __importDefault(require("@components/Badge/BadgeIcon"));
const BadgeDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[1000px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]">
      <div className="dark:text-white">
        <h1 className="text-[#2D3748] dark:text-white">1. Badge</h1>
        <p>
          <code>Badge</code> 컴포넌트는 다양한 상태나 정보를 시각적으로 표시하는 UI 요소입니다. 여러 유형의 배지를 지원하며, 다크 모드에도 대응합니다.
        </p>
    <br />
        <h1 className="text-[#2D3748] dark:text-white">1.1. Import</h1>
        <CodeBox_1.default code={`import Badge from '@components/Badge/Badge';`} copyText={`import Badge from '@components/Badge/Badge';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>
    <br />
        <h1 className="text-[#2D3748] dark:text-white">1.2. Usage</h1>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div className="my-7">
          <BadgeBasic_1.default />
        </div>
        <CodeBox_1.default code={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} copyText={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
    <hr />
        {/* BadgeCounter Section */}
        <h1 className="text-[#2D3748] dark:text-white">2. BadgeCounter</h1>
        <p>
          <code>BadgeCounter</code>는 숫자를 강조하여 알림 수나 메시지 수를 표시합니다.
        </p>
        <div className="my-7">
          <BadgeCounter_1.default />
        </div>
        <CodeBox_1.default code={`
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`} copyText={`
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>
    <hr />

        {/* BadgeDot Section */}
        <h1 className="text-[#2D3748] dark:text-white">3. BadgeDot</h1>
        <p>
          <code>BadgeDot</code>는 작은 점 형태로 알림이나 상태를 간단하게 표시합니다.
        </p>
        <div className="my-7">
          <BadgeDot_1.default />
        </div>
        <CodeBox_1.default code={`
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`} copyText={`
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    <hr />

        {/* BadgeIcon Section */}
        <h1 className="text-[#2D3748] dark:text-white">4. BadgeIcon</h1>
        <p>
          <code>BadgeIcon</code>는 텍스트와 아이콘을 함께 표시하여 더 직관적인 정보를 제공합니다.
        </p>
        <div className="my-7">
          <BadgeIcon_1.default />
        </div>
        <CodeBox_1.default code={`
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`} copyText={`
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>
    <hr />

        <h1 className="text-[#2D3748] dark:text-white">5. Dark Mode Support</h1>
        <p>
          <code>Badge</code> 컴포넌트는 다크 모드를 지원합니다. 다크 모드에서 배경색과 테두리 색상이 자동으로 변경되어 어두운 배경에서도 잘 보입니다.
        </p>
        <div className="my-7">
          <BadgeBasic_1.default />
        </div>
        <CodeBox_1.default code={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} copyText={`
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`} language="tsx" index={6} copied={copied} handleCopy={handleCopy}/>
      </div>
    </div>);
};
exports.default = BadgeDocs;
