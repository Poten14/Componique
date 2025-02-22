import AvatarBasic from "../Avatar/AvatarBasic";

interface imageCard {
  title: string;
  children?: React.ReactNode;
}

const CardImage = ({ title, children }: imageCard) => {
  return (
    <div className="m-4 flex max-w-sm rounded-xl border-2 border-Blue shadow-lg dark:bg-[#2A2E39] dark:text-white">
      <AvatarBasic src="/componique_logo.svg" alt="ComponiqueLogo" size={100} />
      <div className="px-auto ml-4 mr-2 py-5">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  );
};
export default CardImage;
