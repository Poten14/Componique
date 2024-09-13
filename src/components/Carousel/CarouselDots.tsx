"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselDotsProps {
  images: string[];
  showDots?: boolean;
  autoplay?: boolean;
  interval?: number;
}

const CarouselDots = ({
  images,
  showDots = true,
  autoplay = false,
  interval = 2000,
}: CarouselDotsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1,
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoplay, images.length, interval]);

  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1,
    );
  };

  const handleDotClick = (dots: number) => {
    setCurrentSlide(dots);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative m-auto h-96 overflow-hidden rounded-lg">
          <ul
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <li key={index} className="min-w-full">
                <Image
                  src={image}
                  alt={`image-${index}`}
                  width={720}
                  height={500}
                  unoptimized
                  className="block w-full"
                />
              </li>
            ))}
          </ul>
          {showDots && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {images.map((_, dots) => (
                <button
                  key={dots}
                  className={`h-3 w-3 rounded-full ${dots === currentSlide ? "bg-white" : "bg-gray"}`}
                  onClick={() => handleDotClick(dots)}
                />
              ))}
            </div>
          )}
          <button
            type="button"
            className="group absolute start-0 top-0 z-20 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="back-arrow"
                className="text-white"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="group absolute end-0 top-0 z-20 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            onClick={handleNext}
          >
            <span className="dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="forward-arrow"
                className="text-white"
              >
                <g transform="rotate(180, 12, 12)">
                  <path
                    fill="currentColor"
                    d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselDots;
