"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CardBasic_1 = __importDefault(require("@components/Card/CardBasic"));
const CardInteractive_1 = __importDefault(require("@components/Card/CardInteractive"));
const CardImage_1 = __importDefault(require("@components/Card/CardImage"));
const CardPricing_1 = __importDefault(require("@components/Card/CardPricing"));
const CardReview_1 = __importDefault(require("@components/Card/CardReview"));
const CardExample = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. CardBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAE30\uBCF8 \uCE74\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC81C\uACF5\uD558\uBA70, \uC81C\uBAA9\uACFC \uBCF8\uBB38 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uAC04\uB2E8\uD55C \uD14D\uC2A4\uD2B8 \uB610\uB294 \uAE30\uD0C0 React \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCE74\uB4DC \uD615\uD0DC\uB85C \uAC10\uC2F8\uC11C \uD45C\uC2DC\uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardBasic from '@components/Card/CardBasic';`, copyText: `import CardBasic from '@components/Card/CardBasic';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CardBasic_1.default, { title: "Example Card", children: (0, jsx_runtime_1.jsx)("p", { children: "This is an example of a basic card component in React." }) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardBasic from '@components/Card/CardBasic';

function Example() {
  return (
    <CardBasic title="Example Card">
      <p>This is an example of a basic card component in React.</p>
    </CardBasic>
  );
}

export default Example;`, copyText: `import CardBasic from '@components/Card/CardBasic';

function Example() {
  return (
    <CardBasic title="Example Card">
      <p>This is an example of a basic card component in React.</p>
    </CardBasic>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uC81C\uBAA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC \uB0B4\uBD80\uC5D0 \uD45C\uC2DC\uB420 \uB0B4\uC6A9\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "React.ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "null" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardBasic from '@components/Card/CardBasic';

function FullExample() {
  return (
    <div>
      <CardBasic title="Card 1">
        <p>This is the first card with some example content.</p>
      </CardBasic>
      <CardBasic title="Card 2">
        <p>This is the second card with different content.</p>
      </CardBasic>
      <CardBasic title="Card 3">
        <p>This is the third card with even more content.</p>
      </CardBasic>
    </div>
  );
}

export default FullExample;`, copyText: `import CardBasic from '@components/Card/CardBasic';

function FullExample() {
  return (
    <div>
      <CardBasic title="Card 1">
        <p>This is the first card with some example content.</p>
      </CardBasic>
      <CardBasic title="Card 2">
        <p>This is the second card with different content.</p>
      </CardBasic>
      <CardBasic title="Card 3">
        <p>This is the third card with even more content.</p>
      </CardBasic>
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. CardInteractive" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardInteractive" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD074\uB9AD\uD558\uC5EC \uCD94\uAC00\uC801\uC778 \uB0B4\uC6A9\uC744 \uD655\uC7A5\uD558\uAC70\uB098 \uCD95\uC18C\uD560 \uC218 \uC788\uB294 \uC778\uD130\uB799\uD2F0\uBE0C\uD55C \uCE74\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC81C\uBAA9\uACFC \uBCF8\uBB38 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC73C\uBA70, \uBCF8\uBB38 \uB0B4\uC6A9\uC740 \uD074\uB9AD \uC2DC \uD655\uC7A5\uB429\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardInteractive from '@components/Card/CardInteractive';`, copyText: `import CardInteractive from '@components/Card/CardInteractive';`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CardInteractive_1.default, { title: "Interactive Card", children: (0, jsx_runtime_1.jsx)("p", { children: "This content is hidden until the card is clicked." }) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardInteractive from '@components/Card/CardInteractive';

function Example() {
  return (
    <CardInteractive title="Interactive Card">
      <p>This content is hidden until the card is clicked.</p>
    </CardInteractive>
  );
}

export default Example;`, copyText: `import CardInteractive from '@components/Card/CardInteractive';

function Example() {
  return (
    <CardInteractive title="Interactive Card">
      <p>This content is hidden until the card is clicked.</p>
    </CardInteractive>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardInteractive" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uC81C\uBAA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC \uB0B4\uBD80\uC5D0 \uD45C\uC2DC\uB420 \uB0B4\uC6A9\uC785\uB2C8\uB2E4. \uD074\uB9AD \uC2DC \uD655\uC7A5\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "React.ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "null" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardInteractive from '@components/Card/CardInteractive';

function FullExample() {
  return (
    <div>
      <CardInteractive title="Card 1">
        <p>This is the first card with interactive content.</p>
      </CardInteractive>
      <CardInteractive title="Card 2">
        <p>This is the second card, click to expand.</p>
      </CardInteractive>
      <CardInteractive title="Card 3">
        <p>The third card also has expandable content.</p>
      </CardInteractive>
    </div>
  );
}

export default FullExample;`, copyText: `import CardInteractive from '@components/Card/CardInteractive';

function FullExample() {
  return (
    <div>
      <CardInteractive title="Card 1">
        <p>This is the first card with interactive content.</p>
      </CardInteractive>
      <CardInteractive title="Card 2">
        <p>This is the second card, click to expand.</p>
      </CardInteractive>
      <CardInteractive title="Card 3">
        <p>The third card also has expandable content.</p>
      </CardInteractive>
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. CardImage" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardImage" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC774\uBBF8\uC9C0 \uB610\uB294 \uC544\uBC14\uD0C0\uC640 \uD568\uAED8 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD558\uB294 \uCE74\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC81C\uBAA9\uACFC \uBCF8\uBB38 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uBBF8\uC9C0\uB97C \uCE74\uB4DC \uC67C\uCABD\uC5D0 \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardImage from '@components/Card/CardImage';`, copyText: `import CardImage from '@components/Card/CardImage';`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CardImage_1.default, { title: "Image Card", children: (0, jsx_runtime_1.jsx)("p", { children: "This card includes an image alongside the text." }) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardImage from '@components/Card/CardImage';

function Example() {
  return (
    <CardImage title="Image Card">
      <p>This card includes an image alongside the text.</p>
    </CardImage>
  );
}

export default Example;`, copyText: `import CardImage from '@components/Card/CardImage';

function Example() {
  return (
    <CardImage title="Image Card">
      <p>This card includes an image alongside the text.</p>
    </CardImage>
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardImage" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uC81C\uBAA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC \uB0B4\uBD80\uC5D0 \uD45C\uC2DC\uB420 \uB0B4\uC6A9\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "React.ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "null" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardImage from '@components/Card/CardImage';

function FullExample() {
  return (
    <div>
      <CardImage title="Image Card 1">
        <p>This is the first card with an image.</p>
      </CardImage>
      <CardImage title="Image Card 2">
        <p>This is the second card with another image.</p>
      </CardImage>
      <CardImage title="Image Card 3">
        <p>The third card with yet another image.</p>
      </CardImage>
    </div>
  );
}

export default FullExample;`, copyText: `import CardImage from '@components/Card/CardImage';

function FullExample() {
  return (
    <div>
      <CardImage title="Image Card 1">
        <p>This is the first card with an image.</p>
      </CardImage>
      <CardImage title="Image Card 2">
        <p>This is the second card with another image.</p>
      </CardImage>
      <CardImage title="Image Card 3">
        <p>The third card with yet another image.</p>
      </CardImage>
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "4. CardPricing" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardPricing" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0C1\uD488 \uB610\uB294 \uC11C\uBE44\uC2A4\uC758 \uAC00\uACA9, \uC124\uBA85, \uC8FC\uC694 \uD2B9\uC9D5\uC744 \uD45C\uC2DC\uD558\uB294 \uCE74\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAD6C\uB9E4 \uBC84\uD2BC\uB3C4 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4, \uC0AC\uC6A9\uC790\uAC00 \uBC14\uB85C \uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardPricing from '@components/Card/CardPricing';`, copyText: `import CardPricing from '@components/Card/CardPricing';`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CardPricing_1.default, { title: "Pro Plan", description: "Access more features with the Pro plan.", price: "$20/month", features: [
                                "5x more usage",
                                "Access to Claude 3 Haiku",
                                "Priority access during high-traffic periods",
                            ], buy: "Subscribe Now" }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardPricing from '@components/Card/CardPricing';

function Example() {
  return (
    <CardPricing
      title="Pro Plan"
      description="Access more features with the Pro plan."
      price="$20/month"
      features={[
        "5x more usage",
        "Access to Claude 3 Haiku",
        "Priority access during high-traffic periods",
      ]}
      buy="Subscribe Now"
    />
  );
}

export default Example;`, copyText: `import CardPricing from '@components/Card/CardPricing';

function Example() {
  return (
    <CardPricing
      title="Pro Plan"
      description="Access more features with the Pro plan."
      price="$20/month"
      features={[
        "5x more usage",
        "Access to Claude 3 Haiku",
        "Priority access during high-traffic periods",
      ]}
      buy="Subscribe Now"
    />
  );
}

export default Example;`, language: "tsx", index: 11, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardPricing" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "title" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCE74\uB4DC\uC758 \uC81C\uBAA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "description" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0C1\uD488 \uB610\uB294 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "price" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0C1\uD488 \uB610\uB294 \uC11C\uBE44\uC2A4\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "features" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0C1\uD488 \uB610\uB294 \uC11C\uBE44\uC2A4\uC758 \uC8FC\uC694 \uD2B9\uC9D5\uC744 \uB9AC\uC2A4\uD2B8 \uD615\uD0DC\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "buy" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAD6C\uB9E4 \uBC84\uD2BC\uC5D0 \uD45C\uC2DC\uB420 \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardPricing from '@components/Card/CardPricing';

function FullExample() {
  return (
    <div>
      <CardPricing
        title="Basic Plan"
        description="Get started with the basic plan."
        price="$10/month"
        features={[
          "2x more usage",
          "Standard access to features",
        ]}
        buy="Get Started"
      />
      <CardPricing
        title="Pro Plan"
        description="Access more features with the Pro plan."
        price="$20/month"
        features={[
          "5x more usage",
          "Access to Claude 3 Haiku",
          "Priority access during high-traffic periods",
        ]}
        buy="Subscribe Now"
      />
      <CardPricing
        title="Enterprise Plan"
        description="Enterprise-grade features for your business."
        price="Contact us"
        features={[
          "Unlimited usage",
          "Dedicated support",
          "Custom integrations",
        ]}
        buy="Contact Sales"
      />
    </div>
  );
}

export default FullExample;`, copyText: `import CardPricing from '@components/Card/CardPricing';

function FullExample() {
  return (
    <div>
      <CardPricing
        title="Basic Plan"
        description="Get started with the basic plan."
        price="$10/month"
        features={[
          "2x more usage",
          "Standard access to features",
        ]}
        buy="Get Started"
      />
      <CardPricing
        title="Pro Plan"
        description="Access more features with the Pro plan."
        price="$20/month"
        features={[
          "5x more usage",
          "Access to Claude 3 Haiku",
          "Priority access during high-traffic periods",
        ]}
        buy="Subscribe Now"
      />
      <CardPricing
        title="Enterprise Plan"
        description="Enterprise-grade features for your business."
        price="Contact us"
        features={[
          "Unlimited usage",
          "Dedicated support",
          "Custom integrations",
        ]}
        buy="Contact Sales"
      />
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 12, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "5. CardReview" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardReview" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790 \uB9AC\uBDF0\uC640 \uD568\uAED8 \uC0AC\uC6A9\uC790 \uC544\uBC14\uD0C0, \uC774\uB984, \uBCC4\uC810\uC744 \uD45C\uC2DC\uD558\uB294 \uCE74\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uB0A8\uAE34 \uD14D\uC2A4\uD2B8 \uB9AC\uBDF0\uC640 \uBCC4\uC810\uC744 \uD568\uAED8 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardReview from '@components/Card/CardReview';`, copyText: `import CardReview from '@components/Card/CardReview';`, language: "tsx", index: 13, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(CardReview_1.default, { avatar: "/avatar1.svg", name: "John Doe", rate: 4, children: (0, jsx_runtime_1.jsx)("p", { children: "This is an excellent product! Highly recommended." }) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardReview from '@components/Card/CardReview';

function Example() {
  return (
    <CardReview avatar="/avatar1.svg" name="John Doe" rate={4}>
      <p>This is an excellent product! Highly recommended.</p>
    </CardReview>
  );
}

export default Example;`, copyText: `import CardReview from '@components/Card/CardReview';

function Example() {
  return (
    <CardReview avatar="/avatar1.svg" name="John Doe" rate={4}>
      <p>This is an excellent product! Highly recommended.</p>
    </CardReview>
  );
}

export default Example;`, language: "tsx", index: 14, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CardReview" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "avatar" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9AC\uBDF0\uB97C \uC791\uC131\uD55C \uC0AC\uC6A9\uC790\uC758 \uC544\uBC14\uD0C0 \uC774\uBBF8\uC9C0 \uACBD\uB85C\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9AC\uBDF0\uB97C \uC791\uC131\uD55C \uC0AC\uC6A9\uC790\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "rate" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uBD80\uC5EC\uD55C \uBCC4\uC810 (0-5)\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "0" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "children" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB9AC\uBDF0 \uD14D\uC2A4\uD2B8\uB97C \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "React.ReactNode" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "null" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CardReview from '@components/Card/CardReview';

function FullExample() {
  return (
    <div>
      <CardReview avatar="/avatar1.svg" name="John Doe" rate={5}>
        <p>Perfect! Exceeded my expectations.</p>
      </CardReview>
      <CardReview avatar="/avatar2.svg" name="Jane Smith" rate={4}>
        <p>Very good, but there's room for improvement.</p>
      </CardReview>
      <CardReview avatar="/avatar3.svg" name="Bob Brown" rate={3}>
        <p>It's okay, not the best I've used.</p>
      </CardReview>
    </div>
  );
}

export default FullExample;`, copyText: `import CardReview from '@components/Card/CardReview';

function FullExample() {
  return (
    <div>
      <CardReview avatar="/avatar1.svg" name="John Doe" rate={5}>
        <p>Perfect! Exceeded my expectations.</p>
      </CardReview>
      <CardReview avatar="/avatar2.svg" name="Jane Smith" rate={4}>
        <p>Very good, but there's room for improvement.</p>
      </CardReview>
      <CardReview avatar="/avatar3.svg" name="Bob Brown" rate={3}>
        <p>It's okay, not the best I've used.</p>
      </CardReview>
    </div>
  );
}

export default FullExample;`, language: "tsx", index: 15, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = CardExample;
