"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24",
};
const borderWidths = {
    small: "32px",
    medium: "50px",
    large: "60px",
};
const colorClasses = {
    Basic: "border-Basic",
    Primary: "border-Primary",
    gray: "border-gray",
    Secondary: "border-Secondary",
    Success: "border-Success",
    Warning: "border-Warning",
    Danger: "border-Danger",
    White: "border-white",
};
const speedClasses = {
    slow: "animate-spin-slow",
    medium: "animate-spin",
    fast: "animate-spin-fast",
};
const PacManSpinner = ({ size = "small", color = "Basic", speed = "medium", }) => {
    return (<div className={`relative ${sizeClasses[size]} ${speedClasses[speed]} ${colorClasses[color]} rounded-full border-solid border-t-transparent`} style={{
            borderWidth: borderWidths[size],
        }}></div>);
};
exports.default = PacManSpinner;
