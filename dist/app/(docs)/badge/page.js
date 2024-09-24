"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "prose max-w-[1000px] space-y-7 p-5 text-[#6D6D6D] dark:text-[#dfdfdf]", children: (0, jsx_runtime_1.jsxs)("div", { className: "dark:text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. Badge" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Badge" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C1\uD0DC\uB098 \uC815\uBCF4\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uC2DC\uD558\uB294 UI \uC694\uC18C\uC785\uB2C8\uB2E4. \uC5EC\uB7EC \uC720\uD615\uC758 \uBC30\uC9C0\uB97C \uC9C0\uC6D0\uD558\uBA70, \uB2E4\uD06C \uBAA8\uB4DC\uC5D0\uB3C4 \uB300\uC751\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Badge from '@components/Badge/Badge';`, copyText: `import Badge from '@components/Badge/Badge';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BadgeBasic_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`, copyText: `
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. BadgeCounter" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BadgeCounter" }), "\uB294 \uC22B\uC790\uB97C \uAC15\uC870\uD558\uC5EC \uC54C\uB9BC \uC218\uB098 \uBA54\uC2DC\uC9C0 \uC218\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BadgeCounter_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`, copyText: `
import Badge from './Badge';

const BadgeCounter = () => {
  return (
    <Badge type="counter" content="+5" color="bg-red-500" textColor="text-white" />
  );
};

export default BadgeCounter;
`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. BadgeDot" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BadgeDot" }), "\uB294 \uC791\uC740 \uC810 \uD615\uD0DC\uB85C \uC54C\uB9BC\uC774\uB098 \uC0C1\uD0DC\uB97C \uAC04\uB2E8\uD558\uAC8C \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BadgeDot_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`, copyText: `
import Badge from './Badge';

const BadgeDot = () => (
  <Badge type="dot" color="bg-red-500" />
);

export default BadgeDot;
`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "4. BadgeIcon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BadgeIcon" }), "\uB294 \uD14D\uC2A4\uD2B8\uC640 \uC544\uC774\uCF58\uC744 \uD568\uAED8 \uD45C\uC2DC\uD558\uC5EC \uB354 \uC9C1\uAD00\uC801\uC778 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BadgeIcon_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`, copyText: `
import Badge from './Badge';
import { FaStar } from 'react-icons/fa';

const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white" />
  );
};

export default BadgeIcon;
`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "5. Dark Mode Support" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Badge" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uD06C \uBAA8\uB4DC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uB2E4\uD06C \uBAA8\uB4DC\uC5D0\uC11C \uBC30\uACBD\uC0C9\uACFC \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 \uC790\uB3D9\uC73C\uB85C \uBCC0\uACBD\uB418\uC5B4 \uC5B4\uB450\uC6B4 \uBC30\uACBD\uC5D0\uC11C\uB3C4 \uC798 \uBCF4\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BadgeBasic_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`, copyText: `
import Badge from './Badge';

const BadgeBasic = () => {
  return (
    <Badge type="basic" content="BasicBadge" color="bg-blue-500" textColor="text-white" />
  );
};

export default BadgeBasic;
`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy })] }) }));
};
exports.default = BadgeDocs;
