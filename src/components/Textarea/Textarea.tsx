interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="text-gray-900 mb-2 block text-sm">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className="text-gray-900 block w-full rounded-lg border border-gray p-2 text-sm focus:border-Primary focus:ring-Primary"
      ></textarea>
    </>
  );
};
export default Textarea;
