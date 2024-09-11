import React from "react";
import { useCalenderStore } from "app/store/useCalenderStore";
import Select from "@components/Select/Select";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import FullScreenSpinner from "@components/Spinner/ FullScreenSpinner";
import { Shape } from "@components/Spinner/ FullScreenSpinner";

const CalendarRemote: React.FC = () => {
  const {
    setSeatClass,
    spinning,
    setSpinning,
    spinnerShape,
    setSpinnerShape,
    buttonDisabled,
    setButtonDisabled,
    showToast,
    setShowToast,
    toastMessage,
    setToastMessage,
    selectOptions,
    setSelectOptions,
    selectColor,
    setSelectColor,
    autocompleteOptions,
    setAutocompleteOptions,
    autocompletePlaceholder,
    setAutocompletePlaceholder,
  } = useCalenderStore();

  const handleSeatClassChange = (value: string) => {
    setSeatClass(value);
  };

  const handleSpinnerShapeChange = (shape: Shape) => {
    setSpinnerShape(shape);
  };

  const toggleSpinner = (value: string) => {
    setSpinning(value === "스피너 시작");
  };

  const toggleButtonDisabled = (value: string) => {
    setButtonDisabled(value === "버튼 비활성화");
  };

  const showToastMessage = (value: string) => {
    if (value === "토스트 표시") {
      setToastMessage("이것은 원격으로 제어된 토스트입니다!");
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  };

  const handleAutocompleteOptionsChange = (value: string) => {
    const options = value.split(", ").map((v) => ({ label: v, value: v }));
    setAutocompleteOptions(options);
  };

  const handleAutocompletePlaceholderChange = (value: string) => {
    setAutocompletePlaceholder(value);
  };

  return (
    <div className="remote-control m-auto mt-20 max-h-[900px] w-[350px] overflow-y-auto rounded-xl bg-white p-2 shadow-lg">
      <h2 className="text-primary p-5 text-xl font-bold">캘린더 제어판</h2>

      {/* 좌석 등급 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          좌석 등급 선택
        </label>
        <Select
          option={["Economy", "Business", "First Class"]}
          placeholder="좌석 등급을 선택해주세요."
          onChange={handleSeatClassChange}
        />
      </div>

      {/* 스피너 모양 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          스피너 모양 선택
        </label>
        <Select
          option={["Basic", "Square", "Bars"]}
          placeholder="스피너 모양을 선택해주세요."
          onChange={(value) => handleSpinnerShapeChange(value as Shape)}
        />
      </div>

      {/* Autocomplete 옵션 설정 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          Autocomplete 옵션 설정
        </label>
        <Select
          option={["Option 1, Option 2", "Option 3, Option 4"]}
          placeholder="옵션 목록을 선택해주세요."
          onChange={handleAutocompleteOptionsChange}
        />
      </div>

      {/* Autocomplete Placeholder 설정 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          Autocomplete Placeholder 설정
        </label>
        <Select
          option={["Search for Components", "Enter your text"]}
          placeholder="플레이스홀더를 선택해주세요."
          onChange={handleAutocompletePlaceholderChange}
        />
      </div>

      {/* 스피너 시작/중지 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          스피너 설정
        </label>
        <Select
          option={["스피너 시작", "스피너 중지"]}
          placeholder="스피너를 설정해주세요."
          onChange={toggleSpinner}
        />
      </div>

      {/* 버튼 활성화/비활성화 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          버튼 활성화/비활성화
        </label>
        <Select
          option={["버튼 활성화", "버튼 비활성화"]}
          placeholder="버튼 상태를 설정해주세요."
          onChange={toggleButtonDisabled}
        />
      </div>

      {/* 토스트 표시/숨기기 선택 */}
      <div className="control-item m-3 rounded-lg p-2 shadow-md">
        <label className="text-gray-600 mb-2 block font-medium">
          토스트 설정
        </label>
        <Select
          option={["토스트 표시", "토스트 숨기기"]}
          placeholder="토스트를 설정해주세요."
          onChange={showToastMessage}
        />
      </div>

      {/* FullScreenSpinner 컴포넌트 */}
      <FullScreenSpinner spinning={spinning} shape={spinnerShape} />

      {/* Toast 메시지 */}
      {showToast && (
        <Toast
          isOpen={showToast}
          onClose={() => setShowToast(false)}
          color="success"
        >
          {toastMessage}
        </Toast>
      )}
    </div>
  );
};

export default CalendarRemote;
