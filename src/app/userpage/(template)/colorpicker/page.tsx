"use client";
import { useEffect } from "react";
import TwoPicker from "@components/ColorPicker/TwoPicker";
const colorPicker = () => {
  const handleColorChange = (color: string) => {
    // body 배경색 변경
    document.body.style.background = color;
  };

  useEffect(() => {
    // 컴포넌트 언마운트 시 배경색을 원래대로 복구
    return () => {
      document.body.style.background = "";
    };
  }, []);
  return (
    <div className="flex justify-center pl-[270px]">
      <div className="my-10">
        <TwoPicker onColorChange={handleColorChange} />
      </div>
    </div>
  );
};
export default colorPicker;
