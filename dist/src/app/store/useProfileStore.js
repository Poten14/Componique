"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProfileStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
exports.useProfileStore = (0, zustand_1.default)((set) => ({
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
