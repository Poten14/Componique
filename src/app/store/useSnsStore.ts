import { create } from "zustand";

// Zustand를 사용하여 상태 관리
interface SnsState {
  nickname: string;
  content: string;
  size: "small" | "medium" | "large";
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  showDots: boolean;
  autoplay: boolean;
  interval: number;
  setSnsState: (
    key: keyof Omit<SnsState, "setSnsState">,
    value: string | boolean | number,
  ) => void;
}

export const useSnsStore = create<SnsState>((set) => ({
  nickname: "Componique",
  content: "바닷가에서...",
  size: "small",
  imageSrc1: "/images/IfSc1.svg",
  imageSrc2: "/images/IfSc5.svg",
  imageSrc3: "/images/IfSc3.svg",
  showDots: true,
  autoplay: true,
  interval: 3000,
  setSnsState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
