interface ProfileState {
    shape: "rectangle" | "circle";
    size: "small" | "medium" | "large";
    color: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic" | "white" | "gray" | "black";
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
    setProfileState: (key: keyof Omit<ProfileState, "setProfileState">, value: string) => void;
}
export declare const useProfileStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ProfileState>>;
export {};
