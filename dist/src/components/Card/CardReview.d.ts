import React from "react";
interface ReviewCardProps {
    avatar: string;
    name: string;
    rate: number;
    children?: React.ReactNode;
}
declare const CardReview: ({ avatar, name, rate, children }: ReviewCardProps) => React.JSX.Element;
export default CardReview;
