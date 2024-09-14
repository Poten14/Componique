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
  title1: "What is the purpose of using Componique?",
  description1: "* Multiple selections allowed",
  checkboxSize: "medium",
  checkboxColor: "basic",
  checkboxVariant: "border",
  checkboxText1: "Project Development",
  checkboxText2: "Performance Improvement",
  checkboxText3: "Time Saving",
  checkboxText4: "UI/UX Enhancement",
  title2: "How satisfied were you overall with Componique?",
  description2: "* Only one option can be selected",
  radiobuttonSize: "medium",
  radiobuttonColor: "sky",
  radioLabel1: "Very Satisfied",
  radioLabel2: "Satisfied",
  radioLabel3: "Neutral",
  radioLabel4: "Dissatisfied",
  radioLabel5: "Very Dissatisfied",
  cancelButton: "Cancel",
  submitButton: "Submit",
  setSurveyState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
