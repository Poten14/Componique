import { useState } from "react";

interface DropDownBasicProps {
  option: string[];
  defaultOption: string;
  onSelect?: (value: string) => void;
}

const DropDownBasic = ({
  option,
  defaultOption,
  onSelect,
}: DropDownBasicProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    return setSelectedOption(event.target.value);
  };
  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">{defaultOption}</option>
        {option.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DropDownBasic;
