"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const bs_1 = require("react-icons/bs");
const SwitchDark = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // 다크 모드 상태를 로컬 스토리지에 저장
        localStorage.setItem("dark-mode", newMode ? "dark" : "light");
    };
    (0, react_1.useEffect)(() => {
        // 페이지 로드 시 저장된 모드 상태를 가져오기
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode === "dark") {
            setIsDarkMode(true);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        // 다크 모드에 따라 HTML 태그의 클래스 설정
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);
    return (<div className="mr-3 flex items-center justify-center space-x-12">
      <div onClick={toggleSwitch} className={`flex h-10 w-14 cursor-pointer items-center rounded-full p-1 shadow-lg ${isDarkMode ? "bg-[#232A31]" : "bg-[#FFFFFF]"}`}>
        {/* 아이콘 컨테이너 */}
        <div className="relative flex h-full items-center">
          {/* Sun 아이콘 */}
          <fa_1.FaMoon className={`absolute left-1 text-[#EDCE7B] transition-opacity duration-500 ease-in-out ${isDarkMode ? "opacity-100" : "opacity-0"}`}/>
          {/* Moon 아이콘 */}
          <bs_1.BsSunFill className={`absolute translate-x-7 text-[#FFECB8] transition-opacity duration-500 ease-in-out ${isDarkMode ? "opacity-0" : "opacity-100"}`}/>
          {/* 스위치 버튼 */}
          <div className={`h-5 w-5 transform rounded-full duration-700 ease-in-out ${isDarkMode ? "translate-x-7 bg-[#333742]" : "translate-x-1 bg-[#9AC5E5]"}`}/>
        </div>
      </div>
    </div>);
};
exports.default = SwitchDark;
