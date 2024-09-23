type RatingNumSlederProps = {
    min?: number;
    max?: number;
    step?: number;
    onRatingChange?: (rating: number) => void;
    className?: string;
};
declare const RatingNumSlider: ({ min, max, step, onRatingChange, }: RatingNumSlederProps) => import("react").JSX.Element;
export default RatingNumSlider;
