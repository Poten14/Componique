"use client";
import React, { useState, ChangeEvent } from "react";
import { Color16, Size } from "types/type";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
type ImageUploadProps = {
  shape?: "rectangle" | "circle";
  size?: Size;
  color?: Color16;
  text?: string;
  variant?: "solid" | "border";
  className?: string;
  onImageSelect?: (data: string | null) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  shape = "circle",
  size = "medium",
  color = "basic",
  text = "+ Upload",
  variant = "solid",
  className,
  onImageSelect,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [id, setId] = useState<string>("");

  // previewImage가 변경될 때마다 ID 재생성
  useEffect(() => {
    setId(uuidv4());
  }, [previewImage]);

  const ImageUploadSize =
    size === "small"
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
  } else if (variant === "border") {
    ImageVariant = `${borderColors[color]}`;
  }

  const onChangeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result); // 미리보기 이미지를 설정
        if (onImageSelect) {
          onImageSelect(result); //선택한 이미지의 Base64 데이터를 사용하는 컴포넌트에 콜백 함수로 전달
        }
      };
      reader.readAsDataURL(file); //이미지를 Base64 형식으로 읽어오기
    } else {
      if (onImageSelect) {
        onImageSelect(null); //이미지가 선택되지 않은 경우 null 전달
      }
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={onChangeImageHandler}
        className="hidden"
        id={id}
      />
      <label
        htmlFor={id}
        className={`relative inline-block cursor-pointer text-center ${shape === "rectangle" ? "rounded-lg" : "rounded-full"} ${ImageUploadSize} ${ImageVariant} ${className || ""}`}
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt="Preview"
            className={`flex h-full w-full object-cover ${shape === "rectangle" ? "rounded-lg" : "rounded-full"}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="align-middle">{text}</div>
          </div>
        )}
      </label>
    </>
  );
};

export default ImageUpload;
