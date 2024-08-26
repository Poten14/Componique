"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {

  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <>
      <div className="relative w-full">
        <div className="relative m-auto h-96 w-1/2 overflow-hidden rounded-lg">
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
                  className="block w-full"
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
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
            className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
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
export default Carousel;
