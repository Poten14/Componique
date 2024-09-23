interface FullScreenSpinnerProps {
    spinning: boolean;
    shape?: Shape;
}
export type Shape = "Basic" | "Square" | "Bars";
declare const FullScreenSpinner: React.FC<FullScreenSpinnerProps>;
export default FullScreenSpinner;
