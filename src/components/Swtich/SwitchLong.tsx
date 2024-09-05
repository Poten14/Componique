import { useState } from "react";

const SwitchLong = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        onClick={toggleSwitch}
        className={`flex h-7 w-24 cursor-pointer items-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E] dark:bg-[#333742]`}`}
      >
        <div
          className={`h-5 w-12 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-10` : ``}`}
        />
      </div>

      <div
        onClick={toggleSwitch}
        className={`flex h-9 w-36 cursor-pointer items-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E] dark:bg-[#333742]`}`}
      >
        <div
          className={`h-7 w-16 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-16` : ``}`}
        />
      </div>

      <div
        onClick={toggleSwitch}
        className={`flex h-16 w-64 cursor-pointer items-center rounded-full p-2 ${isOn ? `bg-Basic` : `bg-[#9E9E9E] dark:bg-[#333742]`}`}
      >
        <div
          className={`h-12 w-28 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-32` : ``}`}
        />
      </div>
    </div>
  );
};

export default SwitchLong;
