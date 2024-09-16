"use client";
import { useState } from "react";

const ValidationPhone = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneType = /^\d{10,11}$/;
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
        className="text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-white"
        onChange={handleChange}
        value={phone}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
export default ValidationPhone;
