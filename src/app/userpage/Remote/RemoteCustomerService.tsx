"use client";

import React, { useEffect, useState } from "react";
import { useServiceStore } from "../../store/useServiceStore";
import Select from "@components/Select/Select";
import Input from "@components/Input/Input";
import Textarea from "@components/Textarea/Textarea";
import ImageUpload from "@components/ImageUpload/Imageupload";
import Button from "@components/Button/Button";

const CustomerServiceRemote: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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

  const {
    numberType,
    phoneNumber,
    serviceItem,
    title,
    details,
    attachment,
    dropDownType1,
    dropDownType2,
    inputSize1,
    inputVariant1,
    inputSize2,
    inputVariant2,
    detailSize,
    detailColor,
    detailResize,
    buttonColor1,
    buttonSize1,
    buttonVariant1,
    buttonColor2,
    buttonSize2,
    buttonVariant2,
    imageUploadSize,
    imageUploadColor,
    imageUploadShape,
    imageUploadVariant,
    setServiceState,
    onImageSelect,
  } = useServiceStore();

  const controls = [
    {
      label: "번호 유형-스타일",
      type: "select",
      value: dropDownType1,
      options: ["basic", "rounded", "borderless-rounded", "less-rounded"],
      onChange: (newValue: string) =>
        setServiceState("dropDownType1", newValue),
    },
    {
      label: "전화번호",
      type: "input",
      value: phoneNumber,
      size: inputSize1,
      variant: inputVariant1,
      placeholder: "전화번호",
      onChange: (newValue: string) => setServiceState("phoneNumber", newValue),
    },
    {
      label: "전화번호-사이즈",
      type: "select",
      value: inputSize1,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setServiceState("inputSize1", newValue),
    },
    {
      label: "전화번호-채우기",
      type: "select",
      value: inputVariant1,
      options: ["outlined", "filled"],
      onChange: (newValue: string) =>
        setServiceState("inputVariant1", newValue),
    },
    {
      label: "서비스 항목 선택-스타일",
      type: "select",
      value: dropDownType2,
      options: ["basic", "rounded", "borderless-rounded", "less-rounded"],
      onChange: (newValue: string) =>
        setServiceState("dropDownType2", newValue),
    },
    {
      label: "제목 입력",
      type: "input",
      value: title,
      size: inputSize2,
      variant: inputVariant2,
      placeholder: "제목",
      onChange: (newValue: string) => setServiceState("title", newValue),
    },
    {
      label: "제목-사이즈",
      type: "select",
      value: inputSize2,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setServiceState("inputSize2", newValue),
    },
    {
      label: "제목-채우기",
      type: "select",
      value: inputVariant2,
      options: ["outlined", "filled"],
      onChange: (newValue: string) =>
        setServiceState("inputVariant2", newValue),
    },
    {
      label: "상세 내용 입력",
      type: "textarea",
      value: details,
      size: detailSize,
      color: detailColor,
      resize: detailResize,
      placeholder: "상세 내용을 입력하세요",
      onChange: (newValue: string) => setServiceState("details", newValue),
    },
    {
      label: "상세 내용-사이즈",
      type: "select",
      value: detailSize,
      options: ["xs", "small", "medium", "large", "xl"],
      onChange: (newValue: string) => setServiceState("detailSize", newValue),
    },
    {
      label: "상세 내용-색상",
      type: "select",
      value: detailColor,
      options: ["red", "skyblue", "green", "gray"],
      onChange: (newValue: string) => setServiceState("detailColor", newValue),
    },
    {
      label: "상세 내용-크기 조절",
      type: "select",
      value: detailResize,
      options: ["none", "both", "horizontal", "vertical"],
      onChange: (newValue: string) => setServiceState("detailResize", newValue),
    },
    {
      label: "이미지 업로드",
      type: "imageUpload",
      size: imageUploadSize,
      color: imageUploadColor,
      shape: imageUploadShape,
      variant: imageUploadVariant,
      onImageSelect: onImageSelect,
    },
    {
      label: "이미지 업로드-사이즈",
      type: "select",
      value: imageUploadSize,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) =>
        setServiceState("imageUploadSize", newValue),
    },
    {
      label: "이미지 업로드-색상",
      type: "select",
      value: imageUploadColor,
      options: [
        "basic",
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
        "white",
        "gray",
        "black",
      ],
      onChange: (newValue: string) =>
        setServiceState("imageUploadColor", newValue),
    },
    {
      label: "이미지 업로드-모양",
      type: "select",
      value: imageUploadShape,
      options: ["rectangle", "circle"],
      onChange: (newValue: string) =>
        setServiceState("imageUploadShape", newValue),
    },
    {
      label: "이미지 업로드-스타일",
      type: "select",
      value: imageUploadVariant,
      options: ["solid", "border"],
      onChange: (newValue: string) =>
        setServiceState("imageUploadVariant", newValue),
    },
    {
      label: "Cancel-버튼 색상",
      type: "select",
      value: buttonColor1,
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
      ],
      onChange: (newValue: string) => setServiceState("buttonColor1", newValue),
    },
    {
      label: "Cancel-버튼 크기",
      type: "select",
      value: buttonSize1,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setServiceState("buttonSize1", newValue),
    },
    {
      label: "Cancel-버튼 스타일",
      type: "select",
      value: buttonVariant1,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) =>
        setServiceState("buttonVariant1", newValue),
    },
    {
      label: "Submit-버튼 색상",
      type: "select",
      value: buttonColor2,
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
      ],
      onChange: (newValue: string) => setServiceState("buttonColor2", newValue),
    },
    {
      label: "Submit-버튼 크기",
      type: "select",
      value: buttonSize2,
      options: ["small", "medium", "large"],
      onChange: (newValue: string) => setServiceState("buttonSize2", newValue),
    },
    {
      label: "Submit-버튼 스타일",
      type: "select",
      value: buttonVariant2,
      options: ["solid", "border", "flat", "light"],
      onChange: (newValue: string) =>
        setServiceState("buttonVariant2", newValue),
    },
  ];

  return (
    <div className="relative shadow-xl">
      {/* 하늘색 배경 박스 추가 */}
      <div
        className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-Navy`}
      >
        <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
          Control Panel
        </h2>
        <input
          type="text"
          className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#102B3F] dark:text-[#ffffff]"
          placeholder="   customizing your template"
          disabled
        />
      </div>

      {/* Control 패널 */}
      <div
        className={`remote-control top-26 relative m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${
          isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"
        } max-h-[calc(100vh-220px)] overflow-y-auto`}
      >
        {/* 맵 함수로 모든 필드 렌더링 */}
        {controls.map((control, index) => (
          <div
            key={index}
            className={`control-item m-3 rounded-lg p-2 shadow-md ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <label
              className={`mb-2 block font-medium ${
                isDarkMode ? "text-[#dfdfdf]" : "text-Gray"
              }`}
            >
              {control.label}
            </label>
            {control.type === "select" ? (
              <Select
                option={control.options ?? []} // 옵션이 undefined일 경우 빈 배열로 설정
                placeholder={control.value}
                onChange={(newValue) => control.onChange?.(newValue)} // 함수가 정의된 경우에만 호출
                className="w-full"
              />
            ) : control.type === "input" ? (
              <Input
                size={control.size as "small" | "medium" | "large"} // 올바른 타입으로 캐스팅
                variant={control.variant as "outlined" | "filled"} // 올바른 타입으로 캐스팅
                placeholder={control.placeholder}
                value={control.value}
                onChange={(e) => control.onChange?.(e.target.value)} // 함수가 정의된 경우에만 호출
              />
            ) : control.type === "textarea" ? (
              <Textarea
                size={
                  control.size as "xs" | "small" | "medium" | "large" | "xl"
                } // 올바른 타입으로 캐스팅
                color={control.color as "red" | "green" | "skyblue" | "gray"} // 올바른 타입으로 캐스팅
                resize={control.resize}
                placeholder={control.placeholder}
                value={control.value}
                onChange={(e) => control.onChange?.(e.target.value)} // 함수가 정의된 경우에만 호출
              />
            ) : control.type === "imageUpload" ? (
              <ImageUpload
                size={control.size as "small" | "medium" | "large"} // 올바른 타입으로 캐스팅
                color={
                  control.color as
                    | "basic"
                    | "primary"
                    | "secondary"
                    | "success"
                    | "warning"
                    | "danger"
                    | "red"
                    | "orange"
                    | "yellow"
                    | "green"
                    | "blue"
                    | "purple"
                    | "pink"
                    | "white"
                    | "gray"
                    | "black"
                } // 올바른 타입으로 캐스팅
                shape={control.shape as "rectangle" | "circle"} // 올바른 타입으로 캐스팅
                variant={control.variant as "solid" | "border"} // 올바른 타입으로 캐스팅
                onImageSelect={control.onImageSelect ?? (() => {})} // 함수가 없을 경우 빈 함수로 대체
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerServiceRemote;
