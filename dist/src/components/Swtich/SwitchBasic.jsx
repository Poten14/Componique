import { useState } from "react";
const SwitchBasic = ({ size = "medium", onColor = "bg-Basic", offColor = "bg-[#9E9E9E] dark:bg-[#333742]", }) => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    // 크기별 스타일을 설정합니다.
    const sizeClasses = {
        small: {
            width: "w-14",
            height: "h-7",
            circleSize: "h-5 w-5",
            translateDistance: "translate-x-7",
        },
        medium: {
            width: "w-20",
            height: "h-10",
            circleSize: "h-7 w-7",
            translateDistance: "translate-x-11",
        },
        large: {
            width: "w-36",
            height: "h-16",
            circleSize: "h-12 w-12",
            translateDistance: "translate-x-20",
        },
    };
    const currentSize = sizeClasses[size];
    return (<div className="flex items-center justify-center space-x-12">
      <div onClick={toggleSwitch} className={`flex ${currentSize.height} ${currentSize.width} cursor-pointer items-center rounded-full p-1 ${isOn ? onColor : offColor}`}>
        <div className={`transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${currentSize.circleSize} ${isOn ? currentSize.translateDistance : ""}`}/>
      </div>
    </div>);
};
export default SwitchBasic;
