"use client";
import { useState } from "react";
import { ColorPickerProps } from "./ColorPickerType";
import Button from "@components/Button/Button";
const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  const [selectColor, setSelectedColor] = useState<string>("#ffffff");
  const [msg, setMsg] = useState("");
  const onClickCopyHandler = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg("선택한 컬러가 복사되었습니다.");
      setTimeout(() => setMsg(""), 2000);
    } catch (error) {
      setMsg("복사 실패하였습니다.");
    }
  };
  return (
    <>
      <div className="w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center">
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={selectColor}
            className="mr-2 w-24 px-2 py-1 text-center text-xl outline-none"
            readOnly
          />
          <Button
            radius="small"
            onClick={() => {
              onClickCopyHandler(selectColor);
            }}
          >
            Copy
          </Button>
        </div>
        <p className="text-sm">{msg}</p>
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
                className={`h-[33px] w-[33px] rounded border border-slate-200 ${selectColor === item ? "border-2 border-slate-500" : ""}`}
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
