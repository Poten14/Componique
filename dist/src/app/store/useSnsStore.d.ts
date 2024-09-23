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
    setSnsState: (key: keyof Omit<SnsState, "setSnsState">, value: string | boolean | number) => void;
}
export declare const useSnsStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SnsState>>;
export {};
