"use client";

import Autocomplete from "@components/Autocomplete";
import Image from "next/image";
import { useState } from "react";

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

  const handleSelect = (option: string) => {
    setSelectedOption(option);
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
      </div>
    </>
  );
};
export default Page;
