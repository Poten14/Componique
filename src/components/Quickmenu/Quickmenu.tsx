"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Quickmenu: React.FC = () => {
  const [quickMenu, setQuickMenu] = useState<{ label: string; id: string }[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const menuPathname = () => {
      const menus = Array.from(document.querySelectorAll("h1, h2"));
      const items = menus.map((menu, index) => {
        const id = menu.id || `menu-${index}`;
        menu.id = id;
        return { label: menu.textContent || `menu ${index + 1}`, id };
      });
      setQuickMenu(items);
    };
    menuPathname();
  }, [pathname]);

  const handleClick = (index: number, id: string) => {
    setActiveIndex(index);
    const moveMenu = document.getElementById(id);
    if (moveMenu) {
      moveMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed right-12 top-1/3 h-[500px] w-60 justify-end overflow-y-scroll overscroll-y-auto text-sm">
        <div className="pb-2">On This Page</div>
        <div className="">
          <ul className="pl-4">
            {quickMenu.map((item, index) => (
              <li
                className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black"} cursor-pointer py-1`}
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
