import create from "zustand";

// Zustand를 사용한 상태 관리
interface SurveyState {
  title1: string;
  description1: string;
  checkboxSize: "small" | "medium" | "large";
  checkboxColor:
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
    | "basic";
  checkboxVariant: "solid" | "border";
  checkboxText1: string;
  checkboxText2: string;
  checkboxText3: string;
  checkboxText4: string;
  title2: string;
  description2: string;
  radiobuttonSize: "small" | "medium" | "large";
  radiobuttonColor:
    | "sky"
    | "gray"
    | "blue"
    | "purple"
    | "green"
    | "yellow"
    | "red";
  radioLabel1: string;
  radioLabel2: string;
  radioLabel3: string;
  radioLabel4: string;
  radioLabel5: string;
  cancelButton: string;
  submitButton: string;
  setSurveyState: (
    key: keyof Omit<SurveyState, "setSurveyState">,
    value: string,
  ) => void;
}

export const useSurveyStore = create<SurveyState>((set) => ({
  title1: "Componique를 어떤 목적으로 사용하시나요?",
  description1: "* 중복 선택 가능",
  checkboxSize: "medium",
  checkboxColor: "basic",
  checkboxVariant: "border",
  checkboxText1: "프로젝트 개발",
  checkboxText2: "성능 향상",
  checkboxText3: "시간 절약",
  checkboxText4: "UI/UX 개선",
  title2: "Componique를 사용했을 때의 전체적인 만족도는 어땠나요?",
  description2: "* 하나만 선택 가능",
  radiobuttonSize: "medium",
  radiobuttonColor: "sky",
  radioLabel1: "매우 만족",
  radioLabel2: "만족",
  radioLabel3: "보통",
  radioLabel4: "불만족",
  radioLabel5: "매우 불만족",
  cancelButton: "취소",
  submitButton: "제출",
  setSurveyState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
