"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RatingStar = ({ stars = 5, onRatingChange }) => {
    const [rating, setRating] = (0, react_1.useState)(0);
    const handleRating = (star) => {
        setRating(star);
        if (onRatingChange) {
            onRatingChange(star);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: Array.from({ length: stars }, (_, i) => ((0, jsx_runtime_1.jsx)("button", { children: "\u2B50" }, i))) }));
};
exports.default = RatingStar;
