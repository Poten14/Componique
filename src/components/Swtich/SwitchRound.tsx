import { useState } from "react";

const SwitchRound = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD]"
      >
        <div
          className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out ${isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}`}
        />
      </div>
      <br />
      <div
        onClick={toggleSwitch}
        className="relative h-3 w-32 cursor-pointer rounded-full bg-[#DDDDDD]"
      >
        <div
          className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full shadow-lg duration-700 ease-in-out ${!isOn ? "translate-x-24 bg-Basic" : "bg-[#BCBCBC]"}`}
        />
      </div>
    </div>
  );
};
export default SwitchRound;