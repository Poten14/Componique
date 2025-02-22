"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RatingNumSlider = ({ min = 1, max = 10, step = 1, onRatingChange, }) => {
    const [rating, setRating] = (0, react_1.useState)(0);
    const handleChange = (e) => {
        const value = Number(e.target.value);
        setRating(value);
        if (onRatingChange) {
            onRatingChange(value);
        }
    };
    return (<div className="felx items-center">
      <input type="range" min={min} max={max} step={step} value={rating} onChange={handleChange} className="range-slider"/>
      <span className="m-4 dark:text-[#cdcdcd]">{rating}</span>
      <style>{`
        .range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: linear-gradient(
            90deg,
            #9ac5e5 ${((rating - min) / (max - min)) * 100}%,
            #e0e0e0 0%
          );
          outline: none;
          transition: background 0.3s;
        }
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background-color: #9ac5e5;
          border-radius: 50%;
          cursor: pointer;
        }
        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background-color: #9ac5e5;  {/* 여기에 '#' 누락된 부분 수정 */}
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>);
};
exports.default = RatingNumSlider;
