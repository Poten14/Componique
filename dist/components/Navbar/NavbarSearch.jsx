"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const logo_svg_1 = __importDefault(require("../../../public/images/logo.svg"));
const SearchInput2_1 = __importDefault(require("../Input/SearchInput2"));
const LogoSection = () => (<div className="flex items-center justify-center">
    <image_1.default src={logo_svg_1.default} alt="logo" width={50} height={50}/>
    <span className="ml-2 text-2xl">Compunique</span>
  </div>);
const NavbarSearch = ({ name, id, maxLength, size = "medium", placeholder, type, value, onChange, ...props }) => {
    return (<div className="mx-auto mt-4 flex max-w-screen-lg items-center justify-between p-4 dark:bg-[#333742] dark:text-white">
      <LogoSection />
      <div className="relative">
        <SearchInput2_1.default name={name} id={id} maxLength={maxLength} size={size} // 전달된 size 사용
     placeholder={placeholder} type={type} value={value} onChange={onChange} {...props} // 나머지 props 전달
    />
      </div>
    </div>);
};
exports.default = NavbarSearch;
