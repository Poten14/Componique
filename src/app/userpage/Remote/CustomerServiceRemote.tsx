"use client";
import React, { useState } from "react";
import { useServiceStore } from "../../store/useServiceStore";
import Select from "@components/Select/Select";
import Input from "@components/Input/Input";
import Textarea from "@components/Textarea/Textarea";
import ImageUpload from "@components/ImageUpload/Imageupload";
import Button from "@components/Button/Button";

const CustomerServiceRemote: React.FC = () => {
  const {
    numberType,
    phoneNumber,
    serviceItem,
    title,
    details,
    attachment,
    dropDownOption1,
    dropDownOption2,
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

  const handleSizeChange1 = (newSize: string) => {
    setServiceState("inputSize1", newSize as any);
  };

  const handleVariantChange1 = (newVariant: string) => {
    setServiceState("inputVariant1", newVariant as any);
  };

  const handleSizeChange2 = (newSize: string) => {
    setServiceState("inputSize2", newSize as any);
  };

  const handleVariantChange2 = (newVariant: string) => {
    setServiceState("inputVariant2", newVariant as any);
  };

  const handleDropDownType1Change = (newType: any) => {
    setServiceState("dropDownType1", newType);
  };

  const handleDropDownType2Change = (newType: any) => {
    setServiceState("dropDownType2", newType);
  };

  // "번호 유형" 관련 핸들러
  const handleNumberTypeChange = (newType: string) => {
    setServiceState("numberType", newType);
  };

  // "제품 세부 정보" 관련 핸들러
  const handleServiceItemChange = (newItem: string) => {
    setServiceState("serviceItem", newItem);
  };

  // 상세 내용 관련 핸들러
  const handleDetailSizeChange = (newSize: string) => {
    setServiceState("detailSize", newSize as any);
  };

  const handleDetailColorChange = (newColor: string) => {
    setServiceState("detailColor", newColor as any);
  };

  const handleDetailResizeChange = (newResize: string) => {
    setServiceState("detailResize", newResize as any);
  };

  // 이미지 업로드 관련 핸들러
  const handleImageUploadSizeChange = (newSize: string) => {
    setServiceState("imageUploadSize", newSize as any);
  };

  const handleImageUploadColorChange = (newColor: string) => {
    setServiceState("imageUploadColor", newColor as any);
  };

  const handleImageUploadShapeChange = (newShape: string) => {
    setServiceState("imageUploadShape", newShape as any);
  };

  const handleImageUploadVariantChange = (newVariant: string) => {
    setServiceState("imageUploadVariant", newVariant as any);
  };

  // 버튼 관련 핸들러
  const handleButtonColorChange1 = (newColor: string) => {
    setServiceState("buttonColor1", newColor as any);
  };

  const handleButtonSizeChange1 = (newSize: string) => {
    setServiceState("buttonSize1", newSize as any);
  };

  const handleButtonVariantChange1 = (newVariant: string) => {
    setServiceState("buttonVariant1", newVariant as any);
  };

  const handleButtonColorChange2 = (newColor: string) => {
    setServiceState("buttonColor2", newColor as any);
  };

  const handleButtonSizeChange2 = (newSize: string) => {
    setServiceState("buttonSize2", newSize as any);
  };

  const handleButtonVariantChange2 = (newVariant: string) => {
    setServiceState("buttonVariant2", newVariant as any);
  };

  return (
    <div className="remote-control m-auto mt-20 max-h-[900px] w-[350px] overflow-y-auto rounded-xl bg-white p-2 shadow-lg">
      <h2 className="p-5 text-xl font-bold text-Primary">고객 서비스 제어판</h2>

      {/* 번호 유형 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">번호 유형</label>
        <Select
          option={dropDownOption1}
          placeholder={numberType}
          onChange={handleNumberTypeChange}
          className="w-full"
        />
      </div>

      {/* 번호 유형-스타일 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          번호 유형-스타일
        </label>
        <Select
          option={["basic", "rounded", "borderless-rounded", "less-rounded"]}
          placeholder={dropDownType1}
          onChange={handleDropDownType1Change}
          className="w-full"
        />
      </div>

      {/* 전화번호 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">전화번호</label>
        <Input
          size={inputSize1}
          variant={inputVariant1}
          placeholder="전화번호"
          value={phoneNumber}
          onChange={(e) => setServiceState("phoneNumber", e.target.value)}
          width="100%"
        />
      </div>

      {/* 전화번호-사이즈 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          전화번호-사이즈
        </label>
        <Select
          option={["xs", "small", "medium", "large", "xl"]}
          placeholder={inputSize1}
          onChange={handleSizeChange1}
          className="w-full"
        />
      </div>

      {/* 전화번호-채우기 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          전화번호-채우기
        </label>
        <Select
          option={["outlined", "filled"]}
          placeholder={inputVariant1}
          onChange={handleVariantChange1}
          className="w-full"
        />
      </div>

      {/* 제품 세부 정보 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          제품 세부 정보
        </label>
        <Select
          option={dropDownOption2.flatMap((group) => group.items)}
          placeholder={serviceItem}
          onChange={handleServiceItemChange}
          className="w-full"
        />
      </div>

      {/* 제품 세부 정보-스타일 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          제품 세부 정보-스타일
        </label>
        <Select
          option={["basic", "rounded", "borderless-rounded", "less-rounded"]}
          placeholder={dropDownType2}
          onChange={handleDropDownType2Change}
          className="w-full"
        />
      </div>

      {/* 제목 입력 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">제목 입력</label>
        <Input
          size={inputSize2}
          variant={inputVariant2}
          placeholder="제목"
          value={title}
          onChange={(e) => setServiceState("title", e.target.value)}
          width="100%"
        />
      </div>

      {/* 제목-사이즈 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">제목-사이즈</label>
        <Select
          option={["xs", "small", "medium", "large", "xl"]}
          placeholder={inputSize2}
          onChange={handleSizeChange2}
          className="w-full"
        />
      </div>

      {/* 제목-채우기 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">제목-채우기</label>
        <Select
          option={["outlined", "filled"]}
          placeholder={inputVariant2}
          onChange={handleVariantChange2}
          className="w-full"
        />
      </div>

      {/* 상세 내용 입력 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          상세 내용 입력
        </label>
        <Textarea
          size={detailSize}
          color={detailColor}
          resize={detailResize}
          placeholder="상세 내용을 입력하세요"
          value={details}
          onChange={(e) => setServiceState("details", e.target.value)}
        />
      </div>

      {/* 상세 내용-사이즈 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          상세 내용-사이즈
        </label>
        <Select
          option={["xs", "small", "medium", "large", "xl"]}
          placeholder={detailSize}
          onChange={handleDetailSizeChange}
          className="w-full"
        />
      </div>

      {/* 상세 내용-색상 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          상세 내용-색상
        </label>
        <Select
          option={["red", "skyblue", "green", "gray"]}
          placeholder={detailColor}
          onChange={handleDetailColorChange}
          className="w-full"
        />
      </div>

      {/* 상세 내용-크기 조절 여부 선택 드롭다운 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          상세 내용-크기 조절
        </label>
        <Select
          option={["none", "both", "horizontal", "vertical"]}
          placeholder={detailResize}
          onChange={handleDetailResizeChange}
          className="w-full"
        />
      </div>

      {/* 이미지 업로드 관련 선택 */}
      <div className="control-item bg-gray-50 m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          이미지 업로드
        </label>
        <ImageUpload
          size={imageUploadSize}
          color={imageUploadColor}
          shape={imageUploadShape}
          variant={imageUploadVariant}
          onImageSelect={onImageSelect}
        />
      </div>

      {/* 이미지 업로드-사이즈 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          이미지 업로드-사이즈
        </label>
        <Select
          option={["small", "medium", "large"]}
          placeholder={imageUploadSize}
          onChange={handleImageUploadSizeChange}
          className="w-full"
        />
      </div>

      {/* 이미지 업로드-색상 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          이미지 업로드-색상
        </label>
        <Select
          option={[
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
          ]}
          placeholder={imageUploadColor}
          onChange={handleImageUploadColorChange}
          className="w-full"
        />
      </div>

      {/* 이미지 업로드-모양 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          이미지 업로드-모양
        </label>
        <Select
          option={["rectangle", "circle"]}
          placeholder={imageUploadShape}
          onChange={handleImageUploadShapeChange}
          className="w-full"
        />
      </div>

      {/* 이미지 업로드-스타일 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          이미지 업로드-스타일
        </label>
        <Select
          option={["solid", "border"]}
          placeholder={imageUploadVariant}
          onChange={handleImageUploadVariantChange}
          className="w-full"
        />
      </div>

      {/* 버튼 관련 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Cancel-버튼 색상
        </label>
        <Select
          option={[
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
          ]}
          placeholder={buttonColor1}
          onChange={handleButtonColorChange1}
          className="w-full"
        />
      </div>

      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Cancel-버튼 크기
        </label>
        <Select
          option={["small", "medium", "large"]}
          placeholder={buttonSize1}
          onChange={handleButtonSizeChange1}
          className="w-full"
        />
      </div>

      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Cancel-버튼 스타일
        </label>
        <Select
          option={["solid", "border", "flat", "light"]}
          placeholder={buttonVariant1}
          onChange={handleButtonVariantChange1}
          className="w-full"
        />
      </div>

      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Submit-버튼 색상
        </label>
        <Select
          option={[
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
          ]}
          placeholder={buttonColor2}
          onChange={handleButtonColorChange2}
          className="w-full"
        />
      </div>

      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Submit-버튼 크기
        </label>
        <Select
          option={["small", "medium", "large"]}
          placeholder={buttonSize2}
          onChange={handleButtonSizeChange2}
          className="w-full"
        />
      </div>

      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="mb-2 block font-medium text-Gray">
          Submit-버튼 스타일
        </label>
        <Select
          option={["solid", "border", "flat", "light"]}
          placeholder={buttonVariant2}
          onChange={handleButtonVariantChange2}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CustomerServiceRemote;
