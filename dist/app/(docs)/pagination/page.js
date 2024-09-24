"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Pagination_1 = __importDefault(require("@components/Pagination/Pagination"));
const PaginationDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [currentPage, setCurrentPage] = (0, react_1.useState)(3);
    const totalPages = 10;
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose mb-40 max-w-[850px] text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Pagination" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uD398\uC774\uC9C0 \uBC88\uD638\uB97C \uD45C\uC2DC\uD558\uACE0 \uD398\uC774\uC9C0 \uC774\uB3D9\uC744 \uAC00\uB2A5\uD558\uAC8C \uD574\uC8FC\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C, \uC0C9\uC0C1, \uBAA8\uC591 \uB4F1\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@componique/react';`, copyText: `import { Pagination } from '@components/Pagination';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-x-3 space-y-4", children: (0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: 10, onPageChange: handlePageChange }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@components/Pagination';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <Pagination
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
  />
  );
}

export default Example;`, copyText: `import { Pagination } from '@components/Pagination';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
            <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
          />
          );
        }
        
        export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Variant of the Pagination" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uBAA8\uC591\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uBAA8\uC591\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "circle" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "circle" }), ": \uC6D0\uD615 \uBC84\uD2BC"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "square" }), ": \uC0AC\uAC01\uD615 \uBC84\uD2BC"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: 10, onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { variant: "square", currentPage: currentPage, totalPages: 10, onPageChange: handlePageChange })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
  </>
  );
}

export default Example;`, copyText: `import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            variant="square"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
          </>
          );
        }
        
        export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Changing the Style of the Pagination" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C \uD0C0\uC785\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC2A4\uD0C0\uC77C \uD0C0\uC785\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "filled" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "filled" }), ": \uBC84\uD2BC\uC758 \uBC30\uACBD\uC0C9\uC774 \uCC44\uC6CC\uC9C4 \uC2A4\uD0C0\uC77C"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "outlined" }), ": \uBC84\uD2BC\uC758 \uC678\uACFD\uC120\uB9CC \uC788\uB294 \uC2A4\uD0C0\uC77C"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "outlined-focused" }), ": \uD3EC\uCEE4\uC2A4\uB41C \uC678\uACFD\uC120 \uC2A4\uD0C0\uC77C"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "filled-outlined" }), ": \uCC44\uC6CC\uC9C4 \uC678\uACFD\uC120 \uC2A4\uD0C0\uC77C"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: 10, styleType: "outlined", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: 10, styleType: "outlined-focused", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: 10, styleType: "filled-outlined", onPageChange: handlePageChange })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    styleType = "filled"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined"
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined-focused"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "filled-outlined"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
      />
  </>
  );
}
        
export default Example;`, copyText: `import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
  <>
    <Pagination
    styleType = "filled"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined"
    variant="square"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "outlined-focused"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
    <Pagination
    styleType = "filled-outlined"
    currentPage={currentPage}
    totalPages={10}
    onPageChange={handlePageChange}
    />
  </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Changing the Color of the Pagination" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Basic text-white", children: "Basic" }), ": \uAE30\uBCF8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Primary text-white", children: "Primary" }), ": \uC8FC\uC694 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-gray text-white", children: "gray" }), ": \uD68C\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Secondary text-white", children: "Secondary" }), ": \uBCF4\uC870 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Success text-white", children: "Success" }), ": \uC131\uACF5 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Warning text-white", children: "Warning" }), ": \uACBD\uACE0 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-Danger text-white", children: "Danger" }), ": \uC704\uD5D8 \uC0C9\uC0C1"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { className: "bg-white text-Gray", children: "White" }), ": \uD770\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Basic", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Primary", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "gray", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Secondary", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Success", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Warning", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "Danger", onPageChange: handlePageChange }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { styleType: "filled", currentPage: currentPage, totalPages: 10, color: "White", onPageChange: handlePageChange })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@componique/react';

function Example() {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Basic"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Primary"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="gray"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Secondary"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Success"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Warning"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="Danger"
      onPageChange={handlePageChange}
      />
      <Pagination
      styleType="filled"
      currentPage={currentPage}
      totalPages={10}
      color="White"
      onPageChange={handlePageChange}
      />
    </>
  );
}

export default Example;`, copyText: `import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            styleType = "filled"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "outlined"
            variant="square"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
            <Pagination
            styleType = "filled-outlined"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
              />
          </>
          );
        }
                
        export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.6. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Pagination" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "currentPage" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD604\uC7AC \uD398\uC774\uC9C0\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "totalPages" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC804\uCCB4 \uD398\uC774\uC9C0 \uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD398\uC774\uC9C0 \uBC84\uD2BC\uC758 \uBAA8\uC591\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"circle\" | \"square\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"circle\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "styleType" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD398\uC774\uC9C0 \uBC84\uD2BC\uC758 \uC2A4\uD0C0\uC77C \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"filled\" | \"outlined\" | \"outlined-focused\" | \"filled-outlined\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"filled\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD398\uC774\uC9C0 \uBC84\uD2BC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"gray\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\" | \"White\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Primary\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onPageChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD398\uC774\uC9C0 \uBCC0\uACBD \uC2DC \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(page: number) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showFirstLastButtons" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCCAB \uD398\uC774\uC9C0\uC640 \uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uB294 \uBC84\uD2BC\uC744 \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boundaryRange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCCAB/\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 \uADFC\uCC98\uC5D0 \uD45C\uC2DC\uD560 \uD398\uC774\uC9C0 \uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "siblingRange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD604\uC7AC \uD398\uC774\uC9C0\uB97C \uC911\uC2EC\uC73C\uB85C \uD45C\uC2DC\uD560 \uD398\uC774\uC9C0 \uC218\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "disabled" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD398\uC774\uC9C0\uB124\uC774\uC158 \uC804\uCCB4\uB97C \uBE44\uD65C\uC131\uD654\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.7. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            variant="outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            styleType="filled"
            color="Success"
            showFirstLastButtons={true}
            />
          </>
          );
        }
        
        export default Example;`, copyText: `import { Pagination } from '@componique/react';

        function Example() {
          const [currentPage, setCurrentPage] = useState(3);
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };
          
          return (
          <>
            <Pagination
            variant="outlined-focused"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            styleType="filled"
            color="Success"
            showFirstLastButtons={true}
            />
          </>
          );
        }
        
        export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = PaginationDoc;
