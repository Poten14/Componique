import Navbar from "@components/Navbar/Navbar";
import NavbarSearch from "@components/Navbar/NavbarSearch";
import Logo from "../../../../public/images/logo.svg";
import Textarea from "@components/Textarea/Textarea";

const page = () => {
  return (
    <>
      {/* Navbar 연습 */}
      <Navbar
        logoName="Compunique"
        logoSrc={Logo}
        size="small"
        hoverColor="blue"
        position="static"
      />
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        type="search"
        size={10}
        placeholder="Search"
      />
      {/* textarea 연습 */}
      <Textarea
        label="Your message"
        name="text"
        id="text"
        size="xs"
        rows={4}
        cols={20}
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
    </>
  );
};
export default page;
