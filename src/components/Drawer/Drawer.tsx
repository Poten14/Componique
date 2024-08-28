"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@components/Icon/Icon";

import type { DrawerProps } from "./DrawerType";
const Drawer: React.FC<DrawerProps> = ({
  menu,
  logo,
  isOpen = true,
  color,
  bgColor = "basic",
  onClose,
  className,
  position: position = "left",
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  const router = useRouter();

  useEffect(() => {
    setIsDrawerOpen(isOpen);
  }, [isOpen]);

  const onclickCloseHandler = () => {
    setIsDrawerOpen(false);
    if (onClose) onClose();
  };

  // 스크롤 감추기
  useEffect(() => {
    if (isDrawerOpen) {
      // Drawer가 열려 있을 때 body 스크롤 감추기
      document.body.style.overflow = "hidden";
    } else {
      // Drawer가 닫힐 때 body 스크롤 보이기
      document.body.style.overflow = "";
    }

    // 컴포넌트가 언마운트될 때 스크롤 다시 보이기
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const bgColors = {
    primary: "bg-Primary",
    secondary: "bg-Secondary",
    success: "bg-Success",
    warning: "bg-Warning",
    danger: "bg-Danger",
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    basic: "bg-Basic",
    white: "bg-white",
    gray: "bg-gray",
    black: "bg-black",
  };

  let location = "";
  let motion = "";

  if (position === "right") {
    location = "right-0";
    motion = isDrawerOpen ? "translate-x-0" : "translate-x-full";
  } else if (position === "left") {
    location = "left-0";
    motion = isDrawerOpen ? "translate-x-0" : "-translate-x-full";
  } else if (position === "top") {
    location = "top-0";
    motion = isDrawerOpen ? "translate-y-0" : "-translate-y-full";
  } else if (position === "bottom") {
    location = "bottom-0";
    motion = isDrawerOpen ? "translate-y-0" : "translate-y-full";
  }

  const basicBg = `absolute ${location} ${
    position === "top" || position === "bottom"
      ? "h-auto w-full"
      : "h-full w-[200px]"
  } transition-transform duration-500 ease-in-out ${bgColors[bgColor]}`;

  return (
    <section
      className={`fixed left-0 top-0 z-50 h-full w-full select-none bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${className || ""} ${
        isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className={`${basicBg} ${motion}`}>
        <div
          className={`absolute ${
            position === "right"
              ? "left-[-40px]"
              : position === "left"
                ? "right-[-40px]"
                : position === "top"
                  ? "bottom-[-40px] right-2"
                  : "right-2 top-[-40px]"
          }`}
        >
          <button
            className="group relative h-8 w-8 bg-transparent"
            onClick={onclickCloseHandler}
          >
            <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></span>
            <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-white"></span>
          </button>
        </div>

        <div
          className={`flex justify-center py-2 ${
            position === "top" || position === "bottom" ? "my-2" : "my-0"
          }`}
          onClick={() => router.push("/")}
        >
          <img
            src={logo}
            className={`cursor-pointer text-center ${position === "top" || position === "bottom" ? "w-[300px]" : "w-[180px]"}`}
          />
        </div>

        <ul
          className={`${
            position === "top"
              ? "flex flex-wrap justify-center pb-2"
              : position === "bottom"
                ? "space-y-2 pb-4"
                : "space-y-2"
          }`}
        >
          {menu?.map((item, index) => (
            <li
              key={index}
              className={`${
                position === "top" ? "mx-2 mb-2 w-[90%] text-center" : "mx-2"
              } box-border cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded px-5 py-2 hover:bg-gray ${
                color ? bgColors[color] : "bg-[#F8F8F8]"
              } ${color === "black" ? "text-white" : ""} ${item.className || ""} `}
              onClick={() => router.push(item.path)}
            >
              {item.icon && (
                <Icon name={item.icon} size={16} color="currentColor" />
              )}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Drawer;
