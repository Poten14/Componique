"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SelectList = ({ option, onChange, className }) => {
    const [selectValue, setSelectValue] = (0, react_1.useState)("");
    const handleOptionClick = (item) => {
        setSelectValue(item);
        if (onChange) {
            onChange(item);
        }
    };
    return (<>
      <div className={`w-96 ${className}`}>
        <ul className="flex cursor-pointer justify-evenly divide-x divide-gray rounded-lg border border-gray p-0 text-center dark:divide-[#2A6490] dark:border-[#2A6490] dark:bg-[#2a2e39]">
          {option.map((item, key) => (<li className={`w-full p-2 transition-transform duration-300 hover:bg-[#9AC5E5] hover:font-bold hover:text-[#fff] dark:hover:bg-[#2A6490] dark:hover:text-white ${selectValue === item ? "rounded-lg bg-[#9AC5E5] font-bold text-[#fff] dark:bg-[#2A6490]" : ""} `} key={key} onClick={() => handleOptionClick(item)}>
              {item}
            </li>))}
        </ul>
      </div>
    </>);
};
exports.default = SelectList;
