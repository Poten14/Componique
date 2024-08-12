type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  const basicButton =
    "text-white font-bold text-sm rounded bg-[#9AC5E5] hover:bg-[#EDCE7A] px-3 py-2 ";

  return <button className={`${basicButton}`}>{children}</button>;
};

export default Button;
