interface AvatarLabelProps {
  src?: string;
  alt?: string;
  initial?: string; // initial은 5글자가 적당
  size?: number;
  label: string;
}

const AvatarLabel = ({
  src,
  alt,
  initial,
  size = 50,
  label,
}: AvatarLabelProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: src ? `url(${src})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: `${size * 0.2}px`,
      }}
    >
      {!src && initial}
      <span>{label}</span>
    </div>
  );
};
export default AvatarLabel;
