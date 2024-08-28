"use client";

import { ChangeEvent, useState } from "react";

interface TextareaValueProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaValue: React.FC<TextareaValueProps> = ({ ...props }) => {
  const [textvalue, setTextValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <textarea
        className="text-gray-900 block w-full rounded-lg border border-gray p-2"
        {...props}
        value={textvalue}
        onChange={handleChange}
      />
      <p className="text-default-500 text-small">Textarea value: {textvalue}</p>
    </>
  );
};
export default TextareaValue;
