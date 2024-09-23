"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tooltip_1 = __importDefault(require("./Tooltip"));
const fa_1 = require("react-icons/fa");
const fa_2 = require("react-icons/fa");
const fa_3 = require("react-icons/fa");
const ci_1 = require("react-icons/ci");
const fa_4 = require("react-icons/fa");
const ti_1 = require("react-icons/ti");
const fa6_1 = require("react-icons/fa6");
const fa6_2 = require("react-icons/fa6");
const bs_1 = require("react-icons/bs");
const TooltipIcon = () => {
    return (<div className="flex">
    <Tooltip_1.default content={<fa_2.FaGithubAlt />}>
      <fa_1.FaGithub className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content={<ci_1.CiFacebook />}>
    <fa_3.FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
     </Tooltip_1.default>
  <Tooltip_1.default content={<ti_1.TiSocialInstagram />}>
  <fa_4.FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content={<fa6_1.FaLine />}>
    <fa6_1.FaLine className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content={<bs_1.BsTwitterX />}>
    <fa6_2.FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    </div>);
};
exports.default = TooltipIcon;
