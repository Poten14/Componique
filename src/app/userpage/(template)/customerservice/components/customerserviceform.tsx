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

  useEffect(() => {
    // 상태 변화 감지 및 처리 로직
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

  // 상세 내용 필드의 속성 상태를 제어하는 핸들러
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
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="mb-8 text-center text-2xl font-bold text-Gray">
          고객 서비스
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1>🧑🏻‍💼 문의 유형을 선택하세요:</h1>
          <div className="flex">
            <DropDownBasic
              option={dropDownOption1}
              placeholder="번호 유형 선택"
              onSelect={(value) => setServiceState("numberType", value)}
              type={dropDownType1}
            />
            <div className="mr-2" />
            <Input
              size={inputSize1}
              variant={inputVariant1}
              placeholder="전화번호"
              value={phoneNumber}
              onChange={(e) => setServiceState("phoneNumber", e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <DropDownGrouped
              options={dropDownOption2}
              defaultOption="서비스 항목 선택"
              onSelect={(value) => setServiceState("serviceItem", value)}
              type={dropDownType2}
            />
          </div>
          <hr />
          <h1>🧑🏻‍💻 문의 내용을 작성해주세요.</h1>
          <Input
            size={inputSize2}
            variant={inputVariant2}
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setServiceState("title", e.target.value)}
          />
          <Textarea
            size={detailSize}
            color={detailColor}
            resize={detailResize}
            placeholder="상세 내용 입력"
            value={details}
            onChange={(e) => setServiceState("details", e.target.value)}
          />
          <h1>🛠️ 이미지 업로드</h1>
          <ImageUpload
            size={imageUploadSize}
            color={imageUploadColor}
            shape={imageUploadShape}
            variant={imageUploadVariant}
            onImageSelect={handleImageSelect}
            text="+ 업로드"
          />
          <hr />
          <div className="mt-6 flex">
            <Button
              color={buttonColor1}
              size={buttonSize1}
              variant={buttonVariant1}
              type="button"
              className="mr-6 w-full text-white"
            >
              취소
            </Button>
            <Button
              color={buttonColor2}
              size={buttonSize2}
              variant={buttonVariant2}
              type="submit"
              className="w-full text-white"
            >
              제출
            </Button>
          </div>
        </form>
        {showToast && (
          <Toast
            isOpen={showToast}
            onClose={() => setShowToast(false)}
            color={toastMessage.includes("성공") ? "success" : "danger"}
          >
            {toastMessage}
          </Toast>
        )}
      </div>
    </div>
  );
};

export default CustomerServiceForm;
