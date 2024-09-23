"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const useProfileStore_1 = require("app/store/useProfileStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const previewProfileFormCode = (store) => {
    return `
  import React from 'react';
  import ImageUpload from '@components/ImageUpload/Imageupload';
  import Input from '@components/Input/Input';
  import Icon from '@components/Icon/Icon';

  const Profile = () => {
    return (
      <div className="grid place-items-center gap-y-6">
        <div className="grid place-items-center gap-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-[#333742]">
          <ImageUpload
            shape="${store.shape}"
            size="${store.size}"
            color="${store.color}"
            variant="${store.variant}"
            text="${store.text}"
            icon="icon-user"
            iconSize="${store.iconSize}"
            iconColor="${store.iconColor}"
            iconPosition="${store.iconPosition}"
          />
          <p className="text-md w-[120px] rounded-full bg-[#eee] p-1 text-center font-bold dark:bg-Navy">
            ${store.nickname}
          </p>
          <div className="grid w-[400px] justify-items-center gap-y-4 rounded-lg border border-Basic bg-white p-6 dark:bg-[#333742]">
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-comment" />
              <Input size="small" placeholder="${store.placeholder}" width="100%" />
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-info" />
              <p>${store.job}</p>
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-map" />
              <p>${store.location}</p>
            </div>
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
              <Icon name="icon-mail" />
              <p>${store.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;
  `;
};
const ProfileRemote = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const profileStore = (0, useProfileStore_1.useProfileStore)();
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, []);
    const handleCopy = () => {
        const code = previewProfileFormCode(profileStore);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const { shape, size, color, variant, text, iconSize, iconColor, iconPosition, nickname, placeholder, job, location, email, setProfileState, } = profileStore;
    const controls = [
        {
            label: "ImageUpload-Shape",
            type: "select",
            value: shape,
            options: ["rectangle", "circle"],
            onChange: (newValue) => setProfileState("shape", newValue),
        },
        {
            label: "ImageUpload-Size",
            type: "select",
            value: size,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setProfileState("size", newValue),
        },
        {
            label: "ImageUpload-Color",
            type: "select",
            value: color,
            options: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "purple",
                "pink",
                "basic",
                "white",
                "gray",
                "black",
            ],
            onChange: (newValue) => setProfileState("color", newValue),
        },
        {
            label: "ImageUpload-Style",
            type: "select",
            value: variant,
            options: ["solid", "border"],
            onChange: (newValue) => setProfileState("variant", newValue),
        },
        {
            label: "ImageUpload-Text",
            type: "text",
            value: text,
            onChange: (newValue) => setProfileState("text", newValue),
        },
        {
            label: "ImageUpload-Icon Size",
            type: "select",
            value: iconSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setProfileState("iconSize", newValue),
        },
        {
            label: "ImageUpload-Icon Color",
            type: "text",
            value: iconColor,
            onChange: (newValue) => setProfileState("iconColor", newValue),
        },
        {
            label: "ImageUpload-Icon Position",
            type: "select",
            value: iconPosition,
            options: ["left", "right", "top", "bottom"],
            onChange: (newValue) => setProfileState("iconPosition", newValue),
        },
        {
            label: "Name",
            type: "text",
            value: nickname,
            onChange: (newValue) => setProfileState("nickname", newValue),
        },
        {
            label: "Bio",
            type: "text",
            value: placeholder,
            onChange: (newValue) => setProfileState("placeholder", newValue),
        },
        {
            label: "Job",
            type: "text",
            value: job,
            onChange: (newValue) => setProfileState("job", newValue),
        },
        {
            label: "Location",
            type: "text",
            value: location,
            onChange: (newValue) => setProfileState("location", newValue),
        },
        {
            label: "Email",
            type: "text",
            value: email,
            onChange: (newValue) => setProfileState("email", newValue),
        },
    ];
    return (<div className="relative shadow-xl">
      <div className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]`}>
        <div className="flex">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>

          <Button_1.default iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="ml-20 dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
            <Icon_1.default name="icon-docs" color="white"/>
            Code
          </Button_1.default>
        </div>
        <input type="text" className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]" placeholder="   customizing your template" disabled/>
        <BasicModal_1.default open={isModalOpen} onClose={() => setIsModalOpen(false)} showCloseIcon={true} className="custom-modal">
          <react_syntax_highlighter_1.Prism language="tsx" style={isDarkMode ? prism_1.vscDarkPlus : undefined} customStyle={{
            backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "0.7rem",
            maxHeight: "570px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
        }}>
            {previewProfileFormCode(profileStore)}
          </react_syntax_highlighter_1.Prism>
          <Button_1.default onClick={handleCopy} icon={copied ? "icon-check" : undefined} className="copyButton m-10 dark:bg-[#2A6490]" iconColor={copied ? "green" : "white"}>
            {copied ? "Copied!" : "Copy Code"}
          </Button_1.default>
          <div className="mb-2 text-right">
            <Button_1.default variant="border" onClick={() => setIsModalOpen(false)} className="dark:text-gray-300 text-sm text-gray dark:border-gray">
              close
            </Button_1.default>
          </div>
        </BasicModal_1.default>
      </div>

      <div className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`}>
        {controls.map((control, index) => (<div key={index} className={`control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`}>
              {control.label}
            </label>
            {control.type === "select" ? (<Select_1.default option={control.options || []} placeholder={control.value} onChange={(newValue) => control.onChange(newValue)} className="w-full"/>) : (<input type="text" value={control.value} onChange={(e) => control.onChange(e.target.value)} className={`w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]" : "border-gray bg-white"}`}/>)}
          </div>))}
      </div>
    </div>);
};
exports.default = ProfileRemote;
