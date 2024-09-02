import { useState } from "react";
import Image from "next/image";

const SwitchDark = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={`flex h-7 w-14 cursor-pointer items-center rounded-full p-1 ${isOn ? `bg-[#FFFFFF]` : `bg-[#232A31]`}`}
      >
        {/* 이미지 container*/}
        <div className="relative flex h-full items-center">
          {/* 이미지 요소 */}
          <Image
            src="/Sun.svg"
            alt="Sun"
            width={20}
            height={20}
            className={`absolute left-1 transition-opacity duration-500 ease-in-out ${isOn ? `opacity-100` : `opacity-0`}`}
          />
          <Image
            src="/Moon.svg"
            alt="Moon"
            width={20}
            height={20}
            className={`absolute translate-x-7 transition-opacity duration-500 ease-in-out ${isOn ? `opacity-0` : `opacity-100`}`}
          />
          {/* 스위치 버튼 */}
          <div
            className={`h-5 w-5 transform rounded-full shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-7` : `translate-x-1`} ${isOn ? `bg-[#9AC5E5]` : `bg-[#333742]`}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchDark;
