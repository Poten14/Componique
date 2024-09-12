import Tooltip from "@components/Tooltip/Tooltip";
import TooltipBasic from "@components/Tooltip/TooltipBasic";
import TooltipIcon from "@components/Tooltip/TooltipIcon";
const page = () => {
  return (
    <div className="mt-40 ml-16">
      
      <h1>기본 Tooltip입니다.</h1>
      <TooltipBasic />
      <br />
      <h1>아이콘 Tooltip입니다.</h1>
      <TooltipIcon/>
    </div>
  );
};
export default page;
