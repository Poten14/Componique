"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const sizeClasses = {
    small: "w-[200px]",
    medium: "w-[300px]",
    large: "w-[400px]",
};
const variantsClasses = {
    rounded: "rounded-lg",
    rectangular: "border-none",
};
const Skeleton = ({ size = "small", variants = "rectangular", animate = true, }) => {
    const animationClass = animate ? "animate-pulse" : "";
    return (<>
      <div className={`${sizeClasses[size]} rounded-2xl border border-gray dark:border-[#2A6490]`}>
        <div className="flex flex-col p-4">
          <div className={`${variantsClasses[variants]} h-20 w-full ${animationClass} bg-gray`}></div>
          <div className="space-y-3 pt-3">
            <div className={`h-3 w-3/5 ${animationClass} ${variantsClasses[variants]} bg-gray`}></div>
            <div className={`h-3 w-4/5 ${animationClass} ${variantsClasses[variants]} bg-gray`}></div>
            <div className={`h-3 w-2/5 ${animationClass} ${variantsClasses[variants]} bg-gray`}></div>
          </div>
        </div>
      </div>
    </>);
};
exports.default = Skeleton;
