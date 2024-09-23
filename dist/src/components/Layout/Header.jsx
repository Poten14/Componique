"use client";
import React, { useState, useEffect } from "react";
import Logo from "@components/Layout/Logo";
import UserPage from "@components/Layout/UserPage";
import HamburgerMenu from "./HamburgerMenu";
import Drawer from "@components/Drawer/Drawer";
import Button from "@components/Button/Button";
import SwitchDark from "@components/Swtich/SwitchDark";
import { usePathname } from "next/navigation";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        // 다크 모드 상태 체크 함수
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
    useEffect(() => {
        const onScrollHandler = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", onScrollHandler);
        return () => {
            window.removeEventListener("scroll", onScrollHandler);
        };
    }, []);
    const onclickDrawerHandler = (open) => () => {
        setIsDrawerOpen(open);
    };
    const onclickDrawerHandler2 = (open) => () => {
        setIsDrawer2Open(open);
    };
    return (<header className={`fixed left-0 top-0 z-20 flex h-[90px] w-full items-center justify-between transition-colors duration-300 ${isScrolled ? "bg-white shadow-md dark:bg-[#252629]" : "bg-transparent"}`}>
      <div className="flex items-center justify-between">
        {pathname.startsWith("/userpage") ? (<Button className="ml-4 mr-2 dark:bg-[#333742] xl:hidden" radius="full" onClick={onclickDrawerHandler2(true)}>
            <HamburgerMenu />
          </Button>) : ("")}
        <Logo />
      </div>
      <div className="flex items-center">
        <SwitchDark />
        <UserPage />
        {pathname.startsWith("/userpage") ? ("") : (<Button className="mr-2 dark:bg-[#333742] xl:hidden" radius="full" onClick={onclickDrawerHandler(true)}>
            <HamburgerMenu />
          </Button>)}
        <Drawer className="!text-[#9AC5E5] dark:bg-[#252629] dark:text-white" isOpen={isDrawer2Open} onClose={onclickDrawerHandler2(false)} color="white" bgColor="white" logo={isDarkMode ? "/LogoDark.svg" : "/componique_logo_full.svg"} menu={[
            {
                items: [
                    { name: "SNS", path: "/userpage/sns" },
                    { name: "Profile", path: "/userpage/profile" },
                    { name: "Survey", path: "/userpage/survey" },
                    { name: "ColorPicker", path: "/userpage/colorpicker" },
                    { name: "Shopping", path: "/userpage/shopping" },
                    { name: "Login", path: "/userpage/login" },
                    { name: "TodoList", path: "/userpage/todolist" },
                    { name: "CustomerService", path: "/userpage/customerservice" },
                ],
            },
        ]}/>
        <Drawer isOpen={isDrawerOpen} className="bg-white text-[#3e3e3e] dark:bg-[#252629] dark:text-white" // 다크 모드에서 텍스트 및 배경색 변경
     onClose={onclickDrawerHandler(false)} color="white" bgColor="white" // 기본 모드에서는 white 사용
     logo={isDarkMode ? "/LogoDark.svg" : "/componique_logo_full.svg"} // 다크 모드에 따라 로고 변경
     position="right" menu={[
            {
                groupName: "Getting Started",
                groupNameClassName: "!text-[#9AC5E5] dark:!text-[#2A6490] bg-[#f8f8f8] dark:bg-[#2A2E39] py-2",
                items: [
                    {
                        name: "Introduction",
                        path: "/introduction",
                        className: "py-0",
                    },
                    {
                        name: "Installation",
                        path: "/installation",
                        className: "py-0",
                    },
                ],
            },
            {
                groupName: "FORM",
                groupNameClassName: "!text-[#9AC5E5] dark:!text-[#2A6490] bg-[#f8f8f8] dark:bg-[#2A2E39] py-2",
                items: [
                    { name: "Button", path: "/button", className: "py-0" },
                    { name: "CheckBox", path: "/checkbox", className: "py-0" },
                    { name: "Input", path: "/input", className: "py-0" },
                    {
                        name: "RadioButton",
                        path: "/radiobutton",
                        className: "py-0",
                    },
                    { name: "Textarea", path: "/textarea", className: "py-0" },
                    { name: "Select", path: "/select", className: "py-0" },
                    { name: "DropDown", path: "/dropdown", className: "py-0" },
                    {
                        name: "AutoComplete",
                        path: "/autocomplete",
                        className: "py-0",
                    },
                    {
                        name: "ColorPicker",
                        path: "/colorpicker",
                        className: "py-0",
                    },
                    { name: "Switch", path: "/switch", className: "py-0" },
                ],
            },
            {
                groupName: "Data Display",
                groupNameClassName: "!text-[#9AC5E5] dark:!text-[#2A6490] bg-[#f8f8f8] dark:bg-[#2A2E39] py-2",
                items: [
                    { name: "Card", path: "/card", className: "py-0" },
                    { name: "Carousel", path: "/carousel", className: "py-0" },
                    { name: "Calendar", path: "/calendar", className: "py-0" },
                    { name: "Avatar", path: "/avatar", className: "py-0" },
                    { name: "Icon", path: "/icon", className: "py-0" },
                    {
                        name: "ProgressBar",
                        path: "/progressbar",
                        className: "py-0",
                    },
                    {
                        name: "InfiniteScroll",
                        path: "/infinitescroll",
                        className: "py-0",
                    },
                    {
                        name: "ImageUpload",
                        path: "/imageupload",
                        className: "py-0",
                    },
                    {
                        name: "Badge",
                        path: "/badge",
                        className: "py-0",
                    },
                    {
                        name: "Tooltip",
                        path: "/tooltip",
                        className: "py-0",
                    },
                    {
                        name: "Rating",
                        path: "/rating",
                        className: "py-0",
                    },
                    {
                        name: "Map",
                        path: "/map",
                        className: "py-0",
                    },
                    {
                        name: "DataTable",
                        path: "/datatable",
                        className: "py-0",
                    },
                ],
            },
            {
                groupName: "Feedback",
                groupNameClassName: "!text-[#9AC5E5] dark:!text-[#2A6490] bg-[#f8f8f8] dark:bg-[#2A2E39] py-2",
                items: [
                    { name: "Spinner", path: "/spinner", className: "py-0" },
                    { name: "Toast", path: "/toast", className: "py-0" },
                    { name: "Skeleton", path: "/skeleton", className: "py-0" },
                    { name: "Modal", path: "/modal", className: "py-0" },
                    {
                        name: "FormValidation",
                        path: "/validation",
                        className: "py-0",
                    },
                ],
            },
            {
                groupName: "Navigation",
                groupNameClassName: "!text-[#9AC5E5] dark:!text-[#2A6490] bg-[#f8f8f8] dark:bg-[#2A2E39] py-2",
                items: [
                    { name: "Pagination", path: "/pagination", className: "py-0" },
                    { name: "Drawer", path: "/drawer", className: "py-0" },
                    { name: "Navbar", path: "/navbar", className: "py-0" },
                    { name: "BreadCrumb", path: "/breadcrumb", className: "py-0" },
                ],
            },
        ]}/>
      </div>
    </header>);
};
export default Header;
