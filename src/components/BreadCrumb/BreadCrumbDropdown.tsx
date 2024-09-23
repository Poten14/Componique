"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Icon from "../Icon/Icon";

interface DropdownItem {
  label: string;
  href: string;
}

interface BreadCrumbProp {
  href?: string;
  children: React.ReactNode;
  dropdownItems?: DropdownItem[];
  className?: string;
}

interface BreadCrumbProps {
  items: BreadCrumbProp[];
}

const BreadCrumbDropdown = ({ items }: BreadCrumbProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(!dropdownOpen);
    setActiveDropdown(index);
  };

  const handleItemClick = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClose);
    return () => {
      document.removeEventListener("click", handleOutsideClose);
    };
  }, [dropdownOpen]);

  return (
    <div>
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className={`text-gray hover:text-black dark:text-gray dark:hover:text-white ${
                  item.className ? item.className : ""
                }`}
              >
                {item.children}
              </a>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex cursor-pointer items-center text-gray hover:text-black dark:hover:text-white"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.children}
                  {item.dropdownItems && <Icon name="icon-down" color="gray" />}
                </div>
                {dropdownOpen &&
                  activeDropdown === index &&
                  item.dropdownItems && (
                    <div className="absolute z-50 mt-1 flex w-full flex-col rounded-md border bg-white shadow-md dark:border-gray dark:bg-[#2A2E39] dark:hover:text-white">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          onClick={() => handleItemClick(dropdownItem.href)}
                          className="flex cursor-pointer rounded-md p-2 text-sm hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-gray dark:hover:bg-[#2A6490] dark:hover:text-white"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            )}
            {index < items.length - 1 && <Icon name="icon-next" color="gray" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbDropdown;
