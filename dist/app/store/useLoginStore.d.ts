type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";
interface LoginState {
    title: string;
    buttonColor: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    buttonSize: "small" | "medium" | "large";
    buttonVariant: "solid" | "border" | "flat" | "light";
    buttonColor2: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    buttonSize2: "small" | "medium" | "large";
    buttonVariant2: "solid" | "border" | "flat" | "light";
    placeholder: string;
    placeholder2: string;
    inputSize: ExtraSize;
    inputWidth: string;
    checkboxSize?: "small" | "medium" | "large";
    description?: string;
    checkboxColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    checkboxVariant?: "solid" | "border";
    setLoginState: (key: keyof Omit<LoginState, "setLoginState">, value: string) => void;
}
export declare const useLoginStore: import("zustand").UseBoundStore<import("zustand").StoreApi<LoginState>>;
export {};
