import { ExtraSize } from "types/type";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: ExtraSize;
}

const sizeClasses = {
  xs: "w-1/4 text-xs",
  small: "w-1/3 text-sm",
  medium: "w-1/2 text-base",
  large: "w-3/4 text-lg",
  xl: "w-full text-xl",
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
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
        className={`text-gray-900 ${sizeClasses[size]} block rounded-lg border border-gray p-2 focus:border-Primary focus:ring-Primary`}
      ></textarea>
    </>
  );
};
export default Textarea;
