import { useState } from "react";

// 크기 타입 정의
type SizeType = "small" | "medium" | "large";

interface SwitchHorizentalProps {
  size?: SizeType;
  onColor?: string;
  offColor?: string;
}

const SwitchHorizental = ({
  size = "medium",
  onColor = "bg-Basic",
  offColor = "bg-[#9E9E9E] dark:bg-[#333742]",
}: SwitchHorizentalProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 크기별 스타일을 설정합니다.
  const sizeClasses: Record<
    SizeType,
    {
      width: string;
      height: string;
      circleSize: string;
      translateDistance: string;
      initialOffset: string;
    }
  > = {
    small: {
      width: "w-7",
      height: "h-16",
      circleSize: "h-5 w-5",
      translateDistance: "translate-y-5",
      initialOffset: "-translate-y-4",
    },
    medium: {
      width: "w-9",
      height: "h-24",
      circleSize: "h-8 w-8",
      translateDistance: "translate-y-7",
      initialOffset: "-translate-y-7",
    },
    large: {
      width: "w-12",
      height: "h-32",
      circleSize: "h-10 w-10",
      translateDistance: "translate-y-10",
      initialOffset: "-translate-y-10",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch}
        className={`flex ${currentSize.height} ${currentSize.width} cursor-pointer items-center justify-center rounded-full p-1 ${
          isOn ? onColor : offColor
        }`}
      >
        <div
          className={`transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${currentSize.circleSize} ${
            isOn ? currentSize.translateDistance : currentSize.initialOffset
          }`}
        />
      </div>
    </div>
  );
};

export default SwitchHorizental;
