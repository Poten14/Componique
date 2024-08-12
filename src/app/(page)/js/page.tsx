"use client";

import React, { useState } from "react";
import RadioButton1 from "@/components/RadioButton/RadioButton1";

const RadioButtonPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">라디오 버튼 예시</h1>
      <div className="space-y-4">
        <RadioButton1
          name="options"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
          label="Option 1"
          size="small"
          color="sky"
        />
        <RadioButton1
          name="options"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
          label="Option 2"
          size="medium"
          color="grey"
        />
        <RadioButton1
          name="options"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleChange}
          label="Option 3"
          size="large"
          color="blue"
        />
        <RadioButton1
          name="options"
          value="option4"
          checked={selectedValue === "option4"}
          onChange={handleChange}
          label="Option 4"
          size="small"
          color="purple"
        />
        <RadioButton1
          name="options"
          value="option5"
          checked={selectedValue === "option5"}
          onChange={handleChange}
          label="Option 5"
          size="medium"
          color="green"
        />
        <RadioButton1
          name="options"
          value="option6"
          checked={selectedValue === "option6"}
          onChange={handleChange}
          label="Option 6"
          size="large"
          color="yellow"
        />
        <RadioButton1
          name="options"
          value="option7"
          checked={selectedValue === "option7"}
          onChange={handleChange}
          label="Option 7"
          size="small"
          color="red"
        />
      </div>
      <p className="mt-4">선택된 옵션: {selectedValue}</p>
    </div>
  );
};

export default RadioButtonPage;
