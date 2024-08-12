import Input1 from "@components/Input/Input1";
const sk = () => {
  return (
    <>
      <Input1 size="xs" placeholder="extra small size" />
      <Input1 size="sm" placeholder="small size" />
      <Input1 size="md" placeholder="medium size" />
      <Input1 size="lg" placeholder="large size" />
      <Input1 size="xl" placeholder="Extra large size" />
      <Input1 size="md" variant="filled" placeholder="Filled input" />
      <Input1 size="md" variant="outlined" placeholder="Outlined input" />
    </>
  );
};
export default sk;
