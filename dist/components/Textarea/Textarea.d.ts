import { ExtraSize } from "types/type";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    size?: ExtraSize;
    color?: "red" | "skyblue" | "green" | "gray";
    resize?: "none" | "both" | "horizontal" | "vertical";
    clssName?: string;
}
declare const Textarea: React.FC<TextareaProps>;
export default Textarea;
