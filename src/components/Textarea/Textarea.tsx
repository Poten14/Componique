import { ExtraSize } from "types/type";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: ExtraSize;
  color?: "red" | "blue" | "green" | "gray";
}

const sizeClasses = {
  xs: "w-1/4 text-xs",
  small: "w-1/3 text-sm",
  medium: "w-1/2 text-base",
  large: "w-3/4 text-lg",
  xl: "w-full text-xl",
};

const colorClasses = {
  red: "border-[#FF7676] focus:ring-[#FF7676]",
  blue: "border-[#7AA7FF] focus:ring-[#7AA7FF]",
  green: "border-[#7EEFAF] focus:ring-[#7EEFAF]",
  gray: "border-[#DCDCDD] focus:ring-[#DCDCDD]",
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  color = "blue",
  size = "xl",
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="text-gray-900 mb-2 block text-sm">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className={`text-gray-900 ${sizeClasses[size]} block rounded-lg border p-2 focus:outline-none ${colorClasses[color]}`}
      ></textarea>
    </>
  );
};
export default Textarea;
