import create from "zustand";
import { ExtraSize, Size } from "types/type";

// Button에서 사용할 수 있는 색상 타입 정의
type ButtonColor =
  | "basic"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

// DropDown 타입 정의
type DropDownType1 =
  | "basic"
  | "rounded"
  | "borderless-rounded"
  | "less-rounded";
type DropDownType2 =
  | "basic"
  | "rounded"
  | "borderless-rounded"
  | "less-rounded";

type InputVariant = "outlined" | "filled";

// Textarea 관련 타입 정의
type TextareaColor = "red" | "skyblue" | "green" | "gray";
type TextareaResize = "none" | "both" | "horizontal" | "vertical";

// ImageUpload 관련 타입 정의
type ImageUploadShape = "rectangle" | "circle";
type ImageUploadVariant = "solid" | "border";
type ImageUploadColor =
  | "basic"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "white"
  | "gray"
  | "black";

// Grouped 옵션 타입 정의
interface GroupedOption {
  groupName: string;
  items: string[];
}

// 고객센터 폼 상태 관리 인터페이스 정의
interface ServiceState {
  numberType: string; // 전화번호 유형
  phoneNumber: string; // 전화번호
  serviceItem: string;
  inputSize1: ExtraSize;
  inputVariant1: InputVariant;
  inputSize2: ExtraSize;
  inputVariant2: InputVariant;
  name: string;
  email: string;
  phone: string;
  title: string;
  details: string;
  attachment: string | null;
  inputWidth: string;
  buttonColor1: ButtonColor;
  buttonSize1: Size;
  buttonVariant1: "solid" | "border" | "flat" | "light";
  buttonColor2: ButtonColor;
  buttonSize2: Size;
  buttonVariant2: "solid" | "border" | "flat" | "light";
  toastMessage: string;
  toastColor: "success" | "danger";
  isToastVisible: boolean;
  dropDownOption1: string[];
  dropDownOption2: GroupedOption[];
  dropDownType1: DropDownType1; // DropDown 타입
  dropDownType2: DropDownType2; // DropDown 타입
  detailSize: ExtraSize; // Textarea 크기
  detailColor: TextareaColor; // Textarea 색상
  detailResize: TextareaResize; // Textarea 크기 조절 여부
  imageUploadSize: Size; // ImageUpload 크기
  imageUploadColor: ImageUploadColor; // ImageUpload 색상
  imageUploadShape: ImageUploadShape; // ImageUpload 모양
  imageUploadVariant: ImageUploadVariant; // ImageUpload 스타일
  onImageSelect: (data: string | null) => void;
  setServiceState: (
    key: keyof Omit<ServiceState, "setServiceState">,
    value: any,
  ) => void;
}

// Zustand를 사용하여 고객센터 폼 상태 관리
export const useServiceStore = create<ServiceState>((set) => ({
  numberType: "02", // 기본값 설정
  phoneNumber: "", // 기본값 설정
  serviceItem: "",
  inputSize1: "medium",
  inputVariant1: "outlined",
  inputSize2: "medium",
  inputVariant2: "outlined",
  name: "",
  email: "",
  phone: "",
  title: "",
  details: "",
  attachment: null,
  inputWidth: "100%",
  buttonColor1: "primary",
  buttonSize1: "medium",
  buttonVariant1: "solid",
  buttonColor2: "primary",
  buttonSize2: "medium",
  buttonVariant2: "solid",
  toastMessage: "",
  toastColor: "success",
  isToastVisible: false,
  dropDownOption1: ["02", "010", "011", "014", "019"],
  dropDownOption2: [
    {
      groupName: "기술 지원",
      items: ["소프트웨어 문제", "하드웨어 문제", "네트워크 연결"],
    },
    {
      groupName: "고객 서비스",
      items: ["계정 관리", "청구 및 결제", "주문 상태"],
    },
    {
      groupName: "제품 정보",
      items: ["제품 세부 정보", "보증 정보"],
    },
    {
      groupName: "피드백 및 제안",
      items: ["서비스 피드백", "제품 개선 제안"],
    },
    {
      groupName: "배송 및 배송 문제",
      items: ["배송 상태", "반품 및 교환"],
    },
  ],
  dropDownType1: "borderless-rounded", // 기본 DropDown 타입 설정
  dropDownType2: "borderless-rounded", // 기본 DropDown 타입 설정
  detailSize: "xl", // 기본 Textarea 크기
  detailColor: "skyblue", // 기본 Textarea 색상
  detailResize: "vertical", // 기본 Textarea 크기 조절 여부
  imageUploadSize: "medium", // 기본 ImageUpload 크기
  imageUploadColor: "primary", // 기본 ImageUpload 색상
  imageUploadShape: "circle", // 기본 ImageUpload 모양
  imageUploadVariant: "solid", // 기본 ImageUpload 스타일
  onImageSelect: (data: string | null) => {
    set((state) => ({
      ...state,
      attachment: data,
    }));
  },
  setServiceState: (key, value) => {
    console.log(`Updating ${key} to ${value}`); // 상태 변경 로그 출력
    set((state) => {
      if (state[key] !== value) {
        return {
          ...state,
          [key]: value,
        };
      }
      return state;
    });
  },
}));
