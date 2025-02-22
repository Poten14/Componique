"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (<div>
      {feel.map((emoji, i) => (<button key={i} onClick={() => handleRating(i + 1)} className={`text-4xl transition-transform duration-200 ${i + 1 === rating
                ? 'scale-110 ring-2 ring-Primary'
                : 'opacity-50 hover:opacity-100'}`}>
          {emoji}
        </button>))}
    </div>);
};
exports.default = RatingFeel;
