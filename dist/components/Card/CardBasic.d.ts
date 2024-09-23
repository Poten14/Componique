interface BasicCard {
    title: string;
    children?: React.ReactNode;
}
declare const CardBasic: ({ title, children }: BasicCard) => import("react").JSX.Element;
export default CardBasic;
