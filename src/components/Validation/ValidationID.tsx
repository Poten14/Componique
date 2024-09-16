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
        className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
export default ValidationID;
