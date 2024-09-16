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
    </div>
  );
};
export default page;
