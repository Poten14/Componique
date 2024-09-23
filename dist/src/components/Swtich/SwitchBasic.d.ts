type SizeType = "small" | "medium" | "large";
interface SwitchBasicProps {
    size?: SizeType;
    onColor?: string;
    offColor?: string;
}
declare const SwitchBasic: ({ size, onColor, offColor, }: SwitchBasicProps) => import("react").JSX.Element;
export default SwitchBasic;
