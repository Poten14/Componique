interface interactiveCard {
    title: string;
    children?: React.ReactNode;
}
declare const CardInteractive: ({ title, children }: interactiveCard) => import("react").JSX.Element;
export default CardInteractive;
