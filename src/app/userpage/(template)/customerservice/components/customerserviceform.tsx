"use client";

import React, { useState, useEffect } from "react";
import DropDownBasic from "@components/DropDown/DropDownBasic";
import DropDownGrouped from "@components/DropDown/DropDownGrouped";
import Input from "@components/Input/Input";
import Textarea from "@components/Textarea/Textarea";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import ImageUpload from "@components/ImageUpload/Imageupload";

import { useServiceStore } from "../../../../store/useServiceStore";

const CustomerServiceForm: React.FC = () => {
  const {
    numberType,
    phoneNumber,
    serviceItem,
    name,
    email,
    title,
    details,
    attachment,
    inputSize1,
    inputVariant1,
    inputSize2,
    inputVariant2,
    buttonColor1,
    buttonSize1,
    buttonVariant1,
    buttonColor2,
    buttonSize2,
    buttonVariant2,
    dropDownOption1,
    dropDownOption2,
    dropDownType1,
    dropDownType2,
    detailSize,
    detailColor,
    detailResize,
    imageUploadSize,
    imageUploadColor,
    imageUploadShape,
    imageUploadVariant,
    setServiceState,
  } = useServiceStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
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
  }, [
    numberType,
    phoneNumber,
    serviceItem,
    name,
    email,
    title,
    details,
    attachment,
    dropDownOption1,
    dropDownOption2,
    dropDownType1,
    dropDownType2,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !title || !details) {
      setToastMessage("모든 필드를 입력해주세요.");
      setShowToast(true);
      return;
    }
    setToastMessage("문의가 성공적으로 제출되었습니다.");
    setShowToast(true);
  };

  const handleImageSelect = (data: string | null) => {
    setServiceState("attachment", data);
  };

  const handleDetailSizeChange = (newSize: string) => {
    setServiceState("detailSize", newSize as any);
  };

  const handleDetailColorChange = (newColor: string) => {
    setServiceState("detailColor", newColor as any);
  };

  const handleDetailResizeChange = (newResize: string) => {
    setServiceState("detailResize", newResize as any);
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-full max-w-lg rounded-3xl p-10 shadow-lg ${
          isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"
        }`}
      >
        <h1
          className={`mb-8 text-center text-2xl font-bold ${
            isDarkMode ? "text-[#dfdfdf]" : "text-Gray"
          }`}
        >
          Customer Service
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className={isDarkMode ? "text-[#dfdfdf]" : ""}>
            🧑🏻‍💼 Select your inquiry type:
          </h1>
          <div className="flex">
            <DropDownBasic
              option={dropDownOption1}
              placeholder="Number Type"
              onSelect={(value) => setServiceState("numberType", value)}
              type={dropDownType1}
            />
            <div className="mr-2" />
            <Input
              size={inputSize1}
              variant={inputVariant1}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setServiceState("phoneNumber", e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <DropDownGrouped
              options={dropDownOption2}
              defaultOption="Service Item"
              onSelect={(value) => setServiceState("serviceItem", value)}
              type={dropDownType2}
            />
          </div>
          <hr />
          <h1 className={isDarkMode ? "text-[#dfdfdf]" : ""}>
            🧑🏻‍💻 Please provide details of your inquiry:
          </h1>
          <Input
            size={inputSize2}
            variant={inputVariant2}
            placeholder="Enter Subject"
            value={title}
            onChange={(e) => setServiceState("title", e.target.value)}
            width="100%"
          />
          <Textarea
            size={detailSize}
            color={detailColor}
            resize={detailResize}
            placeholder="Enter Detailed Description"
            value={details}
            onChange={(e) => setServiceState("details", e.target.value)}
            className={
              isDarkMode ? "dark:bg-[#2A2E39] dark:text-[#dfdfdf]" : ""
            }
          />
          <h1 className={isDarkMode ? "text-[#dfdfdf]" : ""}>
            🛠️ Image Upload
          </h1>
          <ImageUpload
            size={imageUploadSize}
            color={imageUploadColor}
            shape={imageUploadShape}
            variant={imageUploadVariant}
            onImageSelect={handleImageSelect}
            text="+ Upload"
            className={
              isDarkMode ? "dark:bg-[#2A2E39] dark:text-[#dfdfdf]" : ""
            }
          />
          <hr />
          <div className="mt-6 flex">
            <Button
              color={buttonColor1}
              size={buttonSize1}
              variant={buttonVariant1}
              type="button"
              className={`mr-6 w-full text-white ${
                isDarkMode ? "bg-[#444B58]" : ""
              }`}
            >
              Cancel
            </Button>
            <Button
              color={buttonColor2}
              size={buttonSize2}
              variant={buttonVariant2}
              type="submit"
              className={`w-full text-white ${
                isDarkMode ? "bg-[#444B58]" : ""
              }`}
            >
              Submit
            </Button>
          </div>
        </form>
        {showToast && (
          <Toast
            isOpen={showToast}
            onClose={() => setShowToast(false)}
            color={toastMessage.includes("success") ? "success" : "danger"}
          >
            {toastMessage}
          </Toast>
        )}
      </div>
    </div>
  );
};

export default CustomerServiceForm;
