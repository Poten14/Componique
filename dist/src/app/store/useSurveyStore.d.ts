interface SurveyState {
    title1: string;
    description1: string;
    checkboxSize: "small" | "medium" | "large";
    checkboxColor: "primary" | "secondary" | "success" | "warning" | "danger" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "basic";
    checkboxVariant: "solid" | "border";
    checkboxText1: string;
    checkboxText2: string;
    checkboxText3: string;
    checkboxText4: string;
    title2: string;
    description2: string;
    radiobuttonSize: "small" | "medium" | "large";
    radiobuttonColor: "sky" | "gray" | "blue" | "purple" | "green" | "yellow" | "red";
    radioLabel1: string;
    radioLabel2: string;
    radioLabel3: string;
    radioLabel4: string;
    radioLabel5: string;
    cancelButton: string;
    submitButton: string;
    setSurveyState: (key: keyof Omit<SurveyState, "setSurveyState">, value: string) => void;
}
export declare const useSurveyStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SurveyState>>;
export {};
