"use client";

import Calendar from "@components/Calendar/Calendar"; // Calendar 컴포넌트를 사용
import Select from "@components/Select/Select";
import Autocomplete from "@components/Autocomplete";
import Button from "@components/Button/Button";
import Toast from "@components/Toast/Toast";
import FullScreenSpinner from "@components/Spinner/ FullScreenSpinner";
import { useCalenderStore } from "app/store/useCalenderStore";
import { useState } from "react";
import Spinner from "@components/Spinner/BasicSpinner";

const CalenderForm = () => {
  // Zustand에서 상태 가져오기
  const {
    selectedDate,
    setSelectedDate,
    returnDate,
    setReturnDate,
    seatClass,
    setSeatClass,
    spinning,
    setSpinning,
    spinnerShape,
    selectOptions,
    selectColor,
    autocompleteOptions,
    autocompletePlaceholder,
  } = useCalenderStore();

  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [passengers, setPassengers] = useState<{
    adults: number;
    children: number;
    infants: number;
  }>({ adults: 1, children: 0, infants: 0 });
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const handleSubmit = () => {
    if (!departure || !arrival || !selectedDate || !returnDate) {
      setToastMessage("모든 정보를 입력해주세요.");
      setShowToast(true);
      return;
    }

    setSpinning(true); // 스피너 시작
    setToastMessage("항공권 검색을 시작합니다.");
    setShowToast(true);

    // 비동기 작업 시뮬레이션 (예: API 호출)
    setTimeout(() => {
      setSpinning(false); // 스피너 중지
      setToastMessage("항공권 검색이 완료되었습니다.");
    }, 2000);
  };

  return (
    <div className="mx-auto rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-center text-lg font-semibold">
        항공권 예약 사이트
      </h2>
      <div className="flex">
        <div>
          {/* 출발지 입력 필드 */}
          <div className="mb-4 flex items-center justify-between">
            <Autocomplete
              placeholder={autocompletePlaceholder}
              options={autocompleteOptions}
              onSelect={(value) => setDeparture(value)}
            />
          </div>

          {/* 출발일 선택 캘린더 */}
          <h3 className="mb-2 mt-4 text-center">출발일 선택</h3>
          <Calendar
            onDateSelect={(date) => setSelectedDate(date)}
            defaultValue={selectedDate ?? undefined}
          />
          <div className="text-gray-600 mt-2 text-center text-sm">
            선택된 출발일:{" "}
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "날짜를 선택해주세요."}
          </div>
        </div>
        <div>
          {/* 도착지 입력 필드 */}
          <div className="mb-4 flex items-center justify-between">
            <Autocomplete
              placeholder={autocompletePlaceholder}
              options={autocompleteOptions}
              onSelect={(value) => setArrival(value)}
            />
          </div>
          {/* 귀국일 선택 캘린더 */}
          <h3 className="mb-2 mt-4 text-center">귀국일 선택</h3>
          <Calendar
            onDateSelect={(date) => setReturnDate(date)}
            defaultValue={returnDate ?? undefined}
          />
          <div className="text-gray-600 mt-2 text-center text-sm">
            선택된 귀국일:{" "}
            {returnDate
              ? returnDate.toLocaleDateString()
              : "날짜를 선택해주세요."}
          </div>
        </div>
      </div>
      {/* 탑승 인원 선택 */}
      <h3 className="mb-2 mt-4 text-center">탑승 인원 선택</h3>
      <Select
        option={selectOptions}
        color={selectColor}
        placeholder="성인"
        onChange={(value) =>
          setPassengers({ ...passengers, adults: parseInt(value) })
        }
      />
      <Select
        option={["0 어린이", "1 어린이", "2 어린이"]}
        color={selectColor}
        placeholder="어린이"
        onChange={(value) =>
          setPassengers({ ...passengers, children: parseInt(value) })
        }
      />
      <Select
        option={["0 유아", "1 유아", "2 유아"]}
        color={selectColor}
        placeholder="유아"
        onChange={(value) =>
          setPassengers({ ...passengers, infants: parseInt(value) })
        }
      />

      {/* 좌석 등급 선택 */}
      <h3 className="mb-2 mt-4 text-center">좌석 등급 선택</h3>
      <Select
        option={["Economy", "Business", "First Class"]}
        color={selectColor}
        placeholder="좌석 등급을 선택해주세요."
        onChange={(value) => setSeatClass(value)}
      />

      {/* 항공권 검색 버튼 */}
      <Button
        color="primary"
        onClick={handleSubmit}
        disabled={spinning} // 스피너가 작동 중일 때 버튼 비활성화
        className="mt-4 w-full py-2 text-lg"
      >
        {spinning ? <Spinner size="small" /> : "항공권 검색"}
      </Button>

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

      {/* FullScreenSpinner 컴포넌트 */}
      <FullScreenSpinner spinning={spinning} shape={spinnerShape} />
    </div>
  );
};

export default CalenderForm;
