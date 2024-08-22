"use client";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import GradientPicker from "./GradientPicker";

type Picker = "Color" | "Gradient";

const TwoPicker: React.FC = () => {
  const [activePicker, setActivePicker] = useState<Picker>("Color");

  return (
    <div className="mx-auto w-full max-w-xl select-none">
      <div className="flex items-center">
        <div
          className={`w-[80px] cursor-pointer py-1 text-center ${activePicker === "Color" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`}
          onClick={() => setActivePicker("Color")}
        >
          Color
        </div>
        <div
          className={`w-[90px] cursor-pointer py-1 text-center ${activePicker === "Gradient" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`}
          onClick={() => setActivePicker("Gradient")}
        >
          Gradient
        </div>
      </div>
      <div>
        {activePicker === "Color" ? (
          <div>
            <ColorPicker />
          </div>
        ) : (
          <div>
            <GradientPicker />
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoPicker;
