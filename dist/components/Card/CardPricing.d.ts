interface PricingCard {
    title: string;
    description: string;
    price: string;
    features: string[];
    buy: string;
}
declare const CardPricing: ({ title, description, price, features, buy, }: PricingCard) => import("react").JSX.Element;
export default CardPricing;
