"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Quickmenu: React.FC = () => {
  const [quickMenu, setQuickMenu] = useState<{ label: string; id: string }[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const menus = Array.from(document.querySelectorAll("h1, h2"));
    const items = menus.map((menu, index) => {
      const id = menu.id || `menu-${index}`;
      menu.id = id;
      return { label: menu.textContent || `menu ${index + 1}`, id };
    });
    setQuickMenu(items);
  }, [quickMenu]);

  const handleClick = (index: number, id: string) => {
    setActiveIndex(index);
    const moveMenu = document.getElementById(id);
    if (moveMenu) {
      moveMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed right-2 top-[14%] w-60 justify-end overscroll-none border border-red-500 text-sm">
        <div className="pb-2">On This Page</div>
        <div className="cursor-pointer">
          <ul className="pl-4">
            {quickMenu.map((item, index) => (
              <li
                className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black"} py-1`}
                key={index}
                onClick={() => handleClick(index, item.id)}
              >
                <Link href={`#${item.id}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Quickmenu;
