"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const navigation_1 = require("next/navigation");
const Icon_1 = __importDefault(require("./Icon/Icon"));
const Autocomplete = ({ options, placeholder = "Search for Components", onSelect, }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)([]);
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [moveCircle, setMoveCircle] = (0, react_1.useState)(false);
    const router = (0, navigation_1.useRouter)();
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // 입력한 값에 따라 옵션 필터링
        const filtered = options.filter((option) => option.value.toLowerCase().includes(value.toLowerCase()));
        setFilteredOptions(filtered);
        setIsDropdownOpen(true);
        if (!moveCircle && value) {
            setMoveCircle(true); // 노란색 동그라미를 드롭다운으로 옮기기
        }
    };
    const handleOptionClick = (option) => {
        setInputValue(option.value);
        onSelect(option.value);
        setIsDropdownOpen(false);
        setMoveCircle(false); // 선택 후 다시 초기화
        // 선택된 옵션에 따라 해당 페이지로 이동
        const pagePath = `/${option.value.toLowerCase().replace(/\s+/g, "")}`;
        router.push(pagePath);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const matchingOption = filteredOptions[0]; // 첫 번째 필터링된 옵션을 선택
            if (matchingOption) {
                handleOptionClick(matchingOption);
            }
            else if (inputValue) {
                const pagePath = `/${inputValue.toLowerCase().replace(/\s+/g, "")}`;
                router.push(pagePath);
            }
        }
    };
    // onBlur 이벤트와 onMouseDown 이벤트가 충돌하지 않도록
    const handleBlur = () => {
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 100);
    };
    // 라벨별 옵션 그룹화 렌더링
    const groupedOptions = filteredOptions.reduce((groups, option) => {
        const { label } = option;
        if (!groups[label]) {
            groups[label] = [];
        }
        groups[label].push(option);
        return groups;
    }, {});
    return (<div className="relative max-w-[740px]">
      <div className="flex h-16 items-center rounded-full bg-white px-4 shadow-lg focus-within:border-Basic focus-within:ring-2 focus-within:ring-Basic dark:bg-[#333742]">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#A4C8F0] dark:bg-Navy"></div>
          {!moveCircle && (<div className="h-8 w-8 rounded-full bg-[#E4C987] dark:bg-[#FFECB8]"></div>)}
        </div>
        <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} // 키보드 이벤트 처리 추가
     onFocus={() => setIsDropdownOpen(true)} onBlur={handleBlur} placeholder={placeholder} className="text-gray-600 placeholder-gray-400 flex-grow px-4 focus:outline-none dark:bg-[#333742] dark:text-[#dfdfdf]"/>
        <Icon_1.default name="icon-search" size={24} className="dark:bg-white"/>
      </div>
      {isDropdownOpen && (<ul className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg dark:bg-[#333742]">
          {moveCircle && (<li className="flex items-center space-x-2 p-3">
              <div className="h-8 w-8 rounded-full bg-[#E4C987] dark:bg-[#FFECB8]"></div>
              <span className="text-gray-600 pl-8 dark:text-[#dfdfdf]">
                {inputValue}
              </span>
            </li>)}
          {Object.entries(groupedOptions).map(([label, options]) => (<li key={label}>
              <div className="bg-gray-200 dark:bg-gray-800 p-2">
                <strong>{label}</strong>
              </div>
              <ul>
                {options.map((option, index) => (<li key={index} onMouseDown={() => handleOptionClick(option)} className="hover:bg-gray-100 flex cursor-pointer items-center p-3 pl-12 dark:text-[#dfdfdf]">
                    <div>
                      <Icon_1.default name="icon-docs2" color="#626262" size={24}/>
                      <span className="ml-2">{option.value}</span>
                    </div>
                  </li>))}
              </ul>
            </li>))}
          {filteredOptions.length === 0 && (<li className="text-gray-600 pb-2 pl-12 pt-2 dark:text-[#dfdfdf]">
              No options found
            </li>)}
        </ul>)}
    </div>);
};
exports.default = Autocomplete;
