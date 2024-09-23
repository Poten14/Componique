"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardPricing = ({ title, description, price, features, buy, }) => {
    return (<div className="m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white">
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <p className="text-slate-700 dark:text-white">{description}</p>
        <div className="mb-4 text-xl font-semibold dark:text-white">
          {price}
        </div>
        <ul className="mb-4 mt-2 list-disc pl-6 text-zinc-800 dark:text-[#bcbcbc]">
          {features.map((features, index) => {
            return <li key={index}>{features}</li>;
        })}
        </ul>
        <button className="my-7 w-full rounded-lg bg-Primary py-2 text-white hover:bg-Blue">
          {buy}
        </button>
      </div>
    </div>);
};
exports.default = CardPricing;
