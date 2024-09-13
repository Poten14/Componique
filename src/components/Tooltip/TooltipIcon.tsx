import Tooltip from "./Tooltip";
import { FaGithub } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLine } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
const TooltipIcon = () => {
  return (
    <div className="flex">
    <Tooltip content={<FaGithubAlt />}>
      <FaGithub className="mr-2 text-2xl dark:text-white"/>
    </Tooltip>
    <Tooltip content={<CiFacebook />}>
    <FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
     </Tooltip>
  <Tooltip content={<TiSocialInstagram />}>
  <FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
<Tooltip content={<FaLine />}>
<FaLine className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
<Tooltip content={<BsTwitterX />}>
<FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
</Tooltip>
</div>
  )
}
export default TooltipIcon