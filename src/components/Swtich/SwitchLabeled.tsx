import { useState } from "react";

const SwitchLabeled = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-14 w-24 cursor-pointer rounded-xl bg-[#DDDDDD]"
      >
        <p
          className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-xl text-center shadow-lg duration-700 ease-in-out ${isOn ? "translate-x-11 bg-Basic" : "bg-[#BCBCBC]"} text-2xl font-bold text-white`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-14 w-24 cursor-pointer rounded-xl bg-[#DDDDDD]"
      >
        <p
          className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-xl text-center shadow-lg duration-700 ease-in-out ${!isOn ? "translate-x-11 bg-Basic" : "bg-[#BCBCBC]"} text-2xl font-bold text-white`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};
export default SwitchLabeled;
