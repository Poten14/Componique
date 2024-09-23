"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const Logo = () => {
    const router = (0, navigation_1.useRouter)();
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        checkDarkMode();
        // 다크 모드 변경 감지를 위한 MutationObserver 설정
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        // 컴포넌트가 언마운트될 때 observer 정리
        return () => observer.disconnect();
    }, []);
    // 다크 모드 여부에 따라 로고 이미지 소스를 결정
    const logoSrc = isDarkMode
        ? "/LogoDark.svg" // 다크 모드용 로고
        : "/Logo.svg"; // 라이트 모드용 로고
    return (<div className="ml-4 cursor-pointer" onClick={() => {
            router.push("/");
        }}>
      <image_1.default src={logoSrc} alt="logo" width={206} height={70}/>
    </div>);
};
exports.default = Logo;
