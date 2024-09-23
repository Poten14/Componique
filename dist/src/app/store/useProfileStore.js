import create from "zustand";
export const useProfileStore = create((set) => ({
    shape: "circle",
    size: "medium",
    color: "gray",
    variant: "border",
    text: "",
    iconSize: "large",
    iconColor: "currentColor",
    iconPosition: "top",
    nickname: "Compo",
    placeholder: "Enter your introduction.",
    job: "Developer",
    email: "componique@componique.com",
    location: "Seoul, South Korea",
    setProfileState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
