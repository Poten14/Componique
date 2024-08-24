"use client";

import CurrencyInput from "@components/Input/CurrencyInput";
import DecimalInput from "@components/Input/DecimalInput";
import NumInput from "@components/Input/NumInput";
import PinInput from "@components/Input/PinInput";

const page = () => {
  const handleValueChange = (value: string) => {
    console.log("Value changed to:", value);
  };

  const handlePinChange = (value: string) => {
    console.log("PIN Value:", value);
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
      <div className="m-4">
        <DecimalInput
          size="large"
          color="Gray"
          width="200px"
          value="10.55"
          onValueChange={handleValueChange}
        />
      </div>
      <div className="space-y-4 p-4">
        <h2 className="font-bold">With Formatter (Uppercase)</h2>
        <PinInput
          formatter={(val) => val.toUpperCase()}
          onChange={handlePinChange}
        />

        <h2 className="font-bold">With Disabled</h2>
        <PinInput disabled />

        <h2 className="font-bold">With Length (8)</h2>
        <PinInput length={8} />

        <h2 className="font-bold">With Variant</h2>
        <PinInput variant="filled" />

        <h2 className="font-bold">With Custom Display Character</h2>
        <PinInput customCharacter="*" />
      </div>
    </>
  );
};
export default page;
