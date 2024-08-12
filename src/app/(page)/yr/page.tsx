import Navbar from "@/components/Navbar/Navbar";
import NavbarSearch from "@/components/Navbar/NavbarSearch";
import Logo from "../../../../public/images/logo.svg";

const page = () => {
  return (
    <>
      <Navbar
        logoName="Compunique"
        logoSrc={Logo}
        size="xl"
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
    </>
  );
};
export default page;
