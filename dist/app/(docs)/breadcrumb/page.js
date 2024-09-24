"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BreadCrumb_1 = __importDefault(require("@components/BreadCrumb/BreadCrumb"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const BreadCrumbSlash_1 = __importDefault(require("@components/BreadCrumb/BreadCrumbSlash"));
const BreadCrumbDropdown_1 = __importDefault(require("@components/BreadCrumb/BreadCrumbDropdown"));
const BreadCrumbDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. BreadCrumb" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumb" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6F9 \uD398\uC774\uC9C0 \uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uD604\uC7AC \uC704\uCE58\uD55C \uD398\uC774\uC9C0\uC758 \uACBD\uB85C\uB97C \uB098\uD0C0\uB0B4\uB294 \uB0B4\uBE44\uAC8C\uC774\uC158 \uC694\uC18C\uC785\uB2C8\uB2E4. \uAC01 \uACBD\uB85C\uB294 \uD654\uC0B4\uD45C \uC544\uC774\uCF58\uC73C\uB85C \uAD6C\uBD84\uB418\uBA70, \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uB2E4\uB978 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD65C\uC131 \uC0C1\uD0DC \uBC0F \uD638\uBC84 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC0C9\uC0C1\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';`, copyText: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumb_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        { children: "Breadcrumb" },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`, copyText: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Customizing BreadCrumb" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumb" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1 \uC635\uC158\uC744 \uD1B5\uD574 \uD638\uBC84 \uBC0F \uD65C\uC131 \uC0C1\uD0DC\uC758 \uB9C1\uD06C \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumb_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        { children: "Breadcrumb" },
                    ], hoverColor: "Basic", activeColor: "Basic" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`, copyText: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <BreadCrumb
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumb" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "items" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC01 \uB9C1\uD06C\uB97C \uB098\uD0C0\uB0B4\uB294 \uAC1D\uCCB4\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ href?: string, className?: string, children: React.ReactNode }[]` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "hoverColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9C1\uD06C\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB838\uC744 \uB54C\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\" | \"Basic\" | \"Primary\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "activeColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD65C\uC131\uD654\uB41C \uB9C1\uD06C\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\" | \"Basic\" | \"Primary\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <div>
      <BreadCrumb
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Basic"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`, copyText: `import BreadCrumb from '@components/BreadCrumb/BreadCrumb';

function Example() {
  return (
    <div>
      <BreadCrumb
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Basic"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. BreadCrumbSlash" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbSlash" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6F9 \uD398\uC774\uC9C0 \uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uD604\uC7AC \uC704\uCE58\uD55C \uD398\uC774\uC9C0\uC758 \uACBD\uB85C\uB97C \uB098\uD0C0\uB0B4\uB294 \uB0B4\uBE44\uAC8C\uC774\uC158 \uC694\uC18C\uC785\uB2C8\uB2E4. \uAC01 \uACBD\uB85C\uB294 \uC2AC\uB798\uC2DC(/) \uAE30\uD638\uB85C \uAD6C\uBD84\uB418\uBA70, \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uB2E4\uB978 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD65C\uC131 \uC0C1\uD0DC \uBC0F \uD638\uBC84 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC0C9\uC0C1\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';`, copyText: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumbSlash_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        { children: "Breadcrumb" },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`, copyText: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Customizing BreadCrumbSlash" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbSlash" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1 \uC635\uC158\uC744 \uD1B5\uD574 \uD638\uBC84 \uBC0F \uD65C\uC131 \uC0C1\uD0DC\uC758 \uB9C1\uD06C \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumbSlash_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        { children: "Breadcrumb" },
                    ], hoverColor: "Basic", activeColor: "Basic" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`, copyText: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <BreadCrumbSlash
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        { children: "Breadcrumb" },
      ]}
      hoverColor="Basic"
      activeColor="Basic"
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbSlash" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "items" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC01 \uB9C1\uD06C\uB97C \uB098\uD0C0\uB0B4\uB294 \uAC1D\uCCB4\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ href?: string, className?: string, children: React.ReactNode }[]` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "hoverColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9C1\uD06C\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB838\uC744 \uB54C\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\" | \"Basic\" | \"Primary\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "activeColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD65C\uC131\uD654\uB41C \uB9C1\uD06C\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\" | \"Basic\" | \"Primary\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"black\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <div>
      <BreadCrumbSlash
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Primary"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`, copyText: `import BreadCrumbSlash from '@components/BreadCrumb/BreadCrumbSlash';

function Example() {
  return (
    <div>
      <BreadCrumbSlash
        items={[
          { href: "/", children: "Home" },
          { href: "/docs", children: "Docs" },
          { children: "Breadcrumb" },
        ]}
        hoverColor="Primary"
        activeColor="Danger"
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. BreadCrumbDropdown" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbDropdown" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6F9 \uD398\uC774\uC9C0 \uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uD604\uC7AC \uC704\uCE58\uD55C \uD398\uC774\uC9C0\uC758 \uACBD\uB85C\uB97C \uB098\uD0C0\uB0B4\uB294 \uB0B4\uBE44\uAC8C\uC774\uC158 \uC694\uC18C\uB85C, \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uD1B5\uD574 \uCD94\uAC00\uC801\uC778 \uACBD\uB85C\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uC635\uC158\uC744 \uC120\uD0DD\uD558\uAC70\uB098 \uC9C1\uC811 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';`, copyText: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumbDropdown_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        {
                            children: "Components",
                            dropdownItems: [
                                { label: "Button", href: "/docs/button" },
                                { label: "Input", href: "/docs/input" },
                            ],
                        },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        {
          children: "Components",
          dropdownItems: [
            { label: "Button", href: "/docs/button" },
            { label: "Input", href: "/docs/input" },
          ],
        },
      ]}
    />
  );
}

export default Example;`, copyText: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
      items={[
        { href: "/", children: "Home" },
        { href: "/docs", children: "Docs" },
        {
          children: "Components",
          dropdownItems: [
            { label: "Button", href: "/docs/button" },
            { label: "Input", href: "/docs/input" },
          ],
        },
      ]}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Customizing BreadCrumbDropdown" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbDropdown" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC9C0\uC6D0\uD558\uBA70, \uAC01 \uACBD\uB85C\uC5D0 \uB300\uD574 \uC5EC\uB7EC \uAC1C\uC758 \uB4DC\uB86D\uB2E4\uC6B4 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC635\uC158\uC740 \uC0AC\uC6A9\uC790\uAC00 \uD2B9\uC815 \uACBD\uB85C\uC640 \uAD00\uB828\uB41C \uC5EC\uB7EC \uD398\uC774\uC9C0\uB85C \uC27D\uAC8C \uC774\uB3D9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(BreadCrumbDropdown_1.default, { items: [
                        { href: "/", children: "Home" },
                        { href: "/docs", children: "Docs" },
                        {
                            children: "Components",
                            dropdownItems: [
                                { label: "Home", href: "/" },
                                { label: "Breadcrumb", href: "/components/breadcrumb" },
                                { label: "UserPage", href: "/userpage" },
                            ],
                        },
                        { children: "Breadcrumb" },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
     items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
    />
  );
}

export default Example;`, copyText: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <BreadCrumbDropdown
     items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "BreadCrumbDropdown" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "items" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC01 \uB9C1\uD06C\uC640 \uB4DC\uB86D\uB2E4\uC6B4 \uD56D\uBAA9\uC744 \uB098\uD0C0\uB0B4\uB294 \uAC1D\uCCB4\uB4E4\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ href?: string, className?: string, children: React.ReactNode, dropdownItems?: { label: string, href: string }[] }[]` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <div>
      <BreadCrumbDropdown
      items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
      />
    </div>
  );
}

export default Example;`, copyText: `import BreadCrumbDropdown from '@components/BreadCrumb/BreadCrumbDropdown';

function Example() {
  return (
    <div>
      <BreadCrumbDropdown
        items={[
            { href: "/", children: "Home" },
            { href: "/docs", children: "Docs" },
            {
              children: "Components",
              dropdownItems: [
                { label: "Home", href: "/" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "UserPage", href: "/userpage" },
              ],
            },
            { children: "Breadcrumb" },
          ]}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = BreadCrumbDocs;
