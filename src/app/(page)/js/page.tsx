"use client";
import React, { useState, useEffect } from "react";

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
import DropDownBasicMultiSelect from "@components/DropDown/DropDownMutilSelect";
import DropDownGrouped from "@components/DropDown/DropDownGrouped";

// Switch 컴포넌트 가져오기
import SwitchBasic from "@components/Swtich/SwitchBasic";
import SwitchRound from "@components/Swtich/SwitchRound";
import SwitchHorizental from "@components/Swtich/SwitchHorizental";
import SwitchLong from "@components/Swtich/SwitchLong";
import SwitchLabeled from "@components/Swtich/SwitchLabeled";

// Infinite Scroll 컴포넌트 가져오기
import InfiniteScrollBasic from "@components/InfiniteScroll/InfiniteScrollBasic";
import InfiniteScrollImage from "@components/InfiniteScroll/InfiniteScrollImage";
import InfiniteScrollKoJson from "@components/InfiniteScroll/InfiniteScrollKoJson";

// ProgressBarBasic 컴포넌트 가져오기
import ProgressBarBasic from "@components/ProgressBar/ProgressBarBasic";
import ProgressBarCircle from "@components/ProgressBar/ProgressBarCircle";
import ProgressBarSlider from "@components/ProgressBar/ProgressBarSlider";

// Avatar 컴포넌트 가져오기
import AvatarBasic from "@components/Avatar/AvatarBasic";

const Page = () => {
  // 라디오 버튼의 선택 상태를 관리하는 useState 훅
  const [basicSelectedValue, setBasicSelectedValue] = useState("");
  const [labelSelectedValue, setLabelSelectedValue] = useState("");
  const [inlineSelectedValue, setInlineSelectedValue] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);

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
  const handleSelectMulti = (value: string[]) => {
    console.log("Selected option:", value);
  };

  // 파일을 클라이언트 사이드에서 가져오기
  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch("/content/news1.txt");
      const text = await response.text();
      setContent(text);
    };

    const fetchImages = async () => {
      // 이미지 경로를 배열로 설정 (이 예제에서는 /images 폴더의 이미지 사용)
      const imagePaths = [
        "/images/IfSc1.svg",
        "/images/IfSc2.svg",
        "/images/IfSc3.svg",
        "/images/IfSc4.svg",
        "/images/IfSc5.svg",
        "/images/IfSc6.svg",
        "/images/IfSc7.svg",
        "/images/IfSc8.svg",
        "/images/IfSc9.svg",
        "/images/IfSc10.svg",

        // 필요한 만큼 이미지 경로를 추가합니다.
      ];
      setImages(imagePaths);
    };

    fetchContent();
    fetchImages();
  }, []);

  return (
    <div className="mb-96 ml-4 mt-4">
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
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
            "Option 8",
          ]}
          defaultOption="Select Option"
          onSelect={handleSelect}
        />
        <br />
        <br />
        <br />
        <h1 className="mb-4 text-lg font-semibold">
          DropDownMultiSelect - 다중 선택 드롭다운
        </h1>
        <DropDownBasicMultiSelect
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
            "Option 8",
          ]}
          defaultOption="Select Option"
          onSelect={handleSelectMulti}
        />
      </div>
      <br />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        DropDownGrouped - 그룹화한 드롭다운
      </h1>
      <DropDownGrouped
        options={[
          {
            groupName: "Fruits",
            items: ["Apple", "Banana", "Orange", "Grapes"],
          },
          {
            groupName: "Vegetables",
            items: ["Carrot", "Broccoli", "Spinach", "Potato"],
          },
          {
            groupName: "Dairy",
            items: ["Milk", "Cheese", "Butter", "Yogurt"],
          },
        ]}
        defaultOption="Select Option"
        onSelect={handleSelect}
      />
      <br />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">SwitchBasic - 기본 스위치</h1>
      <SwitchBasic />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        RoundSwitch - 라운드 스위치
      </h1>
      <SwitchRound />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        SwitchHorizental - 수직 스위치
      </h1>
      <SwitchHorizental />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">SwitchLong - 긴 스위치</h1>
      <SwitchLong />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        SwitchLabeled - 레이블 스위치
      </h1>
      <SwitchLabeled />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Infinite Scroll Basic - 기본 인피니티 스크롤
      </h1>
      <InfiniteScrollBasic content={content.split(".")} />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Infinite Scroll Image - 이미지 인피니티 스크롤
      </h1>
      <InfiniteScrollImage images={images} />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Infinite Scroll KoJson - Korean JSON 인피니티 스크롤
      </h1>
      <InfiniteScrollKoJson />
      <br />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Progress Bar Basic - 기본 프로그래스 바
      </h1>
      <ProgressBarBasic percent={50} showPercent={true} completed={true} />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Progress Bar Cricle - 원형 프로그래스 바
      </h1>
      <ProgressBarCircle percent={100} showPercent={true} completed={true} />
      <br />
      <h1 className="mb-4 text-lg font-semibold">
        Progress Bar Slider - 슬라이더 프로그래스 바
      </h1>
      <ProgressBarSlider percent={40} showPercent={true} completed={true} />
      <br />
      <h1 className="mb-4 text-lg font-semibold">AvatarBasic - 기본아바타</h1>
      <h2>이미지가 있는 아바타</h2>
      <AvatarBasic src="/avatar1.svg" alt="퉁퉁이" size={100} />
      <br />
      <h2>이미지가 없는 경우 이니셜 5글자까지 입력</h2>
      <AvatarBasic initial="toong" size={100} />
    </div>
  );
};

export default Page;
