import React from "react";
interface PinInputProps {
    length?: number;
    disabled?: boolean;
    formatter?: (value: string) => string;
    variant?: "filled" | "outline";
    customCharacter?: string;
    onChange?: (value: string) => void;
}
declare const PinInput: React.FC<PinInputProps>;
export default PinInput;
