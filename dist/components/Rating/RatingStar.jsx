"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RatingStar = ({ stars = 5, onRatingChange }) => {
    const [rating, setRating] = (0, react_1.useState)(0);
    const handleRating = (star) => {
        setRating(star);
        if (onRatingChange) {
            onRatingChange(star);
        }
    };
    return (<div>
      {Array.from({ length: stars }, (_, i) => (<button key={i}>⭐</button>))}
    </div>);
};
exports.default = RatingStar;
