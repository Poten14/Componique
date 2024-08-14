import Image from "next/image";
import { Size } from "types/type";

// NavbarProps 정의
interface NavbarProps {
  logoSrc: string;
  logoName: string;
  size?: Size;
  hoverColor?: "skyblue" | "blue" | "red";
  position?: "sticky" | "relative" | "static";
}

const sizeClasses = {
  small: "text-xs",
  medium: "text-lg",
  large: "text-xl",
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
  size = "small",
  hoverColor = "blue",
  position = "static",
  logoName,
  logoSrc,
}: NavbarProps) => {
  const hoverClass = hoverColorClasses[hoverColor];
  const navClass = `cursor-pointer ${hoverClass}`;

  return (
    <>
      <div
        className={`mx-auto mt-4 flex max-w-screen-lg items-center justify-between ${sizeClasses[size]} ${positionClasses[position]}`}
      >
        <div className={`flex items-center justify-center`}>
          <Image src={logoSrc} alt="logo" width={50} height={50} />
          <div
            className={`ml-2 cursor-pointer font-semibold ${sizeClasses[size]}`}
          >
            {logoName}
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
