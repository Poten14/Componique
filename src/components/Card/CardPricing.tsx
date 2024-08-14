// PricingCrad 인터페이스 정의
interface PricingCard {
  title: string;
  description: string;
  price: string;
  features: string[];
  buy: string;
}

const CardPricing = ({
  title,
  description,
  price,
  features,
  buy,
}: PricingCard) => {
  return (
    <div className="m-4 max-w-sm rounded-xl border-2 border-[#4C89FF] bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
        <div className="mb-4 text-xl font-semibold">{price}</div>
        <ul className="mb-4 mt-2 list-disc pl-6 text-zinc-800">
          {features.map((features: string, index: number) => {
            return <li key={index}>{features}</li>;
          })}
        </ul>
        <button className="w-full rounded-lg bg-[#7AA7FF] py-2 text-white hover:bg-[#4C89FF]">
          {buy}
        </button>
      </div>
    </div>
  );
};
export default CardPricing;
