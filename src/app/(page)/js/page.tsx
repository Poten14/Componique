"use client";
import React, { useState } from "react";

// RadioButton 컴포넌트 가져오기
import RadioButtonBasic from "@components/RadioButton/RadioButtonBasic";
import RadioButtonDescription from "@components/RadioButton/RadioButtonDescription";
import RadioButtonInline from "@components/RadioButton/RadioButtonInline";

// Card 컴포넌트 가져오기
import CardBasic from "@components/Card/CardBasic";
import CardImage from "@components/Card/CardImage";
import CardInteractive from "@components/Card/CardInteractive";
import CardPricing from "@components/Card/CardPricing";
import CardReview from "@components/Card/CardReview";

// DropDown 컴포넌트 가져오기
import DropDownBasic from "@components/DropDown/DropDownBasic";

const Page = () => {
  // 라디오 버튼의 선택 상태를 관리하는 useState 훅
  const [basicSelectedValue, setBasicSelectedValue] = useState("");
  const [labelSelectedValue, setLabelSelectedValue] = useState("");
  const [inlineSelectedValue, setInlineSelectedValue] = useState("");

  // 라디오 버튼 선택 시 상태를 업데이트하는 핸들러 함수
  const handleBasicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicSelectedValue(event.target.value);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelSelectedValue(event.target.value);
  };

  const handleInlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInlineSelectedValue(event.target.value);
  };

  // DropDown : 선택된 값 전달
  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
  };

  return (
    <div className="ml-4 mt-4">
      {/* 라디오 버튼 섹션 */}
      <div>
        <h1 className="mb-4 text-lg font-semibold">
          RadioButtonBasic - 기본 라디오 버튼
        </h1>
        <RadioButtonBasic
          name="basicOptions"
          value="option1"
          checked={basicSelectedValue === "option1"}
          onChange={handleBasicChange}
          label="Option 1"
          size="small"
          color="sky"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option2"
          checked={basicSelectedValue === "option2"}
          onChange={handleBasicChange}
          label="Option 2"
          size="small"
          color="grey"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option3"
          checked={basicSelectedValue === "option3"}
          onChange={handleBasicChange}
          label="Option 3"
          size="medium"
          color="blue"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option4"
          checked={basicSelectedValue === "option4"}
          onChange={handleBasicChange}
          label="Option 4"
          size="medium"
          color="purple"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option5"
          checked={basicSelectedValue === "option5"}
          onChange={handleBasicChange}
          label="Option 5"
          size="medium"
          color="green"
        />
        <RadioButtonBasic
          name="basicOptions"
          value="option6"
          checked={basicSelectedValue === "option6"}
          onChange={handleBasicChange}
          label="Option 6"
          size="large"
          color="yellow"
        />
        <RadioButtonBasic
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
          RadioButtonDescription - 라벨이 포함된 라디오 버튼
        </h2>
        <RadioButtonDescription
          name="labelOptions"
          value="option1"
          checked={labelSelectedValue === "option1"}
          onChange={handleLabelChange}
          label="Option 1"
          description="옵션 A를 위한 설명"
          size="small"
          color="sky"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option2"
          checked={labelSelectedValue === "option2"}
          onChange={handleLabelChange}
          label="Option 2"
          description="옵션 B를 위한 설명"
          size="small"
          color="grey"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option3"
          checked={labelSelectedValue === "option3"}
          onChange={handleLabelChange}
          label="Option 3"
          description="옵션 C를 위한 설명"
          size="medium"
          color="blue"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option4"
          checked={labelSelectedValue === "option4"}
          onChange={handleLabelChange}
          label="Option 4"
          description="옵션 D를 위한 설명"
          size="medium"
          color="purple"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option5"
          checked={labelSelectedValue === "option5"}
          onChange={handleLabelChange}
          label="Option 5"
          description="옵션 E를 위한 설명"
          size="medium"
          color="green"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option6"
          checked={labelSelectedValue === "option6"}
          onChange={handleLabelChange}
          label="Option 6"
          description="옵션 F를 위한 설명"
          size="large"
          color="yellow"
        />
        <RadioButtonDescription
          name="labelOptions"
          value="option7"
          checked={labelSelectedValue === "option7"}
          onChange={handleLabelChange}
          label="Option 7"
          description="옵션 G를 위한 설명"
          size="large"
          color="red"
        />
        <br />
        <h1 className="mb-4 text-lg font-semibold">
          RadioButtonInline - 인라인 라디오 버튼
        </h1>
        <RadioButtonInline
          name="inlineOptions"
          value="option1"
          checked={inlineSelectedValue === "option1"}
          onChange={handleInlineChange}
          label="Option 1"
          size="small"
          color="sky"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option2"
          checked={inlineSelectedValue === "option2"}
          onChange={handleInlineChange}
          label="Option 2"
          size="small"
          color="grey"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option3"
          checked={inlineSelectedValue === "option3"}
          onChange={handleInlineChange}
          label="Option 3"
          size="medium"
          color="blue"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option4"
          checked={inlineSelectedValue === "option4"}
          onChange={handleInlineChange}
          label="Option 4"
          size="medium"
          color="purple"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option5"
          checked={inlineSelectedValue === "option5"}
          onChange={handleInlineChange}
          label="Option 5"
          size="medium"
          color="green"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option6"
          checked={inlineSelectedValue === "option6"}
          onChange={handleInlineChange}
          label="Option 6"
          size="large"
          color="yellow"
        />
        <RadioButtonInline
          name="inlineOptions"
          value="option7"
          checked={inlineSelectedValue === "option7"}
          onChange={handleInlineChange}
          label="Option 7"
          size="large"
          color="red"
        />
      </div>

      {/* 카드 섹션 */}
      <br />
      <h1 className="mb-4 text-lg font-semibold">Card1 - 기본 카드</h1>
      <div className="mt-8">
        <CardBasic
          title="Next.js"
          description="Next.js is a React framework for building full-stack web applications."
        />
        <br />
        <h1 className="mb-4 text-lg font-semibold">Card2 - 확장 카드</h1>
        <CardInteractive
          title="Next.js_expand Card"
          description="Next.js is a React framework for building full-stack web applications."
          detail="You use React Components to build user interfaces, and Next.js for additional features and optimizations."
        />
        <br />
        <h1 className="mb-4 text-lg font-semibold">
          Card3 - 가로형 이미지 카드
        </h1>
        <CardImage
          title="Image Card_Vertical"
          description="You can add image or icon to this card component😊"
          image="/componique_logo.svg"
        />
        <br />
        <h1 className="mb-4 text-lg font-semibold">Card4 - 상품 카드</h1>
        <CardPricing
          title="📝Pro Plan"
          description="You can access more features."
          price="$20/month"
          features={[
            "Level up your Claude usage with 5x more usage versus Free plan",
            "Access to Claude 3 Haiku, our fastest model, and Claude 3 Opus",
            "Create Projects to work with Claude around a set of docs, code, or files",
            "Priority access during high-traffic periods",
            "Early access to new features",
          ]}
          buy="Subscribe to Pro"
        />
        <br />
        <h1 className="mb-4 text-lg font-semibold">Card5 - 리뷰 카드</h1>
        <CardReview
          avatar="/avatar1.svg"
          name="ToongToong123"
          rate={4}
          review="This product is very convenient for me, which I like. It's a pity that it's expensive, but I think it's worth trying at least once."
        />
      </div>
      {/* 라디오 버튼 섹션 */}
      <div>
        <br />
        <h1 className="mb-4 text-lg font-semibold">
          DropDownBasic - 기본 드롭다운
        </h1>
        <DropDownBasic
          option={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
          defaultOption="Select Option"
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default Page;
