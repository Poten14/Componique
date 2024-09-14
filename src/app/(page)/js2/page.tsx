import Tooltip from "@components/Tooltip/Tooltip";
import TooltipBasic from "@components/Tooltip/TooltipBasic";
import TooltipIcon from "@components/Tooltip/TooltipIcon";
import BadgeBasic from "@components/Badge/BadgeBasic";
import BadgeIcon from "@components/Badge/BadgeIcon";
import BadgeCounter from "@components/Badge/BadgeCounter";
import BadgeDot from "@components/Badge/BadgeDot";

const page = () => {
  return (
    <div className="mt-40 ml-16">
      
      <h1>기본 Tooltip입니다.</h1>
      <TooltipBasic />
      <br />
      <h1>아이콘 Tooltip입니다.</h1>
      <TooltipIcon/>
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
   
    </div>
  );
};
export default page;
