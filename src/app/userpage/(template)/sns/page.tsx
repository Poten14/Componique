import SnsForm from "./components/Sns";
import RemoteSns from "app/userpage/Remote/RemoteSns";

const page = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">SNS 페이지</h1>
        <SnsForm />
      </div>
      <div className="w-1/4 p-4">
        <RemoteSns />
      </div>
    </div>
  );
};
export default page;
