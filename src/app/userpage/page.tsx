import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Link href="/userpage/webtoon">
        <p>Webtoon</p>
      </Link>
      <div className="w-[1000px]">
        <div className="flex w-full flex-wrap items-center justify-around">
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/230/353" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
