const SideBar = () => {
  return (
    <>
      <ul className="mx-4 h-full overflow-y-auto">
        <li className="text-[#3e3e3e]">
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            FORM
          </span>
          <ul className="ml-6 space-y-1">
            <li>Button</li>
            <li>CheckBox</li>
            <li>Input</li>
            <li>Radio Button</li>
            <li>Textarea</li>
            <li>Select</li>
            <li>DropDown</li>
            <li>AutoComplete</li>
            <li>ColorPicker</li>
            <li>Switch</li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Data display
          </span>
          <ul className="ml-6 space-y-1">
            <li>Card</li>
            <li>Carousel</li>
            <li>Calendar</li>
            <li>Avatar</li>
            <li>Icon</li>
            <li>Infinite Scroll</li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Feedback
          </span>
          <ul className="ml-6 space-y-1">
            <li>Spinner</li>
            <li>Toast</li>
            <li>Skeleton</li>
            <li>Modal</li>
          </ul>
        </li>

        <li>
          <span className="my-2 block rounded bg-[#f8f8f8] py-2 pl-4 text-[#9AC5E5]">
            Navigation
          </span>
          <ul className="ml-6 space-y-1">
            <li>Pagination</li>
            <li>Drawer</li>
            <li>Navbar</li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default SideBar;
