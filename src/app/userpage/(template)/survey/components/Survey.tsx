"use client";

import CheckBox from "@components/CheckBox/CheckBox";
import ProgressBarBasic from "@components/ProgressBar/ProgressBarBasic";
import Button from "@components/Button/Button";
import RadioButtonBasic from "@components/RadioButton/RadioButtonBasic";
import { useState } from "react";
const Survey = () => {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };
  return (
    <div className="grid place-items-center gap-y-6">
      <div className="w-[600px]">
        <ProgressBarBasic percent={0} showPercent completed />
      </div>
      <div className="w-[600px] rounded-lg border border-[#9AC5E5] p-4 leading-7">
        <h2 className="mb-2 text-xl">
          Componique를 어떤 목적으로 사용하시나요?
        </h2>
        <p className="mb-2 mt-[-4px] text-sm text-Gray">* 중복 선택 가능</p>
        <CheckBox description="프로젝트 개발" />
        <CheckBox description="성능 향상" />
        <CheckBox description="시간 절약" />
        <CheckBox description="UI/UX 개선" />
      </div>
      <div className="w-[600px] rounded-lg border border-[#9AC5E5] p-4 leading-7">
        <h2 className="mb-2 text-xl">
          Componique를 사용했을 때의 전체적인 만족도는 어땠나요?
        </h2>
        <p></p>
        <RadioButtonBasic
          name="basicOptions"
          value="option1"
          checked={basicSelectedValue === "option1"}
          onChange={handleBasicChange}
          label="매우 만족"
          size="medium"
          color="sky"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option2"
          checked={basicSelectedValue === "option2"}
          onChange={handleBasicChange}
          label="만족"
          size="medium"
          color="sky"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option3"
          checked={basicSelectedValue === "option3"}
          onChange={handleBasicChange}
          label="보통"
          size="medium"
          color="sky"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option4"
          checked={basicSelectedValue === "option4"}
          onChange={handleBasicChange}
          label="불만족"
          color="sky"
          size="medium"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option5"
          checked={basicSelectedValue === "option5"}
          onChange={handleBasicChange}
          label="매우 불만족"
          color="sky"
          size="medium"
        />
      </div>
      <div className="flex w-[600px] justify-end">
        <Button className="mr-2 w-[75px]" color="danger">
          취소
        </Button>
        <Button className="w-[75px]" color="primary">
          제출
        </Button>
      </div>
    </div>
  );
};
export default Survey;
