"use client";
import { useState } from "react";

interface RatingStarProps {
  stars?: number;
  onRatingChange?: (rating: number) => void;
}

const RatingStar = ({ stars = 5, onRatingChange }: RatingStarProps) => {
  const [rating, setRating] = useState(0);

  const handleRating = (star: number) => {
    setRating(star);
    if (onRatingChange) {
      onRatingChange(star);
    }
  };
  return (
    <div>
      {Array.from({ length: stars }, (_, i) => (
        <button key={i}>⭐</button>
      ))}
    </div>
  );
};
export default RatingStar;
