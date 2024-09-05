import AvatarBasic from "@components/Avatar/AvatarBasic";

interface imageCard {
  title: string;
  children?: React.ReactNode;
}

const CardImage = ({ title, children }: imageCard) => {
  return (
<<<<<<< HEAD
    <div className="m-4 flex max-w-sm rounded-xl border-2 border-Blue shadow-lg dark:bg-[#2A2E39] dark:text-white">
=======

    <div className="dark:bg[#6A6868] m-4 flex max-w-sm rounded-xl border-2 border-Blue shadow-lg dark:text-white">
>>>>>>> ec80515199345feefdda73d49f24fa04941c559d
      <AvatarBasic src="/componique_logo.svg" alt="ComponiqueLogo" size={100} />
      <div className="px-auto ml-4 mr-2 py-5">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  );
};
export default CardImage;
