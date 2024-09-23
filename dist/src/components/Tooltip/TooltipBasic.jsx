"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tooltip_1 = __importDefault(require("./Tooltip"));
const fa_1 = require("react-icons/fa");
const fa_2 = require("react-icons/fa");
const fa_3 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const fa6_2 = require("react-icons/fa6");
const TooltipBasic = () => {
    return (<div className="flex">
    <Tooltip_1.default content="GitHub">
      <fa_1.FaGithub className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content="FaceBook">
    <fa_2.FaFacebookSquare className="mr-2 text-2xl dark:text-white"/>
     </Tooltip_1.default>
  <Tooltip_1.default content="Instagram">
  <fa_3.FaInstagramSquare className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content="Line">
    <fa6_1.FaLine className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    <Tooltip_1.default content="Twitter">
    <fa6_2.FaSquareXTwitter className="mr-2 text-2xl dark:text-white"/>
    </Tooltip_1.default>
    </div>);
};
exports.default = TooltipBasic;
