"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const Page = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        // MutationObserver를 사용하여 다크 모드 변경 감지
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        // 컴포넌트 언마운트 시 Observer 해제
        return () => {
            observer.disconnect();
        };
    }, []);
    return (<div className="relative h-screen w-full bg-[url('/404Image.svg')] bg-cover bg-center dark:bg-[url('/404ImageDark.svg')]">
      {/* 이미지에 있는 텍스트 아래에 버튼을 배치 */}
      <div className="absolute bottom-1/3 right-80 flex transform items-center justify-center">
        <link_1.default href={"/"}>
          <button>
            <image_1.default src={isDarkMode ? "/404Button-Docs-Dark.svg" : "/404Button-Docs.svg"} alt="DocsButton" width={200} height={200}/>
          </button>
        </link_1.default>
        <link_1.default href={"/userpage"}>
          <button className="ml-5">
            <image_1.default src={isDarkMode ? "/404Button-User-Dark.svg" : "/404Button-User.svg"} alt="UserButton" width={240} height={240}/>
          </button>
        </link_1.default>
      </div>
    </div>);
};
exports.default = Page;
