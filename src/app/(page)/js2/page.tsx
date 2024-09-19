import Tooltip from "@components/Tooltip/Tooltip";
import TooltipBasic from "@components/Tooltip/TooltipBasic";
import TooltipIcon from "@components/Tooltip/TooltipIcon";
import BadgeBasic from "@components/Badge/BadgeBasic";
import BadgeIcon from "@components/Badge/BadgeIcon";
import BadgeCounter from "@components/Badge/BadgeCounter";
import BadgeDot from "@components/Badge/BadgeDot";

import RatingStar from "@components/Rating/RatingStar";
import RatingNumSlider from "@components/Rating/RatingNumSlider";
import RatingFeel from "@components/Rating/RatingFeel";
import ValidationEmail from "@components/Validation/ValidationEmail";
import ValidationID from "@components/Validation/ValidationID";
import ValidationPW from "@components/Validation/ValidationPW";
import ValidationPhone from "@components/Validation/ValidationPhone";
import ValidationPWConfirm from "@components/Validation/ValidationPWConfirm";
import DataTableBasic from "@components/DataTable/DataTableBasic";

const page = () => {
  return (
    <div className="ml-16 mt-40">
      <h1>기본 Tooltip입니다.</h1>
      <TooltipBasic />
      <br />
      <h1>아이콘 Tooltip입니다.</h1>
      <TooltipIcon />
      <hr />
      <h1>기본 Badge입니다/</h1>
      <BadgeBasic />
      <h1>Icon Badge입니다/</h1>
      <BadgeIcon />
      <h1>Counter Badge입니다/</h1>
      <BadgeCounter />
      <h1>Dot Badge입니다/</h1>
      <BadgeDot />
      <hr />
      <h1>Star Rating입니다.</h1>
      <RatingStar stars={3} />
      <h1>NumSlider Rating입니다.</h1>
      <RatingNumSlider />
      <h1>Rating Feel입니다.</h1>
      <RatingFeel />
      <hr />
      <br />
      <h1>Email Validation입니다.</h1>
      <ValidationEmail />
      <br />
      <h1>ID Validation입니다.</h1>
      <ValidationID />
      <br />
      <h1>PW Validation입니다.</h1>
      <ValidationPW />
      <br />
      <h1>2차 PW Validation입니다.</h1>
      <ValidationPWConfirm />
      <br />
      <h1>Phone Validation입니다.</h1>
      <ValidationPhone />

      <hr />
      <br />
      <h1>Basic DataTable입니다.</h1>
      <DataTableBasic
        data={[
          {
            카페이름: "달빛 정원",
            지역: "서울 강남",
            인기메뉴: "라벤더 라떼",
            가격: "7,000원",
          },
          {
            카페이름: "숲속의 시간",
            지역: "경기 가평",
            인기메뉴: "말차 스무디",
            가격: "6,500원",
          },
          {
            카페이름: "바다 위의 향기",
            지역: "부산 해운대",
            인기메뉴: "코코넛 아이스 커피",
            가격: "8,000원",
          },
          {
            카페이름: "구름다방",
            지역: "제주 애월",
            인기메뉴: "한라봉 에이드",
            가격: "9,000원",
          },
          {
            카페이름: "모던 앤 빈티지",
            지역: "서울 마포",
            인기메뉴: "에스프레소 토닉",
            가격: "6,000원",
          },
        ]}
        thColor="Blue"
        tdColor="Success"
      />

    </div>
  );
};
export default page;
