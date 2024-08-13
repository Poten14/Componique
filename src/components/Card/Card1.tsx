// BasicCard 인터페이스 정의
interface BasicCard {
  title: string;
  description: string;
}

const Card1 = ({ title, description }: BasicCard) => {
  return (
    <div className="m-4 max-w-sm rounded-xl border-2 border-[#4C89FF] bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default Card1;
