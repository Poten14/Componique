"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const CarouselDots_1 = __importDefault(require("@components/Carousel/CarouselDots"));
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const useSnsStore_1 = require("app/store/useSnsStore");
const AvatarBasic_1 = __importDefault(require("@components/Avatar/AvatarBasic"));
const react_1 = require("react");
const SnsPage = () => {
    const { size, nickname, content, imageSrc1, imageSrc2, imageSrc3, autoplay, showDots, interval, } = (0, useSnsStore_1.useSnsStore)();
    const [heart, setIsHeart] = (0, react_1.useState)(false);
    const handleHeartClick = () => {
        setIsHeart((prevState) => !prevState);
    };
    return (<>
      <div className="h-[670px] overflow-y-scroll">
        <div className="m-auto w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white">
          <div className="flex w-full items-center p-2">
            <Imageupload_1.default size={size} icon="icon-user" color="gray"/>
            <span className="ml-2 font-bold">{nickname}</span>
          </div>
          <CarouselDots_1.default images={[imageSrc1, imageSrc2, imageSrc3]} autoplay={autoplay} showDots={showDots} interval={interval}/>
          <div className="mb-2 mt-4 flex w-full items-center px-2">
            <span onClick={handleHeartClick} className="cursor-pointer">
              <Icon_1.default name={heart ? "icon-heart" : "icon-emptyHeart"} color={heart ? "red" : undefined}/>
            </span>
            <Icon_1.default name="icon-search"/>
            <Icon_1.default name="icon-share"/>
          </div>
          <div className="w-full px-3 py-1">
            <div>
              <span className="mr-1 font-bold">{nickname}</span>
              {content}
            </div>
          </div>
        </div>
        <div className="m-auto mt-5 w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white">
          <div className="flex w-full items-center p-2">
            <AvatarBasic_1.default src="/images/boomco.jpg" size={60}/>
            <span className="ml-2 font-bold">Boomco Labs</span>
          </div>
          <CarouselDots_1.default images={[
            "/images/boomco3.jpg",
            "/images/boomco5.jpg",
            "/images/boomco4.jpg",
        ]} autoplay={false} showDots={true} interval={3000}/>
          <div className="mb-2 mt-4 flex w-full items-center px-4">
            <span onClick={handleHeartClick} className="cursor-pointer">
              <Icon_1.default name={heart ? "icon-heart" : "icon-emptyHeart"} color={heart ? "red" : undefined}/>
            </span>
            <Icon_1.default name="icon-search"/>
            <Icon_1.default name="icon-share"/>
          </div>
          <div className="w-full px-4 py-1">
            <div>
              <span className="mr-1 font-bold">Boomco Labs</span>
              붐코 커뮤니케이션
            </div>
          </div>
        </div>
        <div className="m-auto mt-5 w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white">
          <div className="flex w-full items-center p-2">
            <AvatarBasic_1.default src="/images/sniper.png" size={60}/>
            <span className="ml-2 font-bold">Sniperfactory</span>
          </div>
          <CarouselDots_1.default images={[
            "/images/sniper.png",
            "/images/sniper2.png",
            "/images/sniper3.jpg",
        ]} autoplay={false} showDots={true} interval={3000}/>
          <div className="mb-2 mt-4 flex w-full items-center px-4">
            <span onClick={handleHeartClick} className="cursor-pointer">
              <Icon_1.default name={heart ? "icon-heart" : "icon-emptyHeart"} color={heart ? "red" : undefined}/>
            </span>
            <Icon_1.default name="icon-search"/>
            <Icon_1.default name="icon-share"/>
          </div>
          <div className="w-full px-4 py-1">
            <div>
              <span className="mr-1 font-bold">Sniperfactory</span>
              Next.js 3기 모집
            </div>
          </div>
        </div>
      </div>
    </>);
};
exports.default = SnsPage;
