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
const DataTableBasic_1 = __importDefault(require("@components/DataTable/DataTableBasic"));
const DataTableBasicDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* 1. DataTableBasic Component Introduction */}
      <h1 className="text-[#2D3748] dark:text-white">1. DataTableBasic</h1>
      <p>
        <code>DataTableBasic</code> 컴포넌트는 데이터를 테이블 형식으로 보여주기
        위한 기본 데이터 테이블 컴포넌트입니다. 이 컴포넌트는 다양한 테마
        색상으로 테이블의 헤더와 셀을 커스터마이징할 수 있습니다. Tailwind CSS를
        활용한 다크 모드도 지원합니다.
      </p>

      {/* 1.1. DataTableBasic Import */}
      <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
      <CodeBox_1.default code={`import DataTableBasic from './DataTableBasic';`} copyText={`import DataTableBasic from './DataTableBasic';`} language="tsx" index={0} copied={copied} handleCopy={handleCopy}/>

      {/* 1.2. DataTableBasic Usage */}
      <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <DataTableBasic_1.default data={[
            { Name: "John Doe", Age: 25, City: "New York" },
            { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
        ]}/>
      </div>
      <CodeBox_1.default code={`import DataTableBasic from './DataTableBasic';

function Example() {
  const data = [
    { Name: "John Doe", Age: 25, City: "New York" },
    { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
  ];

  return <DataTableBasic data={data} />;
}

export default Example;`} copyText={`import DataTableBasic from './DataTableBasic';

function Example() {
  const data = [
    { Name: "John Doe", Age: 25, City: "New York" },
    { Name: "Jane Doe", Age: 28, City: "Los Angeles" },
  ];

  return <DataTableBasic data={data} />;
}

export default Example;`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      {/* 1.3. DataTableBasic Props */}
      <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
      <p>
        <code>DataTableBasic</code> 컴포넌트는 다음과 같은 Props를 받습니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>data</code>
            </td>
            <td>테이블에 표시할 데이터 배열</td>
            <td>
              <code>Array&lt;{`{ [key: string]: string | number }`} &gt;</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>thColor</code>
            </td>
            <td>테이블 헤더 색상을 설정합니다.</td>
            <td>
              <code>
                "Blue" | "Gray" | "Purple" | "Green" | "Yellow" | "Red" | "Dark"
                | "Navy"
              </code>
            </td>
            <td>
              <code>"Blue"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>tdColor</code>
            </td>
            <td>테이블 셀 색상을 설정합니다.</td>
            <td>
              <code>
                "Basic" | "Primary" | "Gray" | "Secondary" | "Success" |
                "Warning" | "Danger"
              </code>
            </td>
            <td>
              <code>"Primary"</code>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 1.4. DataTableBasic Full Example */}
      <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
      <CodeBox_1.default code={`import React from "react";

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

export default DataTableBasic;`} copyText={`import React from "react";

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

export default DataTableBasic;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
exports.default = DataTableBasicDocs;
