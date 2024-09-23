interface imageCard {
    title: string;
    children?: React.ReactNode;
}
declare const CardImage: ({ title, children }: imageCard) => import("react").JSX.Element;
export default CardImage;
