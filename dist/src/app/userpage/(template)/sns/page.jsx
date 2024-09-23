import SnsForm from "./components/Sns";
import RemoteSns from "app/userpage/Remote/RemoteSns";
const page = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <SnsForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteSns />
      </div>
    </div>);
};
export default page;
