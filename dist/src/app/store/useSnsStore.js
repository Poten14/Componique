import { create } from "zustand";
export const useSnsStore = create((set) => ({
    nickname: "Componique",
    content: "바닷가에서...",
    size: "small",
    imageSrc1: "/images/IfSc1.svg",
    imageSrc2: "/images/IfSc5.svg",
    imageSrc3: "/images/IfSc3.svg",
    showDots: true,
    autoplay: true,
    interval: 3000,
    setSnsState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
