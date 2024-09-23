const CardBasic = ({ title, children }) => {
    return (<div className="m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white">
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className="text-base text-slate-700">{children}</div>
      </div>
    </div>);
};
export default CardBasic;
