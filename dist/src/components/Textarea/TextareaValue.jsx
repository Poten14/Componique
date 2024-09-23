"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TextareaValue = ({ ...props }) => {
    const [textvalue, setTextValue] = (0, react_1.useState)("");
    const handleChange = (e) => {
        setTextValue(e.target.value);
    };
    return (<>
      <textarea className="text-gray-900 block w-full rounded-lg border border-gray p-2 dark:border-[#2A6490] dark:bg-transparent" {...props} value={textvalue} onChange={handleChange}/>
      <p className="text-default-500 text-small">Textarea value: {textvalue}</p>
    </>);
};
exports.default = TextareaValue;
