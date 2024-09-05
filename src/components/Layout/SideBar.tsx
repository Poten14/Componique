"use client";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <ul className="mx-4 h-full select-none overflow-y-auto dark:bg-[#252629]">
        <li className="text-[#3e3e3e] dark:text-[#DFDFDF]">
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            FORM
          </span>
          <ul className="ml-6 space-y-1">
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/button" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/button")}
            >
              Button
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/checkbox" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/checkbox")}
            >
              CheckBox
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/input" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/input")}
            >
              Input
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/radiobutton" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/radiobutton")}
            >
              Radio Button
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/textarea" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/textarea")}
            >
              Textarea
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/select" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/select")}
            >
              Select
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/dropdown" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/dropdown")}
            >
              DropDown
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/autocomplete" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/autocomplete")}
            >
              AutoComplete
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/colorpicker" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/colorpicker")}
            >
              ColorPicker
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/switch" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/switch")}
            >
              Switch
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Data display
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/card" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/card")}
            >
              Card
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/carousel" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/carousel")}
            >
              Carousel
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/calendar" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/calendar")}
            >
              Calendar
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/avatar" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/avatar")}
            >
              Avatar
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/icon" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/icon")}
            >
              Icon
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/progressbar" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/progressbar")}
            >
              Progress Bar
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/infinitescroll" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/infinitescroll")}
            >
              Infinite Scroll
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/imageupload" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/imageupload")}
            >
              Image Upload
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Feedback
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/spinner" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/spinner")}
            >
              Spinner
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/toast" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/toast")}
            >
              Toast
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/skeleton" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/skeleton")}
            >
              Skeleton
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/modal" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/modal")}
            >
              Modal
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5] dark:bg-[#2A2E39] dark:text-[#2A6490]">
            Navigation
          </span>
          <ul className="ml-6 space-y-1 dark:text-[#DFDFDF]">
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/pagination" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/pagination")}
            >
              Pagination
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/drawer" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/drawer")}
            >
              Drawer
            </li>
            <li
              className={`cursor-pointer hover:text-Basic ${
                pathname === "/navbar" ? "text-Basic" : ""
              }`}
              onClick={() => router.push("/navbar")}
            >
              Navbar
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
