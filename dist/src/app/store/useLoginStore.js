import create from "zustand";
export const useLoginStore = create((set) => ({
    title: "Componique",
    buttonColor: "primary",
    buttonSize: "medium",
    buttonVariant: "solid",
    buttonColor2: "secondary",
    buttonSize2: "medium",
    buttonVariant2: "border",
    placeholder: "Enter your username",
    placeholder2: "Enter your password",
    inputSize: "medium",
    inputWidth: "100%",
    checkboxSize: "medium",
    checkboxColor: "basic",
    checkboxVariant: "border",
    description: "Keep logged in",
    setLoginState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
