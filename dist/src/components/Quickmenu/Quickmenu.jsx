"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const Quickmenu = () => {
    const [quickMenu, setQuickMenu] = (0, react_1.useState)([]);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(null);
    const pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(() => {
        const menuPathname = () => {
            const menus = Array.from(document.querySelectorAll("h1, h2"));
            const items = menus.map((menu, index) => {
                const id = menu.id || `menu-${index}`;
                menu.id = id;
                return {
                    label: menu.textContent || `menu ${index + 1}`,
                    id,
                    tag: menu.tagName.toLowerCase(),
                };
            });
            setQuickMenu(items);
        };
        menuPathname();
    }, [pathname]);
    // Intersection observer api 스크롤 구현
    (0, react_1.useEffect)(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    //
                }
            });
        };
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -50% 0px",
            threshold: 0.1,
        };
    }, []);
    const handleClick = (index, id) => {
        setActiveIndex(index);
        const moveMenu = document.getElementById(id);
        if (moveMenu) {
            moveMenu.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (<>
      <div className="fixed right-10 top-1/3 h-[500px] w-60 justify-end overflow-y-scroll overscroll-y-auto text-sm">
        <div className="pb-2 dark:text-white">On This Page</div>
        <div>
          <ul className="pl-4">
            {quickMenu.map((item, index) => (<li className={`${activeIndex === index ? "font-bold text-[#9AC5E5]" : "text-[#4A5568] hover:text-black dark:hover:text-white"} cursor-pointer py-1 ${item.tag === "h2" ? "pl-3" : ""}`} key={index} onClick={() => handleClick(index, item.id)}>
                <link_1.default href={`#${item.id}`}>{item.label}</link_1.default>
              </li>))}
          </ul>
        </div>
      </div>
    </>);
};
exports.default = Quickmenu;
