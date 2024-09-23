"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvatarBasic_1 = __importDefault(require("@components/Avatar/AvatarBasic"));
const CardImage = ({ title, children }) => {
    return (<div className="m-4 flex max-w-sm rounded-xl border-2 border-Blue shadow-lg dark:bg-[#2A2E39] dark:text-white">
      <AvatarBasic_1.default src="/componique_logo.svg" alt="ComponiqueLogo" size={100}/>
      <div className="px-auto ml-4 mr-2 py-5">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className="text-slate-700">{children}</div>
      </div>
    </div>);
};
exports.default = CardImage;
