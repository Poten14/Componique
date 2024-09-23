type SizeType = "small" | "medium" | "large";
interface SwitchLongProps {
    size?: SizeType;
    onColor?: string;
    offColor?: string;
}
declare const SwitchLong: ({ size, onColor, offColor, }: SwitchLongProps) => import("react").JSX.Element;
export default SwitchLong;
