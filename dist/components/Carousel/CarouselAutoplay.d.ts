interface CarouselAutoplayProps {
    images: string[];
    autoplay?: boolean;
    interval?: number;
}
declare const CarouselAutoplay: ({ images, autoplay, interval, }: CarouselAutoplayProps) => import("react").JSX.Element;
export default CarouselAutoplay;
