"use client";

import AvatarBasic from "@components/Avatar/AvatarBasic";
import CarouselDots from "@components/Carousel/CarouselDots";
import Icon from "@components/Icon/Icon";

const SnsForm: React.FC = () => {
  return (
    <>
      <div className="w-full rounded-lg border border-gray shadow-md">
        <div className="flex w-full items-center p-2">
          <AvatarBasic src="/images/avatar1.svg" alt="User Avatar" size={42} />
          <span className="ml-2 font-bold dark:text-white">Componique</span>
        </div>
        <CarouselDots
          images={[
            "/images/image1.svg",
            "/images/image2.svg",
            "/images/image3.svg",
          ]}
        />
        <div className="my-2 flex w-full px-4">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-4 py-1 dark:text-white">
          <div>
            <span className="mr-1 font-bold">Componique</span>
            집에 가고싶다...
          </div>
        </div>
      </div>
    </>
  );
};
export default SnsForm;
