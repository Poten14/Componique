"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const UserPageLogoText = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode(); // 초기 다크 모드 상태 체크
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, []);
    return (<>
      <image_1.default src={isDarkMode ? "/ComponiqueDark.svg" : "/Componique.svg"} alt="로고 텍스트" width={350} className="fixed left-1/2 top-5 z-[999] -translate-x-1/2 cursor-pointer" height={54} onClick={() => {
            router.push("/userpage/sns");
        }}/>
    </>);
};
exports.default = UserPageLogoText;
