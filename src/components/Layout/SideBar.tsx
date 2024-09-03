"use client";
import { useRouter } from "next/navigation";
const SideBar = () => {
  const router = useRouter();
  return (
    <>
      <ul className="mx-4 h-full select-none overflow-y-auto">
        <li className="text-[#3e3e3e]">
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            FORM
          </span>
          <ul className="ml-6 space-y-1">
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/button");
              }}
            >
              Button
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/checkbox");
              }}
            >
              CheckBox
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/input");
              }}
            >
              Input
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/radiobutton");
              }}
            >
              Radio Button
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/textarea");
              }}
            >
              Textarea
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/select");
              }}
            >
              Select
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/dropdown");
              }}
            >
              DropDown
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/autocomplete");
              }}
            >
              AutoComplete
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/colorpicker");
              }}
            >
              ColorPicker
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/switch");
              }}
            >
              Switch
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Data display
          </span>
          <ul className="ml-6 space-y-1">
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/card");
              }}
            >
              Card
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/carousel");
              }}
            >
              Carousel
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/calendar");
              }}
            >
              Calendar
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/avatar");
              }}
            >
              Avatar
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/icon");
              }}
            >
              Icon
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/infinitescroll");
              }}
            >
              Infinite Scroll
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/imageupload");
              }}
            >
              Image Upload
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Feedback
          </span>
          <ul className="ml-6 space-y-1">
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/spinner");
              }}
            >
              Spinner
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/toast");
              }}
            >
              Toast
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/skeleton");
              }}
            >
              Skeleton
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/modal");
              }}
            >
              Modal
            </li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Navigation
          </span>
          <ul className="ml-6 space-y-1">
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/pagination");
              }}
            >
              Pagination
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/drawer");
              }}
            >
              Drawer
            </li>
            <li
              className="cursor-pointer hover:text-Basic"
              onClick={() => {
                router.push("/navbar");
              }}
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
