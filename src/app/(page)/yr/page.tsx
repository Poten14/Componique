import Navbar from "@components/Navbar/Navbar";
import NavbarSearch from "@components/Navbar/NavbarSearch";
import Logo from "../../../../public/images/logo.svg";
import Textarea from "@components/Textarea/Textarea";
import TextareaValue from "@components/Textarea/TextareaValue";
import Select from "@components/Select/Select";
import SelectValueAdd from "@components/Select/SelectValueAdd";
import SelectList from "@components/Select/SelectList";
import Skeleton from "@components/Skeleton/Skeleton";
import SkeletonCard from "@components/Skeleton/SkeletonCard";
import Calendar from "@components/Calendar/Calendar";
import CalendarRange from "@components/Calendar/CalendarRange";
import Carousel from "@components/Carousel/Carousel";
import CarouselAutoplay from "@components/Carousel/CarouselAutoplay";
import CarouselDots from "@components/Carousel/CarouselDots";

const page = () => {
  const images = [
    "images/IfSc1.svg",
    "images/IfSc2.svg",
    "images/IfSc3.svg",
    "images/IfSc4.svg",
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar 연습 */}
      <div className="m-4 space-y-4">
        <Navbar
          logoName="Compunique"
          logoSrc={Logo}
          size="small"
          hoverColor="blue"
          position="static"
          links={navLinks}
        />
        <Navbar
          logoName="Compunique"
          logoSrc={Logo}
          size="medium"
          hoverColor="blue"
          position="static"
          links={navLinks}
        />
        <Navbar
          logoName="Compunique"
          logoSrc={Logo}
          size="large"
          hoverColor="blue"
          position="static"
          links={navLinks}
        />
        <NavbarSearch
          name="search"
          id="searchInput"
          maxLength={8}
          type="search"
          size="medium"
          placeholder="Search"
        />
      </div>
      {/* textarea 연습 */}
      <div className="m-4 space-y-4">
        <Textarea
          label="Your message"
          name="text"
          id="text"
          size="xs"
          rows={4}
          cols={20}
          disabled
          placeholder="Write"
        />
        <Textarea
          label="Your message"
          name="text"
          id="text"
          size="small"
          color="blue"
          rows={4}
          cols={20}
          placeholder="Write"
        />
        <Textarea
          label="Your message"
          name="text"
          id="text"
          size="medium"
          color="red"
          rows={4}
          cols={20}
          placeholder="Write"
        />
        <Textarea
          label="Your message"
          name="text"
          id="text"
          size="large"
          color="green"
          rows={4}
          cols={20}
          placeholder="Write"
        />
        <Textarea
          label="Your message"
          name="text"
          id="text"
          size="xl"
          color="gray"
          rows={4}
          cols={20}
          placeholder="Write"
        />
      </div>
      <div className="m-4 space-y-4">
        <TextareaValue />
      </div>
      {/* select 구현 */}
      <div className="m-4 flex items-center gap-4">
        <Select
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
          ]}
          defaultValue="option"
          color="gray"
        />
        <Select
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
          ]}
          defaultValue="option"
          color="red"
        />
        <Select
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
          ]}
          defaultValue="option"
          color="blue"
        />
        <Select
          option={[
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5",
            "Option 6",
            "Option 7",
          ]}
          defaultValue="option"
          color="green"
        />
      </div>
      <div className="m-4 space-y-4">
        <SelectValueAdd
          option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
      </div>
      <div className="m-4 space-y-4">
        <SelectList option={["option1", "option2", "option3", "option4"]} />
      </div>
      {/* Skeleton 구현 */}
      <div className="m-4 flex gap-6">
        <Skeleton size="small" variants="rounded" animate={true} />
        <Skeleton size="medium" variants="rounded" animate={true} />
        <Skeleton size="large" variants="rectangular" animate={true} />
      </div>
      <div className="m-4 flex gap-6">
        <SkeletonCard width="w-1/5" hasAvatar={true} hasImage={true} />
        <SkeletonCard
          width="w-1/5"
          height="h-32"
          hasAvatar={false}
          hasImage={false}
        />
      </div>
      <div className="m-4">
        <Calendar defaultValue={new Date(2024, 7, 22)} />
      </div>
      <div className="m-4">
        <CalendarRange />
      </div>
      <div className="m-4">
        <Carousel images={images} />
      </div>
      <div className="m-4">
        <CarouselAutoplay images={images} interval={3000} autoplay={true} />
      </div>

      <div className="m-4">
        <CarouselDots images={images} showDots={true} />
      </div>
    </>
  );
};
export default page;
