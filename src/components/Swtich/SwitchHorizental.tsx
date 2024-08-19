import { useState } from "react";

const SwitchHorizental = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex items-center justify-center space-x-12">
      <div
        onClick={toggleSwitch} //
        className={`flex h-16 w-7 cursor-pointer items-center justify-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-5 w-5 -translate-y-4 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-y-5` : ``}`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch} //
        className={`flex h-24 w-9 cursor-pointer items-center justify-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-8 w-8 -translate-y-7 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-y-7` : ``}`}
        />
      </div>
      <br />

      <div
        onClick={toggleSwitch} //
        className={`flex h-32 w-12 cursor-pointer items-center justify-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-10 w-10 -translate-y-10 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-y-10` : ``}`}
        />
      </div>
    </div>
  );
};
export default SwitchHorizental;
