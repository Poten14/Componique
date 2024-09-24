"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RatingFeel = ({ onRatingChange }) => {
    const [rating, setRating] = (0, react_1.useState)(0);
    const feel = ['😡', '😕', '😐', '😊', '😍'];
    const handleRating = (rate) => {
        setRating(rate);
        if (onRatingChange) {
            onRatingChange(rate);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: feel.map((emoji, i) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleRating(i + 1), className: `text-4xl transition-transform duration-200 ${i + 1 === rating
                ? 'scale-110 ring-2 ring-Primary'
                : 'opacity-50 hover:opacity-100'}`, children: emoji }, i))) }));
};
exports.default = RatingFeel;
