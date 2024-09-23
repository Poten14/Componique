"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ValidationID = () => {
    const [ID, setID] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const validateID = (ID) => {
        const IDType = /^[a-zA-Z0-9]{4,12}$/;
        return IDType.test(ID);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setID(value);
        setError(validateID(value) ? "" : "4~12자, 문자, 숫자만 입력가능합니다.");
    };
    return (<div>
      <input type="text" value={ID} onChange={handleChange} placeholder="아이디를 입력해 주세요." className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-black"/>
      {error && (<p className="absolute z-10 text-sm text-red-500 dark:text-red-500">
          {error}
        </p>)}
    </div>);
};
exports.default = ValidationID;
