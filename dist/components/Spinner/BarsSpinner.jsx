"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const sizeClasses = {
    xs: "h-8 w-3",
    small: "h-10 w-10",
    medium: "h-16 w-3",
    large: "h-24 w-5",
    xl: "h-32 w-3",
};
const colorClasses = {
    Basic: "bg-Basic",
    Primary: "bg-Primary",
    gray: "bg-gray",
    Secondary: "bg-Secondary",
    Success: "bg-Success",
    Warning: "bg-Warning",
    Danger: "bg-Danger",
    White: "bg-white",
};
const BarsSpinner = ({ size = "medium", color = "Basic", }) => {
    return (<div className="flex space-x-2">
      {[...Array(4)].map((_, index) => (<div key={index} className={`${sizeClasses[size]} ${colorClasses[color]} animate-bounce rounded`} style={{
                animationDelay: `${index * 0.2}s`,
            }}></div>))}
    </div>);
};
exports.default = BarsSpinner;
