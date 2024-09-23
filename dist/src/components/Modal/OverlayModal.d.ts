import React, { ReactNode } from "react";
import { ExtraSize } from "types/type";
interface OverlayModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: ExtraSize;
    closeOnOverlayClick?: boolean;
    closeButtonText?: string;
    className?: string;
    showCloseIcon?: boolean;
}
declare const OverlayModal: React.FC<OverlayModalProps>;
export default OverlayModal;
