"use client";
import { useState } from "react";
const TextareaValue = ({ ...props }) => {
    const [textvalue, setTextValue] = useState("");
    const handleChange = (e) => {
        setTextValue(e.target.value);
    };
    return (<>
      <textarea className="text-gray-900 block w-full rounded-lg border border-gray p-2 dark:border-[#2A6490] dark:bg-transparent" {...props} value={textvalue} onChange={handleChange}/>
      <p className="text-default-500 text-small">Textarea value: {textvalue}</p>
    </>);
};
export default TextareaValue;
