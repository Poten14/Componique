import { useState } from "react";

const SwitchBasic = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div
        onClick={toggleSwitch} //
        className={`flex h-7 w-14 cursor-pointer items-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-5 w-5 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-7` : ``}`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch} //
        className={`flex h-10 w-20 cursor-pointer items-center rounded-full p-1 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-7 w-7 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-11` : ``}`}
        />
      </div>
      <br />

      <div
        onClick={toggleSwitch} //
        className={`flex h-16 w-36 cursor-pointer items-center rounded-full p-2 ${isOn ? `bg-Basic` : `bg-[#9E9E9E]`}`}
      >
        <div
          className={`h-12 w-12 transform rounded-full bg-white shadow-lg duration-700 ease-in-out ${isOn ? `translate-x-20` : ``}`}
        />
      </div>
    </div>
  );
};
export default SwitchBasic;
