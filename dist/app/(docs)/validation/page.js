"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const ValidationEmail_1 = __importDefault(require("@components/Validation/ValidationEmail"));
const ValidationID_1 = __importDefault(require("@components/Validation/ValidationID"));
const ValidationPW_1 = __importDefault(require("@components/Validation/ValidationPW"));
const ValidationPWConfirm_1 = __importDefault(require("@components/Validation/ValidationPWConfirm"));
const ValidationPhone_1 = __importDefault(require("@components/Validation/ValidationPhone"));
const ValidationComponent = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. ValidationEmail" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationEmail" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uC774\uBA54\uC77C\uC774 \uC720\uD6A8\uD55C \uD615\uC2DD\uC778\uC9C0 \uAC80\uC0AC\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC77C \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationEmail from '@components/Validation/ValidationEmail';`, copyText: `import ValidationEmail from '@components/Validation/ValidationEmail';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "m-7 flex gap-4", children: (0, jsx_runtime_1.jsx)(ValidationEmail_1.default, {}) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationEmail from '@components/Validation/ValidationEmail';

function Example() {
  return (
    <ValidationEmail />
  );
}

export default Example;`, copyText: `import ValidationEmail from '@components/Validation/ValidationEmail';

function Example() {
  return (
    <ValidationEmail />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationEmail" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 Prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. \uC720\uD6A8\uC131 \uAC80\uC0AC \uD568\uC218 \uC124\uBA85" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `const validateEmail = (Email: string) => {
  const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
  return emailType.test(Email);
};`, copyText: `const validateEmail = (Email: string) => {
  const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
  return emailType.test(Email);
};`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uD568\uC218\uB294 \uC774\uBA54\uC77C\uC774 \uC720\uD6A8\uD55C \uD615\uC2DD\uC778\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uC815\uADDC \uD45C\uD604\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "^[^\\\\s@]+" }), ": \uC774\uBA54\uC77C\uC758 \uC2DC\uC791\uC740 \uACF5\uBC31\uC774\uB098 '@'\uC774 \uC544\uB2CC \uBB38\uC790\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "@" }), ": '@' \uBB38\uC790\uAC00 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "[^\\\\s@]+" }), ": '@' \uC774\uD6C4\uC5D0\uB294 \uACF5\uBC31\uC774\uB098 '@'\uC774 \uC544\uB2CC \uBB38\uC790\uAC00 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "\\\\." }), ": '.' \uBB38\uC790\uAC00 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "[^\\\\s@]+$" }), ": '.' \uB4A4\uC5D0\uB294 \uACF5\uBC31\uC774\uB098 '@'\uC774 \uC544\uB2CC \uBB38\uC790\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// ValidationEmail.tsx
"use client";
import { useState } from "react";

const ValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ValidateEmail = (Email: string) => {
    const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
    return emailType.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="relative z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationEmail;`, copyText: `
// ValidationEmail.tsx
"use client";
import { useState } from "react";

const ValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ValidateEmail = (Email: string) => {
    const emailType = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // 이메일 형식 정규식
    return emailType.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="relative z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationEmail;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. ValidationID" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationID" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C ID\uAC00 4~12\uC790\uC758 \uC54C\uD30C\uBCB3 \uBC0F \uC22B\uC790\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uB294\uC9C0 \uAC80\uC0AC\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC77C \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationID from '@components/Validation/ValidationID';`, copyText: `import ValidationID from '@components/Validation/ValidationID';`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "m-7 flex gap-4", children: (0, jsx_runtime_1.jsx)(ValidationID_1.default, {}) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationID from '@components/Validation/ValidationID';

function Example() {
  return (
    <ValidationID />
  );
}

export default Example;`, copyText: `import ValidationID from '@components/Validation/ValidationID';

function Example() {
  return (
    <ValidationID />
  );
}

export default Example;`, language: "tsx", index: 6, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationID" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 Prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. \uC720\uD6A8\uC131 \uAC80\uC0AC \uD568\uC218 \uC124\uBA85" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `const validateID = (ID: string) => {
  const IDType = /^[a-zA-Z0-9]{4,12}$/; // ID 형식 정규식
  return IDType.test(ID);
};`, copyText: `const validateID = (ID: string) => {
  const IDType = /^[a-zA-Z0-9]{4,12}$/; // ID 형식 정규식
  return IDType.test(ID);
};`, language: "tsx", index: 7, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uD568\uC218\uB294 ID\uAC00 \uC720\uD6A8\uD55C \uD615\uC2DD\uC778\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uC815\uADDC \uD45C\uD604\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("code", { children: ["^[a-zA-Z0-9]", 4 / 12, "$"] }), ": ID\uAC00 4\uC790 \uC774\uC0C1 12\uC790 \uC774\uD558\uC758 \uC54C\uD30C\uBCB3 \uB300\uC18C\uBB38\uC790\uC640 \uC22B\uC790\uB85C\uB9CC \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// ValidationID.tsx
"use client";
import { useState } from "react";

const ValidationID = () => {
  const [ID, setID] = useState("");
  const [error, setError] = useState("");

  const validateID = (ID: string) => {
    const IDType = /^[a-zA-Z0-9]{4,12}$/;
    return IDType.test(ID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setID(value);
    setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
  };

  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="아이디를 입력해 주세요."
        className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationID;`, copyText: `
// ValidationID.tsx
"use client";
import { useState } from "react";

const ValidationID = () => {
  const [ID, setID] = useState("");
  const [error, setError] = useState("");

  const validateID = (ID: string) => {
    const IDType = /^[a-zA-Z0-9]{4,12}$/;
    return IDType.test(ID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setID(value);
    setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
  };

  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="아이디를 입력해 주세요."
        className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationID;`, language: "tsx", index: 8, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "3. ValidationPW" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPW" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uBE44\uBC00\uBC88\uD638\uAC00 \uAC15\uB825\uD55C \uBCF4\uC548 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCDA9\uC871\uD558\uB294\uC9C0 \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uC720\uD6A8\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPW from '@components/Validation/ValidationPW';`, copyText: `import ValidationPW from '@components/Validation/ValidationPW';`, language: "tsx", index: 9, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "m-7 flex gap-4", children: (0, jsx_runtime_1.jsx)(ValidationPW_1.default, {}) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPW from '@components/Validation/ValidationPW';

function Example() {
  return (
    <ValidationPW />
  );
}

export default Example;`, copyText: `import ValidationPW from '@components/Validation/ValidationPW';

function Example() {
  return (
    <ValidationPW />
  );
}

export default Example;`, language: "tsx", index: 10, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPW" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 Prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.4. \uC720\uD6A8\uC131 \uAC80\uC0AC \uD568\uC218 \uC124\uBA85" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `const validatePW = (PW: string) => {
  const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/; // 비밀번호 형식 정규식
  return PWType.test(PW);
};`, copyText: `const validatePW = (PW: string) => {
  const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/; // 비밀번호 형식 정규식
  return PWType.test(PW);
};`, language: "tsx", index: 11, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uD568\uC218\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uAC15\uB825\uD55C \uBCF4\uC548 \uC694\uAD6C \uC0AC\uD56D\uC744 \uCDA9\uC871\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uC815\uADDC \uD45C\uD604\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "(?=.*\\\\d)" }), ": \uCD5C\uC18C \uD55C \uAC1C\uC758 \uC22B\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "(?=.*[a-z])" }), ": \uCD5C\uC18C \uD55C \uAC1C\uC758 \uC18C\uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "(?=.*[A-Z])" }), ": \uCD5C\uC18C \uD55C \uAC1C\uC758 \uB300\uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "(?=.*[@#$%^&+=])" }), ": \uCD5C\uC18C \uD55C \uAC1C\uC758 \uD2B9\uC218 \uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("code", { children: [".", 8] }), ": \uBAA8\uB4E0 \uBB38\uC790\uAC00 \uCD5C\uC18C 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// ValidationPW.tsx
"use client";
import { useState } from "react";

const ValidationPW = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
  };

  return (
    <div>
      <input
        type="password"
        value={PW}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPW;`, copyText: `
// ValidationPW.tsx
"use client";
import { useState } from "react";

const ValidationPW = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
  };

  return (
    <div>
      <input
        type="password"
        value={PW}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPW;`, language: "tsx", index: 12, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "4. ValidationPWConfirm" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPWConfirm" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB450 \uBC88 \uC785\uB825\uD55C \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uB294\uC9C0 \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uC720\uD6A8\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';`, copyText: `import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';`, language: "tsx", index: 13, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "m-7 flex gap-4", children: (0, jsx_runtime_1.jsx)(ValidationPWConfirm_1.default, {}) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';

function Example() {
  return (
    <ValidationPWConfirm />
  );
}

export default Example;`, copyText: `import ValidationPWConfirm from '@components/Validation/ValidationPWConfirm';

function Example() {
  return (
    <ValidationPWConfirm />
  );
}

export default Example;`, language: "tsx", index: 14, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPWConfirm" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 Prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.4. \uC720\uD6A8\uC131 \uAC80\uC0AC \uD568\uC218 \uC124\uBA85" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `const validatePWConfirm = (pw: string, confirmPW: string) => {
  return pw === confirmPW; // 비밀번호 일치 확인
};`, copyText: `const validatePWConfirm = (pw: string, confirmPW: string) => {
  return pw === confirmPW; // 비밀번호 일치 확인
};`, language: "tsx", index: 15, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uD568\uC218\uB294 \uB450 \uAC1C\uC758 \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "4.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// ValidationPWConfirm.tsx
"use client";
import { useState } from "react";

const ValidationPWConfirm = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
    setConfirmError("");
  };

  const handleChangeConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPW(value);
    setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={PW}
          onChange={handleChangePW}
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input
          type="password"
          value={confirmPW}
          onChange={handleChangeConfirmPW}
          placeholder="비밀번호를 다시 입력하세요."
          className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
        />
        {confirmError && (
          <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
            {confirmError}
          </p>
        )}
      </div>
    </div>
  );
};
export default ValidationPWConfirm;`, copyText: `
// ValidationPWConfirm.tsx
"use client";
import { useState } from "react";

const ValidationPWConfirm = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
    setConfirmError("");
  };

  const handleChangeConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPW(value);
    setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={PW}
          onChange={handleChangePW}
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input
          type="password"
          value={confirmPW}
          onChange={handleChangeConfirmPW}
          placeholder="비밀번호를 다시 입력하세요."
          className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"
        />
        {confirmError && (
          <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
            {confirmError}
          </p>
        )}
      </div>
    </div>
  );
};
export default ValidationPWConfirm;`, language: "tsx", index: 16, copied: copied, handleCopy: handleCopy })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "5. ValidationPhone" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPhone" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uD578\uB4DC\uD3F0 \uBC88\uD638\uAC00 \uC720\uD6A8\uD55C\uC9C0 \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uC720\uD6A8\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPhone from '@components/Validation/ValidationPhone';`, copyText: `import ValidationPhone from '@components/Validation/ValidationPhone';`, language: "tsx", index: 17, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "m-7 flex gap-4", children: (0, jsx_runtime_1.jsx)(ValidationPhone_1.default, {}) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import ValidationPhone from '@components/Validation/ValidationPhone';

function Example() {
  return (
    <ValidationPhone />
  );
}

export default Example;`, copyText: `import ValidationPhone from '@components/Validation/ValidationPhone';

function Example() {
  return (
    <ValidationPhone />
  );
}

export default Example;`, language: "tsx", index: 18, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ValidationPhone" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 Prop\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.4. \uC720\uD6A8\uC131 \uAC80\uC0AC \uD568\uC218 \uC124\uBA85" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `const validatePhone = (phone: string) => {
  const phoneType = /^\\d{10,11}$/; // 핸드폰 번호 형식 정규식
  return phoneType.test(phone);
};`, copyText: `const validatePhone = (phone: string) => {
  const phoneType = /^\\d{10,11}$/; // 핸드폰 번호 형식 정규식
  return phoneType.test(phone);
};`, language: "tsx", index: 19, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774 \uD568\uC218\uB294 \uD578\uB4DC\uD3F0 \uBC88\uD638\uAC00 \uC720\uD6A8\uD55C\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uC815\uADDC \uD45C\uD604\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("code", { children: ["^\\\\d", 10 / 11, "$"] }), ": \uBC88\uD638\uAC00 10\uC790\uB9AC \uB610\uB294 11\uC790\uB9AC \uC22B\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4."] }) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "5.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `
// ValidationPhone.tsx
"use client";
import { useState } from "react";

const ValidationPhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneType = /^\\d{10,11}$/;
    return phoneType.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="핸드폰 번호를 입력해주세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
        onChange={handleChange}
        value={phone}
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPhone;`, copyText: `
// ValidationPhone.tsx
"use client";
import { useState } from "react";

const ValidationPhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneType = /^\\d{10,11}$/;
    return phoneType.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="핸드폰 번호를 입력해주세요."
        className="text-black border-2 border-black dark:border-[#cdcdcd] dark:text-black"
        onChange={handleChange}
        value={phone}
      />
      {error && (
        <p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
export default ValidationPhone;`, language: "tsx", index: 20, copied: copied, handleCopy: handleCopy })] })] }));
};
exports.default = ValidationComponent;
