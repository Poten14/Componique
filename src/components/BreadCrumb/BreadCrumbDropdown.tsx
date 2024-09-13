"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

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
                  {item.dropdownItems && (
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 18 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-1"
                    >
                      <path
                        d="M8.25939 10.1837C8.65625 10.6211 9.34375 10.6211 9.74061 10.1837L17.0094 2.17193C17.5924 1.52932 17.1364 0.5 16.2688 0.5H1.73122C0.863552 0.5 0.407592 1.52933 0.990605 2.17193L8.25939 10.1837Z"
                        fill="#000"
                      />
                    </svg>
                  )}
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
            {index < items.length - 1 && (
              <svg
                className="h-5 w-5 dark:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbDropdown;
