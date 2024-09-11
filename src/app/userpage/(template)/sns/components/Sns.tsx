"use client";

import ImageUpload from "@components/ImageUpload/Imageupload";
import CarouselDots from "@components/Carousel/CarouselDots";
import Icon from "@components/Icon/Icon";
import { useSnsStore } from "app/store/useSnsStore";

const Sns = () => {
  const {
    size,
    nickname,
    content,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    autoplay,
    showDots,
    interval,
  } = useSnsStore();

  return (
    <>
      <div className="m-auto w-[35%] rounded-lg border border-gray shadow-md">
        <div className="flex w-full items-center p-2">
          <ImageUpload size={size} icon="icon-user" />
          <span className="ml-2 font-bold dark:text-white">{nickname}</span>
        </div>
        <CarouselDots
          images={[imageSrc1, imageSrc2, imageSrc3]}
          autoplay={autoplay}
          showDots={showDots}
          interval={interval}
        />
        <div className="my-2 flex w-full px-4">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-4 py-1 dark:text-white">
          <div>
            <span className="mr-1 font-bold">{nickname}</span>
            {content}
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 w-[35%] rounded-lg border border-gray shadow-md">
        <div className="flex w-full items-center p-2">
          <ImageUpload size="small" icon="icon-user" />
          <span className="ml-2 font-bold dark:text-white">Componique2</span>
        </div>
        <CarouselDots
          images={[
            "/images/IfSc5.svg",
            "/images/IfSc1.svg",
            "/images/IfSc3.svg",
          ]}
          autoplay={false}
          showDots={true}
          interval={3000}
        />
        <div className="my-2 flex w-full px-4">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-4 py-1 dark:text-white">
          <div>
            <span className="mr-1 font-bold">Componique2</span>
            일본 여행중
          </div>
        </div>
      </div>
    </>
  );
};
export default Sns;
