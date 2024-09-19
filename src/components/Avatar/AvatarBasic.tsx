interface AvatarBasicProps {
  src?: string;
  alt?: string;
  initial?: string; // initial은 5글자가 적당
  size?: number;
}

const AvatarBasic = ({ src, alt, initial, size = 100 }: AvatarBasicProps) => {
  return (
    <div
      className={`m-2 flex flex-shrink-0 items-center justify-center rounded-full bg-Basic font-bold uppercase text-white`}
      /*flex-shrink-0 들어간 이미지가 수축되지 않도록 설정 */
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: src ? `url(${src})` : "",
        backgroundSize: "cover",
        backgroundPosition: "c++4enter",
        fontSize: `${size * 0.2}px`,
      }}
    >
      {!src && initial}
    </div>
  );
};
export default AvatarBasic;
