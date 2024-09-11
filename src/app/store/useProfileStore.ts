import create from "zustand";

// Zustand를 사용한 상태 관리
interface ProfileState {
  shape: "rectangle" | "circle";
  size: "small" | "medium" | "large";
  color:
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
    | "basic"
    | "white"
    | "gray"
    | "black";
  variant: "solid" | "border";
  text: string;
  iconSize: "small" | "medium" | "large";
  iconColor: string;
  iconPosition: "left" | "right" | "top" | "bottom";
  nickname: string;
  placeholder: string;
  job: string;
  location: string;
  email: string;
  setProfileState: (
    key: keyof Omit<ProfileState, "setProfileState">,
    value: string,
  ) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  shape: "circle",
  size: "medium",
  color: "gray",
  variant: "border",
  text: "",
  iconSize: "large",
  iconColor: "currentColor",
  iconPosition: "top",
  nickname: "김컴포",
  placeholder: "자기소개를 입력하세요.",
  job: "Developer",
  email: "componique@componique.com",
  location: "Seoul, South Korea",
  setProfileState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
