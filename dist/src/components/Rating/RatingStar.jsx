"use client";
import { useState } from "react";
const RatingStar = ({ stars = 5, onRatingChange }) => {
    const [rating, setRating] = useState(0);
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
export default RatingStar;
