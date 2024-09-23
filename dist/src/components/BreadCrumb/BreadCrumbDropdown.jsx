"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const BreadCrumbDropdown = ({ items }) => {
    const [dropdownOpen, setDropdownOpen] = (0, react_1.useState)(false);
    const [activeDropdown, setActiveDropdown] = (0, react_1.useState)(null);
    const router = (0, navigation_1.useRouter)();
    const dropdownRef = (0, react_1.useRef)(null);
    const handleDropdownToggle = (index) => {
        setDropdownOpen(!dropdownOpen);
        setActiveDropdown(index);
    };
    const handleItemClick = (href) => {
        router.push(href);
    };
    (0, react_1.useEffect)(() => {
        const handleOutsideClose = (e) => {
            if (dropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClose);
        return () => {
            document.removeEventListener("click", handleOutsideClose);
        };
    }, [dropdownOpen]);
    return (<div>
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (<li key={index} className="flex items-center">
            {item.href ? (<a href={item.href} className={`text-gray hover:text-black dark:text-gray dark:hover:text-white ${item.className ? item.className : ""}`}>
                {item.children}
              </a>) : (<div className="relative" ref={dropdownRef}>
                <div className="flex cursor-pointer items-center text-gray hover:text-black dark:hover:text-white" onClick={() => handleDropdownToggle(index)}>
                  {item.children}
                  {item.dropdownItems && <Icon_1.default name="icon-down" color="gray"/>}
                </div>
                {dropdownOpen &&
                    activeDropdown === index &&
                    item.dropdownItems && (<div className="absolute z-50 mt-1 flex w-full flex-col rounded-md border bg-white shadow-md dark:border-gray dark:bg-[#2A2E39] dark:hover:text-white">
                      {item.dropdownItems.map((dropdownItem, idx) => (<a key={idx} href={dropdownItem.href} onClick={() => handleItemClick(dropdownItem.href)} className="flex cursor-pointer rounded-md p-2 text-sm hover:bg-[#E8F5FF] dark:bg-[#2A2E39] dark:text-gray dark:hover:bg-[#2A6490] dark:hover:text-white">
                          {dropdownItem.label}
                        </a>))}
                    </div>)}
              </div>)}
            {index < items.length - 1 && <Icon_1.default name="icon-next" color="gray"/>}
          </li>))}
      </ul>
    </div>);
};
exports.default = BreadCrumbDropdown;
