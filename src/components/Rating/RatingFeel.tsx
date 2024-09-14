'use client';
import { useState } from 'react';

type RateFeelProps = {
  onRatingChange?: (rating: number) => void;
};

const RatingFeel = ({ onRatingChange }: RateFeelProps) => {
  const [rating, setRating] = useState(0);
  const feel = ['😡', '😕', '😐', '😊', '😍'];

  const handleRating = (rate: number) => {
    setRating(rate);
    if (onRatingChange) {
      onRatingChange(rate);
    }
  };

  return (
    <div>
      {feel.map((emoji, i) => (
        <button
          key={i}
          onClick={() => handleRating(i + 1)}
          className={`text-4xl transition-transform duration-200 ${
            i + 1 === rating
              ? 'scale-110 ring-2 ring-Primary'
              : 'opacity-50 hover:opacity-100'
          }`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default RatingFeel;
