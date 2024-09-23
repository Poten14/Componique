"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const colorClasses = {
    red: "border-[#FF7676] focus:ring-[#FF7676] dark:border-[#FF7676] dark:focus:ring-[#FF7676]",
    blue: "border-[#7AA7FF] focus:ring-[#7AA7FF] dark:border-[#7AA7FF] dark:focus:ring-[#7AA7FF] ",
    green: "border-[#7EEFAF] focus:ring-[#7EEFAF] dark:border-[#7EEFAF] dark:focus:ring-[#7EEFAF]",
    gray: "border-[#DCDCDD] dark:border-[#DCDCDD] focus:ring-[#DCDCDD] dark:focus:ring-[#DCDCDD] ",
};
const Select = ({ option, color = "gray", placeholder, onChange, onClick, className, }) => {
    const [selectValue, setSelectValue] = (0, react_1.useState)("");
    const [open, setOpen] = (0, react_1.useState)(false);
    const dropMenuRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handleOutsideClose = (e) => {
            if (open &&
                dropMenuRef.current &&
                !dropMenuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClose);
        return () => document.removeEventListener("click", handleOutsideClose);
    }, [open]);
    const handleDropDown = () => {
        setOpen(!open);
    };
    const handleOptionClick = (item) => {
        setSelectValue(item);
        setOpen(false);
        if (onChange) {
            onChange(item);
        }
        if (onClick) {
            onClick(item);
        }
    };
    return (<>
      <div className={`relative w-60 ${className}`} ref={dropMenuRef}>
        <div className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border dark:border-[#2A6490] dark:bg-[#2a2e39] ${colorClasses[color]} p-2 shadow-lg`} onClick={handleDropDown}>
          <span>{selectValue || placeholder}</span>
          <image_1.default src={open ? "/selectup.svg" : "/selectdown.svg"} alt="arrow" width={15} height={15}/>
        </div>
        {open && (<ul className={`absolute left-0 right-0 top-full m-0 rounded-lg border bg-white p-0 dark:bg-[#2a2e39] ${colorClasses[color]} z-30 shadow-lg`}>
            {option.map((item, key) => (<li className={`m-0 block w-full cursor-pointer rounded-lg py-2 pl-4 hover:bg-[#E8F5FF] dark:hover:bg-[#2A6490] dark:hover:text-white ${selectValue === item
                    ? "bg-[#E8F5FF] dark:bg-[#2A6490] dark:text-white"
                    : ""}`} key={key} onClick={() => handleOptionClick(item)}>
                {item}
              </li>))}
          </ul>)}
      </div>
    </>);
};
exports.default = Select;
