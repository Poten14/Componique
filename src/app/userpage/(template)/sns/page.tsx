import SnsForm from "./components/SnsForm";
import Remote from "./Remote";

const page = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/4 p-8">
          <h1 className="mb-4 text-2xl font-bold">SNS 페이지</h1>
          <SnsForm />
        </div>
        <Remote />
      </div>
    </>
  );
};
export default page;
