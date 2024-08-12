import Link from "next/link";

const js = () => {
  return (
    <>
      <div className="mt-32 text-xl">
        <h1 className="flex justify-center text-2xl font-bold">
          김준수 컴포넌트 페이지
        </h1>
        <div className="flex justify-center">
          <Link
            href={"/js/RadioButton"}
            className="rou bold-white mt-12 rounded-lg bg-orange-400 p-4 font-bold"
          >
            라디오버튼
          </Link>
        </div>
      </div>
    </>
  );
};
export default js;
