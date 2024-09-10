import create from "zustand";

// Zustand를 사용하여 상태 관리
interface SnsState {
  name: string;
  textarea: string;
  avatar: string;
  image: string[];
  setSnsState: (
    key: keyof Omit<SnsState, "setLoginState">,
    value: string,
  ) => void;
}

export const useSnsStore = create<SnsState>((set) => ({
  name: "Componique",
  textarea: "집에 가고싶다...",
  avatar: "",
  image: ["123", "123"],
  setSnsState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
