"use Client";

import ColorPicker from "@components/ColorPicker/ColorPicker";
import GradientPicker from "@components/ColorPicker/GradientPicker";
import TwoPicker from "@components/ColorPicker/TwoPicker";

const dw2 = () => {
  return (
    <div className="mt-10 space-y-5">
      <TwoPicker />
      <ColorPicker />
      <GradientPicker />
    </div>
  );
};
export default dw2;
