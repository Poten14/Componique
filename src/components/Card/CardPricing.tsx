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
<<<<<<< HEAD
    <div className="m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white">
=======

    <div className="dark:bg[#6A6868] m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:text-white">
>>>>>>> ec80515199345feefdda73d49f24fa04941c559d
      <div className="px-6 py-4">

        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <p className="text-slate-700 dark:text-white">{description}</p>
        <div className="mb-4 text-xl font-semibold dark:text-white">
          {price}
        </div>
        <ul className="mb-4 mt-2 list-disc pl-6 text-zinc-800 dark:text-[#bcbcbc]">
          {features.map((features: string, index: number) => {
            return <li key={index}>{features}</li>;
          })}
        </ul>
        <button className="my-7 w-full rounded-lg bg-Primary py-2 text-white hover:bg-Blue">
          {buy}
        </button>
      </div>
    </div>
  );
};
export default CardPricing;
