"use client";
import React, { useState, useEffect } from "react";
import Logo from "@components/Layout/Logo";
import UserPage from "@components/Layout/UserPage";
import HamburgerMenu from "./HamburgerMenu";
import Button from "@components/Button/Button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScrollHadler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScrollHadler);

    return () => {
      window.removeEventListener("scroll", onScrollHadler);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10 flex h-[90px] w-full items-center justify-between transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <Logo />
      <div className="flex items-center">
        <UserPage />
        <Button className="mr-2 xl:hidden" radius="full">
          <HamburgerMenu />
        </Button>
      </div>
    </header>
  );
};

export default Header;
