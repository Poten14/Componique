'use client'
import { useState } from "react"

type RatingNumSlederProps = {
  min?: number;
  max?: number;
  step? : number;
  onRatingChange?: (rating:number) => void;
}

const RatingNumSlider = ({min=1, max=10, step=1, onRatingChange}:RatingNumSlederProps) => {
  const [rating, setRating] = useState(0);

  const handleChange = (e: any) => {
    const value = Number(e.target.value);
    setRating(value);
    if(onRatingChange){
      onRatingChange(value)
    }
  }

  return (
    <div className="felx items-center">
      <input type="range" 
      min={min}
      max={max}
      step={step}
      value={rating}
      onChange={handleChange}

      />
      <span className="m-4 dark:text-[#cdcdcd]">{rating}</span>
    </div>
  )
}
export default RatingNumSlider