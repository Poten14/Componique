import React from "react";
import { ExtraSize } from "types/type";
interface FormModalProps {
    open: boolean;
    size?: ExtraSize;
    onClose: () => void;
    title?: string;
    onSubmit: (data: {
        firstName: string;
        lastName: string;
    }) => void;
    firstNameLabel?: string;
    lastNameLabel?: string;
}
declare const FormModal: React.FC<FormModalProps>;
export default FormModal;
