import Logo from "../../../public/images/logo.svg";
import Image from "next/image";

// NavbarProps 정의
interface NavbarProps {
  size?: "xs" | "lg" | "xl";
  hoverColor?: "skyblue" | "blue" | "red";
  position?: "sticky" | "relative" | "static";
}

const sizeClasses = {
  xs: "text-xs",
  lg: "text-lg",
  xl: "text-xl",
};

const hoverColorClasses = {
  skyblue: "hover:text-[#9AC5E5]",
  blue: "hover:text-[#7AA7FF]",
  red: "hover:text-[#FF7676]",
};

const positionClasses = {
  static: "static",
  sticky: "sticky",
  relative: "relative",
};

const Navbar = ({
  size = "lg",
  hoverColor = "blue",
  position = "static",
}: NavbarProps) => {
  const hoverClass = hoverColorClasses[hoverColor];
  const navClass = `cursor-pointer ${hoverClass}`;

  return (
    <>
      <div
        className={`mx-auto mt-4 flex max-w-screen-lg items-center justify-between ${sizeClasses[size]} ${positionClasses[position]}`}
      >
        <div className={`flex items-center justify-center`}>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <div className={`ml-2 cursor-pointer text-2xl ${sizeClasses[size]}`}>
            Componique
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className={navClass}>Home</div>
          <div className={navClass}>About</div>
          <div className={navClass}>Project</div>
          <div className={navClass}>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
