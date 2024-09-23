"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ValidationPWConfirm = () => {
    const [PW, setPW] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const [confirmPW, setConfirmPW] = (0, react_1.useState)("");
    const [confirmError, setConfirmError] = (0, react_1.useState)("");
    const validatePW = (PW) => {
        const PWType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return PWType.test(PW);
    };
    const handleChangePW = (e) => {
        const value = e.target.value;
        setPW(value);
        setError(validatePW(value)
            ? ""
            : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상");
        setConfirmError("");
    };
    const handleChangeConfirmPW = (e) => {
        const value = e.target.value;
        setConfirmPW(value);
        setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
    };
    return (<div>
      <div>
        <input type="password" value={PW} onChange={handleChangePW} placeholder="비밀번호를 입력하세요." className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"/>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input type="password" value={confirmPW} onChange={handleChangeConfirmPW} placeholder="비밀번호를 다시 입력하세요." className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"/>
        {/* 비밀번호 확인 오류 메시지 */}
        {confirmError && (<p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
            {confirmError}
          </p>)}
      </div>
    </div>);
};
exports.default = ValidationPWConfirm;
