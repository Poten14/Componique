import { Size } from "types/type";
import { Color16 } from "types/type";
export type ToastProps = {
  size?: Size;
  isOpen?: boolean;
  isClose?: boolean;
  position?:
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "centerTop"
    | "centerBottom"
    | "left"
    | "right"
    | "center";
  text?: "left" | "center" | "right";
  onClose?: () => void;
  children: React.ReactNode;
  color?: Color16;
  variant?: "solid" | "border";
  time?: string;
};
