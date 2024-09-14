import create from "zustand";

interface ShoppingState {
  title: string;
  subtitle: string;
  title2: string;
  placeholder: string;
  currentPage: number;
  totalPages: number;
  paginationVariant: "circle" | "square";
  paginationStyleType:
    | "filled"
    | "outlined"
    | "outlined-focused"
    | "filled-outlined";
  paginationColor:
    | "Basic"
    | "Primary"
    | "gray"
    | "Secondary"
    | "Success"
    | "Warning"
    | "Danger"
    | "White";

  // Navbar 관련 상태
  logoSrc: string;
  logoName: string;
  hoverColor: "skyblue" | "blue" | "red";
  position: "sticky" | "relative" | "static";
  size: "small" | "medium" | "large";

  // 상태 업데이트 함수
  setShoppingState: (key: string, value: any) => void;
}

export const useShoppingStore = create<ShoppingState>((set) => ({
  title: "Explore Our Pricing Plans",
  subtitle: "Discover the perfect product tailored to your needs.",
  title2: "Customer Reviews",
  placeholder: "Search products...",
  currentPage: 1,
  totalPages: 5,
  paginationVariant: "circle",
  paginationStyleType: "outlined",
  paginationColor: "Basic",

  // Navbar 기본 값
  logoSrc: "/logo.svg",
  logoName: "My Shop",
  size: "large",
  hoverColor: "blue",
  position: "sticky",

  setShoppingState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
