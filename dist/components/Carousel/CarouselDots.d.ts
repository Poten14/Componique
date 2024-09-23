interface CarouselDotsProps {
    images: string[];
    showDots?: boolean;
    autoplay?: boolean;
    interval?: number;
}
declare const CarouselDots: ({ images, showDots, autoplay, interval, }: CarouselDotsProps) => import("react").JSX.Element;
export default CarouselDots;
