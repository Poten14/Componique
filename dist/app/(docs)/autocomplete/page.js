"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const Autocomplete_1 = __importDefault(require("@components/Autocomplete/Autocomplete"));
const ButtonAutocomplete_1 = __importDefault(require("@components/Autocomplete/ButtonAutocomplete"));
const GroupedAutocomplete_1 = __importDefault(require("@components/Autocomplete/GroupedAutocomplete"));
const LabelAutocomplete_1 = __importDefault(require("@components/Autocomplete/LabelAutocomplete"));
const AutocompleteDoc = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(null);
    const [value, setValue] = (0, react_1.useState)("");
    const [selectedOption3, setSelectedOption3] = (0, react_1.useState)(null);
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    const handleSelect = (option) => {
        setSelectedOption(option);
        console.log("Selected option:", option);
    };
    const handleSelect3 = (option) => {
        setSelectedOption3(option);
        console.log("Selected option:", option);
    };
    const options = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
    ];
    const options2 = [
        {
            groupName: "Fruits",
            items: ["Apple", "Banana", "Cherry"],
        },
        {
            groupName: "Vegetables",
            items: ["Carrot", "Lettuce", "Spinach"],
        },
    ];
    const options3 = [
        "Apple",
        "Banana",
        { label: "Cherry", value: "cherry" },
        { label: "Grapes", value: "grapes" },
        "Orange",
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose mb-40 max-w-[850px] text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Autocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Autocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD560 \uB54C \uAD00\uB828 \uC635\uC158\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uC5EC \uC81C\uACF5\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uACFC \uBAA8\uC591\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Autocomplete } from '@componique/react';`, copyText: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "Autocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsx)("div", { className: "pace-y-4 my-7", children: (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { options: options, placeholder: "Search fruits...", onSelect: handleSelect }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC120\uD0DD\uB41C \uC635\uC158: ", selectedOption] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Variant of the Autocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Autocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "outlined" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "outlined" }), ": \uC678\uACFD\uC120\uC774 \uC788\uB294 \uC2A4\uD0C0\uC77C"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "filled" }), ": \uBC30\uACBD\uC0C9\uC774 \uCC44\uC6CC\uC9C4 \uC2A4\uD0C0\uC77C"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "borderless" }), ": \uC678\uACFD\uC120\uC774 \uC5C6\uB294 \uC2A4\uD0C0\uC77C"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Autocomplete_1.default, { options: options, placeholder: "Outlined style", variant: "outlined", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { options: options, placeholder: "Filled style", variant: "filled", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { options: options, placeholder: "Borderless style", variant: "borderless", onSelect: handleSelect })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Outlined style"
        variant="outlined"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Filled style"
        variant="filled"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Borderless style"
        variant="borderless"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, copyText: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Outlined style"
        variant="outlined"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Filled style"
        variant="filled"
        onSelect={handleSelect}
      />
      <Autocomplete
        options={options}
        placeholder="Borderless style"
        variant="borderless"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Autocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "options" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC635\uC158 \uBAA9\uB85D\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "variant" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"outlined\" | \"filled\" | \"borderless\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"outlined\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "radius" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\" | \"none\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"300px\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "height" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uB192\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"auto\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "noOptionsMessage" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD544\uD130\uB9C1\uB41C \uC635\uC158\uC774 \uC5C6\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"No results found\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(selectedOption: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        variant="filled"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { Autocomplete } from '@components/Autocomplete/Autocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <Autocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        variant="filled"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. ButtonAutocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ButtonAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD560 \uB54C \uAD00\uB828 \uC635\uC158\uC744 \uD544\uD130\uB9C1\uD558\uC5EC \uC81C\uACF5\uD558\uBA70, \uC785\uB825 \uD544\uB4DC\uC5D0 \uAC80\uC0C9 \uBC84\uD2BC\uC774 \uD3EC\uD568\uB41C \uD615\uD0DC\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC2A4\uD0C0\uC77C\uACFC \uC0C9\uC0C1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { ButtonAutocomplete } from '@componique/react';`, copyText: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "ButtonAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(ButtonAutocomplete_1.default, { options: options, placeholder: "Search fruits...", onSelect: handleSelect }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC120\uD0DD\uB41C \uC635\uC158: ", selectedOption] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Changing the Color and Radius of the ButtonAutocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ButtonAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uACFC \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uC0C9\uC0C1\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "Basic" }), "\uC774\uACE0, \uAE30\uBCF8 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC740", " ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "color" }), ": Basic, Primary, Secondary, Success, Warning, Danger"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "radius" }), ": small, medium, large, full, none"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(ButtonAutocomplete_1.default, { options: options, placeholder: "Search with Basic color", color: "Basic", radius: "medium", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(ButtonAutocomplete_1.default, { options: options, placeholder: "Search with Primary color", color: "Primary", radius: "large", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(ButtonAutocomplete_1.default, { options: options, placeholder: "Search with Danger color", color: "Danger", radius: "full", onSelect: handleSelect })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Basic color"
        color="Basic"
        radius="medium"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Primary color"
        color="Primary"
        radius="large"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Danger color"
        color="Danger"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, copyText: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Basic color"
        color="Basic"
        radius="medium"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Primary color"
        color="Primary"
        radius="large"
        onSelect={handleSelect}
      />
      <ButtonAutocomplete
        options={options}
        placeholder="Search with Danger color"
        color="Danger"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "ButtonAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "options" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC635\uC158 \uBAA9\uB85D\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "radius" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\" | \"none\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"300px\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "height" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uB192\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"auto\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "noOptionsMessage" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD544\uD130\uB9C1\uB41C \uC635\uC158\uC774 \uC5C6\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"No results found\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "color" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uBC84\uD2BC\uACFC \uD3EC\uCEE4\uC2A4\uB41C \uC785\uB825 \uD544\uB4DC\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\" | \"Primary\" | \"Secondary\" | \"Success\" | \"Warning\" | \"Danger\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Basic\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(selectedOption: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        color="Primary"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { ButtonAutocomplete } from '@components/Autocomplete/ButtonAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  return (
    <>
      <ButtonAutocomplete
        options={options}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        color="Primary"
        radius="large"
        width="400px"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. GroupedAutocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "GroupedAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uADF8\uB8F9\uD654\uB41C \uD56D\uBAA9\uC744 \uC790\uB3D9 \uC644\uC131\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uC785\uB825 \uD544\uB4DC\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC785\uB825\uC5D0 \uB530\uB77C \uAD00\uB828 \uD56D\uBAA9\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uBA70, \uADF8\uB8F9\uBCC4\uB85C \uC815\uB82C\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { GroupedAutocomplete } from '@componique/react';`, copyText: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "GroupedAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(GroupedAutocomplete_1.default, { options: options2, placeholder: "Search items...", onSelect: handleSelect }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC120\uD0DD\uB41C \uC635\uC158: ", selectedOption] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Changing the Border and Radius of the GroupedAutocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "GroupedAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD14C\uB450\uB9AC \uB450\uAED8\uC640 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uD14C\uB450\uB9AC \uB450\uAED8\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC774\uACE0, \uAE30\uBCF8 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC740 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "border" }), ": none, thin, medium, thick"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "radius" }), ": none, small, medium, large, full"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-x-3 space-y-4", children: [(0, jsx_runtime_1.jsx)(GroupedAutocomplete_1.default, { options: options2, placeholder: "Search with thin border", border: "thin", radius: "small", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(GroupedAutocomplete_1.default, { options: options2, placeholder: "Search with thick border", border: "thick", radius: "large", onSelect: handleSelect }), (0, jsx_runtime_1.jsx)(GroupedAutocomplete_1.default, { options: options2, placeholder: "Search with no border", border: "none", radius: "full", onSelect: handleSelect })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thin border"
        border="thin"
        radius="small"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thick border"
        border="thick"
        radius="large"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with no border"
        border="none"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, copyText: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thin border"
        border="thin"
        radius="small"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with thick border"
        border="thick"
        radius="large"
        onSelect={handleSelect}
      />
      <GroupedAutocomplete
        options={options}
        placeholder="Search with no border"
        border="none"
        radius="full"
        onSelect={handleSelect}
      />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "GroupedAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "options" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uADF8\uB8F9\uD654\uB41C \uD56D\uBAA9 \uBAA9\uB85D\uC785\uB2C8\uB2E4. \uAC01 \uADF8\uB8F9\uC740 \uADF8\uB8F9\uBA85\uACFC \uD56D\uBAA9 \uBC30\uC5F4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "DropDownGroupedProps[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD56D\uBAA9\uC774 \uC120\uD0DD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(selectedOption: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "radius" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uBAA8\uC11C\uB9AC \uBC18\uACBD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"none\" | \"small\" | \"medium\" | \"large\" | \"full\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "border" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uD14C\uB450\uB9AC \uB450\uAED8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"none\" | \"thin\" | \"medium\" | \"thick\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "width" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"w-64\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "noOptionsMessage" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD544\uD130\uB9C1\uB41C \uC635\uC158\uC774 \uC5C6\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"No results found\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
        border="thin"
        radius="large"
        width="w-72"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, copyText: `import { GroupedAutocomplete } from '@components/Autocomplete/GroupedAutocomplete';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options = [
    {
      groupName: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      groupName: "Vegetables",
      items: ["Carrot", "Lettuce", "Spinach"],
    },
  ];

  return (
    <>
      <GroupedAutocomplete
        options={options}
        placeholder="Search items..."
        onSelect={handleSelect}
        border="thin"
        radius="large"
        width="w-72"
      />
      <p>선택된 옵션: {selectedOption}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "4. LabelAutocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "LabelAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC785\uB825\uB41C \uAC12\uC744 \uAE30\uBC18\uC73C\uB85C \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uD56D\uBAA9 \uBAA9\uB85D\uC744 \uC81C\uACF5\uD558\uB294 \uC790\uB3D9 \uC644\uC131 \uC785\uB825 \uD544\uB4DC\uC785\uB2C8\uB2E4. \uC635\uC158\uC740 \uBB38\uC790\uC5F4 \uB610\uB294 \uB77C\uBCA8-\uAC12 \uC30D\uC758 \uD615\uD0DC\uB85C \uC81C\uACF5\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: " 4.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { LabelAutocomplete } from '@componique/react';`, copyText: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.2. Usage" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uB798\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "LabelAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(LabelAutocomplete_1.default, { options: options3, value: value, onChange: setValue, onSelect: handleSelect3, placeholder: "Search fruits..." }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC120\uD0DD\uB41C \uC635\uC158: ", JSON.stringify(selectedOption3)] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        placeholder="Search fruits..."
      />
      <p>선택된 옵션: {JSON.stringify(selectedOption)}</p>
    </>
  );
}

export default Example;`, copyText: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        placeholder="Search fruits..."
      />
      <p>선택된 옵션: {JSON.stringify(selectedOption)}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.3. Changing the Size of the Autocomplete" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "LabelAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "medium" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(LabelAutocomplete_1.default, { options: options3, value: value, onChange: setValue, onSelect: handleSelect3, size: "small", placeholder: "Search (small)..." }), (0, jsx_runtime_1.jsx)(LabelAutocomplete_1.default, { options: options3, value: value, onChange: setValue, onSelect: handleSelect3, size: "medium", placeholder: "Search (medium)..." }), (0, jsx_runtime_1.jsx)(LabelAutocomplete_1.default, { options: options3, value: value, onChange: setValue, onSelect: handleSelect3, size: "large", placeholder: "Search (large)..." })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        size="small"
        placeholder="Search (small)..."
      />
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        size="large"
        placeholder="Search (large)..."
      />
    </>
  );
}

export default Example;`, copyText: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        size="small"
        placeholder="Search (small)..."
      />
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        size="large"
        placeholder="Search (large)..."
      />
    </>
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "LabelAutocomplete" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "options" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC790\uB3D9 \uC644\uC131\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC635\uC158 \uBAA9\uB85D\uC785\uB2C8\uB2E4. \uBB38\uC790\uC5F4 \uB610\uB294 \uB77C\uBCA8-\uAC12 \uC30D\uC73C\uB85C \uC81C\uACF5\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "Array<string | Option>" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "value" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD604\uC7AC \uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB418\uB294 \uAC12\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(value: string) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onSelect" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC635\uC158\uC774 \uC120\uD0DD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(selectedOption: string | Option) => void" }) }), (0, jsx_runtime_1.jsx)("td", { children: "N/A" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC785\uB825 \uD544\uB4DC\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"Search...\"" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "4.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        placeholder="Search fruits..."
      />
      <p>선택된 옵션: {JSON.stringify(selectedOption)}</p>
    </>
  );
}

export default Example;`, copyText: `import { LabelAutocomplete } from '@components/Autocomplete/LabelAutocomplete';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | Option | null>(null);

  const handleSelect = (option: string | Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const options: Array<string | Option> = [
    "Apple",
    "Banana",
    { label: "Cherry", value: "cherry" },
    { label: "Grapes", value: "grapes" },
    "Orange",
  ];

  return (
    <>
      <LabelAutocomplete
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        placeholder="Search fruits..."
      />
      <p>선택된 옵션: {JSON.stringify(selectedOption)}</p>
    </>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = AutocompleteDoc;
