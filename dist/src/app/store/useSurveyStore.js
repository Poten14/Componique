"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSurveyStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
exports.useSurveyStore = (0, zustand_1.default)((set) => ({
    title1: "What is the purpose of using Componique?",
    description1: "* Multiple selections allowed",
    checkboxSize: "medium",
    checkboxColor: "basic",
    checkboxVariant: "border",
    checkboxText1: "Project Development",
    checkboxText2: "Performance Improvement",
    checkboxText3: "Time Saving",
    checkboxText4: "UI/UX Enhancement",
    title2: "How satisfied were you overall with Componique?",
    description2: "* Only one option can be selected",
    radiobuttonSize: "medium",
    radiobuttonColor: "sky",
    radioLabel1: "Very Satisfied",
    radioLabel2: "Satisfied",
    radioLabel3: "Neutral",
    radioLabel4: "Dissatisfied",
    radioLabel5: "Very Dissatisfied",
    cancelButton: "Cancel",
    submitButton: "Submit",
    setSurveyState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
