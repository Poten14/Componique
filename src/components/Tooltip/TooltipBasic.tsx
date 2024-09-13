import Tooltip from "./Tooltip";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const TooltipBasic = () => {
  return (
    <div className="flex">
    <Tooltip content="GitHub">
      <FaGithub className="mr-2 text-2xl dark:text-white"/>
    </Tooltip>
    <Tooltip content="FaceBook">
    <FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
     </Tooltip>
  <Tooltip content="Instagram">
  <FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
<Tooltip content="Line">
<FaLine className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
<Tooltip content="Twitter">
<FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
</div>
  );
};
export default TooltipBasic;
