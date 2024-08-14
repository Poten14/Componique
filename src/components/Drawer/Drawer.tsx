"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type DrawerProps = {
  menu?: MenuProps[];
  isOpen?: boolean;
  logo?: string;
  onClose?: () => void;
};

type MenuProps = {
  name: string;
  path: string;
};

const Drawer: React.FC<DrawerProps> = ({
  menu,
  logo,
  isOpen = true,
  onClose,
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

  //스크롤 감추기
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

  return (
    <section
      className={`fixed left-0 top-0 h-full w-full select-none bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
        isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`absolute top-0 h-full w-[200px] bg-pink-200 transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute left-[210px] top-2">
          <button
            className="group relative h-8 w-8 bg-transparent"
            onClick={onclickCloseHandler}
          >
            <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></span>
            <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-white"></span>
          </button>
        </div>

        <div
          className="flex w-[200px] justify-center py-2"
          onClick={() => router.push("/")}
        >
          <img src={logo} className="w-[180px] cursor-pointer text-center" />
        </div>

        <ul className="space-y-2 bg-pink-200">
          {menu?.map((item, index) => (
            <li
              key={index}
              className="mx-2 box-border w-[183px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded bg-[#F8F8F8] px-5 py-2 hover:bg-gray"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Drawer;
