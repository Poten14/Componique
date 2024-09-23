type SizeType = "small" | "medium" | "large";
interface SwitchHorizentalProps {
    size?: SizeType;
    onColor?: string;
    offColor?: string;
}
declare const SwitchHorizental: ({ size, onColor, offColor, }: SwitchHorizentalProps) => import("react").JSX.Element;
export default SwitchHorizental;
