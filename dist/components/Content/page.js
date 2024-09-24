"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
// 이미지 객체에 다크 모드용 경로 추가
const components = [
    {
        title: "Form",
        images: [
            {
                name: "Button",
                src: "/Button.svg",
                darkSrc: "/ButtonDark.svg",
                link: "/button",
            },
            {
                name: "CheckBox",
                src: "/CheckBox.svg",
                darkSrc: "/CheckBoxDark.svg",
                link: "/checkbox",
            },
            {
                name: "Input",
                src: "/Input.svg",
                darkSrc: "/InputDark.svg",
                link: "/input",
            },
            {
                name: "Radio Button",
                src: "/RadioButton.svg",
                darkSrc: "/RadioButtonDark.svg",
                link: "/radiobutton",
            },
            {
                name: "Textarea",
                src: "/Textarea.svg",
                darkSrc: "/TextAreaDark.svg", //수정금지
                link: "/textarea",
            },
            {
                name: "Select",
                src: "/Select.svg",
                darkSrc: "/SelectDark.svg",
                link: "/select",
            },
            {
                name: "DropDown",
                src: "/DropDown.svg",
                darkSrc: "/DropDownDark.svg",
                link: "/dropdown",
            },
            {
                name: "AutoComplete",
                src: "/AutoComplete.svg",
                darkSrc: "/AutoCompleteDark.svg",
                link: "/autocomplete",
            },
            {
                name: "ColorPicker",
                src: "/ColorPicker.svg",
                darkSrc: "/ColorPickerDark.svg",
                link: "/colorpicker",
            },
            {
                name: "Switch",
                src: "/Switch.svg",
                darkSrc: "/SwitchDark.svg",
                link: "/switch",
            },
        ],
    },
    {
        title: "Data display",
        images: [
            {
                name: "Card",
                src: "/Card.svg",
                darkSrc: "/CardDark.svg",
                link: "/card",
            },
            {
                name: "Carousel",
                src: "/Carousel.svg",
                darkSrc: "/CarouselDark.svg",
                link: "/carousel",
            },
            {
                name: "Calendar",
                src: "/Calender.svg",
                darkSrc: "/CalenderDark.svg",
                link: "/calendar",
            },
            {
                name: "Avatar",
                src: "/Avatar.svg",
                darkSrc: "/AvatarDark.svg",
                link: "/avatar",
            },
            {
                name: "Icon",
                src: "/Icon.svg",
                darkSrc: "/IconDark.svg",
                link: "/icon",
            },
            {
                name: "ProgressBar",
                src: "/ProgressBar.svg",
                darkSrc: "/ProgressBarDark.svg",
                link: "/progressbar",
            },
            {
                name: "InfiniteScroll",
                src: "/InfiniteScroll.svg",
                darkSrc: "/InfiniteScrollDark.svg",
                link: "/infinitescroll",
            },
            {
                name: "ImageUpload",
                src: "/ImageUpload.svg",
                darkSrc: "/ImageUploadDark.svg",
                link: "/imageupload",
            },
            {
                name: "Badge",
                src: "/Badge.svg",
                darkSrc: "/BadgeDark.svg",
                link: "/badge",
            },
            {
                name: "Tooltip",
                src: "/Tooltip.svg",
                darkSrc: "/TooltipDark.svg",
                link: "/tooltip",
            },
            {
                name: "Rating",
                src: "/Rating.svg",
                darkSrc: "/RatingDark.svg",
                link: "/rating",
            },
            {
                name: "Map",
                src: "/Map.svg",
                darkSrc: "/MapDark.svg",
                link: "/map",
            },
            {
                name: "DataTable",
                src: "/DataTable.svg",
                darkSrc: "/DataTableDark.svg",
                link: "/datatable",
            },
        ],
    },
    {
        title: "Feedback",
        images: [
            {
                name: "Spinner",
                src: "/Spinner.svg",
                darkSrc: "/SpinnerDark.svg",
                link: "/spinner",
            },
            {
                name: "Toast(alert)",
                src: "/Toast.svg",
                darkSrc: "/ToastDark.svg",
                link: "/toast",
            },
            {
                name: "Skeleton",
                src: "/Skeleton.svg",
                darkSrc: "/SkeletonDark.svg",
                link: "/skeleton",
            },
            {
                name: "Modal",
                src: "/Modal.svg",
                darkSrc: "/ModalDark.svg",
                link: "/modal",
            },
            {
                name: "Validation",
                src: "/Validation.svg",
                darkSrc: "/ValidationDark.svg",
                link: "/validation",
            },
        ],
    },
    {
        title: "Navigation",
        images: [
            {
                name: "Pagination",
                src: "/Pagination.svg",
                darkSrc: "/PaginationDark.svg",
                link: "/pagination",
            },
            {
                name: "Drawer",
                src: "/Drawer.svg",
                darkSrc: "/DrawerDark.svg",
                link: "/drawer",
            },
            {
                name: "Navbar",
                src: "/Navbar.svg",
                darkSrc: "/NavbarDark.svg",
                link: "/navbar",
            },
            {
                name: "breadcrumb",
                src: "/BreadCrumb.svg",
                darkSrc: "/BreadCrumbDark.svg",
                link: "/breadcrumb",
                // 이거 왜자꾸 바뀌지
            },
        ],
    },
];
const Page = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto p-8", children: components.map((category) => ((0, jsx_runtime_1.jsxs)("div", { className: "m-3 p-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-3 flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "m-2 mb-1 h-4 w-4 rounded-full border-2 border-black dark:border-white" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold text-black dark:text-white", children: category.title })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-4 gap-4", children: category.images.map((image) => {
                        const imageSrc = isDarkMode ? image.darkSrc : image.src;
                        return ((0, jsx_runtime_1.jsx)(link_1.default, { href: image.link, className: "transform transition-transform duration-200 hover:scale-110", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: imageSrc, alt: image.name, width: 300, height: 212 }) }, image.name));
                    }) })] }, category.title))) }));
};
exports.default = Page;