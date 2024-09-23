"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

import type { DrawerProps } from "./DrawerType";

const Drawer: React.FC<DrawerProps> = ({
  menu,
  logo,
  isOpen = true,
  color,
  bgColor = "basic",
  onClose,
  className,
  position = "left",
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

  const onClickMenuCloseHandler = (path: string) => {
    router.push(path);
    setIsDrawerOpen(false);
    if (onClose) onClose();
  };
  const onClickLogoCloseHandler = () => {
    router.push("/");
    setIsDrawerOpen(false);
    if (onClose) onClose();
  };

  const onClickBackgroundHandler = () => {
    setIsDrawerOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const bgColors = {
    primary: "bg-Primary dark:bg-[#1B1C1E]",
    secondary: "bg-Secondary dark:bg-[#1B1C1E]",
    success: "bg-Success dark:bg-[#1B1C1E]",
    warning: "bg-Warning dark:bg-[#1B1C1E]",
    danger: "bg-Danger dark:bg-[#1B1C1E]",
    red: "bg-red-500 dark:bg-[#1B1C1E]",
    orange: "bg-orange-500 dark:bg-[#1B1C1E]",
    yellow: "bg-yellow-500 dark:bg-[#1B1C1E]",
    green: "bg-green-500 dark:bg-[#1B1C1E]",
    blue: "bg-blue-500 dark:bg-[#1B1C1E]",
    purple: "bg-purple-500 dark:bg-[#1B1C1E]",
    pink: "bg-pink-500 dark:bg-[#1B1C1E]",
    basic: "bg-Basic dark:bg-[#1B1C1E]",
    white: "bg-white dark:bg-[#1B1C1E]",
    gray: "bg-gray dark:bg-[#1B1C1E]",
    black: "bg-black dark:bg-[#1B1C1E]",
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
      className={`fixed left-0 top-0 z-[999] h-full w-full select-none !bg-black !bg-opacity-50 transition-opacity duration-500 ease-in-out ${className || ""} ${
        isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClickBackgroundHandler}
    >
      <div
        className={`${basicBg} ${motion}`}
        //검은배경 말고 안에 메뉴 클릭시 전파 방지
        onClick={(e) => e.stopPropagation()}
      >
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
          onClick={onClickLogoCloseHandler}
        >
          <img
            src={logo}
            className={`cursor-pointer text-center ${position === "top" || position === "bottom" ? "w-[300px]" : "w-[180px]"}`}
          />
        </div>
        <div className="h-[calc(100%-90px)]">
          <ul
            className={`${
              position === "top"
                ? "flex flex-wrap justify-center pb-2"
                : position === "bottom"
                  ? "space-y-2 pb-4"
                  : "space-y-2"
            } h-full overflow-y-auto`}
          >
            {menu?.map((group, index) => (
              <li
                key={index}
                className={`mb-4 ${position === "top" || position === "bottom" ? "w-full" : ""}`}
              >
                {group.groupName && (
                  <div
                    className={`mx-2 mb-2 rounded px-2 font-semibold text-white ${group.groupNameClassName || ""}`}
                  >
                    {group.groupName}
                  </div>
                )}
                <ul className="space-y-2">
                  {group.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`${
                        position === "top" || position === "bottom"
                          ? "mx-auto mb-2 w-[90%] text-center"
                          : "mx-2"
                      } box-border cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded px-5 py-2 hover:bg-gray dark:hover:bg-[#2a2e39] ${
                        color
                          ? bgColors[color]
                          : "bg-[#F8F8F8] dark:bg-[#2A2E39] dark:text-white"
                      } ${color === "black" ? "text-white" : ""} ${item.className || ""}`}
                      onClick={() => onClickMenuCloseHandler(item.path)}
                    >
                      {item.icon && (
                        <Icon name={item.icon} size={16} color="currentColor" />
                      )}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Drawer;
