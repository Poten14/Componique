"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const react_2 = require("react");
const image_1 = __importDefault(require("next/image"));
const UserPageLeftSidebar = () => {
    const router = (0, navigation_1.useRouter)();
    const [hoverNumber, setHoverNumber] = (0, react_2.useState)(null);
    const [isDarkMode, setIsDarkMode] = (0, react_2.useState)(false);
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
    const templateList = [
        {
            title: "SNS",
            path: "/sns",
            image: "/userSns.svg",
            imageDark: "/userSnsDark.svg",
            component: ["Image Upload", "Carousel", "Icon"],
            description: "사용자 아이디, 문구, 이미지 등 원하는 내용을 적고 소개 할 수 있는 폼입니다.",
        },
        {
            title: "Profile",
            path: "/profile",
            image: "/userProfile.svg",
            imageDark: "/userProfileDark.svg",
            component: ["Input", "Select", "Image Upload"],
            description: "사용자의 프로필을 볼 수 있는 폼입니다.",
        },
        {
            title: "Survey",
            path: "/survey",
            image: "/userSurvey.svg",
            imageDark: "/userSurveyDark.svg",
            component: ["Checkbox", "Button", "RadioButton"],
            description: "설문조사의 내용을 입력 할 수 있는 폼입니다.",
        },
        {
            title: "ColorPicker",
            path: "/colorpicker",
            image: "/userColorpicker.svg",
            imageDark: "/userColorpickerDark.svg",
            component: ["Color Picker", "Button"],
            description: "사용자가 원하는 색상을 선택하거나 만들어서 배경에 적용해볼 수 있는 페이지입니다. ",
        },
        {
            title: "Shopping",
            path: "/shopping",
            image: "/userShopping.svg",
            imageDark: "/userShoppingDark.svg",
            component: ["Select", "Navbar", "Card", "Pagination"],
            description: "상품 목록, 선택 옵션, 결제 버튼 등으로 구성된 쇼핑 페이지입니다.",
        },
        {
            title: "Login",
            path: "/login",
            image: "/userLogin.svg",
            imageDark: "/userLoginDark.svg",
            component: ["Button", "input"],
            description: "로그인 폼의 기본 구조와 디자인을 제공하는 UI 폼입니다.",
        },
        {
            title: "TodoList",
            path: "/todolist",
            image: "/userTodolist.svg",
            imageDark: "/userTodolistDark.svg",
            component: ["CheckBox", "Input", "Button"],
            description: "할일 목록을 추가 및 삭제를 할 수 있는 폼입니다",
        },
        {
            title: "CustomerService",
            path: "/customerservice",
            image: "/userCustomerservice.svg",
            imageDark: "/userCustomerserviceDark.svg",
            component: ["Input", "Textarea", "Button", "Dropdown", "Image Upload"],
            description: "간단한 연락처 또는 문의를 받을 수 있는 폼입니다.",
        },
    ];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full flex-wrap justify-center overflow-y-auto rounded-2xl", children: (0, jsx_runtime_1.jsx)("ul", { className: "mt-10 flex w-full flex-wrap justify-evenly", children: templateList.map((item, index) => ((0, jsx_runtime_1.jsxs)("li", { className: "relative mb-5 cursor-pointer rounded-lg", onMouseEnter: () => setHoverNumber(templateList.indexOf(item)), onMouseLeave: () => setHoverNumber(null), onClick: () => router.push(`/userpage${item.path}`), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "mr-2 h-2 w-2 rounded-full bg-Basic" }), (0, jsx_runtime_1.jsx)("p", { className: "z-5 text-xl", children: item.title })] }), (0, jsx_runtime_1.jsx)(image_1.default, { src: isDarkMode ? item.imageDark : item.image, alt: item.title, width: 200, height: 270, className: "rounded-xl border border-Basic dark:border-[#2A6490]" }), (0, jsx_runtime_1.jsxs)("article", { className: `text-md absolute bottom-0 left-0 z-0 w-[200px] overflow-hidden rounded-b-xl bg-gradient-to-b from-transparent to-blue-400/60 p-3 transition-transform duration-1000 ease-out dark:from-transparent dark:to-white/60 ${hoverNumber === templateList.indexOf(item)
                                ? "opacity-100"
                                : "opacity-0"}`, children: [(0, jsx_runtime_1.jsx)("p", { className: "dark:text-gray", children: item.description }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2 flex w-full flex-wrap justify-center text-center", children: item.component.map((component, componentIndex) => ((0, jsx_runtime_1.jsx)("p", { className: "m-1 rounded-full border border-Basic p-1 px-2 text-sm font-bold text-white dark:border-Navy dark:text-Navy", children: component }, componentIndex))) })] })] }, index))) }) }) }));
};
exports.default = UserPageLeftSidebar;
