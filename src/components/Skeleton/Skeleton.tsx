"use client";

interface SkeletonProps {}

const Skeleton = () => {
  return (
    <>
      <div className="w-[200px] rounded-2xl border border-gray">
        <div className="flex flex-col p-4">
          <div className="h-20 w-full animate-pulse rounded-lg bg-gray"></div>
          <div className="space-y-3 pt-3">
            <div className="h-3 w-3/5 animate-pulse rounded-lg bg-gray"></div>
            <div className="h-3 w-4/5 animate-pulse rounded-lg bg-gray"></div>
            <div className="h-3 w-2/5 animate-pulse rounded-lg bg-gray"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skeleton;
