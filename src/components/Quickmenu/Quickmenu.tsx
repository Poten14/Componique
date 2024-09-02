"use client";

import Link from "next/link";
import { useState } from "react";

interface QuickmenuProps {
  items: { label: string; id: string }[];
}

const Quickmenu: React.FC<QuickmenuProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="fixed right-0 top-1/2 w-60 justify-end text-sm">
        <div className="pb-4">On This Page</div>
        <div className="cursor-pointer">
          Usage
          <ul className="pl-4">
            {items.map((item, index) => (
              <li
                className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black"} py-1`}
                key={index}
                onClick={() => handleClick(index)}
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
