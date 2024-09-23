import React from "react";
import AvatarBasic from "@components/Avatar/AvatarBasic";
// 별점 매기기
const ratingStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < rate ? "currentColor" : "none"} stroke="currentColor" className={`h-5 w-5 ${i < rate ? "text-yellow-500" : "text-white"}`}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.209a1 1 0 00.95.69h4.428c.969 0 1.372 1.24.588 1.81l-3.586 2.624a1 1 0 00-.364 1.118l1.357 4.209c.3.921-.755 1.688-1.54 1.118l-3.586-2.623a1 1 0 00-1.176 0l-3.586 2.623c-.784.57-1.838-.197-1.539-1.118l1.357-4.209a1 1 0 00-.364-1.118L2.72 9.636c-.784-.57-.38-1.81.588-1.81h4.428a1 1 0 00.95-.69l1.357-4.209z"/>
      </svg>);
    }
    return stars;
};
const CardReview = ({ avatar, name, rate, children }) => {
    return (<div className="m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white">
      <div className="flex items-center px-6 py-4">
        <AvatarBasic src="/avatar1.svg" alt="퉁퉁이" size={70}/>
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-white">{name}</div>
          <div className="flex">{ratingStars(rate)}</div>
        </div>
      </div>
      <div className="px-6 pb-4 text-slate-700 dark:text-gray">{children}</div>
    </div>);
};
export default CardReview;
