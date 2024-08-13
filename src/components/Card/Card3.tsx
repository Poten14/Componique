interface imageCard {
  title: string;
  description: string;
  image: string;
}

const Card3 = ({ title, description, image }: imageCard) => {
  return (
    <div className="m-4 flex max-w-sm rounded-xl border-2 border-[#4C89FF] bg-white shadow-lg">
      <img src={image} alt="Card Image" className="m-4 w-24" />
      <div className="px-auto py-5">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default Card3;
