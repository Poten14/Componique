"use client";

import { useState } from "react";

interface SelectSwitch {
  reset?: boolean;
  onToggle?: (e: boolean) => void;
}

const SelectSwitch = ({ reset = false }) => {
  const [isOn, setIsOn] = useState<boolean>(reset);

  // const handleToggle = () => {
  //   setIsOn(!isOn);
  //   if (onToggle) {
  //     onToggle(!isOn);
  //   }
  // };

  return (
    <>
      <div className="flex items-center">
        <div className="relative h-8 w-14 cursor-pointer rounded-full bg-[#9AC5E5] p-1"></div>
      </div>
    </>
  );
};
export default SelectSwitch;
