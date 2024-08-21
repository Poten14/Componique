"use Client";

import ColorPickerUI from "@components/ColorPicker/ColorPickerUI";
import GradientPicker from "@components/ColorPicker/GradientPicker";
import TwoPicker from "@components/ColorPicker/TwoPicker";

const dw2 = () => {
  return (
    <div className="mt-10 space-y-5">
      <TwoPicker />
      <ColorPickerUI />
      <GradientPicker />
    </div>
  );
};
export default dw2;
