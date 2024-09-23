"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const SideBar = () => {
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    return (<>
      <ul className="mx-4 h-full select-none overflow-y-auto dark:bg-[#252629]">
        <li className="text-[#3e3e3e] dark:text-[#DFDFDF]">
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Getting Started
          </span>
          <ul className="ml-6 space-y-1">
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/introduction" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/introduction")}>
              Introduction
            </li>
          </ul>
        </li>
        <li className="text-[#3e3e3e] dark:text-[#DFDFDF]">
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            FORM
          </span>
          <ul className="ml-6 space-y-1">
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/button" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/button")}>
              Button
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/checkbox" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/checkbox")}>
              CheckBox
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/input" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/input")}>
              Input
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/radiobutton" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/radiobutton")}>
              RadioButton
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/textarea" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/textarea")}>
              Textarea
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/select" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/select")}>
              Select
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/dropdown" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/dropdown")}>
              DropDown
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/autocomplete" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/autocomplete")}>
              AutoComplete
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/colorpicker" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/colorpicker")}>
              ColorPicker
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/switch" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/switch")}>
              Switch
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Data Display
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/card" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/card")}>
              Card
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/carousel" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/carousel")}>
              Carousel
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/calendar" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/calendar")}>
              Calendar
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/avatar" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/avatar")}>
              Avatar
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/icon" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/icon")}>
              Icon
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/progressbar" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/progressbar")}>
              ProgressBar
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/infinitescroll" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/infinitescroll")}>
              InfiniteScroll
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/imageupload" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/imageupload")}>
              ImageUpload
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/badge" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/badge")}>
              Badge
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/tooltip" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/tooltip")}>
              Tooltip
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/rating" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/rating")}>
              Rating
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/map" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/map")}>
              Map
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/datatable" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/datatable")}>
              DataTable
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Feedback
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/spinner" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/spinner")}>
              Spinner
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/toast" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/toast")}>
              Toast
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/skeleton" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/skeleton")}>
              Skeleton
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/modal" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/modal")}>
              Modal
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/formvalidation" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/validation")}>
              FormValidation
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Navigation
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/pagination" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/pagination")}>
              Pagination
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/drawer" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/drawer")}>
              Drawer
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/navbar" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/navbar")}>
              Navbar
            </li>
            <li className={`cursor-pointer hover:text-Basic ${pathname === "/breadcrumb" ? "font-bold text-Basic" : ""}`} onClick={() => router.push("/breadcrumb")}>
              Breadcrumb
            </li>
          </ul>
        </li>
      </ul>
    </>);
};
exports.default = SideBar;
