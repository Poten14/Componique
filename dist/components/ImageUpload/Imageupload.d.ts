import React from "react";
import { Color16, Size } from "types/type";
import { IconName } from "../Icon/Icon";
type ImageUploadProps = {
    shape?: "rectangle" | "circle";
    size?: Size;
    color?: Color16;
    text?: string;
    variant?: "solid" | "border";
    className?: string;
    icon?: IconName;
    iconSize?: "small" | "medium" | "large";
    iconColor?: string;
    iconPosition?: "left" | "right" | "top" | "bottom";
    onImageSelect?: (data: string | null) => void;
};
declare const ImageUpload: React.FC<ImageUploadProps>;
export default ImageUpload;
