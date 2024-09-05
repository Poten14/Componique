import Image from "next/image";
import Link from "next/link";
import { Size } from "types/type";

// NavbarProps 정의
interface NavbarProps {
  logoSrc: string;
  logoName: string;
  size?: Size;
  hoverColor?: "skyblue" | "blue" | "red";
  position?: "sticky" | "relative" | "static";
  links: { name: string; href: string }[];
}

const sizeClasses = {
  small: "text-xs",
  medium: "text-lg",
  large: "text-xl",
};

const hoverColorClasses = {
  skyblue: "hover:text-[#9AC5E5] dark:hover:text-[#9AC5E5]",
  blue: "hover:text-[#7AA7FF] dark:hover:text-[#7AA7FF]",
  red: "hover:text-[#FF7676] dark:hover:text-[#FF7676]",
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
  links,
}: NavbarProps) => {
  const hoverClass = hoverColorClasses[hoverColor];
  const navClass = `cursor-pointer ${hoverClass} no-underline dark:text-white`;

  return (
    <>
      <div
        className={`mx-auto mt-4 flex max-w-screen-lg items-center justify-between p-2 dark:bg-[#333742] dark:text-white ${sizeClasses[size]} ${positionClasses[position]}`}
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
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={navClass}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
