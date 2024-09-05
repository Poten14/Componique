"use client";
import Button from "@components/Button/Button";
import { useRouter } from "next/navigation";
const UserPagePrevButton = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-full flex-wrap justify-center overflow-y-auto">
        <Button
          radius="full"
          className="h-[60px] w-[60px] !text-2xl"
          onClick={() => {
            router.push("/userpage");
          }}
        >
          &larr;
        </Button>
        <p>왼쪽시작</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽</p>
        <p>왼쪽 마지막</p>
      </div>
    </>
  );
};
export default UserPagePrevButton;
