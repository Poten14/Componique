"use client";

import CheckBox from "@components/CheckBox/CheckBox";
import ProgressBarBasic from "@components/ProgressBar/ProgressBarBasic";
import Button from "@components/Button/Button";
import RadioButtonBasic from "@components/RadioButton/RadioButtonBasic";
import { useState } from "react";
import { useSurveyStore } from "app/store/useSurveyStore";
const Survey = () => {
  const [basicSelectedValue, setBasicSelectedValue] = useState("");
  const [selectCheckbox, setSelectCheckbox] = useState<string[]>([]);

  const {
    title1,
    description1,
    checkboxSize,
    checkboxColor,
    checkboxVariant,
    checkboxText1,
    checkboxText2,
    checkboxText3,
    checkboxText4,
    title2,
    description2,
    radiobuttonSize,
    radiobuttonColor,
    radioLabel1,
    radioLabel2,
    radioLabel3,
    radioLabel4,
    radioLabel5,
    submitButton,
    cancelButton,
    setSurveyState,
  } = useSurveyStore();

  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  const onChangeCheckboxHandler = (isChecked: boolean, description: string) => {
    if (isChecked) {
      // 체크박스를 선택하면 해당 description을 상태 배열에 추가
      setSelectCheckbox([...selectCheckbox, description]);
    } else {
      // 체크박스의 선택이 해제되면 해당 description을 상태 배열에서 제거
      setSelectCheckbox(selectCheckbox.filter((item) => item !== description));
    }
  };

  const progressBarPercent = () => {
    let progress = 0;
    // 체크박스가 하나 이상 선택하면 프로그래스바에 50% 반영
    if (selectCheckbox.length > 0) {
      progress += 50;
    }
    // 라디오 버튼을 선택하면 프로그래스바에 추가 50% 반영
    if (basicSelectedValue !== "") {
      progress += 50;
    }
    return progress;
  };
  return (
    <div className="grid place-items-center gap-y-6">
      <div className="w-[600px]">
        <ProgressBarBasic
          percent={progressBarPercent()}
          showPercent
          completed
        />
      </div>
      <div className="w-[600px] rounded-lg border border-[#9AC5E5] p-4">
        <h2 className="mb-2 text-xl">{title1}</h2>
        <p className="mb-2 mt-[-4px] text-sm text-Gray">{description1}</p>
        <div className="space-y-2">
          <CheckBox
            color={checkboxColor}
            description={checkboxText1}
            variant={checkboxVariant}
            boxSize={checkboxSize}
            onChange={(e) =>
              //여러 체크박스 중 어떤 것을 선택하거나 해제했는지 파악하기 위해 뒤에 해당하는 값을 넣음
              onChangeCheckboxHandler(e.target.checked, checkboxText1)
            }
          />
          <CheckBox
            color={checkboxColor}
            description={checkboxText2}
            boxSize={checkboxSize}
            variant={checkboxVariant}
            onChange={(e) =>
              onChangeCheckboxHandler(e.target.checked, checkboxText2)
            }
          />
          <CheckBox
            color={checkboxColor}
            description={checkboxText3}
            boxSize={checkboxSize}
            variant={checkboxVariant}
            onChange={(e) =>
              onChangeCheckboxHandler(e.target.checked, checkboxText3)
            }
          />
          <CheckBox
            color={checkboxColor}
            description={checkboxText4}
            boxSize={checkboxSize}
            variant={checkboxVariant}
            onChange={(e) =>
              onChangeCheckboxHandler(e.target.checked, checkboxText4)
            }
          />
        </div>
      </div>
      <div className="w-[600px] rounded-lg border border-[#9AC5E5] p-4 leading-7">
        <h2 className="mb-2 text-xl">{title2}</h2>
        <p className="mb-2 mt-[-4px] text-sm text-Gray">{description2}</p>
        <RadioButtonBasic
          name="basicOptions"
          value="option1"
          checked={basicSelectedValue === "option1"}
          onChange={handleBasicChange}
          label={radioLabel1}
          size={radiobuttonSize}
          color={radiobuttonColor}
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option2"
          checked={basicSelectedValue === "option2"}
          onChange={handleBasicChange}
          label={radioLabel2}
          size={radiobuttonSize}
          color={radiobuttonColor}
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option3"
          checked={basicSelectedValue === "option3"}
          onChange={handleBasicChange}
          label={radioLabel3}
          size={radiobuttonSize}
          color={radiobuttonColor}
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option4"
          checked={basicSelectedValue === "option4"}
          onChange={handleBasicChange}
          label={radioLabel4}
          color={radiobuttonColor}
          size={radiobuttonSize}
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option5"
          checked={basicSelectedValue === "option5"}
          onChange={handleBasicChange}
          label={radioLabel5}
          color={radiobuttonColor}
          size={radiobuttonSize}
        />
      </div>
      <div className="flex w-[600px] justify-end">
        <Button className="mr-2 w-[75px]" color="danger">
          {cancelButton}
        </Button>
        <Button className="w-[75px]" color="primary">
          {submitButton}
        </Button>
      </div>
    </div>
  );
};
export default Survey;
