"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const DataTableBasic_1 = __importDefault(require("@components/DataTable/DataTableBasic"));
const DataTableBasicDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. DataTableBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DataTableBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB370\uC774\uD130\uB97C \uD14C\uC774\uBE14 \uD615\uC2DD\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uAE30 \uC704\uD55C \uAE30\uBCF8 \uB370\uC774\uD130 \uD14C\uC774\uBE14 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD14C\uB9C8 \uC0C9\uC0C1\uC73C\uB85C \uD14C\uC774\uBE14\uC758 \uD5E4\uB354\uC640 \uC140\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Tailwind CSS\uB97C \uD65C\uC6A9\uD55C \uB2E4\uD06C \uBAA8\uB4DC\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DataTableBasic from './DataTableBasic';`, copyText: `import DataTableBasic from './DataTableBasic';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(DataTableBasic_1.default, { data: [
                        { Name: "John Doe", Age: 25, City: "New York" },
                        { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DataTableBasic from './DataTableBasic';

function Example() {
  const data = [
    { Name: "John Doe", Age: 25, City: "New York" },
    { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
  ];

  return <DataTableBasic data={data} />;
}

export default Example;`, copyText: `import DataTableBasic from './DataTableBasic';

function Example() {
  const data = [
    { Name: "John Doe", Age: 25, City: "New York" },
    { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
  ];

  return <DataTableBasic data={data} />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "DataTableBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 Props\uB97C \uBC1B\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "data" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14C\uC774\uBE14\uC5D0 \uD45C\uC2DC\uD560 \uB370\uC774\uD130 \uBC30\uC5F4" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsxs)("code", { children: ["Array<", `{ [key: string]: string | number }`, " >"] }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "thColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14C\uC774\uBE14 \uD5E4\uB354 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Blue\" | \"Gray\" | \"Purple\" | \"Green\" | \"Yellow\" | \"Red\" | \"Dark\" | \"Navy\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Blue\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "tdColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD14C\uC774\uBE14 \uC140 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Primary\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import React from "react";

interface DataTableBasicProp {
  data: Array<{ [key: string]: string | number }>;
  thColor?:
    | "Blue"
    | "Gray"
    | "Purple"
    | "Green"
    | "Yellow"
    | "Red"
    | "Dark"
    | "Navy";
  tdColor?:
    | "Basic"
    | "Primary"
    | "Gray"
    | "Secondary"
    | "Success"
    | "Warning"
    | "Danger";
}

const DataTableBasic = ({
  data,
  thColor = "Blue",
  tdColor = "Primary",
}: DataTableBasicProp) => {
  const col = data.length > 0 ? Object.keys(data[0]) : [];

  const colorClassMap: { [key: string]: string } = {
    Blue: "bg-Blue dark:bg-blue-900",
    Gray: "bg-Gray dark:bg-gray-700",
    Purple: "bg-Purple dark:bg-purple-800",
    Green: "bg-Green dark:bg-green-800",
    Yellow: "bg-Yellow dark:bg-yellow-700",
    Red: "bg-Red dark:bg-red-800",
    Dark: "bg-Dark dark:bg-gray-900",
    Navy: "bg-Navy dark:bg-blue-800",
    Basic: "bg-Basic dark:bg-gray-800",
    Primary: "bg-Primary dark:bg-blue-700",
    Secondary: "bg-Secondary dark:bg-indigo-800",
    Success: "bg-Success dark:bg-green-700",
    Warning: "bg-Warning dark:bg-yellow-800",
    Danger: "bg-Danger dark:bg-red-700",
  };

  return (
    <div className="overflow-x-auto dark:text-white">
      <table className="min-w-full border-collapse dark:border-[#3D4250] dark:bg-[#2A2E39]">
        <thead>
          <tr>
            {col.map((header) => (
              <th
                className={\`border-2 px-4 py-2 text-center font-bold dark:text-white \${
                  colorClassMap[thColor] || "bg-Blue"
                }\`}
                key={header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {col.map((content) => (
                <td
                  className={\`border-2 px-4 py-2 text-center dark:text-white \${
                    colorClassMap[tdColor] || "bg-Basic"
                  }\`}
                  key={content}
                >
                  {row[content]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableBasic;`, copyText: `import React from "react";

interface DataTableBasicProp {
  data: Array<{ [key: string]: string | number }>;
  thColor?:
    | "Blue"
    | "Gray"
    | "Purple"
    | "Green"
    | "Yellow"
    | "Red"
    | "Dark"
    | "Navy";
  tdColor?:
    | "Basic"
    | "Primary"
    | "Gray"
    | "Secondary"
    | "Success"
    | "Warning"
    | "Danger";
}

const DataTableBasic = ({
  data,
  thColor = "Blue",
  tdColor = "Primary",
}: DataTableBasicProp) => {
  const col = data.length > 0 ? Object.keys(data[0]) : [];

  const colorClassMap: { [key: string]: string } = {
    Blue: "bg-Blue dark:bg-blue-900",
    Gray: "bg-Gray dark:bg-gray-700",
    Purple: "bg-Purple dark:bg-purple-800",
    Green: "bg-Green dark:bg-green-800",
    Yellow: "bg-Yellow dark:bg-yellow-700",
    Red: "bg-Red dark:bg-red-800",
    Dark: "bg-Dark dark:bg-gray-900",
    Navy: "bg-Navy dark:bg-blue-800",
    Basic: "bg-Basic dark:bg-gray-800",
    Primary: "bg-Primary dark:bg-blue-700",
    Secondary: "bg-Secondary dark:bg-indigo-800",
    Success: "bg-Success dark:bg-green-700",
    Warning: "bg-Warning dark:bg-yellow-800",
    Danger: "bg-Danger dark:bg-red-700",
  };

  return (
    <div className="overflow-x-auto dark:text-white">
      <table className="min-w-full border-collapse dark:border-[#3D4250] dark:bg-[#2A2E39]">
        <thead>
          <tr>
            {col.map((header) => (
              <th
                className={\`border-2 px-4 py-2 text-center font-bold dark:text-white \${
                  colorClassMap[thColor] || "bg-Blue"
                }\`}
                key={header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {col.map((content) => (
                <td
                  className={\`border-2 px-4 py-2 text-center dark:text-white \${
                    colorClassMap[tdColor] || "bg-Basic"
                  }\`}
                  key={content}
                >
                  {row[content]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableBasic;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = DataTableBasicDocs;
