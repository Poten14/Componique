import BarsSpinner from "./BarsSpinner";
import BasicSpinner from "./BasicSpinner";
import SquareSpinner from "./SquareSpinner";

interface FullScreenSpinnerProps {
  spinning: boolean;
  shape?: Shape;
}
export type Shape = "Basic" | "Square" | "Bars";

const shapeClasses = {
  Basic: BasicSpinner,
  Square: SquareSpinner,
  Bars: BarsSpinner,
};
const FullScreenSpinner: React.FC<FullScreenSpinnerProps> = ({
  spinning,
  shape = "Basic",
}) => {
  if (!spinning) return null;

  const SpinnerComponent = shapeClasses[shape];
  // 선택된 모양에 따라 컴포넌트를 동적으로 선택

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ margin: 0, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <SpinnerComponent size="medium" color="White" speed="medium" />
    </div>
  );
};

export default FullScreenSpinner;
