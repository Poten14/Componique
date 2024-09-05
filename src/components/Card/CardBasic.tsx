// BasicCard 인터페이스 정의
interface BasicCard {
  title: string;

  children?: React.ReactNode; //React에서 렌더링할 수 있는 모든 것을 포함하는 타입
}

const CardBasic = ({ title, children }: BasicCard) => {
  return (
<<<<<<< HEAD
    <div className="m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:bg-[#2A2E39] dark:text-white">
=======

    <div className="dark:bg[#6A6868] m-4 max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg dark:text-white">
>>>>>>> ec80515199345feefdda73d49f24fa04941c559d
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold dark:text-white">{title}</div>
        <div className="text-base text-slate-700">{children}</div>
      </div>
    </div>
  );
};
export default CardBasic;
