"use client";

import Button from "@components/Button/Button";
import Image from "next/image";
import React, { useState } from "react";

const GradientPicker: React.FC = () => {
  const [colors, setColors] = useState({
    startColor: "#ffffff",
    endColor: "#000000",
  });
  const [position, setPosition] = useState("to right");
  const [msg, setMsg] = useState("");
  const onClickCopyHandler = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg("The selected color has been copied!");
      setTimeout(() => setMsg(""), 2000);
    } catch (error) {
      setMsg("Copy failed.");
    }
  };

  const onChangeColorHandler =
    (colorType: "startColor" | "endColor") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setColors({
        ...colors,
        [colorType]: event.target.value,
      });
    };

  const onChangePositionHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPosition(event.target.value);
  };

  const gradientCode = `linear-gradient(${position}, ${colors.startColor}, ${colors.endColor})`;

  return (
    <div className="w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="color"
            value={colors.startColor}
            onChange={onChangeColorHandler("startColor")}
            className="mb-2 h-10 w-24 cursor-pointer bg-transparent"
          />
          <p>To</p>
          <input
            type="color"
            value={colors.endColor}
            onChange={onChangeColorHandler("endColor")}
            className="mb-2 h-10 w-24 cursor-pointer bg-transparent"
          />
        </div>

        <div className="relative flex w-full items-center justify-center space-x-2">
          <span>To</span>
          <select
            value={position}
            onChange={onChangePositionHandler}
            className="border-gray-300 block appearance-none rounded-lg border border-gray bg-white px-6 py-2 shadow-sm focus:border-Basic focus:outline-none focus:ring-2 focus:ring-Basic"
          >
            <option value="to right">right</option>
            <option value="to left">left</option>
            <option value="to bottom">bottom</option>
            <option value="to top">top</option>
            <option value="to bottom right">bottom right</option>
            <option value="to bottom left">bottom left</option>
            <option value="to top right">top right</option>
            <option value="to top left">top left</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-[66px] flex items-center">
            <Image src="selectdown.svg" alt="arrow" width={15} height={15} />
          </div>
        </div>
      </div>
      <div className="m-auto flex w-[200px] items-center justify-between">
        <p className="mt-2 text-left text-lg font-bold">Preview</p>
        <Button
          radius="small"
          onClick={() => {
            onClickCopyHandler(gradientCode);
          }}
        >
          Copy
        </Button>
      </div>

      <div
        className="m-auto h-16 w-52 rounded border border-slate-200"
        style={{
          background: gradientCode,
        }}
      />
      <div>
        <p className="mt-2 text-sm">{msg}</p>
      </div>
      <textarea
        readOnly
        value={gradientCode}
        className="mt-4 w-52 resize-none rounded p-2 text-xl outline-none"
        rows={3}
      />
    </div>
  );
};

export default GradientPicker;
