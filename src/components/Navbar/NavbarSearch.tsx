"use client";

import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import SearchIcon from "../../../public/images/searchIcon.svg";

type NavbarSearchProps = {
  name: string;
  id: string;
  maxLength: number;
  size: number;
  placeholder: string;
};

const NavbarSearch = ({
  name,
  id,
  maxLength,
  size,
  placeholder,
}: NavbarSearchProps) => {
  return (
    <>
      <div className="mx-auto mt-4 flex max-w-screen-lg items-center justify-between">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <span className="ml-2 text-2xl">Componique</span>
        </div>
        <div className="relative">
          <Image
            className="absolute m-[12px] inline-block"
            src={SearchIcon}
            alt="searchIcon"
            width={18}
            height={18}
          />
          <input
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 sm:w-64 md:w-80 lg:w-96 xl:w-[280px]"
            id={id}
            name={name}
            maxLength={maxLength}
            size={size}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarSearch;
