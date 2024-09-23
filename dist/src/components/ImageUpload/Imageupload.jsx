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
const uuid_1 = require("uuid");
const react_2 = require("react");
const image_1 = __importDefault(require("next/image"));
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const ImageUpload = ({ shape = "circle", size = "medium", color = "basic", text, variant = "solid", className, icon = "icon-plus", iconSize = "medium", iconColor = "currentColor", iconPosition = "top", onImageSelect, }) => {
    const [previewImage, setPreviewImage] = (0, react_1.useState)(null);
    const [id, setId] = (0, react_1.useState)("");
    // previewImage가 변경될 때마다 ID 재생성
    (0, react_2.useEffect)(() => {
        setId((0, uuid_1.v4)());
    }, [previewImage]);
    const ImageUploadSize = size === "small"
        ? "w-16  h-16"
        : size === "medium"
            ? "w-24 h-24"
            : "w-36 h-36";
    const colors = {
        basic: "bg-Basic",
        primary: "bg-Primary",
        secondary: "bg-Secondary",
        success: "bg-Success",
        warning: "bg-Warning",
        danger: "bg-Danger",
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        white: "bg-white",
        gray: "bg-gray",
        black: "bg-black !text-white",
    };
    const borderColors = {
        primary: "border-2 border-Primary !text-Primary hover:text-white",
        secondary: "border-2 border-Secondary !text-Secondary",
        success: "border-2 border-Success !text-Success",
        warning: "border-2 border-Warning !text-Warning",
        danger: "border-2 border-Danger !text-Danger",
        red: "border-2 border-red-500 !text-red-500",
        orange: "border-2 border-orange-500 !text-orange-500",
        yellow: "border-2 border-yellow-500 !text-yellow-500",
        green: "border-2 border-green-500 !text-green-500",
        blue: "border-2 border-blue-500 !text-blue-500",
        purple: "border-2 border-purple-500 !text-purple-500",
        pink: "border-2 border-pink-500 !text-pink-500",
        basic: "border-2 border-Basic !text-Basic",
        white: "border-2 border-white !text-gray",
        gray: "border-2 border-gray !text-gray",
        black: "border-2 boder-black !text-black",
    };
    let ImageVariant = "";
    if (variant === "solid") {
        ImageVariant = `${colors[color]}`;
    }
    else if (variant === "border") {
        ImageVariant = `${borderColors[color]}`;
    }
    const onChangeImageHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                setPreviewImage(result); // 미리보기 이미지를 설정
                if (onImageSelect) {
                    onImageSelect(result); //선택한 이미지의 Base64 데이터를 사용하는 컴포넌트에 콜백 함수로 전달
                }
            };
            reader.readAsDataURL(file); //이미지를 Base64 형식으로 읽어오기
        }
        else {
            if (onImageSelect) {
                onImageSelect(null); //이미지가 선택되지 않은 경우 null 전달
            }
        }
    };
    const imageuploadIconSIze = iconSize === "small" ? 16 : iconSize === "medium" ? 24 : 32;
    const imageUploadIconPosition = iconPosition === "top"
        ? "flex-col"
        : iconPosition === "bottom"
            ? "flex-col-reverse"
            : iconPosition === "left"
                ? "flex-row"
                : "flex-row-reverse";
    return (<>
      <input type="file" accept="image/*" onChange={onChangeImageHandler} className="hidden" id={id}/>
      <label htmlFor={id} className={`relative inline-block cursor-pointer text-center ${shape === "rectangle" ? "rounded-lg" : "rounded-full"} ${ImageUploadSize} ${ImageVariant} ${className || ""}`}>
        {previewImage ? (<image_1.default src={previewImage} alt="Preview" fill className={`flex h-full w-full object-cover ${shape === "rectangle" ? "rounded-lg" : "rounded-full"}`}/>) : (<div className={`flex h-full w-full items-center justify-center ${imageUploadIconPosition}`}>
            {icon && (<Icon_1.default name={icon} size={imageuploadIconSIze} color={iconColor}/>)}
            {text && (<span className="max-w-full whitespace-normal break-words">
                {text}
              </span>)}
          </div>)}
      </label>
    </>);
};
exports.default = ImageUpload;
