"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSnsStore = void 0;
const zustand_1 = require("zustand");
exports.useSnsStore = (0, zustand_1.create)((set) => ({
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
