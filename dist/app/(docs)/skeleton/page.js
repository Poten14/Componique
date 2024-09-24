"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Skeleton_1 = __importDefault(require("@components/Skeleton/Skeleton"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const SkeletonCard_1 = __importDefault(require("@components/Skeleton/SkeletonCard"));
const SkeletonDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Skeleton" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Skeleton" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC2DC\uAC01\uC801\uC778 \uD53C\uB4DC\uBC31\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30, \uBAA8\uC591, \uC560\uB2C8\uBA54\uC774\uC158 \uC635\uC158\uC744 \uC81C\uACF5\uD558\uC5EC \uC720\uC5F0\uD558\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Skeleton } from '@components/Skeleton';`, copyText: `import { Skeleton } from '@components/Skeleton';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Skeleton_1.default, { size: "medium", variants: "rounded", animate: true }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <Skeleton size="medium" variants="rounded" animate={true} />
  );
}

export default Example;`, copyText: `import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <Skeleton size="medium" variants="rounded" animate={true} />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Skeleton" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Skeleton\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. `small`, `medium`, `large` \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variants" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Skeleton\uC758 \uBAA8\uC591\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. `rounded` \uB610\uB294 `rectangular` \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"rounded\" | \"rectangular\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"rectangular\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "animate" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB85C\uB529 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD65C\uC131\uD654\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <div>
      <Skeleton size="large" variants="rectangular" animate={false} />
    </div>
  );
}

export default Example;`, copyText: `import Skeleton from '@components/Skeleton';

function Example() {
  return (
    <div>
      <Skeleton size="large" variants="rectangular" animate={false} />
    </div>
  );`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. SkeletonCard" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SkeletonCard" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C \uC2A4\uCF08\uB808\uD1A4 UI\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uCE74\uB4DC \uD615\uD0DC\uB85C \uB2E4\uC591\uD55C \uC18D\uC131\uC744 \uC870\uC815\uD558\uC5EC \uB9DE\uCDA4\uD615 \uC2A4\uCF08\uB808\uD1A4 \uCE74\uB4DC\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SkeletonCard from '@components/SkeletonCard';`, copyText: `import SkeletonCard from '@components/SkeletonCard';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(SkeletonCard_1.default, { width: "w-2/5" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SkeletonCard from '@components/SkeletonCard';
function Example() {
  return <SkeletonCard />;
}

export default Example;`, copyText: `import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return <SkeletonCard />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Customizing SkeletonCard" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SkeletonCard" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC18D\uC131\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCE74\uB4DC\uC758 \uD06C\uAE30, \uC774\uBBF8\uC9C0 \uC720\uBB34, \uC544\uBC14\uD0C0 \uD45C\uC2DC \uC5EC\uBD80, \uC560\uB2C8\uBA54\uC774\uC158 \uD6A8\uACFC \uB4F1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 flex flex-wrap gap-4", children: [(0, jsx_runtime_1.jsx)(SkeletonCard_1.default, { width: "w-1/4" }), (0, jsx_runtime_1.jsx)(SkeletonCard_1.default, { width: "w-1/5", hasAvatar: false }), (0, jsx_runtime_1.jsx)(SkeletonCard_1.default, { width: "w-1/4", hasImage: false }), (0, jsx_runtime_1.jsx)(SkeletonCard_1.default, { width: "w-1/4", animate: false })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <>
      <SkeletonCard width="w-1/4" />
      <SkeletonCard width="w-1/5" hasAvatar={false} />
      <SkeletonCard width="w-1/4" hasImage={false} />
      <SkeletonCard width="w-1/4" animate={false} />
    </>
  );
}

export default Example;`, copyText: `import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <>
      <SkeletonCard width="w-1/4" />
      <SkeletonCard width="w-1/5" hasAvatar={false} />
      <SkeletonCard width="w-1/4" hasImage={false} />
      <SkeletonCard width="w-1/4" animate={false} />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "SkeletonCard" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. TailwindCSS \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"w-1/5\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "height" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uB192\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. TailwindCSS \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"h-auto\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "imageHeight" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uC758 \uB192\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. TailwindCSS \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"h-48\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "hasAvatar" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uBC14\uD0C0\uB97C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "hasImage" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "animate" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2A4\uCF08\uB808\uD1A4 \uCE74\uB4DC\uC5D0 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC801\uC6A9\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <div>
      <SkeletonCard width="w-2/5" />
    </div>
  );
}

export default Example;`, copyText: `import SkeletonCard from '@components/SkeletonCard';

function Example() {
  return (
    <div>
      <SkeletonCard width="w-2/5" />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = SkeletonDocs;
