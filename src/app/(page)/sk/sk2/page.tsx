"use client";

import React, { useState } from "react";
import LabelAutocomplete from "@components/Autocomplete/LabelAutocomplete";

const sk2 = () => {
  const components = [
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
    { label: "Disclosure", value: "Tab" },
    { label: "Data display", value: "Card" },
    { label: "Data display", value: "Carousel" },
    { label: "Data display", value: "Calendar" },
    { label: "Data display", value: "Tab" },
    { label: "Feedback", value: "Spinner" },
    { label: "Feedback", value: "Toast(alert)" },
    { label: "Feedback", value: "Skeleton" },
    { label: "Feedback", value: "Modal" },
    { label: "Navigation", value: "Pagination" },
    { label: "Navigation", value: "Drawer" },
    { label: "Navigation", value: "Navbar" },
  ];

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelect = (
    selectedOption: string | { label: string; value: string },
  ) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <>
      <div className="p-4">
        <LabelAutocomplete
          size="small"
          options={components}
          value={inputValue}
          onChange={handleInputChange}
          onSelect={handleSelect}
          placeholder="Search for Components..."
        />
      </div>
      <div className="p-4">
        <LabelAutocomplete
          size="medium"
          options={components}
          value={inputValue}
          onChange={handleInputChange}
          onSelect={handleSelect}
          placeholder="Search for Components..."
        />
      </div>
      <div className="p-4">
        <LabelAutocomplete
          size="large"
          options={components}
          value={inputValue}
          onChange={handleInputChange}
          onSelect={handleSelect}
          placeholder="Search for Components..."
        />
      </div>
    </>
  );
};

export default sk2;
