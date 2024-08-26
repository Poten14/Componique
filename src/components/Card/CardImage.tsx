interface imageCard {
  title: string;
  children?: React.ReactNode;
  image: string;
}

const CardImage = ({ title, children, image }: imageCard) => {
  return (
    <div className="m-4 flex max-w-sm rounded-xl border-2 border-Blue bg-white shadow-lg">
      <img src={image} alt="Card Image" className="m-4 w-24" />
      <div className="px-auto mr-2 py-5">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-gray-700 text-base">{children}</p>
      </div>
    </div>
  );
};
export default CardImage;
