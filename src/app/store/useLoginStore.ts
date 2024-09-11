import { Size } from "types/type";
import create from "zustand";

type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";

// Zustand를 사용하여 상태 관리
interface LoginState {
  title: string;
  buttonColor:
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
  buttonSize: "small" | "medium" | "large";
  buttonVariant: "solid" | "border" | "flat" | "light";
  buttonColor2:
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
  buttonSize2: "small" | "medium" | "large";
  buttonVariant2: "solid" | "border" | "flat" | "light";
  placeholder: string;
  placeholder2: string;
  inputSize: ExtraSize;
  inputWidth: string;
  checkboxSize?: "small" | "medium" | "large";
  description?: string;
  checkboxColor?:
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
  checkboxVariant?: "solid" | "border";
  setLoginState: (
    key: keyof Omit<LoginState, "setLoginState">,
    value: string,
  ) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  title: "Componique",
  buttonColor: "primary",
  buttonSize: "medium",
  buttonVariant: "solid",
  buttonColor2: "secondary",
  buttonSize2: "medium",
  buttonVariant2: "border",
  placeholder: "아이디를 입력하세요",
  placeholder2: "비밀번호를 입력하세요",
  inputSize: "medium",
  inputWidth: "100%",
  checkboxSize: "medium",
  checkboxColor: "basic",
  description: "로그인 상태 유지",
  setLoginState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
