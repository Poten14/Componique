"use client";
import { useState } from "react";
import { ColorPickerProps } from "./ColorPickerType";
const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  const [selectColor, setSelectedColor] = useState<string>("#ffffff");
  return (
    <>
      <h1>ColorPicker Component</h1>
      <div className="w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center">
        <input
          type="text"
          value={selectColor}
          className="w-24 p-2 text-center text-xl outline-none"
          readOnly
        />
        <div>
          <input
            type="color"
            className="mb-2 h-10 w-52 cursor-pointer bg-transparent"
            value={selectColor}
            onChange={(e) => {
              setSelectedColor(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex w-52 flex-wrap justify-evenly">
            {colors.map((item, index) => (
              <div
                key={index}
                className={`h-[33px] w-[33px] rounded border border-slate-200 ${selectColor === item ? "border-2 border-slate-400" : ""}`}
                style={{ backgroundColor: item }}
                onClick={() => {
                  console.log(item);
                  setSelectedColor(item);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ColorPicker;
