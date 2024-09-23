import React from "react";
const sizeClasses = {
    xs: "w-5 h-5 border-2",
    small: "w-10 h-10 border-4",
    medium: "w-16 h-16 border-4",
    large: "w-24 h-24 border-8",
    xl: "w-32 h-32 border-8",
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
const Spinner = ({ size = "medium", color = "Primary", speed = "medium", }) => {
    return (<div className={`inline-block ${sizeClasses[size]} ${speedClasses[speed]} rounded-full border-solid border-t-transparent ${colorClasses[color]}`}></div>);
};
export default Spinner;
