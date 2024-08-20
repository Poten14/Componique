"use client";

import React, { useState } from "react";
import LabelAutocomplete from "@components/Autocomplete/LabelAutocomplete";
import Autocomplete from "@components/Autocomplete/Autocomplete";

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

  const options = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Peach",
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

      <div className="space-y-8 p-8">
        <h1 className="text-2xl font-bold">Instant Autocomplete Component</h1>

        {/* Small size, Outlined variant */}
        <div>
          <h2 className="text-lg font-medium">Small & Outlined</h2>
          <Autocomplete
            options={options}
            variant="outlined"
            radius="small"
            width="200px"
            height="30px"
            placeholder="Search..."
            onSelect={handleSelect}
          />
        </div>

        {/* Medium size, Filled variant */}
        <div>
          <h2 className="text-lg font-medium">Medium & Filled</h2>
          <Autocomplete
            options={options}
            variant="filled"
            radius="medium"
            width="300px"
            height="40px"
            placeholder="Search..."
            onSelect={handleSelect}
          />
        </div>

        {/* Large size, Borderless variant */}
        <div>
          <h2 className="text-lg font-medium">Large & Borderless</h2>
          <Autocomplete
            options={options}
            variant="borderless"
            radius="large"
            width="400px"
            height="50px"
            placeholder="Search..."
            onSelect={handleSelect}
          />
        </div>

        {/* Full-width, Custom height */}
        <div>
          <h2 className="text-lg font-medium">Full-width & Custom height</h2>
          <Autocomplete
            options={options}
            variant="outlined"
            radius="full"
            width="100%"
            height="60px"
            placeholder="Search..."
            onSelect={handleSelect}
          />
        </div>
      </div>
    </>
  );
};

export default sk2;
