"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ValidationPhone = () => {
    const [phone, setPhone] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const validatePhone = (phone) => {
        const phoneType = /^\d{10,11}$/;
        return phoneType.test(phone);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setError(validatePhone(value) ? "" : "-없이 번호만 입력해주세요.");
    };
    return (<div>
      <input type="text" placeholder="핸드폰 번호를 입력해주세요." className="text-balack border-2 border-black dark:border-[#cdcdcd] dark:text-black" onChange={handleChange} value={phone}/>
      {error && (<p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>)}
    </div>);
};
exports.default = ValidationPhone;
