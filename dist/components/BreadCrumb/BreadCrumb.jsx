"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("../Icon/Icon"));
const hoverColorClasses = {
    black: "hover:text-black dark:hover:text-white",
    Basic: "hover:text-[#9AC5E5] dark:hover:text-[#9AC5E5]",
    Primary: "hover:text-[#7AA7FF] dark:hover:text-[#7AA7FF]",
    Danger: "hover:text-[#FF7676] dark:hover:text-[#FF7676]",
};
const activeColorClasses = {
    black: "text-black dark:text-white",
    Basic: "text-[#9AC5E5] dark:text-[#9AC5E5]",
    Primary: "text-[#7AA7FF] dark:text-[#7AA7FF]",
    Danger: "text-[#FF7676] dark:text-[#FF7676]",
};
const BreadCrumb = ({ items, hoverColor = "black", activeColor = "black", }) => {
    return (<div className="flex">
      <div className="inline-flex items-center space-x-1">
        {items.map((item, index) => (<div key={index} className="inline-flex items-center">
            {index !== 0 && <Icon_1.default name="icon-next" color="gray"/>}
            {item.href ? (<a href={item.href} className={`text-md font-medium text-gray dark:text-gray ${hoverColorClasses[hoverColor]} ${item.className}`}>
                {item.children}
              </a>) : (<span className={`text-md font-medium ${activeColorClasses[activeColor]} ${item.className}`} aria-current="page">
                {item.children}
              </span>)}
          </div>))}
      </div>
    </div>);
};
exports.default = BreadCrumb;
