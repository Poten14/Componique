interface ShoppingState {
    title: string;
    subtitle: string;
    title2: string;
    placeholder: string;
    currentPage: number;
    totalPages: number;
    paginationVariant: "circle" | "square";
    paginationStyleType: "filled" | "outlined" | "outlined-focused" | "filled-outlined";
    paginationColor: "Basic" | "Primary" | "gray" | "Secondary" | "Success" | "Warning" | "Danger" | "White";
    logoSrc: string;
    logoName: string;
    hoverColor: "skyblue" | "blue" | "red";
    position: "sticky" | "relative" | "static";
    size: "small" | "medium" | "large";
    setShoppingState: (key: string, value: any) => void;
}
export declare const useShoppingStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ShoppingState>>;
export {};
