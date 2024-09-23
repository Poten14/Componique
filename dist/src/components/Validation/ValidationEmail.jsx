"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ValidationEmail = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const ValidateEmail = (Email) => {
        const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 정규식
        return emailType.test(email);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError(ValidateEmail(value) ? "" : "유효하지 않은 이메일 형식입니다.");
    };
    return (<div>
      <input type="email" value={email} onChange={handleChange} placeholder="이메일을 입력하세요." className="text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black"/>
      {error && (<p className="relative z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>)}
    </div>);
};
exports.default = ValidationEmail;
