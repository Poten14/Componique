import Navbar from "@/components/Navbar/Navbar";
import NavbarSearch from "@/components/Navbar/NavbarSearch";

const page = () => {
  return (
    <>
      <Navbar size="xl" hoverColor="blue" position="static" />
      <NavbarSearch
        name="search"
        id="searchInput"
        maxLength={8}
        size={10}
        placeholder="Search"
      />
    </>
  );
};
export default page;
