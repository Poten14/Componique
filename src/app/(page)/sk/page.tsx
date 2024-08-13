import Input1 from "@components/Input/Input1";
import SearchInput from "@components/Input/SearchInput";
import SearchInput2 from "@components/Input/SearchInput2";
import SearchInput3 from "@components/Input/SearchInput3";
const sk = () => {
  return (
    <>
      <div className="m-4 space-y-8">
        <Input1 size="xs" placeholder="extra small size" />
        <Input1 size="small" placeholder="small size" />
        <Input1 size="medium" placeholder="medium size" />
        <Input1 size="large" placeholder="large size" />
        <Input1 size="xl" placeholder="Extra large size" />
        <Input1 size="medium" variant="filled" placeholder="Filled input" />
        <Input1 size="medium" variant="outlined" placeholder="Outlined input" />
      </div>
      <div className="m-4 space-y-8">
        <SearchInput
          placeholder="Search..."
          activeColor="bg-Basic"
          inactiveColor="bg-gray-300"
          width="w-96"
        />
      </div>
      <div className="m-4 space-y-8">
        <SearchInput2 size="small" placeholder="Search..." />
        <SearchInput2 size="medium" placeholder="Search..." />
        <SearchInput2 size="large" placeholder="Search..." />
      </div>
      <div className="ml-4 space-y-7">
        <SearchInput3 size="small" color="Basic" buttonText="Search" />
        <SearchInput3 size="small" color="Danger" buttonText="Search" />
        <SearchInput3 size="medium" color="Primary" buttonText="Search" />
        <SearchInput3 size="medium" color="Secondary" buttonText="Search" />
        <SearchInput3 size="large" color="Success" buttonText="Search" />
        <SearchInput3 size="large" color="Warning" buttonText="Search" />
      </div>
    </>
  );
};
export default sk;
