"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Calendar_1 = __importDefault(require("@components/Calendar/Calendar"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CalendarRange_1 = __importDefault(require("@components/Calendar/CalendarRange"));
const CalendarDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Calendar" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Calendar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB0A0\uC9DC\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC778\uD130\uB799\uD2F0\uBE0C\uD55C \uB2EC\uB825\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uD2B9\uC815 \uB0A0\uC9DC\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70, \uC120\uD0DD\uB41C \uB0A0\uC9DC\uB294 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Calendar from '@components/Calendar';`, copyText: `import Calendar from '@components/Calendar';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Calendar_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Calendar from '@components/Calendar';

function Example() {
  return <Calendar />;
}

export default Example;`, copyText: `import Calendar from '@components/Calendar';

function Example() {
  return <Calendar />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Customizing Calendar" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Calendar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC18D\uC131\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8 \uB0A0\uC9DC\uB97C \uC124\uC815\uD558\uAC70\uB098 \uB0A0\uC9DC \uC120\uD0DD \uC2DC \uD638\uCD9C\uB420 \uCF5C\uBC31 \uD568\uC218\uB97C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Calendar_1.default, { defaultValue: new Date(), onDateSelect: (date) => console.log(date) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Calendar from '@components/Calendar';

function Example() {
  return (
    <Calendar
      defaultValue={new Date()}
      onDateSelect={(date) => console.log(date)}
    />
  );
}

export default Example;`, copyText: `import Calendar from '@components/Calendar';

function Example() {
  return (
    <Calendar
      defaultValue={new Date()}
      onDateSelect={(date) => console.log(date)}
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Calendar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onDateSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uB0A0\uC9DC\uB97C \uC120\uD0DD\uD560 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(date: Date) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "defaultValue" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB2EC\uB825\uC774 \uB85C\uB4DC\uB420 \uB54C \uAE30\uBCF8\uC73C\uB85C \uC120\uD0DD\uB41C \uB0A0\uC9DC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "Date" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "new Date()" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Calendar from '@components/Calendar';

function Example() {
  return (
    <div>
      <Calendar
        defaultValue={new Date()}
        onDateSelect={(date) => console.log(date)}
      />
    </div>
  );
}

export default Example;`, copyText: `import Calendar from '@components/Calendar';

function Example() {
  return (
    <div>
      <Calendar
        defaultValue={new Date()}
        onDateSelect={(date) => console.log(date)}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. CalendarRange" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CalendarRange" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB0A0\uC9DC \uBC94\uC704\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uB2EC\uB825\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC2DC\uC791 \uB0A0\uC9DC\uC640 \uC885\uB8CC \uB0A0\uC9DC\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70, \uC120\uD0DD\uB41C \uBC94\uC704\uB294 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CalendarRange from '@components/CalendarRange';`, copyText: `import CalendarRange from '@components/CalendarRange';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(CalendarRange_1.default, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return <CalendarRange />;
}

export default Example;`, copyText: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return <CalendarRange />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Customizing CalendarRange" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CalendarRange" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB0A0\uC9DC \uC120\uD0DD \uC2DC \uD638\uCD9C\uB420 \uCF5C\uBC31 \uD568\uC218\uC778", " ", (0, jsx_runtime_1.jsx)("code", { children: "onDateSelect" }), "\uB97C \uC804\uB2EC\uD558\uC5EC \uC120\uD0DD\uB41C \uB0A0\uC9DC \uBC94\uC704\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(CalendarRange_1.default, { onDateSelect: (startDate, endDate) => console.log("Selected range:", startDate, "to", endDate) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <CalendarRange 
      onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
    />
  );
}

export default Example;`, copyText: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <CalendarRange 
      onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CalendarRange" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onDateSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uB0A0\uC9DC \uBC94\uC704\uB97C \uC120\uD0DD\uD560 \uB54C \uD638\uCD9C\uB418\uB294 \uCF5C\uBC31 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(startDate: Date, endDate: Date) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "undefined" }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <div>
      <CalendarRange 
        onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
      />
    </div>
  );
}

export default Example;`, copyText: `import CalendarRange from '@components/CalendarRange';

function Example() {
  return (
    <div>
      <CalendarRange 
        onDateSelect={(startDate, endDate) => console.log("Selected range:", startDate, "to", endDate)}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = CalendarDocs;
