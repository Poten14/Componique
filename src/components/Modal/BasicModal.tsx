import Button from "@components/Button/Button";
import { Size } from "types/type";

interface ModalProps {
  open: boolean;
  size?: Size;
  children?: any;
  onClose: () => void;
}

const sizeClasses = {
  xs: "max-w-xs",
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full w-full h-full",
};

const BasicModal: React.FC<ModalProps> = ({
  open,
  size = "medium",
  onClose,
  children,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`rounded-lg bg-white p-6 shadow-lg ${sizeClasses[size]}`}>
        {children} {/* 모달 내부에 표시할 내용 */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button
            onClick={onClose}
            variant="border"
            color="danger"
            radius="full"
          >
            Close
          </Button>
          <Button radius="full">Okay</Button>
        </div>
      </div>
    </div>
  );
};
export default BasicModal;
