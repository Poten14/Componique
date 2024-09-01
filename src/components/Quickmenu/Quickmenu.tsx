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
  }, []);

  return (
    <>
      <div className="fixed right-0 top-1/2 w-60 justify-end text-sm">
        <div className="pb-4">On This Page</div>
        <div className="cursor-pointer">
          Usage
          <ul className="pl-4">
            {quickMenu.map((item, index) => (
              <li
                className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black"} py-1`}
                key={index}
                onClick={() => setActiveIndex(index)}
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
