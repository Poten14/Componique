"use client";
import RadioButton1 from "@/components/RadioButton/RadioButton1";
import RadioButton2 from "@/components/RadioButton/RadioButton2";
import RadioButton3 from "@/components/RadioButton/RadioButton3";
import React, { useState } from "react";

const Page = () => {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");
  const [labelSelectedValue, setLabelSelectedValue] = useState("");
  const [inlineSelectedValue, setInlineSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelSelectedValue(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInlineSelectedValue(event.target.value);
  };

  return (
    <div className="ml-4 mt-4">
      <h1 className="mb-4 text-lg font-semibold">
        기본 라디오 버튼 - RadioButton1
      </h1>
      <RadioButton1
        name="basicOptions"
        value="option1"
        checked={basicSelectedValue === "option1"}
        onChange={handleBasicChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButton1
        name="basicOptions"
        value="option2"
        checked={basicSelectedValue === "option2"}
        onChange={handleBasicChange}
        label="Option 2"
        size="small"
        color="grey"
      />
      <RadioButton1
        name="basicOptions"
        value="option3"
        checked={basicSelectedValue === "option3"}
        onChange={handleBasicChange}
        label="Option 3"
        size="medium"
        color="blue"
      />
      <RadioButton1
        name="basicOptions"
        value="option4"
        checked={basicSelectedValue === "option4"}
        onChange={handleBasicChange}
        label="Option 4"
        size="medium"
        color="purple"
      />
      <RadioButton1
        name="basicOptions"
        value="option5"
        checked={basicSelectedValue === "option5"}
        onChange={handleBasicChange}
        label="Option 5"
        size="medium"
        color="green"
      />
      <RadioButton1
        name="basicOptions"
        value="option6"
        checked={basicSelectedValue === "option6"}
        onChange={handleBasicChange}
        label="Option 6"
        size="large"
        color="yellow"
      />
      <RadioButton1
        name="basicOptions"
        value="option7"
        checked={basicSelectedValue === "option7"}
        onChange={handleBasicChange}
        label="Option 7"
        size="large"
        color="red"
      />
      <br />
      <h2 className="mb-4 text-lg font-semibold">
        라벨이 포함된 라디오 버튼 - RadioButton2
      </h2>
      <RadioButton2
        name="labelOptions" // 구분된 name 속성
        value="Option1"
        checked={labelSelectedValue === "Option1"}
        onChange={handleLabelChange}
        label="Option 1"
        description="옵션 A를 위한 설명"
        size="small"
        color="sky"
      />

      <RadioButton2
        name="labelOptions"
        value="Option2"
        checked={labelSelectedValue === "Option2"}
        onChange={handleLabelChange}
        label="Option 2"
        description="옵션 B를 위한 설명"
        size="small"
        color="grey"
      />

      <RadioButton2
        name="labelOptions"
        value="option3"
        checked={labelSelectedValue === "option3"}
        onChange={handleLabelChange}
        label="Option 3"
        description="옵션 C에 대한 설명"
        size="medium"
        color="blue"
      />
      <RadioButton2
        name="labelOptions"
        value="option4"
        checked={labelSelectedValue === "option4"}
        onChange={handleLabelChange}
        label="Option 4"
        description="옵션 D에 대한 설명"
        size="medium"
        color="purple"
      />
      <RadioButton2
        name="labelOptions"
        value="option5"
        checked={labelSelectedValue === "option5"}
        onChange={handleLabelChange}
        label="Option 5"
        description="This is a script for option5"
        size="medium"
        color="green"
      />
      <RadioButton2
        name="labelOptions"
        value="option6"
        checked={labelSelectedValue === "option6"}
        onChange={handleLabelChange}
        label="Option 6"
        description="This is a script for option5"
        size="large"
        color="yellow"
      />
      <RadioButton2
        name="labelOptions"
        value="option7"
        checked={labelSelectedValue === "option7"}
        onChange={handleLabelChange}
        label="Option 7"
        description="This is a description for option5"
        size="large"
        color="red"
      />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        인라인 라디오 버튼 - RadioButton3
      </h1>
      <RadioButton3
        name="basicOptions"
        value="option1"
        checked={inlineSelectedValue === "option1"}
        onChange={handleChange}
        label="Option 1"
        size="small"
        color="sky"
      />
      <RadioButton3
        name="basicOptions"
        value="option2"
        checked={inlineSelectedValue === "option2"}
        onChange={handleChange}
        label="Option 2"
        size="small"
        color="grey"
      />
      <RadioButton3
        name="basicOptions"
        value="option3"
        checked={inlineSelectedValue === "option3"}
        onChange={handleChange}
        label="Option 3"
        size="medium"
        color="blue"
      />
      <RadioButton3
        name="basicOptions"
        value="option4"
        checked={inlineSelectedValue === "option4"}
        onChange={handleChange}
        label="Option 4"
        size="medium"
        color="purple"
      />
      <RadioButton3
        name="basicOptions"
        value="option5"
        checked={inlineSelectedValue === "option5"}
        onChange={handleChange}
        label="Option 5"
        size="medium"
        color="green"
      />
      <RadioButton3
        name="basicOptions"
        value="option6"
        checked={inlineSelectedValue === "option6"}
        onChange={handleChange}
        label="Option 6"
        size="large"
        color="yellow"
      />
      <RadioButton3
        name="basicOptions"
        value="option7"
        checked={inlineSelectedValue === "option7"}
        onChange={handleChange}
        label="Option 7"
        size="large"
        color="red"
      />
    </div>
  );
};
export default Page;
