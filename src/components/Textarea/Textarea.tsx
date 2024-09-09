import { ExtraSize } from "types/type";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: ExtraSize;
  width?: string;
  color?: "red" | "skyblue" | "green" | "gray";
  resize?: "none" | "both" | "horizontal" | "vertical";
  className?: string;
}

const sizeClasses = {
  xs: "text-xs",
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xl: "text-xl",
};

const colorClasses = {
  red: "border-[#FF7676] dark:border-[#FF7676] focus:ring-[#FF7676]",
  skyblue: "border-[#7AA7FF] focus:ring-[#7AA7FF]",
  green: "border-[#7EEFAF] dark:border-[#7EEFAF] focus:ring-[#7EEFAF]",
  gray: "border-[#DCDCDD] dark:border-[#DCDCDD] focus:ring-[#DCDCDD]",
};

const resizeClasses = {
  none: "resize-none",
  both: "resize",
  horizontal: "resize-x",
  vertical: "resize-y",
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  color = "skyblue",
  size = "large",
  resize = "vertical",
  width,
  className, // 추가된 className prop
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`text-gray-900 mb-2 block ${sizeClasses[size]}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className={`text-gray-900 ${sizeClasses[size]} ${width} block rounded-lg border p-2 focus:outline-none dark:border-[#2A6490] dark:bg-transparent ${colorClasses[color]} ${resizeClasses[resize]} ${className}`}
      ></textarea>
    </>
  );
};
export default Textarea;
