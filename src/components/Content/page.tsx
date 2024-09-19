import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      },
    ],
  },
];

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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

  return (
    <div className="container mx-auto p-8">
      {components.map((category) => (
        <div key={category.title} className="m-3 p-3">
          <div className="mb-3 flex items-center">
            <div className="m-2 mb-1 h-4 w-4 rounded-full border-2 border-black dark:border-white"></div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {category.title}
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {category.images.map((image) => {
              const imageSrc = isDarkMode ? image.darkSrc : image.src;

              return (
                <Link
                  href={image.link}
                  key={image.name}
                  className="transform transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={imageSrc}
                    alt={image.name}
                    width={300}
                    height={212}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
