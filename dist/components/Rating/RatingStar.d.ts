interface RatingStarProps {
    stars?: number;
    onRatingChange?: (rating: number) => void;
}
declare const RatingStar: ({ stars, onRatingChange }: RatingStarProps) => import("react").JSX.Element;
export default RatingStar;
