"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const logo_svg_1 = __importDefault(require("../../../../public/images/logo.svg"));
const Navbar_1 = __importDefault(require("@components/Navbar/Navbar"));
const NavbarSearch_1 = __importDefault(require("@components/Navbar/NavbarSearch"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const NavbarDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Navbar" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Navbar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6F9 \uC0AC\uC774\uD2B8\uC758 \uC0C1\uB2E8\uC5D0 \uC704\uCE58\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC8FC\uC694 \uD398\uC774\uC9C0\uB85C\uC758 \uB9C1\uD06C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB85C\uACE0, \uB9C1\uD06C, \uD06C\uAE30, \uC0C9\uC0C1, \uC704\uCE58\uB97C \uC124\uC815\uD558\uC5EC \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Navbar } from '@components/Navbar';`, copyText: `import { Navbar } from '@components/Navbar';`, language: "tsx", index: 1, copied: copied, handleCopy: () => handleCopy(1) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7 space-y-4", children: (0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, links: [
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Projects", href: "/projects" },
                        { name: "Contact", href: "/contact" },
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <Navbar
      logoName="Componique"
      logoSrc={Logo}
      links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]}
    />
  );
}
export default Example;`, copyText: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <Navbar
      logoName="Componique"
      logoSrc={Logo}
      links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]}
    />
  );
}
export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: () => handleCopy(2) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Changing the Size of the Navbar" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Navbar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uD06C\uAE30\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uAE30\uBCF8 \uD06C\uAE30\uB294", " ", (0, jsx_runtime_1.jsx)("code", { children: "small" }), "\uC785\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "small" }), ": \uC791\uC740 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "medium" }), ": \uC911\uAC04 \uD06C\uAE30"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "large" }), ": \uD070 \uD06C\uAE30"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, size: "small", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] }), (0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, size: "medium", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] }), (0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, size: "large", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} size="small" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="medium" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="large" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;`, copyText: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} size="small" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="medium" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} size="large" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: () => handleCopy(3) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Changing the Hover Color" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Navbar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB9C1\uD06C\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB838\uC744 \uB54C \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "skyblue" }), ": \uD558\uB298\uC0C9"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "blue" }), ": \uD30C\uB780\uC0C9 (\uAE30\uBCF8\uAC12)"] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("code", { children: "red" }), ": \uBE68\uAC04\uC0C9"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "my-7 space-y-4", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, hoverColor: "skyblue", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] }), (0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, hoverColor: "blue", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] }), (0, jsx_runtime_1.jsx)(Navbar_1.default, { logoName: "Componique", logoSrc: logo_svg_1.default, hoverColor: "red", links: [
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ] })] }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="skyblue" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="blue" links={[
         { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="red" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;`, copyText: `import { Navbar } from '@components/Navbar';
function Example() {
  return (
    <>
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="skyblue" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="blue" links={[
         { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
      <Navbar logoName="Componique" logoSrc={Logo} hoverColor="red" links={[
        { name: "Home", href: "/" },
         { name: "About", href: "/about" },
         { name: "Projects", href: "/projects" },
         { name: "Contact", href: "/contact" },]} />
    </>
  );
}
export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: () => handleCopy(4) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Navbar" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Navbar\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "hoverColor" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Navbar\uC758 \uB9C1\uD06C\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB838\uC744 \uB54C \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"skyblue\" | \"blue\" | \"red\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"blue\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "position" }) }), (0, jsx_runtime_1.jsx)("td", { children: "Navbar\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"static\" | \"sticky\" | \"relative\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"static\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "logoSrc" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB85C\uACE0 \uC774\uBBF8\uC9C0\uC758 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "logoName" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB85C\uACE0 \uC606\uC5D0 \uD45C\uC2DC\uB420 \uC774\uB984\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "links" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uB124\uBE44\uAC8C\uC774\uC158 \uB9C1\uD06C\uB4E4\uC758 \uBC30\uC5F4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: `{ name: string; href: string }[]` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.6. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import { Navbar } from '@components/Navbar';
import Logo from "@/images/logo.svg";
            
function Example() {
  return (
    <div>
      <Navbar
        logoName="Componique"
        logoSrc={Logo}
        size="medium"
        hoverColor="blue"
        position="sticky"
        links={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}

export default Example;`, copyText: `import { Navbar } from '@components/Navbar';
            import Logo from "@/images/logo.svg";
            
function Example() {
  return (
    <div>
      <Navbar
        logoName="Componique"
        logoSrc={Logo}
        size="medium"
        hoverColor="blue"
        position="sticky"
        links={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 5, copied: copied, handleCopy: () => handleCopy(5) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. NavbarSearch" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "NavbarSearch" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6F9 \uC0AC\uC774\uD2B8\uC758 \uC0C1\uB2E8\uC5D0 \uB85C\uACE0\uC640 \uAC80\uC0C9 \uD544\uB4DC\uB97C \uD3EC\uD568\uD55C \uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD06C\uAE30\uC640 \uC785\uB825 \uD544\uB4DC \uC124\uC815\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uB9DE\uCDA4\uD615 \uAC80\uC0C9 \uBC14\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';`, copyText: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';`, language: "tsx", index: 6, copied: copied, handleCopy: () => handleCopy(6) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(NavbarSearch_1.default, { name: "search", id: "searchInput", maxLength: 8, type: "search", size: "medium", placeholder: "Search", onChange: (e) => console.log(e.target.value) }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';
  

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <NavbarSearch
      name="search"
      id="searchInput"
      maxLength={8}
      type="search"
      size="medium"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => console.log(e.target.value)}
    />
  );
}

export default Example;`, copyText: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';
  

function Example() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <NavbarSearch
      name="search"
      id="searchInput"
      maxLength={8}
      type="search"
      size="medium"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => console.log(e.target.value)}
    />
  );
}

export default Example;`, language: "tsx", index: 7, copied: copied, handleCopy: () => handleCopy(7) }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "NavbarSearch" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "name" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 name \uC18D\uC131\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "id" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 id \uC18D\uC131\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "maxLength" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uCD5C\uB300 \uAE38\uC774\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "size" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"small\" | \"medium\" | \"large\"" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"medium\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "placeholder" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "type" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "\"text\"" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "onChange" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAC80\uC0C9 \uC785\uB825 \uD544\uB4DC\uC758 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C \uD638\uCD9C\uB418\uB294 \uD578\uB4E4\uB7EC\uC785\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "(e: React.ChangeEvent<HTMLInputElement>)" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "-" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <div>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </div>
  );
}

export default Example;`, copyText: `import NavbarSearch from '@components/NavbarSearch/NavbarSearch';

function Example() {
  return (
    <div>
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size="medium"
        placeholder="Search"
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 8, copied: copied, handleCopy: () => handleCopy(8) })] }));
};
exports.default = NavbarDocs;
