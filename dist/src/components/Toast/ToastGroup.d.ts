import { ToastProps } from "./ToastType";
type ToastConfig = Omit<ToastProps, "isOpen" | "onClose"> & {
    children: React.ReactNode;
    path?: string;
    isProgress?: boolean;
};
type ToastGroupProps = {
    toasts: ToastConfig[];
    position?: "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "centerTop" | "centerBottom" | "left" | "right" | "center";
    onAllClosed?: () => void;
};
declare const ToastGroup: React.FC<ToastGroupProps>;
export default ToastGroup;
