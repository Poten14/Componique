"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const CarouselAutoplay = ({ images, autoplay = false, interval = 2000, }) => {
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (autoplay) {
            const timer = setInterval(() => {
                setCurrentSlide((prevSlide) => prevSlide === images.length - 1 ? 0 : prevSlide + 1);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoplay, images.length, interval]);
    const handlePrev = () => {
        setCurrentSlide((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };
    const handleNext = () => {
        setCurrentSlide((nextIndex) => nextIndex === images.length - 1 ? 0 : nextIndex + 1);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "relative w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative m-auto h-96 w-9/12 overflow-hidden rounded-lg", children: [(0, jsx_runtime_1.jsx)("ul", { className: "flex transition-transform duration-300 ease-in-out", style: { transform: `translateX(-${currentSlide * 100}%)` }, children: images.map((image, index) => ((0, jsx_runtime_1.jsx)("li", { className: "min-w-full", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: image, alt: `image-${index}`, width: 720, height: 500, unoptimized: true, className: "block w-full" }) }, index))) }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", onClick: handlePrev, children: (0, jsx_runtime_1.jsx)("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", id: "back-arrow", className: "text-white", children: (0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" }) }) }) }) }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", onClick: handleNext, children: (0, jsx_runtime_1.jsx)("span", { className: "dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", id: "forward-arrow", className: "text-white", children: (0, jsx_runtime_1.jsx)("g", { transform: "rotate(180, 12, 12)", children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" }) }) }) }) })] }) }) }));
};
exports.default = CarouselAutoplay;
