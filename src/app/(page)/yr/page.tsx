import Navbar from "@components/Navbar/Navbar";
import NavbarSearch from "@components/Navbar/NavbarSearch";
import Logo from "../../../../public/images/logo.svg";
import Textarea from "@components/Textarea/Textarea";
import TextareaValue from "@components/Textarea/TextareaValue";
import Select from "@components/Select/Select";
import SelectValueAdd from "@components/Select/SelectValueAdd";

const page = () => {
  return (
    <>
      <div className="m-4 space-y-4">
        <SelectValueAdd
          option={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
      </div>
      {/* Navbar 연습 */}
      <div className="m-4 space-y-4">
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
          placeholder="option"
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
          placeholder="option"
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
          placeholder="option"
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
          placeholder="option"
          color="green"
        />
      </div>
    </>
  );
};
export default page;
