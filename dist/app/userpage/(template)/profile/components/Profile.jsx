"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const SelectList_1 = __importDefault(require("@components/Select/SelectList"));
const useProfileStore_1 = require("app/store/useProfileStore");
const Profile = () => {
    const { shape, size, color, variant, text, iconSize, iconColor, iconPosition, nickname, placeholder, job, location, email, } = (0, useProfileStore_1.useProfileStore)();
    return (<div className="grid place-items-center gap-y-6">
      <div className="grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-[#333742]">
        <Imageupload_1.default shape={shape} size={size} color={color} variant={variant} text={text} icon="icon-user" iconSize={iconSize} iconColor={iconColor} iconPosition={iconPosition}/>
        <SelectList_1.default option={["65 Post", "65 Follower", "65 Follow "]} className="rounded-lg bg-Basic text-white"/>
        <p className="text-md w-[120px] rounded-full bg-[#eee] p-1 text-center font-bold dark:bg-Navy">
          {nickname}
        </p>

        <div className="grid w-[400px] justify-items-center gap-y-4 rounded-lg border border-Basic bg-white p-6 !text-[#6c6c6c] dark:bg-[#333742]">
          <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
            <Icon_1.default name="icon-comment"/>
            <Input_1.default size="small" placeholder={placeholder} width="100%"/>
          </div>
          <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
            <Icon_1.default name="icon-info"/>
            <p>{job}</p>
          </div>
          <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
            <Icon_1.default name="icon-map"/>
            <p>{location}</p>
          </div>
          <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
            <Icon_1.default name="icon-mail"/>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Profile;
