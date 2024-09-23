import React from "react";
import { ExtraSize } from "types/type";
export interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
}
interface ModalProps {
    open: boolean;
    size?: ExtraSize | "full";
    onClose: () => void;
    children?: any;
    primaryButton?: ButtonProps;
    secondaryButton?: ButtonProps;
    showCloseIcon?: boolean;
    className?: string;
}
export declare const BasicModal: React.FC<ModalProps>;
export default BasicModal;
