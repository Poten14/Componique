"use client";

import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

// NavbarProps 정의
interface NavbarProps {
  size?: "xs" | "lg" | "xl";
  color?: "skyblue" | "blue" | "red";
  position?: "sticky" | "relative" | "static";
}

const sizeClasses = {
  xs: "text-xs",
  lg: "text-lg",
  xl: "text-xl",
};

const colorClasses = {
  skyblue: "#9AC5E5",
  blue: "#7AA7FF",
  red: "#FF7676",
};

const positionClasses = {
  static: "static",
  sticky: "sticky",
  relative: "relative",
};

const Navbar = ({
  size = "lg",
  color = "blue",
  position = "static",
}: NavbarProps) => {
  const navClass = `cursor-pointer hover:${colorClasses[color]} focus:${colorClasses[color]}`;
  const colorStyle = colorClasses[color];

  return (
    <>
      <div
        className={`mx-auto mt-4 flex max-w-screen-lg items-center justify-between ${sizeClasses[size]} ${positionClasses[position]}`}
      >
        <div className={`flex items-center justify-center`}>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <Link
            href="#"
            className={`ml-2 cursor-pointer text-2xl ${sizeClasses[size]}`}
          >
            Componique
          </Link>
        </div>
        <div className="flex justify-between gap-8">
          <Link
            href="#"
            className={`cursor-pointer hover:${colorClasses[color]} focus:${colorClasses[color]}`}
          >
            Home
          </Link>
          <Link href="#" className={navClass}>
            About
          </Link>
          <Link href="#" className={navClass}>
            Project
          </Link>
          <Link href="#" className={navClass}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
