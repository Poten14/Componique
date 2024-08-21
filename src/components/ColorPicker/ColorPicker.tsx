"use client";

import ColorPickerUI from "@components/ColorPicker/ColorPickerUI";

const ColorPicker = () => {
  return (
    <>
      <ColorPickerUI
        colors={[
          // 무채색
          "#ffffff",
          "#eeeeee",
          "#dcdcdc",
          "#999999",
          "#666666",
          "#000000",

          // 빨간계열
          "#ff0000",
          "#ef4444",
          "#ff7676",
          "#ff6347",
          "#ff4500",
          "#b22222",

          // 주황계열
          "#ff7f00",
          "#ff8c00",
          "#f97316",
          "#ffb347",
          "#ff8234",
          "#ffa500",

          // 노랑계열
          "#ffff00",
          "#ffd700",
          "#edce7b",
          "#eab308",
          "#fffacd",
          "#faffba",

          // 초록계열
          "#00ff00",
          "#32cd32",
          "#7eefaf",
          "#3cb371",
          "#22c55e",
          "#006400",

          // 파랑계열
          "#0000ff",
          "#1e90ff",
          "#3b82f6",
          "#6495ed",
          "#add8e6",
          "#4169e1",

          // 남색계열
          "#000080",
          "#00008b",
          "#0000cd",

          "#3242c0",
          "#4682b4",
          "#7f89d8",

          // 보라계열
          "#800080",
          "#9b59b6",
          "#ba55d3",
          "#663399",
          "#d8bfd8",
          "#da70d6",

          // 핑크계열
          "#ff69b4",
          "#ff1493",
          "#db7093",
          "#ec4899",
          "#ffb6c1",
          "#ffbafd",
        ]}
      />
    </>
  );
};
export default ColorPicker;
