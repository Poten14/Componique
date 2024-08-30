
"use client";

import Autocomplete from "@components/Autocomplete";
import Image from "next/image";
import { useState, useEffect } from "react";
import Content from "@components/Content/page";

const options = [
  { label: "Form", value: "Button" },
  { label: "Form", value: "Input" },
  { label: "Form", value: "Autocomplete" },
  { label: "Form", value: "ColorPicker" },
  { label: "Form", value: "Radio Button" },
  { label: "Form", value: "DropDown" },
  { label: "Form", value: "Switch" },
  { label: "Form", value: "CheckBox" },
  { label: "Form", value: "Textarea" },
  { label: "Form", value: "Select" },
  { label: "Data display", value: "Card" },
  { label: "Data display", value: "Carousel" },
  { label: "Data display", value: "Calendar" },
  { label: "Data display", value: "Avatar" },
  { label: "Data display", value: "Icon" },
  { label: "Data display", value: "Infinite Scroll" },
  { label: "Feedback", value: "Spinner" },
  { label: "Feedback", value: "Toast(alert)" },
  { label: "Feedback", value: "Skeleton" },
  { label: "Feedback", value: "Modal" },
  { label: "Navigation", value: "Pagination" },
  { label: "Navigation", value: "Drawer" },
  { label: "Navigation", value: "Navbar" },
];

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = sessionStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    const updatedSearches = [...recentSearches, option].slice(-5); // 최근 5개만 유지
    setRecentSearches(updatedSearches);
    sessionStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="mb-8 w-full max-w-[440px]">
          <Image
            src="/Componique.svg"
            alt="logo"
            layout="responsive"
            width={440}
            height={72}
          />
        </div>
        <div className="w-full max-w-[740px]">
          <Autocomplete
            options={options.map((option) => option.value)}
            placeholder="Search for a Components..."
            onSelect={handleSelect}
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <span
                key={index}
                className="rounded-full border border-Basic px-3 py-1 text-Basic"
              >
                {search}
              </span>
            ))}
          </div>
        </div>
      </div>
       <Content />
    </>

  );
};
export default Page;
