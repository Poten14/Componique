import Image from "next/image";
import Link from "next/link";
const components = [
  {
    title: "Form",
    images: [
      { name: "Button", src: "/Button.svg", link: "/button" },
      { name: "CheckBox", src: "/CheckBox.svg", link: "/checkbox" },
      { name: "Input", src: "/Input.svg", link: "/input" },
      { name: "Radio Button", src: "/RadioButton.svg", link: "/radiobutton" },
      { name: "Textarea", src: "/Textarea.svg", link: "/textarea" },
      { name: "Select", src: "/Select.svg", link: "/select" },
      { name: "DropDown", src: "/DropDown.svg", link: "/dropdown" },
      { name: "AutoComplete", src: "/AutoComplete.svg", link: "/autocomplete" },
      { name: "ColorPicker", src: "/ColorPicker.svg", link: "/colorpicker" },
      { name: "Switch", src: "/Switch.svg", link: "/switch" },
    ],
  },
  {
    title: "Data display",
    images: [
      { name: "Card", src: "/Card.svg", link: "/card" },
      { name: "Carousel", src: "/Carousel.svg", link: "/carousel" },
      { name: "Calendar", src: "/Calender.svg", link: "/calendar" },
      { name: "Avatar", src: "/Avatar.svg", link: "/avatar" },
      { name: "Icon", src: "/Icon.svg", link: "/icon" },
      {
        name: "InfiniteScroll",
        src: "/InfiniteScroll.svg",
        link: "/InfiniteScroll",
      },
    ],
  },
  {
    title: "Feedback",
    images: [
      { name: "Spinner", src: "/Spinner.svg", link: "/spinner" },
      { name: "Toast(alert)", src: "/Toast.svg", link: "/toast" },
      { name: "Skeleton", src: "/Skeleton.svg", link: "/skeleton" },
      { name: "Modal", src: "/Modal.svg", link: "/modal" },
    ],
  },
  {
    title: "Navigation",
    images: [
      { name: "Pagination", src: "/Pagination.svg", link: "/pagination" },
      { name: "Drawer", src: "/Drawer.svg", link: "/drawer" },
      { name: "Navbar", src: "/Navbar.svg", link: "/navbar" },
    ],
  },
];

const page = () => {
  return (
    <div className="container mx-auto p-8">
      {components.map((category) => (
        <div key={category.title} className="m-3 p-3">
          <div className="mb-3 flex items-center">
            <div className="m-2 mb-1 h-4 w-4 rounded-full border-2 border-black"></div>
            <h2 className="text-2xl font-bold">{category.title}</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {category.images.map((image) => (
              <Link
                href={image.link}
                key={image.name}
                className="transform transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={212}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
