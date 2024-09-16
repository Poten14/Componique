"use client";
import { useState } from "react";

const ValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ValidateEmail = (Email: string) => {
    const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 정규식
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
        className="text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-white"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
export default ValidationEmail;
