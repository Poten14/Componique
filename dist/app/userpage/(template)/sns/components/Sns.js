"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "h-[670px] overflow-y-scroll", children: [(0, jsx_runtime_1.jsxs)("div", { className: "m-auto w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center p-2", children: [(0, jsx_runtime_1.jsx)(Imageupload_1.default, { size: size, icon: "icon-user", color: "gray" }), (0, jsx_runtime_1.jsx)("span", { className: "ml-2 font-bold", children: nickname })] }), (0, jsx_runtime_1.jsx)(CarouselDots_1.default, { images: [imageSrc1, imageSrc2, imageSrc3], autoplay: autoplay, showDots: showDots, interval: interval }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2 mt-4 flex w-full items-center px-2", children: [(0, jsx_runtime_1.jsx)("span", { onClick: handleHeartClick, className: "cursor-pointer", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: heart ? "icon-heart" : "icon-emptyHeart", color: heart ? "red" : undefined }) }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search" }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-share" })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full px-3 py-1", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: "mr-1 font-bold", children: nickname }), content] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "m-auto mt-5 w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center p-2", children: [(0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { src: "/images/boomco.jpg", size: 60 }), (0, jsx_runtime_1.jsx)("span", { className: "ml-2 font-bold", children: "Boomco Labs" })] }), (0, jsx_runtime_1.jsx)(CarouselDots_1.default, { images: [
                                "/images/boomco3.jpg",
                                "/images/boomco5.jpg",
                                "/images/boomco4.jpg",
                            ], autoplay: false, showDots: true, interval: 3000 }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2 mt-4 flex w-full items-center px-4", children: [(0, jsx_runtime_1.jsx)("span", { onClick: handleHeartClick, className: "cursor-pointer", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: heart ? "icon-heart" : "icon-emptyHeart", color: heart ? "red" : undefined }) }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search" }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-share" })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full px-4 py-1", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: "mr-1 font-bold", children: "Boomco Labs" }), "\uBD90\uCF54 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158"] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "m-auto mt-5 w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center p-2", children: [(0, jsx_runtime_1.jsx)(AvatarBasic_1.default, { src: "/images/sniper.png", size: 60 }), (0, jsx_runtime_1.jsx)("span", { className: "ml-2 font-bold", children: "Sniperfactory" })] }), (0, jsx_runtime_1.jsx)(CarouselDots_1.default, { images: [
                                "/images/sniper.png",
                                "/images/sniper2.png",
                                "/images/sniper3.jpg",
                            ], autoplay: false, showDots: true, interval: 3000 }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2 mt-4 flex w-full items-center px-4", children: [(0, jsx_runtime_1.jsx)("span", { onClick: handleHeartClick, className: "cursor-pointer", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { name: heart ? "icon-heart" : "icon-emptyHeart", color: heart ? "red" : undefined }) }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-search" }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "icon-share" })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full px-4 py-1", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: "mr-1 font-bold", children: "Sniperfactory" }), "Next.js 3\uAE30 \uBAA8\uC9D1"] }) })] })] }) }));
};
exports.default = SnsPage;
