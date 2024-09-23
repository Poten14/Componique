import { Size } from "types/type";
interface SkeletonProps {
    size?: Size;
    variants?: "rounded" | "rectangular";
    animate?: boolean;
}
declare const Skeleton: ({ size, variants, animate, }: SkeletonProps) => import("react").JSX.Element;
export default Skeleton;
