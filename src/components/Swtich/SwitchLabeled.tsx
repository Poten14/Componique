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
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out ${isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}`}
        >
          {isOn ? "ON" : "OFF"}
        </p>
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative flex h-14 w-24 cursor-pointer items-center justify-between rounded-xl bg-[#DDDDDD] px-1 dark:bg-[#333742]"
      >
        <p
          className={`flex h-12 w-12 transform items-center justify-center rounded-xl text-center text-2xl font-bold text-white shadow-lg duration-700 ease-in-out ${!isOn ? "translate-x-10 bg-Basic" : "bg-[#302f2f]"}`}
        >
          {isOn ? "OFF" : "ON"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLabeled;
