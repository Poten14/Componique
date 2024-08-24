"use client";

import CurrencyInput from "@components/Input/CurrencyInput";
import NumInput from "@components/Input/NumInput";

const page = () => {
  const handleValueChange = (value: string) => {
    console.log("Value changed to:", value);
  };

  return (
    <>
      <div className="m-4">
        <h1 className="mb-6 text-3xl font-bold">Number Input</h1>
        <NumInput
          size="small"
          color="Basic"
          width="100px"
          value="0"
          onValueChange={handleValueChange}
        />
      </div>
      <div className="m-4">
        <NumInput
          size="medium"
          color="Primary"
          value="5"
          onValueChange={handleValueChange}
        />
      </div>
      <div className="m-4">
        <NumInput
          size="large"
          color="Warning"
          width="300px"
          value="10"
          onValueChange={handleValueChange}
        />
      </div>
      <div className="m-4">
        <CurrencyInput
          size="large"
          color="Secondary"
          width="200px"
          // value="$10.55"
          onValueChange={handleValueChange}
        />
      </div>
    </>
  );
};
export default page;
