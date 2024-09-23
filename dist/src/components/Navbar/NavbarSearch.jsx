"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import SearchInput2 from "@components/Input/SearchInput2";
const LogoSection = () => (<div className="flex items-center justify-center">
    <Image src={Logo} alt="logo" width={50} height={50}/>
    <span className="ml-2 text-2xl">Compunique</span>
  </div>);
const NavbarSearch = ({ name, id, maxLength, size = "medium", placeholder, type, value, onChange, ...props }) => {
    return (<div className="mx-auto mt-4 flex max-w-screen-lg items-center justify-between p-4 dark:bg-[#333742] dark:text-white">
      <LogoSection />
      <div className="relative">
        <SearchInput2 name={name} id={id} maxLength={maxLength} size={size} // 전달된 size 사용
     placeholder={placeholder} type={type} value={value} onChange={onChange} {...props} // 나머지 props 전달
    />
      </div>
    </div>);
};
export default NavbarSearch;
