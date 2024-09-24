"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const IconDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const iconNames = [
        "icon-login",
        "icon-logout",
        "icon-qr",
        "icon-reload",
        "icon-star",
        "icon-undo",
        "icon-bell",
        "icon-bell-off",
        "icon-bell-ring",
        "icon-call",
        "icon-camera",
        "icon-code",
        "icon-download",
        "icon-error",
        "icon-heart",
        "icon-help",
        "icon-home",
        "icon-image",
        "icon-info",
        "icon-web",
        "icon-mail",
        "icon-map",
        "icon-menu",
        "icon-pin",
        "icon-refresh",
        "icon-setting",
        "icon-share",
        "icon-user",
        "icon-video",
        "icon-docs",
        "icon-check",
        "icon-search",
        "icon-docs2",
        "icon-github",
        "icon-blog",
        "icon-comment",
        "icon-lock",
        "icon-unlock",
        "icon-bin",
        "icon-clip",
        "icon-emptyBookmark",
        "icon-bookmark",
        "icon-pencil",
        "icon-pen",
        "icon-music",
        "icon-wifi",
        "icon-sun",
        "icon-moon",
        "icon-play",
        "icon-pause",
        "icon-plus",
        "icon-minus",
        "icon-close",
        "icon-arrowUp",
        "icon-arrowDown",
        "icon-emptyHeart",
        "icon-heart",
        "icon-next",
        "icon-prev",
        "icon-up",
        "icon-down",
        "icon-github2",
        "icon-facebook",
        "icon-twitter",
        "icon-linkedin",
        "icon-line",
        "icon-instagram",
    ];
    const router = (0, navigation_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose w-[850px] max-w-[1000px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Icon" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Icon" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C SVG \uC544\uC774\uCF58\uC744 \uD3F0\uD2B8\uB85C \uC0AC\uC6A9\uD558\uC5EC \uC6F9 \uC5D0\uC11C \uC190\uC27D\uAC8C \uC544\uC774\uCF58\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uC774\uCF58\uC758 \uD06C\uAE30, \uC0C9\uC0C1, \uCD94\uAC00\uC801\uC778 \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uD1B5\uD574 \uC2A4\uD0C0\uC77C\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Icon from '@components/Icon';`, copyText: `import Icon from '@components/Icon';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-home" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Icon from '@components/Icon';

function Example() {
  return (
    <Icon name="icon-home" />
  );
}

export default Example;`, copyText: `import Icon from '@components/Icon';

function Example() {
  return (
    <Icon name="icon-home" />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "2. Size" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "size" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "16" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-star", size: 16 }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-star", size: 24 }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-star", size: 32 })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-star" size={16} />
      <Icon name="icon-star" size={24} />
      <Icon name="icon-star" size={32} />
    </>
  );
}

export default Example;`, copyText: `import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-star" size={16} />
      <Icon name="icon-star" size={24} />
      <Icon name="icon-star" size={32} />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "3. Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), " prop\uC744 \uC774\uC6A9\uD558\uC5EC \uC544\uC774\uCF58\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "currentColor" }), "\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-heart", color: "red" }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-heart", color: "green" }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-heart", color: "blue" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-heart" color="red" />
      <Icon name="icon-heart" color="green" />
      <Icon name="icon-heart" color="blue" />
    </>
  );
}

export default Example;`, copyText: `import Icon from '@components/Icon';

function Example() {
  return (
    <>
      <Icon name="icon-heart" color="red" />
      <Icon name="icon-heart" color="green" />
      <Icon name="icon-heart" color="blue" />
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-2 text-[#2D3748]", children: "4. All Icons" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uB798\uB294 \uBAA8\uB4E0 \uC544\uC774\uCF58\uC744 \uD45C\uC2DC\uD55C \uC608\uC81C\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-4 gap-4", children: iconNames.map((iconName) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: iconName, size: 24 }), (0, jsx_runtime_1.jsx)("span", { children: iconName })] }, iconName))) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "5. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Icon" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uD560 \uC544\uC774\uCF58\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "IconName" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD544\uC218" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (\uD53D\uC140 \uB2E8\uC704)" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "16" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC544\uC774\uCF58\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "currentColor" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "className" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCD94\uAC00\uC801\uC778 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD55C \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "6. Example with Button" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC544\uC774\uCF58\uC744 \uD3EC\uD568\uD55C \uBC84\uD2BC\uC758 \uC608\uC81C\uC785\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4 space-y-4", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-home", color: "secondary", iconSize: "small", size: "small", children: "Home small" }), (0, jsx_runtime_1.jsx)(Button_1.default, { icon: "icon-docs", color: "warning", iconSize: "medium", children: "Docs" })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Button } from '@components/Button';

function Example() {
  return (
    <>
      <Button
        icon="icon-home"
        color="secondary"
        iconSize="small"
        size="small"
      >
        Home small
      </Button>
      <Button icon="icon-docs" color="warning" iconSize="medium">
        Docs
      </Button>
    </>
  );
}

export default Example;`, copyText: `import { Button } from '@components/Button';

function Example() {
  return (
    <>
      <Button
        icon="icon-home"
        color="secondary"
        iconSize="small"
        size="small"
      >
        Home small
      </Button>
      <Button icon="icon-docs" color="warning" iconSize="medium">
        Docs
      </Button>
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { children: "7. \uBC84\uD2BC\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uACE0 \uC2F6\uB2E4\uBA74?" }), (0, jsx_runtime_1.jsx)("p", { children: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 \uC544\uB798\uC758 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC774\uB3D9\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => {
                    router.push("/button");
                }, children: "Button Docs\uB85C \uC774\uB3D9" })] }));
};
exports.default = IconDoc;
