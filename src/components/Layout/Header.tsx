"use client";
import React, { useState, useEffect } from "react";
import Logo from "@components/Layout/Logo";
import UserPage from "@components/Layout/UserPage";
import HamburgerMenu from "./HamburgerMenu";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import SwitchDark from "@components/Swtich/SwitchDark";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
  const onclickDrawerHandler = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <header
      className={`fixed left-0 top-0 z-10 flex h-[90px] w-full items-center justify-between transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <Logo />
      <div className="flex items-center">
        <SwitchDark />
        <UserPage />
        <Button
          className="mr-2 xl:hidden"
          radius="full"
          onClick={onclickDrawerHandler(true)}
        >
          <HamburgerMenu />
        </Button>
        <Drawer
          isOpen={isDrawerOpen}
          className="text-[#3e3e3e]"
          onClose={onclickDrawerHandler(false)}
          color="white"
          bgColor="white"
          logo="/componique_logo_full.svg"
          position="right"
          menu={[
            {
              groupName: "FORM",
              groupNameClassName: "!text-[#9AC5E5] bg-[#f8f8f8] py-2",
              items: [
                { name: "Button", path: "/button", className: "py-0" },
                { name: "CheckBox", path: "/checkbox", className: "py-0" },
                { name: "Input", path: "/input", className: "py-0" },
                {
                  name: "Radio Button",
                  path: "/radiobutton",
                  className: "py-0",
                },
                { name: "Textarea", path: "/textarea", className: "py-0" },
                { name: "Select", path: "/select", className: "py-0" },
                { name: "DropDown", path: "/dropdown", className: "py-0" },
                {
                  name: "AutoComplete",
                  path: "/autocomplete",
                  className: "py-0",
                },
                {
                  name: "ColorPicker",
                  path: "/colorpicker",
                  className: "py-0",
                },
                { name: "Switch", path: "/switch", className: "py-0" },
              ],
            },
            {
              groupName: "Data display",
              groupNameClassName: "!text-[#9AC5E5] bg-[#f8f8f8] py-2",
              items: [
                { name: "Card", path: "/card", className: "py-0" },
                { name: "Carousel", path: "/carousel", className: "py-0" },
                { name: "Calendar", path: "/calendar", className: "py-0" },
                { name: "Avatar", path: "/avatar", className: "py-0" },
                { name: "Icon", path: "/icon", className: "py-0" },
                {
                  name: "Infinite Scroll",
                  path: "/infinitescroll",
                  className: "py-0",
                },
              ],
            },
            {
              groupName: "Feedback",
              groupNameClassName: "!text-[#9AC5E5] bg-[#f8f8f8] py-2",
              items: [
                { name: "Spinner", path: "/spinner", className: "py-0" },
                { name: "Toast", path: "/toast", className: "py-0" },
                { name: "Skeleton", path: "/skeleton", className: "py-0" },
                { name: "Modal", path: "/modal", className: "py-0" },
              ],
            },
            {
              groupName: "Navigation",
              groupNameClassName: "!text-[#9AC5E5] bg-[#f8f8f8] py-2",
              items: [
                { name: "Pagination", path: "/pagination", className: "py-0" },
                { name: "Drawer", path: "/drawer", className: "py-0" },
                { name: "Navbar", path: "/navbar", className: "py-0" },
              ],
            },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
