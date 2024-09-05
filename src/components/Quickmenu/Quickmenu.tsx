"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Quickmenu = () => {
  const [quickMenu, setQuickMenu] = useState<
    { label: string; id: string; tag: string }[]
  >([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const menuPathname = () => {
      const menus = Array.from(document.querySelectorAll("h1, h2"));
      const items = menus.map((menu, index) => {
        const id = menu.id || `menu-${index}`;
        menu.id = id;
        return {
          label: menu.textContent || `menu ${index + 1}`,
          id,
          tag: menu.tagName.toLowerCase(),
        };
      });
      setQuickMenu(items);
    };
    menuPathname();
  }, [pathname]);

  // Intersection observer api 스크롤 구현
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          //
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.1,
    };
  }, []);

  const handleClick = (index: number, id: string) => {
    setActiveIndex(index);
    const moveMenu = document.getElementById(id);
    if (moveMenu) {
      moveMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed right-10 top-1/3 h-[500px] w-60 justify-end overflow-y-scroll overscroll-y-auto text-sm">
        <div className="pb-2 dark:text-white">On This Page</div>
        <div>
          <ul className="pl-4">
            {quickMenu.map((item, index) => (
              <li
                className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black dark:hover:text-white"} cursor-pointer py-1 ${item.tag === "h2" ? "pl-3" : ""}`}
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
