"use client";

import Toast from "@components/Toast/Toast";
import { useState, useEffect } from "react";
import { ToastProps } from "./ToastType";
import { useRouter } from "next/navigation";

// ToastConfig 타입 정의: ToastProps에서 isOpen과 onClose를 제외한 속성과 자식 요소(children) 포함
type ToastConfig = Omit<ToastProps, "isOpen" | "onClose"> & {
  children: React.ReactNode;
  path?: string;
  isProgress?: boolean;
};

// ToastGroupProps 타입 정의: toasts 배열, position, 그리고 모든 Toast가 닫혔을 때 호출되는 onAllClosed 콜백 함수 포함
type ToastGroupProps = {
  toasts: ToastConfig[];
  position?:
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "centerTop"
    | "centerBottom"
    | "left"
    | "right"
    | "center";
  onAllClosed?: () => void; // 모든 Toast가 닫혔을 때 호출될 콜백 함수
};

const ToastGroup: React.FC<ToastGroupProps> = ({
  toasts,
  position = "leftBottom",
  onAllClosed,
}) => {
  // Toast들의 열림 상태를 관리하는 변수 선언, 초기값은 모든 Toast가 닫힌 상태로 설정함
  const [openToasts, setOpenToasts] = useState<boolean[]>(
    Array(toasts.length).fill(false),
  );

  useEffect(() => {
    // 초기 상태 설정: 모든 Toast를 닫힌 상태로 시작
    setOpenToasts(Array(toasts.length).fill(false));

    // 인덱스 순서대로 Toast를 표시하기 위한 타이머 설정
    toasts.forEach((toast, index) => {
      const showTimeout = setTimeout(() => {
        // 특정 인덱스의 Toast를 열림 상태로 변경
        setOpenToasts((prev) =>
          prev.map((isOpen, i) => (i === index ? true : isOpen)),
        );

        // 각 Toast가 열리고 난 후 자동으로 닫히도록 설정
        if (toast.time) {
          const closeTimeout = setTimeout(
            () => {
              // 특정 인덱스의 Toast를 닫음 상태로 변경
              setOpenToasts((prev) =>
                prev.map((isOpen, i) => (i === index ? false : isOpen)),
              );
            },
            // 주어진 시간(초) 후에 Toast를 닫음
            parseInt(toast.time) * 1000,
          );

          // 클린업: 컴포넌트가 언마운트될 때 타이머 제거
          return () => clearTimeout(closeTimeout);
        }
      }, index * 1000); // 인덱스에 따른 1초 간격으로 Toast를 표시

      // 클린업: 컴포넌트가 언마운트될 때 타이머 제거
      return () => clearTimeout(showTimeout);
    });
  }, [toasts]);

  useEffect(() => {
    // 모든 Toast가 닫혔는지 확인
    if (openToasts.every((isOpen) => !isOpen)) {
      // 모든 Toast가 닫혔다면 onAllClosed 콜백 함수 호출
      if (onAllClosed) onAllClosed();
    }
  }, [openToasts, onAllClosed]);
  // 특정 인덱스의 Toast를 수동으로 닫는 함수
  const onClickToastCloseHandler = (index: number) => {
    setOpenToasts((prev) =>
      prev.map((isOpen, i) => (i === index ? false : isOpen)),
    );
  };

  // 각 Toast의 상단 여백 클래스 배열
  const marginTopClasses = [
    "mt-[0rem]",
    "mt-[4rem]",
    "mt-[8rem]",
    "mt-[12rem]",
    "mt-[16rem]",
    "mt-[20rem]",
    "mt-[24rem]",
    "mt-[28rem]",
    "mt-[32rem]",
    "mt-[36rem]",
    "mt-[40rem]",
  ];

  // 각 Toast의 하단 여백 클래스 배열
  const marginBottomClasses = [
    "mb-[0rem]",
    "mb-[4rem]",
    "mb-[8rem]",
    "mb-[12rem]",
    "mb-[16rem]",
    "mb-[20rem]",
    "mb-[24rem]",
    "mb-[28rem]",
    "mb-[32rem]",
    "mb-[36rem]",
    "mb-[40rem]",
  ];
  // 현재 Toast의 위치가 하단인지 확인하는 변수
  const isBottomPosition =
    position === "leftBottom" ||
    position === "centerBottom" ||
    position === "rightBottom";

  // 각 위치에 따른 스타일링
  const positionClasses = {
    leftTop: "top-0 left-0",
    centerTop: "top-0 left-1/2 -translate-x-1/2 ",
    rightTop: "top-0  right-0 ",
    left: "top-1/2 left-0 transform -translate-y-1/2 ",
    center: "top-1/2 left-1/2 -translate-x-1/2 ",
    right: "top-1/2 right-0 ",
    leftBottom: "bottom-0 left-0 ",
    centerBottom: "bottom-0 left-1/2 -translate-x-1/2 ",
    rightBottom: "bottom-0 right-0  ",
  };

  // 모든 Toast가 닫혔을 때 컴포넌트를 null로 반환하여 DOM에서 제거
  if (openToasts.every((isOpen) => !isOpen)) {
    return null;
  }
  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] h-full w-full`}
    >
      {toasts.map((item, index) => (
        <div key={index}>
          <Toast
            key={index}
            isOpen={openToasts[index]}
            size={item.size || "medium"}
            onClose={() => onClickToastCloseHandler(index)}
            color={item.color}
            time={item.time}
            position={position}
            path={item.path}
            variant={item.variant}
            isProgress={item.isProgress}
            text={item.text}
            isClose={item.isClose}
            className={`${item.className} pointer-events-auto ${
              isBottomPosition
                ? marginBottomClasses[index]
                : marginTopClasses[index]
            } absolute ${positionClasses[position]}`}
          >
            {item.children}
          </Toast>
        </div>
      ))}
    </div>
  );
};

export default ToastGroup;
