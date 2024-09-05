"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const UserPage = () => {
  const router = useRouter();
  const templateList = [
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
    {
      title: "webtoon",
      path: "/webtoon",
    },
  ];

  return (
    <div>
      <ul className="mt-10 flex w-[1000px] flex-wrap justify-evenly">
        {templateList.map((item, index) => (
          <li
            key={index}
            className="relative mb-6 h-[460px] w-[300px] cursor-pointer rounded-lg bg-red-100"
            onClick={() => {
              router.push(`/userpage/${item.path}`);
            }}
          >
            <p className="absolute bottom-0 w-full rounded-b-lg bg-Basic bg-opacity-70 p-2 pb-4 text-xl">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserPage;
