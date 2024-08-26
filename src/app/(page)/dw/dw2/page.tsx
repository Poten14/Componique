"use client";
import { useState } from "react";
import ColorPicker from "@components/ColorPicker/ColorPicker";
import GradientPicker from "@components/ColorPicker/GradientPicker";
import TwoPicker from "@components/ColorPicker/TwoPicker";
import ToastGroup from "@components/Toast/ToastGroup";
const dw2 = () => {
  const [showToastGroup, setShowToastGroup] = useState(true);

  const allToastsCloseHandler = () => {
    setShowToastGroup(false);
  };
  return (
    <div className="mt-10 space-y-5">
      <TwoPicker />
      <ColorPicker />
      <GradientPicker />
      <ToastGroup
        onAllClosed={allToastsCloseHandler}
        position="rightTop"
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            variant: "border",
          },
        ]}
      />
    </div>
  );
};
export default dw2;
