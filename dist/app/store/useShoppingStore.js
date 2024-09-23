"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShoppingStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
exports.useShoppingStore = (0, zustand_1.default)((set) => ({
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
    logoSrc: "/Logo.svg",
    logoName: "My Shop",
    size: "large",
    hoverColor: "blue",
    position: "sticky",
    setShoppingState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
