"use client";
import { useState } from "react";
const ValidationPW = () => {
    const [PW, setPW] = useState("");
    const [error, setError] = useState("");
    const validatePW = (PW) => {
        const PWType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return PWType.test(PW);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPW(value);
        setError(validatePW(value)
            ? ""
            : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상");
    };
    return (<div>
      <input type="password" value={PW} onChange={handleChange} placeholder="비밀번호를 입력하세요." className="text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black"/>
      {error && (<p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>)}
    </div>);
};
export default ValidationPW;
