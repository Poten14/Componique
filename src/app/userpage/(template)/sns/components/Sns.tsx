"use client";

import ImageUpload from "@components/ImageUpload/Imageupload";
import CarouselDots from "@components/Carousel/CarouselDots";
import Icon from "@components/Icon/Icon";
import { useSnsStore } from "app/store/useSnsStore";
import AvatarBasic from "@components/Avatar/AvatarBasic";

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
      <div className="m-auto w-[35%] rounded-lg border border-gray bg-white pb-5 shadow-md">
        <div className="flex w-full items-center p-2">
          <ImageUpload size={size} icon="icon-user" />
          <span className="ml-2 font-bold">{nickname}</span>
        </div>
        <CarouselDots
          images={[imageSrc1, imageSrc2, imageSrc3]}
          autoplay={autoplay}
          showDots={showDots}
          interval={interval}
        />
        <div className="mb-2 mt-4 flex w-full px-2">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-3 py-1">
          <div>
            <span className="mr-1 font-bold">{nickname}</span>
            {content}
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 w-[35%] rounded-lg border border-gray bg-white pb-5 shadow-md">
        <div className="flex w-full items-center p-2">
          <AvatarBasic src="/images/boomco.jpg" size={60} />
          <span className="ml-2 font-bold">Boomco Labs</span>
        </div>
        <CarouselDots
          images={[
            "/images/boomco3.jpg",
            "/images/boomco5.jpg",
            "/images/boomco4.jpg",
          ]}
          autoplay={false}
          showDots={true}
          interval={3000}
        />
        <div className="mb-2 mt-4 flex w-full px-4">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-4 py-1">
          <div>
            <span className="mr-1 font-bold">Boomco Labs</span>
            붐코 커뮤니케이션
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 w-[35%] rounded-lg border border-gray bg-white pb-5 shadow-md">
        <div className="flex w-full items-center p-2">
          <AvatarBasic src="/images/sniper.png" size={60} />
          <span className="ml-2 font-bold">Sniperfactory</span>
        </div>
        <CarouselDots
          images={[
            "/images/sniper.png",
            "/images/sniper2.png",
            "/images/sniper3.jpg",
          ]}
          autoplay={false}
          showDots={true}
          interval={3000}
        />
        <div className="mb-2 mt-4 flex w-full px-4">
          <Icon name="icon-heart" />
          <Icon name="icon-search" />
          <Icon name="icon-share" />
        </div>
        <div className="w-full px-4 py-1">
          <div>
            <span className="mr-1 font-bold">Sniperfactory</span>
            Next.js 3기 모집
          </div>
        </div>
      </div>
    </>
  );
};
export default Sns;
