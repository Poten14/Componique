"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoginStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
exports.useLoginStore = (0, zustand_1.default)((set) => ({
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
